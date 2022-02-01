(ns data)

(def vxus [{:date "2021-01-26" :close 62.770000}
           {:date "2021-01-27" :close 61.310001}
           {:date "2021-01-28" :close 61.740002}
           {:date "2021-01-29" :close 60.310001}
           {:date "2021-02-01" :close 61.400002}
           {:date "2021-02-02" :close 62.139999}
           {:date "2021-02-03" :close 62.369999}
           {:date "2021-02-04" :close 62.430000}
           {:date "2021-02-05" :close 62.860001}
           {:date "2021-02-08" :close 63.250000}
           {:date "2021-02-09" :close 63.680000}
           {:date "2021-02-10" :close 63.599998}
           {:date "2021-02-11" :close 64.080002}
           {:date "2021-02-12" :close 64.389999}
           {:date "2021-02-16" :close 64.680000}
           {:date "2021-02-17" :close 64.400002}
           {:date "2021-02-18" :close 63.860001}
           {:date "2021-02-19" :close 64.220001}
           {:date "2021-02-22" :close 63.540001}
           {:date "2021-02-23" :close 63.700001}
           {:date "2021-02-24" :close 63.720001}
           {:date "2021-02-25" :close 62.570000}
           {:date "2021-02-26" :close 61.700001}
           {:date "2021-03-01" :close 63.049999}
           {:date "2021-03-02" :close 62.799999}
           {:date "2021-03-03" :close 62.500000}
           {:date "2021-03-04" :close 61.700001}
           {:date "2021-03-05" :close 62.160000}
           {:date "2021-03-08" :close 61.509998}
           {:date "2021-03-09" :close 62.459999}
           {:date "2021-03-10" :close 62.630001}
           {:date "2021-03-11" :close 63.509998}
           {:date "2021-03-12" :close 63.310001}
           {:date "2021-03-15" :close 63.439999}
           {:date "2021-03-16" :close 63.590000}
           {:date "2021-03-17" :close 63.849998}
           {:date "2021-03-18" :close 63.099998}
           {:date "2021-03-19" :close 63.419998}
           {:date "2021-03-22" :close 63.259998}
           {:date "2021-03-23" :close 62.299999}
           {:date "2021-03-24" :close 61.630001}
           {:date "2021-03-25" :close 62.029999}
           {:date "2021-03-26" :close 63.049999}
           {:date "2021-03-29" :close 62.700001}
           {:date "2021-03-30" :close 62.720001}
           {:date "2021-03-31" :close 62.700001}
           {:date "2021-04-01" :close 63.549999}
           {:date "2021-04-05" :close 64.250000}
           {:date "2021-04-06" :close 63.880001}
           {:date "2021-04-07" :close 63.730000}
           {:date "2021-04-08" :close 64.129997}
           {:date "2021-04-09" :close 64.120003}
           {:date "2021-04-12" :close 63.740002}
           {:date "2021-04-13" :close 64.110001}
           {:date "2021-04-14" :close 64.279999}
           {:date "2021-04-15" :close 64.720001}
           {:date "2021-04-16" :close 65.150002}
           {:date "2021-04-19" :close 64.949997}
           {:date "2021-04-20" :close 64.050003}
           {:date "2021-04-21" :close 64.660004}
           {:date "2021-04-22" :close 64.389999}
           {:date "2021-04-23" :close 65.120003}
           {:date "2021-04-26" :close 65.199997}
           {:date "2021-04-27" :close 65.099998}
           {:date "2021-04-28" :close 65.370003}
           {:date "2021-04-29" :close 65.360001}
           {:date "2021-04-30" :close 64.440002}
           {:date "2021-05-03" :close 64.989998}
           {:date "2021-05-04" :close 64.150002}
           {:date "2021-05-05" :close 64.809998}
           {:date "2021-05-06" :close 65.309998}
           {:date "2021-05-07" :close 66.080002}
           {:date "2021-05-10" :close 65.540001}
           {:date "2021-05-11" :close 64.830002}
           {:date "2021-05-12" :close 63.560001}
           {:date "2021-05-13" :close 63.900002}
           {:date "2021-05-14" :close 64.970001}
           {:date "2021-05-17" :close 64.870003}
           {:date "2021-05-18" :close 65.260002}
           {:date "2021-05-19" :close 64.800003}
           {:date "2021-05-20" :close 65.500000}
           {:date "2021-05-21" :close 65.320000}
           {:date "2021-05-24" :close 65.790001}
           {:date "2021-05-25" :close 65.970001}
           {:date "2021-05-26" :close 66.120003}
           {:date "2021-05-27" :close 66.269997}
           {:date "2021-05-28" :close 66.419998}
           {:date "2021-06-01" :close 67.050003}
           {:date "2021-06-02" :close 67.199997}
           {:date "2021-06-03" :close 66.690002}
           {:date "2021-06-04" :close 67.330002}
           {:date "2021-06-07" :close 67.379997}
           {:date "2021-06-08" :close 67.269997}
           {:date "2021-06-09" :close 67.040001}
           {:date "2021-06-10" :close 67.339996}
           {:date "2021-06-11" :close 67.419998}
           {:date "2021-06-14" :close 67.500000}
           {:date "2021-06-15" :close 67.440002}
           {:date "2021-06-16" :close 66.860001}
           {:date "2021-06-17" :close 66.550003}
           {:date "2021-06-18" :close 65.489998}
           {:date "2021-06-21" :close 65.730003}
           {:date "2021-06-22" :close 65.720001}
           {:date "2021-06-23" :close 65.519997}
           {:date "2021-06-24" :close 66.110001}
           {:date "2021-06-25" :close 66.410004}
           {:date "2021-06-28" :close 66.139999}
           {:date "2021-06-29" :close 66.120003}
           {:date "2021-06-30" :close 65.680000}
           {:date "2021-07-01" :close 65.739998}
           {:date "2021-07-02" :close 65.830002}
           {:date "2021-07-06" :close 65.290001}
           {:date "2021-07-07" :close 65.500000}
           {:date "2021-07-08" :close 64.500000}
           {:date "2021-07-09" :close 65.610001}
           {:date "2021-07-12" :close 65.750000}
           {:date "2021-07-13" :close 65.559998}
           {:date "2021-07-14" :close 65.669998}
           {:date "2021-07-15" :close 65.330002}
           {:date "2021-07-16" :close 64.830002}
           {:date "2021-07-19" :close 63.730000}
           {:date "2021-07-20" :close 64.099998}
           {:date "2021-07-21" :close 64.919998}
           {:date "2021-07-22" :close 65.000000}
           {:date "2021-07-23" :close 65.070000}
           {:date "2021-07-26" :close 64.800003}
           {:date "2021-07-27" :close 64.230003}
           {:date "2021-07-28" :close 64.919998}
           {:date "2021-07-29" :close 65.320000}
           {:date "2021-07-30" :close 64.940002}
           {:date "2021-08-02" :close 65.209999}
           {:date "2021-08-03" :close 65.639999}
           {:date "2021-08-04" :close 65.580002}
           {:date "2021-08-05" :close 65.769997}
           {:date "2021-08-06" :close 65.459999}
           {:date "2021-08-09" :close 65.470001}
           {:date "2021-08-10" :close 65.589996}
           {:date "2021-08-11" :close 65.989998}
           {:date "2021-08-12" :close 65.769997}
           {:date "2021-08-13" :close 65.989998}
           {:date "2021-08-16" :close 65.550003}
           {:date "2021-08-17" :close 64.750000}
           {:date "2021-08-18" :close 64.620003}
           {:date "2021-08-19" :close 63.860001}
           {:date "2021-08-20" :close 64.029999}
           {:date "2021-08-23" :close 64.720001}
           {:date "2021-08-24" :close 65.309998}
           {:date "2021-08-25" :close 65.370003}
           {:date "2021-08-26" :close 64.930000}
           {:date "2021-08-27" :close 65.639999}
           {:date "2021-08-30" :close 65.660004}
           {:date "2021-08-31" :close 65.889999}
           {:date "2021-09-01" :close 66.470001}
           {:date "2021-09-02" :close 66.650002}
           {:date "2021-09-03" :close 67.000000}
           {:date "2021-09-07" :close 66.980003}
           {:date "2021-09-08" :close 66.300003}
           {:date "2021-09-09" :close 66.239998}
           {:date "2021-09-10" :close 66.120003}
           {:date "2021-09-13" :close 66.550003}
           {:date "2021-09-14" :close 66.209999}
           {:date "2021-09-15" :close 66.370003}
           {:date "2021-09-16" :close 66.050003}
           {:date "2021-09-17" :close 65.339996}
           {:date "2021-09-20" :close 63.619999}
           {:date "2021-09-21" :close 64.190002}
           {:date "2021-09-22" :close 64.699997}
           {:date "2021-09-23" :close 65.349998}
           {:date "2021-09-24" :close 64.730003}
           {:date "2021-09-27" :close 64.830002}
           {:date "2021-09-28" :close 63.580002}
           {:date "2021-09-29" :close 63.310001}
           {:date "2021-09-30" :close 63.259998}
           {:date "2021-10-01" :close 63.439999}
           {:date "2021-10-04" :close 62.779999}
           {:date "2021-10-05" :close 63.160000}
           {:date "2021-10-06" :close 62.790001}
           {:date "2021-10-07" :close 63.509998}
           {:date "2021-10-08" :close 63.590000}
           {:date "2021-10-11" :close 63.400002}
           {:date "2021-10-12" :close 63.360001}
           {:date "2021-10-13" :close 64.080002}
           {:date "2021-10-14" :close 64.620003}
           {:date "2021-10-15" :close 65.180000}
           {:date "2021-10-18" :close 64.980003}
           {:date "2021-10-19" :close 65.500000}
           {:date "2021-10-20" :close 65.669998}
           {:date "2021-10-21" :close 65.279999}
           {:date "2021-10-22" :close 65.480003}
           {:date "2021-10-25" :close 65.550003}
           {:date "2021-10-26" :close 65.500000}
           {:date "2021-10-27" :close 65.150002}
           {:date "2021-10-28" :close 65.629997}
           {:date "2021-10-29" :close 65.080002}
           {:date "2021-11-01" :close 65.709999}
           {:date "2021-11-02" :close 65.379997}
           {:date "2021-11-03" :close 65.809998}
           {:date "2021-11-04" :close 65.739998}
           {:date "2021-11-05" :close 65.879997}
           {:date "2021-11-08" :close 66.089996}
           {:date "2021-11-09" :close 65.889999}
           {:date "2021-11-10" :close 65.230003}
           {:date "2021-11-11" :close 65.660004}
           {:date "2021-11-12" :close 66.040001}
           {:date "2021-11-15" :close 65.900002}
           {:date "2021-11-16" :close 65.760002}
           {:date "2021-11-17" :close 65.610001}
           {:date "2021-11-18" :close 65.430000}
           {:date "2021-11-19" :close 65.010002}
           {:date "2021-11-22" :close 64.599998}
           {:date "2021-11-23" :close 64.559998}
           {:date "2021-11-24" :close 64.300003}
           {:date "2021-11-26" :close 62.459999}
           {:date "2021-11-29" :close 62.730000}
           {:date "2021-11-30" :close 62.310001}
           {:date "2021-12-01" :close 62.009998}
           {:date "2021-12-02" :close 62.830002}
           {:date "2021-12-03" :close 62.380001}
           {:date "2021-12-06" :close 62.990002}
           {:date "2021-12-07" :close 64.199997}
           {:date "2021-12-08" :close 64.349998}
           {:date "2021-12-09" :close 63.869999}
           {:date "2021-12-10" :close 63.970001}
           {:date "2021-12-13" :close 63.189999}
           {:date "2021-12-14" :close 62.939999}
           {:date "2021-12-15" :close 63.459999}
           {:date "2021-12-16" :close 63.540001}
           {:date "2021-12-17" :close 62.869999}
           {:date "2021-12-20" :close 61.509998}
           {:date "2021-12-21" :close 62.330002}
           {:date "2021-12-22" :close 62.889999}
           {:date "2021-12-23" :close 63.240002}
           {:date "2021-12-27" :close 63.700001}
           {:date "2021-12-28" :close 63.630001}
           {:date "2021-12-29" :close 63.570000}
           {:date "2021-12-30" :close 63.660000}
           {:date "2021-12-31" :close 63.570000}
           {:date "2022-01-03" :close 63.980000}
           {:date "2022-01-04" :close 64.059998}
           {:date "2022-01-05" :close 63.419998}
           {:date "2022-01-06" :close 63.240002}
           {:date "2022-01-07" :close 63.520000}
           {:date "2022-01-10" :close 63.049999}
           {:date "2022-01-11" :close 63.950001}
           {:date "2022-01-12" :close 64.699997}
           {:date "2022-01-13" :close 64.139999}
           {:date "2022-01-14" :close 64.080002}
           {:date "2022-01-18" :close 63.130001}
           {:date "2022-01-19" :close 63.180000}
           {:date "2022-01-20" :close 63.000000}
           {:date "2022-01-21" :close 62.090000}
           {:date "2022-01-24" :close 61.369999}
           {:date "2022-01-25" :close 61.139999}
           {:date "2022-01-26" :close 61.575001}])

