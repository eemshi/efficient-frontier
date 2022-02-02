(ns re-frame-highcharts.example
  (:require [reagent.core :as reagent]
            [reagent.dom]
            [re-frame.core :as rf]
            [data :as data]
            [re-frame-highcharts.stats :as stats]))

;; data helpers

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
        std-dev (stats/standard-deviation returns)]
    {:returns returns
     :mean mean
     :std-dev std-dev}))

;; portfolio

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

(defn w-std-dev [weight-x weight-y stats-x stats-y]
  (.sqrt js/Math
         (+ (* weight-x weight-x (:std-dev stats-x) (:std-dev stats-x))
            (* weight-y weight-y (:std-dev stats-y) (:std-dev stats-y))
            (* 2 weight-x weight-y (stats/covariance (:returns stats-x) (:returns stats-y))))))

(def portfolio-returns
  (map #(w-return (:spy %) (:vxus %) (:mean spy-stats) (:mean vxus-stats))
       portfolio-weights))

(def portfolio-std-devs
  (map #(w-std-dev (:spy %) (:vxus %) spy-stats vxus-stats)
       portfolio-weights))

(def portfolio-sharpe-ratios
  (map (fn [w]
         (-> (w-return (:spy w) (:vxus w) (:mean spy-stats) (:mean vxus-stats))
             (- stats/risk-free-rate)
             (/ (w-std-dev (:spy w) (:vxus w) spy-stats vxus-stats))))
       portfolio-weights))

;; -- Entry Point -------------------------------------------------------------

(defn on-js-reload [])
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)

(defn ^:export run
  []
  (reagent.dom/render
   [:div
    [:h1 "SPY"]
    [:h3 (str "Mean: " (:mean spy-stats))]
    [:h3 (str "St Dev: " (:std-dev spy-stats))]
    [:h1 "VXUS"]
    [:h3 (str "Mean: " (:mean vxus-stats))]
    [:h3 (str "St Dev: " (:std-dev vxus-stats))]
    [:h1 (str "Covariance: " (stats/covariance (:returns spy-stats) (:returns vxus-stats)))]
    [:h1 (str "Risk Free Rate: " stats/risk-free-rate)]
    [:h1 "Portfolio"]
    [:h3 "Returns: " (str portfolio-returns)]
    [:h3 "Std Devs: " (str portfolio-std-devs)]
    [:h3 "Sharpe Ratio: " (str portfolio-sharpe-ratios)]]
   (js/document.getElementById "app")))
   
