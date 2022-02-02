(ns mpt-charts.efficient-frontier
  (:require [reagent.core :as reagent]
            [reagent.dom]
            [re-frame.core :as rf]
            [data :as data]
            [mpt-charts.utils :as chart-utils]))

;; math helpers

(defn pow [num exponent]
  (.pow js/Math num exponent))

(defn round-decimal [num digits]
  (let [decimal-divisor (pow 10 digits)
        m (.toPrecision (js/Number (* (.abs js/Math num) decimal-divisor)) 15)]
    (* (/ (.round js/Math m) decimal-divisor) (.sign js/Math num))))

;; statistics

(def risk-free-rate 0) ;; omitted

(defn average [nums]
  (/ (apply + nums) (count nums)))

(defn standard-deviation-p [list]
  (let [mean (average list)
        list-value-minus-mean-squared (map #(* (- % mean) (- % mean)) list)
        sum (apply + list-value-minus-mean-squared)
        variance (/ sum (count list))]
    (.sqrt js/Math variance)))

(defn covariance [list-x list-y]
  (let [mean-x (average list-x)
        mean-y (average list-y)]
    (/ (->> (map (fn [x y] (* (- x mean-x) (- y mean-y))) list-x list-y)
            (apply +))
       (count list-x))))

;; shaping ticker data

(defn historical-data-with-daily-returns [data]
  (let [sorted-data (reverse (sort-by :date data))]
    (map-indexed (fn [i item]
                   (if (< i (- (count sorted-data) 1))
                     (let [previous-close (:close (nth sorted-data (+ i 1)))
                           daily-return (- (/ (:close item) previous-close) 1)]
                       (assoc item :daily-return daily-return))
                     item))
                 sorted-data)))

(defn ticker-stats [data]
  (let [daily-returns (->> (historical-data-with-daily-returns data)
                           (map :daily-return)
                           (remove nil?))
        mean (/ (apply + daily-returns) (count daily-returns))
        stdev (standard-deviation-p daily-returns)
        annual-return (- (pow (+ 1 mean) 252) 1)
        annual-stdev (* stdev (.sqrt js/Math 252))]
    {:daily-returns daily-returns
     :daily-mean mean
     :daily-stdev stdev
     :annual-return annual-return
     :annual-stdev annual-stdev}))

;; portfolio weight stats (spy + vxus for now)

(def spy-stats (ticker-stats data/spy))
(def vxus-stats (ticker-stats data/vxus))

(def portfolio-weights 
  [{:spy 1 :vxus 0}
   {:spy .9 :vxus .1}
   {:spy .8 :vxus .2}
   {:spy .7 :vxus .3}
   {:spy .6 :vxus .4}
   {:spy .5 :vxus .5}
   {:spy .4 :vxus .6}
   {:spy .3 :vxus .7}
   {:spy .2 :vxus .8}
   {:spy .1 :vxus .9}
   {:spy 0 :vxus 1}])

(defn w-return [weight-x weight-y return-x return-y]
  (+ (* weight-x return-x)
     (* weight-y return-y)))

(defn w-stdev [weight-x weight-y stats-x stats-y]
  (.sqrt js/Math
         (+ (* (pow weight-x 2) (pow (:annual-stdev stats-x) 2))
            (* (pow weight-y 2) (pow (:annual-stdev stats-y) 2))
            (* 2 weight-x weight-y (covariance (:daily-returns stats-x) (:daily-returns stats-y))))))

(def weighted-returns
  (map #(w-return (:spy %) (:vxus %) (:annual-return spy-stats) (:annual-return vxus-stats))
       portfolio-weights))

(def weighted-st-devs
  (map #(w-stdev (:spy %) (:vxus %) spy-stats vxus-stats)
       portfolio-weights))

(def weighted-sharpe-ratios
  (map (fn [w]
         (-> (w-return (:spy w) (:vxus w) (:annual-return spy-stats) (:annual-return vxus-stats))
             (- risk-free-rate)
             (/ (w-stdev (:spy w) (:vxus w) spy-stats vxus-stats))))
       portfolio-weights))

;; charting

(def efficient-frontier-series
  (map (fn [x y] {:x x :y y}) weighted-st-devs weighted-returns))

;; TODO: make function for getting CAL points
(def cal-series [{:x (* 0 0.13521)
                  :y (+ (* 0 0.15868) (* (- 1 0) risk-free-rate))}
                 {:x (* 1 0.13521)
                  :y (+ (* 1 0.15868) (* (- 1 1) risk-free-rate))}
                 {:x (* 2 0.13521)
                  :y (+ (* 2 0.15868) (* (- 1 2) risk-free-rate))}])

;; TODO: make function for getting axis min and max
(def spline-config
  {:chart   {:type "spline"}
   :xAxis   {:title {:text "Standard Deviation"}
             :min 0.07
             :max 0.16
             }
   :yAxis   {:title {:text "Return"}
             :min -0.02
             :max 0.16
             }
   :legend  {:layout "vertical"
             :align "right"
             :verticalAlign "top"
             :floating true}
   :credits {:enabled false}
   :series  [{:id "efficient-frontier"
              :name "Portfolio"
              :data efficient-frontier-series}
             {:id "cal"
              :name "CAL"
              :data cal-series}]
   :title   {:text "Efficient Frontier & CAL"}})

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
  (prn "CAL" cal-series)
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
         [:th "Sharpe Ratio"]]]
       [:tbody
        (map
         (fn [w x y z]
           ^{:key (:spy w)}
           [:tr
            [:td td-style (:spy w)]
            [:td td-style (:vxus w)]
            [:td td-style (round-decimal x 5)]
            [:td td-style (round-decimal y 5)]
            [:td td-style (round-decimal z 5)]])
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
                [:td td-style (round-decimal (:daily-return x) 5)]
                [:td td-style (round-decimal (:daily-return y) 5)]])
             (historical-data-with-daily-returns data/spy)
             (historical-data-with-daily-returns data/vxus))]]]
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
          [:td [:strong "Daily Mean"]]
          [:td td-style (round-decimal (:daily-mean (ticker-stats data/spy)) 5)]
          [:td td-style (round-decimal (:daily-mean (ticker-stats data/vxus)) 5)]]
         [:tr
          [:td [:strong "Daily St Dev"]]
          [:td td-style (round-decimal (:daily-stdev (ticker-stats data/spy)) 5)]
          [:td td-style (round-decimal (:daily-stdev (ticker-stats data/vxus)) 5)]]
         [:tr
          [:td [:strong "Annualized Return"]]
          [:td td-style (round-decimal (:annual-return (ticker-stats data/spy)) 5)]
          [:td td-style (round-decimal (:annual-return (ticker-stats data/vxus)) 5)]]
         [:tr
          [:td [:strong "Annualized St Dev"]]
          [:td td-style (round-decimal (:annual-stdev (ticker-stats data/spy)) 5)]
          [:td td-style (round-decimal (:annual-stdev (ticker-stats data/vxus)) 5)]]]]]
      [:div {:style {:margin-top "3em"}}
       [:h3 (str "Covariance: " (round-decimal (covariance (:daily-returns spy-stats) (:daily-returns vxus-stats)) 5))]
       [:h3 (str "Risk Free Rate: " (round-decimal risk-free-rate 5))]]]]]
   (js/document.getElementById "app")))