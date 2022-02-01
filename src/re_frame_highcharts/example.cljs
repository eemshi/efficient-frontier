(ns re-frame-highcharts.example
  (:require [reagent.core :as reagent]
            [reagent.dom]
            [re-frame.core :as rf]
            [data :as data]
            [re-frame-highcharts.stats :as stats]
            [kixi.stats.core :as kstats]))

;; data helpers

(defn historical-data-with-daily-returns [data]
  (let [sorted-data (reverse (sort-by :date data))]
    (map-indexed (fn [i item]
                   (if (not= i (- (count sorted-data) 1))
                     (let [previous-day-item (nth sorted-data (+ i 1))
                           daily-return (- (/ (:close item) (:close previous-day-item)) 1)]
                       (assoc item :daily-return (* 100 daily-return)))
                     item))
                 sorted-data)))

(defn daily-returns [data]
  (remove nil? (map :daily-return data)))

(defn ticker-stats [data]
  (let [returns (daily-returns (historical-data-with-daily-returns data))
        mean (kstats/mean returns)
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

(def portfolio-returns
  (map (fn [weight] 
         (+ (* (:spy weight) (:mean spy-stats))
            (* (:vxus weight) (:mean vxus-stats)))) 
       portfolio-weights))

(def portfolio-std-dev
  (map (fn [weight]
         (.sqrt js/Math 
                (+ (* (:spy weight) (:spy weight) (:std-dev spy-stats) (:std-dev spy-stats))
                   (* (:vxus weight) (:vxus weight) (:std-dev vxus-stats) (:std-dev vxus-stats))
                   (* 2 (:spy weight) (:vxus weight) (stats/covariance (:returns spy-stats) (:returns vxus-stats))))))
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
    [:p (str "Mean " (:mean spy-stats))]
    [:p (str "St Dev " (:std-dev spy-stats))]
    [:h1 "VXUS"]
    [:p (str "Mean " (:mean vxus-stats))]
    [:p (str "St Dev " (:std-dev vxus-stats))]
    [:h2 (str "Covariance " (stats/covariance (:returns spy-stats) (:returns vxus-stats)))]
    [:h2 (str "Risk Free Rate " stats/risk-free-rate)]]
   (js/document.getElementById "app")))
   
