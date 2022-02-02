(ns mpt-charts.example
  (:require [reagent.core :as reagent]
            [reagent.dom]
            [re-frame.core :as rf]
            [cljs.pprint :as pprint]
            [data :as data]
            [mpt-charts.utils :as chart-utils]
            [mpt-charts.stats :as stats]))

;; math helpers

(defn round-decimal [number decimal-places]
  (pprint/cl-format nil (str "~," decimal-places "f") number))

(defn square [num]
  (.pow js/Math num 2))

;; shaping ticker data

(defn historical-data-with-returns [data]
  (let [sorted-data (reverse (sort-by :date data))]
    (map-indexed (fn [i item]
                   (if (< i (- (count sorted-data) 1))
                     (let [previous-close (:close (nth sorted-data (+ i 1)))
                           return (- (/ (:close item) previous-close) 1)]
                       (assoc item :return return))
                     item))
                 sorted-data)))

(defn ticker-stats [data]
  (let [returns (->> (historical-data-with-returns data)
                     (map :return)
                     (remove nil?))
        mean (/ (apply + returns) (count returns))
        st-dev (stats/standard-deviation returns)]
    {:returns returns
     :mean mean
     :st-dev st-dev}))

;; portfolio weighting stats (hard-coded spy + vxus for now)

(def spy-stats (ticker-stats data/spy))
(def vxus-stats (ticker-stats data/vxus))

(def portfolio-weights 
  [{:spy 100 :vxus 0}
   {:spy 90 :vxus 10}
   {:spy 80 :vxus 20}
   {:spy 70 :vxus 30}
   {:spy 60 :vxus 40}
   {:spy 50 :vxus 50}
   {:spy 40 :vxus 60}
   {:spy 30 :vxus 70}
   {:spy 20 :vxus 80}
   {:spy 10 :vxus 90}
   {:spy 0 :vxus 100}])

(defn w-return [weight-x weight-y mean-x mean-y]
  (+ (* weight-x mean-x)
     (* weight-y mean-y)))

(defn w-st-dev [weight-x weight-y stats-x stats-y]
  (.sqrt js/Math
         (+ (* (square weight-x) (square (:st-dev stats-x)))
            (* (square weight-y) (square (:st-dev stats-y)))
            (* 2 weight-x weight-y (stats/covariance (:returns stats-x) (:returns stats-y))))))

(def weighted-returns
  (map #(w-return (:spy %) (:vxus %) (:mean spy-stats) (:mean vxus-stats))
       portfolio-weights))

(def weighted-st-devs
  (map #(w-st-dev (:spy %) (:vxus %) spy-stats vxus-stats)
       portfolio-weights))

(def weighted-sharpe-ratios
  (map (fn [w]
         (-> (w-return (:spy w) (:vxus w) (:mean spy-stats) (:mean vxus-stats))
             (- stats/risk-free-rate)
             (/ (w-st-dev (:spy w) (:vxus w) spy-stats vxus-stats))))
       portfolio-weights))

;; charting

(def efficient-frontier-series
  (map (fn [x y] {:x x :y y}) weighted-st-devs weighted-returns))

(def spline-config
  {:chart   {:type "spline"}
   :xAxis   {:title {:text "Standard Deviation"}}
   :yAxis   {:title {:text "Return"}}
   :legend  {:layout "vertical"
             :align "right"
             :verticalAlign "top"
             :floating true}
   :credits {:enabled false}
   :series  [{:id "series-1"
              :name "Portfolio"
              :data efficient-frontier-series}]
   :title   {:text "Efficient Frontier"}})

(defn chart-1 []
  (fn []
    [chart-utils/chart
     {:chart-meta {:id :chart-1 :style {:height "100%" :width "100%"}}
      :chart-data spline-config}]))

;; -- Entry Point -------------------------------------------------------------

(defn on-js-reload [])
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)

;; janky styling
(def td-style  {:style {:padding "0 1em"}})
(def box-style {:style {:border "1px solid black"
                        :padding "1em"
                        :margin "1em"}})

(defn ^:export run
  []
  (reagent.dom/render
   [:div {:style {:font-family "Helvetica"}}
    [chart-1]
    [:div (assoc-in box-style [:style :display] "inline-block")
     [:h1 "Portfolio Weights"]
     [:div
      [:table
       [:thead
        [:tr
         [:th "SPY"]
         [:th "VXUS"]
         [:th "Return"]
         [:th "St Dev"]
         [:th "Sharp Ratio"]]]
       [:tbody
        (map
         (fn [w x y z]
           ^{:key (:spy w)}
           [:tr
            [:td td-style (:spy w)]
            [:td td-style (:vxus w)]
            [:td td-style (round-decimal x 4)]
            [:td td-style (round-decimal y 4)]
            [:td td-style (round-decimal z 4)]])
         portfolio-weights
         weighted-returns
         weighted-st-devs
         weighted-sharpe-ratios)]]]]
    [:div {:style {:display "flex"}}
     [:div box-style
      [:h1 "1 Year Daily Returns"]
      [:table
       [:thead
        [:tr
         [:th "Date"]
         [:th "SPY"]
         [:th "VXUS"]]]
       [:tbody
        (map (fn [x y]
               ^{:key (:date x)}
               [:tr
                [:td td-style (:date x)]
                [:td td-style (round-decimal (:return x) 4)]
                [:td td-style (round-decimal (:return y) 4)]])
             (historical-data-with-returns data/spy)
             (historical-data-with-returns data/vxus))]]]
     [:div box-style
      [:div
       [:h1 "1 Year Summary"]
       [:table
        [:thead
         [:tr
          [:th ""]
          [:th "SPY"]
          [:th "VXUS"]]]
        [:tbody
         [:tr
          [:td [:strong "Mean"]]
          [:td td-style (round-decimal (:mean (ticker-stats data/spy)) 5)]
          [:td td-style (round-decimal (:mean (ticker-stats data/vxus)) 5)]]
         [:tr
          [:td [:strong "Standard Deviation"]]
          [:td td-style (round-decimal (:mean (ticker-stats data/spy)) 5)]
          [:td td-style (round-decimal (:st-dev (ticker-stats data/vxus)) 5)]]]]]
      [:div {:style {:margin-top "3em"}}
       [:h3 (str "Covariance: " (round-decimal (stats/covariance (:returns spy-stats) (:returns vxus-stats)) 5))]
       [:h3 (str "Risk Free Rate: " (round-decimal stats/risk-free-rate 5))]]]]]
   (js/document.getElementById "app")))