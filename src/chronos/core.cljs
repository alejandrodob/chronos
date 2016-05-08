(ns chronos.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [put! chan <! >! timeout]]
            [goog.dom :as dom]
            [goog.events :as events]))

(enable-console-print!)

(def ONE_SECOND 1000)

(def add-btn (dom/getElement "add"))
(def start-btn (dom/getElement "start"))
(def pause-btn (dom/getElement "pause"))
(def time-input (dom/getElement "timeAmount"))
(def timer-container (dom/getElement "timer"))

(def clock-state (atom {:time 0 :started false}))

(defn draw-time [seconds]
  (dom/setTextContent timer-container seconds))

(defn listen [el type]
  (let [c (chan)]
    (events/listen el type #(put! c %))
    c))

(defn listen-to-click [element]
  (listen element "click"))

(defn decrease-one []
  (swap! clock-state update-in [:time] dec))

(defn set-timer [seconds]
  (swap! clock-state assoc :time seconds))

(defn do-count []
  (swap! clock-state assoc :started true)
  (go
    (while (and (> (:time @clock-state) 0)
                (:started @clock-state))
      (<! (timeout ONE_SECOND))
      (decrease-one))))

(defn pause-counter []
  (swap! clock-state assoc :started false))

(add-watch clock-state :watcher #(draw-time (:time %4)))

(go
  (while true
    (<! (listen-to-click add-btn))
    (set-timer (.-value time-input))))

(go
  (while true
    (<! (listen-to-click start-btn))
    (do-count)))

(go
  (while true
    (<! (listen-to-click pause-btn))
    (pause-counter)))
