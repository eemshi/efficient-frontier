# Modern Portfolio Theory Charts

Built on re-frame-highcharts
## Running the example

The example is prepared for figwheel, so just run

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).

To clean all compiled files:

    lein clean

To create a production build run (using Java 8):

    lein do clean, cljsbuild once min

To host the production build in a test server run:

    lein do clean, cljsbuild once min, ring server