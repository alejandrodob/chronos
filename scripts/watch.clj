(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'chronos.core
   :output-to "out/chronos.js"
   :output-dir "out"})
