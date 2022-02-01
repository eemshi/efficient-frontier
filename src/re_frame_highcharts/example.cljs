(ns re-frame-highcharts.example
  (:require [reagent.core :as reagent]
            [reagent.dom]
            [re-frame.core :as rf]
            [data :as data]
            [kixi.stats.core :as stats]
            [re-frame-highcharts.utils :as chart-utils]
            [cljs.pprint :as pprint]))

;; helpers

(defn sort-by-date [data]
  (reverse (sort-by :date data)))

(defn round-decimal [number decimal-places] 
  (pprint/cl-format nil (str "~," decimal-places "f") number))

;; shape data

(defn data-with-daily-returns [data]
  (let [sorted-data (sort-by-date data)]
    (map-indexed (fn [i item]
                   (if (not= i (- (count sorted-data) 1))
                     (let [previous-day-item (nth sorted-data (+ i 1))
                           daily-return (- (/ (:close item) (:close previous-day-item)) 1)]
                       (assoc item :daily-return (* 100 daily-return)))
                     item))
                 sorted-data)))

(defn daily-returns [data]
  (remove nil? (map :daily-return data)))

;; statistics

(defn standard-deviation [list]
  (let [mean (round-decimal (stats/mean list) 2)
        list-value-minus-mean-squared (map #(* (- % mean) (- % mean)) list)
        sum (apply + list-value-minus-mean-squared)
        variance (/ sum (count list))]
    (.sqrt js/Math variance)))

(defn covariance [list-x list-y]
  (let [mean-x (round-decimal (stats/mean list-x) 2)
        mean-y (round-decimal (stats/mean list-y) 2)]
    (/ (->> (map (fn [x y] (* (- x mean-x) (- y mean-y))) list-x list-y)
            (apply +))
       (count list-x))))

(def risk-free-rate (/ .02 252))


;; -- Entry Point -------------------------------------------------------------

(defn on-js-reload [])
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)

(defn ^:export run
  []
  (reagent.dom/render
   (let [spy-returns (daily-returns (data-with-daily-returns data/spy))
         vxus-returns (daily-returns (data-with-daily-returns data/vxus))]
     [:div
      [:h1 "SPY"]
      [:p (str "Mean " (stats/mean spy-returns))]
      [:p (str "St Dev " (standard-deviation spy-returns))]
      [:h1 "VXUS"]
      [:p (str "Mean " (stats/mean vxus-returns))]
      [:p (str "St Dev " (standard-deviation vxus-returns))]
      [:h2 (str "Covariance " (covariance spy-returns vxus-returns))]
      [:h2 (str "Risk Free Rate " risk-free-rate)]])
   (js/document.getElementById "app")))
