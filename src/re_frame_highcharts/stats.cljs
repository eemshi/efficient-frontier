(ns re-frame-highcharts.stats
  (:require [kixi.stats.core :as kstats]
            [cljs.pprint :as pprint]))

(def risk-free-rate (/ .02 252))

(defn round-decimal [number decimal-places]
  (pprint/cl-format nil (str "~," decimal-places "f") number))

(defn standard-deviation [list]
  (let [mean (round-decimal (kstats/mean list) 2)
        list-value-minus-mean-squared (map #(* (- % mean) (- % mean)) list)
        sum (apply + list-value-minus-mean-squared)
        variance (/ sum (count list))]
    (.sqrt js/Math variance)))

(defn covariance [list-x list-y]
  (let [mean-x (round-decimal (kstats/mean list-x) 2)
        mean-y (round-decimal (kstats/mean list-y) 2)]
    (/ (->> (map (fn [x y] (* (- x mean-x) (- y mean-y))) list-x list-y)
            (apply +))
       (count list-x))))