(def spy [{:date "2021-01-26" :close 383.790009}
          {:date "2021-01-27" :close 374.410004}
          {:date "2021-01-28" :close 377.630005}
          {:date "2021-01-29" :close 370.070007}
          {:date "2021-02-01" :close 376.230011}
          {:date "2021-02-02" :close 381.549988}
          {:date "2021-02-03" :close 381.850006}
          {:date "2021-02-04" :close 386.190002}
          {:date "2021-02-05" :close 387.709991}
          {:date "2021-02-08" :close 390.510010}
          {:date "2021-02-09" :close 390.250000}
          {:date "2021-02-10" :close 390.079987}
          {:date "2021-02-11" :close 390.709991}
          {:date "2021-02-12" :close 392.640015}
          {:date "2021-02-16" :close 392.299988}
          {:date "2021-02-17" :close 392.390015}
          {:date "2021-02-18" :close 390.720001}
          {:date "2021-02-19" :close 390.029999}
          {:date "2021-02-22" :close 387.029999}
          {:date "2021-02-23" :close 387.500000}
          {:date "2021-02-24" :close 391.769989}
          {:date "2021-02-25" :close 382.329987}
          {:date "2021-02-26" :close 380.359985}
          {:date "2021-03-01" :close 389.579987}
          {:date "2021-03-02" :close 386.540009}
          {:date "2021-03-03" :close 381.420013}
          {:date "2021-03-04" :close 376.700012}
          {:date "2021-03-05" :close 383.630005}
          {:date "2021-03-08" :close 381.720001}
          {:date "2021-03-09" :close 387.170013}
          {:date "2021-03-10" :close 389.579987}
          {:date "2021-03-11" :close 393.529999}
          {:date "2021-03-12" :close 394.059998}
          {:date "2021-03-15" :close 396.410004}
          {:date "2021-03-16" :close 395.910004}
          {:date "2021-03-17" :close 397.260010}
          {:date "2021-03-18" :close 391.480011}
          {:date "2021-03-19" :close 389.480011}
          {:date "2021-03-22" :close 392.589996}
          {:date "2021-03-23" :close 389.500000}
          {:date "2021-03-24" :close 387.519989}
          {:date "2021-03-25" :close 389.700012}
          {:date "2021-03-26" :close 395.980011}
          {:date "2021-03-29" :close 395.779999}
          {:date "2021-03-30" :close 394.730011}
          {:date "2021-03-31" :close 396.329987}
          {:date "2021-04-01" :close 400.609985}
          {:date "2021-04-05" :close 406.359985}
          {:date "2021-04-06" :close 406.119995}
          {:date "2021-04-07" :close 406.589996}
          {:date "2021-04-08" :close 408.519989}
          {:date "2021-04-09" :close 411.489990}
          {:date "2021-04-12" :close 411.640015}
          {:date "2021-04-13" :close 412.859985}
          {:date "2021-04-14" :close 411.450012}
          {:date "2021-04-15" :close 415.869995}
          {:date "2021-04-16" :close 417.260010}
          {:date "2021-04-19" :close 415.209991}
          {:date "2021-04-20" :close 412.170013}
          {:date "2021-04-21" :close 416.070007}
          {:date "2021-04-22" :close 412.269989}
          {:date "2021-04-23" :close 416.739990}
          {:date "2021-04-26" :close 417.609985}
          {:date "2021-04-27" :close 417.519989}
          {:date "2021-04-28" :close 417.399994}
          {:date "2021-04-29" :close 420.059998}
          {:date "2021-04-30" :close 417.299988}
          {:date "2021-05-03" :close 418.200012}
          {:date "2021-05-04" :close 415.619995}
          {:date "2021-05-05" :close 415.750000}
          {:date "2021-05-06" :close 419.070007}
          {:date "2021-05-07" :close 422.119995}
          {:date "2021-05-10" :close 417.940002}
          {:date "2021-05-11" :close 414.209991}
          {:date "2021-05-12" :close 405.410004}
          {:date "2021-05-13" :close 410.279999}
          {:date "2021-05-14" :close 416.579987}
          {:date "2021-05-17" :close 415.519989}
          {:date "2021-05-18" :close 411.940002}
          {:date "2021-05-19" :close 410.859985}
          {:date "2021-05-20" :close 415.279999}
          {:date "2021-05-21" :close 414.940002}
          {:date "2021-05-24" :close 419.170013}
          {:date "2021-05-25" :close 418.239990}
          {:date "2021-05-26" :close 419.070007}
          {:date "2021-05-27" :close 419.290009}
          {:date "2021-05-28" :close 420.040009}
          {:date "2021-06-01" :close 419.670013}
          {:date "2021-06-02" :close 420.329987}
          {:date "2021-06-03" :close 418.769989}
          {:date "2021-06-04" :close 422.600006}
          {:date "2021-06-07" :close 422.190002}
          {:date "2021-06-08" :close 422.279999}
          {:date "2021-06-09" :close 421.649994}
          {:date "2021-06-10" :close 423.609985}
          {:date "2021-06-11" :close 424.309998}
          {:date "2021-06-14" :close 425.260010}
          {:date "2021-06-15" :close 424.480011}
          {:date "2021-06-16" :close 422.109985}
          {:date "2021-06-17" :close 421.970001}
          {:date "2021-06-18" :close 414.920013}
          {:date "2021-06-21" :close 420.859985}
          {:date "2021-06-22" :close 423.109985}
          {:date "2021-06-23" :close 422.600006}
          {:date "2021-06-24" :close 425.100006}
          {:date "2021-06-25" :close 426.609985}
          {:date "2021-06-28" :close 427.470001}
          {:date "2021-06-29" :close 427.700012}
          {:date "2021-06-30" :close 428.059998}
          {:date "2021-07-01" :close 430.429993}
          {:date "2021-07-02" :close 433.720001}
          {:date "2021-07-06" :close 432.929993}
          {:date "2021-07-07" :close 434.459991}
          {:date "2021-07-08" :close 430.920013}
          {:date "2021-07-09" :close 435.519989}
          {:date "2021-07-12" :close 437.079987}
          {:date "2021-07-13" :close 435.589996}
          {:date "2021-07-14" :close 436.239990}
          {:date "2021-07-15" :close 434.750000}
          {:date "2021-07-16" :close 431.339996}
          {:date "2021-07-19" :close 424.970001}
          {:date "2021-07-20" :close 431.059998}
          {:date "2021-07-21" :close 434.549988}
          {:date "2021-07-22" :close 435.459991}
          {:date "2021-07-23" :close 439.940002}
          {:date "2021-07-26" :close 441.019989}
          {:date "2021-07-27" :close 439.010010}
          {:date "2021-07-28" :close 438.829987}
          {:date "2021-07-29" :close 440.649994}
          {:date "2021-07-30" :close 438.510010}
          {:date "2021-08-02" :close 437.589996}
          {:date "2021-08-03" :close 441.149994}
          {:date "2021-08-04" :close 438.980011}
          {:date "2021-08-05" :close 441.760010}
          {:date "2021-08-06" :close 442.489990}
          {:date "2021-08-09" :close 442.130005}
          {:date "2021-08-10" :close 442.679993}
          {:date "2021-08-11" :close 443.779999}
          {:date "2021-08-12" :close 445.109985}
          {:date "2021-08-13" :close 445.920013}
          {:date "2021-08-16" :close 446.970001}
          {:date "2021-08-17" :close 444.040009}
          {:date "2021-08-18" :close 439.179993}
          {:date "2021-08-19" :close 439.859985}
          {:date "2021-08-20" :close 443.359985}
          {:date "2021-08-23" :close 447.260010}
          {:date "2021-08-24" :close 447.970001}
          {:date "2021-08-25" :close 448.910004}
          {:date "2021-08-26" :close 446.260010}
          {:date "2021-08-27" :close 450.250000}
          {:date "2021-08-30" :close 452.230011}
          {:date "2021-08-31" :close 451.559998}
          {:date "2021-09-01" :close 451.799988}
          {:date "2021-09-02" :close 453.190002}
          {:date "2021-09-03" :close 453.079987}
          {:date "2021-09-07" :close 451.459991}
          {:date "2021-09-08" :close 450.910004}
          {:date "2021-09-09" :close 448.980011}
          {:date "2021-09-10" :close 445.440002}
          {:date "2021-09-13" :close 446.579987}
          {:date "2021-09-14" :close 444.170013}
          {:date "2021-09-15" :close 447.880005}
          {:date "2021-09-16" :close 447.170013}
          {:date "2021-09-17" :close 441.399994}
          {:date "2021-09-20" :close 434.040009}
          {:date "2021-09-21" :close 433.630005}
          {:date "2021-09-22" :close 437.859985}
          {:date "2021-09-23" :close 443.179993}
          {:date "2021-09-24" :close 443.910004}
          {:date "2021-09-27" :close 442.640015}
          {:date "2021-09-28" :close 433.720001}
          {:date "2021-09-29" :close 434.450012}
          {:date "2021-09-30" :close 429.140015}
          {:date "2021-10-01" :close 434.239990}
          {:date "2021-10-04" :close 428.640015}
          {:date "2021-10-05" :close 433.100006}
          {:date "2021-10-06" :close 434.899994}
          {:date "2021-10-07" :close 438.660004}
          {:date "2021-10-08" :close 437.859985}
          {:date "2021-10-11" :close 434.690002}
          {:date "2021-10-12" :close 433.619995}
          {:date "2021-10-13" :close 435.179993}
          {:date "2021-10-14" :close 442.500000}
          {:date "2021-10-15" :close 445.869995}
          {:date "2021-10-18" :close 447.190002}
          {:date "2021-10-19" :close 450.640015}
          {:date "2021-10-20" :close 452.410004}
          {:date "2021-10-21" :close 453.589996}
          {:date "2021-10-22" :close 453.119995}
          {:date "2021-10-25" :close 455.549988}
          {:date "2021-10-26" :close 455.959991}
          {:date "2021-10-27" :close 453.940002}
          {:date "2021-10-28" :close 458.320007}
          {:date "2021-10-29" :close 459.250000}
          {:date "2021-11-01" :close 460.040009}
          {:date "2021-11-02" :close 461.899994}
          {:date "2021-11-03" :close 464.720001}
          {:date "2021-11-04" :close 466.910004}
          {:date "2021-11-05" :close 468.529999}
          {:date "2021-11-08" :close 468.929993}
          {:date "2021-11-09" :close 467.380005}
          {:date "2021-11-10" :close 463.619995}
          {:date "2021-11-11" :close 463.769989}
          {:date "2021-11-12" :close 467.269989}
          {:date "2021-11-15" :close 467.429993}
          {:date "2021-11-16" :close 469.279999}
          {:date "2021-11-17" :close 468.140015}
          {:date "2021-11-18" :close 469.730011}
          {:date "2021-11-19" :close 468.890015}
          {:date "2021-11-22" :close 467.570007}
          {:date "2021-11-23" :close 468.190002}
          {:date "2021-11-24" :close 469.440002}
          {:date "2021-11-26" :close 458.970001}
          {:date "2021-11-29" :close 464.600006}
          {:date "2021-11-30" :close 455.559998}
          {:date "2021-12-01" :close 450.500000}
          {:date "2021-12-02" :close 457.399994}
          {:date "2021-12-03" :close 453.420013}
          {:date "2021-12-06" :close 458.790009}
          {:date "2021-12-07" :close 468.279999}
          {:date "2021-12-08" :close 469.519989}
          {:date "2021-12-09" :close 466.350006}
          {:date "2021-12-10" :close 470.739990}
          {:date "2021-12-13" :close 466.570007}
          {:date "2021-12-14" :close 463.359985}
          {:date "2021-12-15" :close 470.600006}
          {:date "2021-12-16" :close 466.450012}
          {:date "2021-12-17" :close 459.869995}
          {:date "2021-12-20" :close 454.980011}
          {:date "2021-12-21" :close 463.059998}
          {:date "2021-12-22" :close 467.690002}
          {:date "2021-12-23" :close 470.600006}
          {:date "2021-12-27" :close 477.260010}
          {:date "2021-12-28" :close 476.869995}
          {:date "2021-12-29" :close 477.480011}
          {:date "2021-12-30" :close 476.160004}
          {:date "2021-12-31" :close 474.959991}
          {:date "2022-01-03" :close 477.709991}
          {:date "2022-01-04" :close 477.549988}
          {:date "2022-01-05" :close 468.380005}
          {:date "2022-01-06" :close 467.940002}
          {:date "2022-01-07" :close 466.089996}
          {:date "2022-01-10" :close 465.510010}
          {:date "2022-01-11" :close 469.750000}
          {:date "2022-01-12" :close 471.019989}
          {:date "2022-01-13" :close 464.529999}
          {:date "2022-01-14" :close 464.720001}
          {:date "2022-01-18" :close 456.489990}
          {:date "2022-01-19" :close 451.750000}
          {:date "2022-01-20" :close 446.750000}
          {:date "2022-01-21" :close 437.980011}
          {:date "2022-01-24" :close 439.839996}
          {:date "2022-01-25" :close 434.470001}
          {:date "2022-01-26" :close 440.880005}])