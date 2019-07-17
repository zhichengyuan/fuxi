
//北京奔驰
var paiming = {
        "code":0,
        "data":[
                {"rank":1,"name":"奔驰E级","num":63},
                {"rank":2,"name":"奔驰GLA","num":79},
                {"rank":3,"name":"奔驰GLC","num":83},
                {"rank":4,"name":"奔驰GLK级","num":62},
                {"rank":5,"name":"奔驰C级","num":65},
                {"rank":6,"name":"奔驰GLK级","num":81}
        ]
}
//北京现代
var paimings1 = {
        "code":0,
        "data":[
                {"rank":1,"name":"伊兰特","num":33},
                {"rank":2,"name":"名图","num":36},
                {"rank":3,"name":"瑞奕","num":35},
                {"rank":4,"name":"领翔","num":38},
                {"rank":5,"name":"全新胜达","num":34},
                {"rank":6,"name":"悦动","num":33}
        ]
}
//绅宝
var paimings2 = {
        "code":0,
        "data":[
                {"rank":1,"name":"绅宝D70","num":49},
                {"rank":2,"name":"绅宝D50","num":39},
                {"rank":3,"name":"绅宝X65","num":38},
                {"rank":4,"name":"绅宝D20","num":36},
                {"rank":5,"name":"绅宝X55","num":37},
                {"rank":6,"name":"绅宝D80","num":54}
        ]
}


// echarts数据
 var data = [
                [[42666,20,60,'宝沃','北汽'],
                [150607,11,65,'北京','北汽'],
                [430425,50,81,'奔驰','北汽'],
                [49272,6,86,'昌河','北汽'],
                [97738,10,78,'绅宝','北汽'],
                [92085,5,86,'威旺','北汽'],
                [795357,15,86,'现代','北汽'],
                ],
                [[6612,25,50,'DS','其他'],
                [552968,35,59,'奥迪','其他'],
                [1004866,8,52,'宝骏','其他'],
                [373491,70,96,'宝马','其他'],
                [1428848,18,96,'本田','其他'],
                [29675,7,57,'比速','其他'],
                [338705,20,54,'比亚迪','其他'],
                [261198,17,76,'标致','其他'],
                [1162312,18,67,'别克','其他'],
                [353,5,80,'成功','其他'],
                [484675,12,72,'传祺','其他'],
                [3103524,28,67,'大众','其他'],
                [89,14,55,'电咖','其他'],
                [11761,18,97,'东风','其他'],
                [10716,7,90,'东风风度','其他'],
                [219124,10,71,'东风风行','其他'],
                [93441,9,83,'东风风神','其他'],
                [287056,4,69,'东风小康','其他'],
                [150013,7,86,'东南','其他'],
                [3651,16,74,'菲亚特','其他'],
                [1149986,23,74,'丰田','其他'],
                [3129,11,68,'福迪','其他'],
                [827164,23,57,'福特','其他'],
                [21570,7,60,'福田','其他'],
                [18344,12,57,'观致','其他'],
                [11,23,96,'国金','其他'],
                [9,4,64,'哈飞','其他'],
                [830287,12,82,'哈弗','其他'],
                [127059,10,83,'海马','其他'],
                [37035,20,59,'汉腾','其他'],
                [4452,25,92,'红旗','其他'],
                [484,12,84,'红星','其他'],
                [468,20,56,'华骐','其他'],
                [3459,25,71,'华颂','其他'],
                [12442,9,64,'华泰','其他'],
                [150500,6,68,'幻速','其他'],
                [4,11,50,'黄海','其他'],
                [74,10,63,'吉奥','其他'],
                [1182715,9,99,'吉利','其他'],
                [184595,26,54,'吉普','其他'],
                [192074,13,87,'江淮','其他'],
                [66271,11,91,'江铃','其他'],
                [2700,3,51,'江南','其他'],
                [19882,45,86,'捷豹','其他'],
                [67686,6,79,'金杯','其他'],
                [626,21,51,'九龙','其他'],
                [4,9,54,'君马','其他'],
                [119,10,98,'卡威','其他'],
                [28216,5,92,'开瑞','其他'],
                [174694,45,51,'凯迪拉克','其他'],
                [25203,9,92,'凯翼','其他'],
                [14136,12,59,'康迪','其他'],
                [68430,20,60,'雷诺','其他'],
                [82,8,69,'理念','其他'],
                [40584,7,99,'力帆','其他'],
                [108540,12,50,'猎豹','其他'],
                [111919,11,94,'铃木','其他'],
                [1732,17,58,'领克','其他'],
                [38192,13,59,'陆风','其他'],
                [60277,80,85,'路虎','其他'],
                [309339,20,60,'马自达','其他'],
                [114098,12,57,'名爵','其他'],
                [17821,11,63,'纳智捷','其他'],
                [13681,34,76,'讴歌','其他'],
                [72,5.6,85,'欧联','其他'],
                [292882,8,90,'奇瑞','其他'],
                [137387,11,67,'启辰','其他'],
                [2268,4,85,'启腾','其他'],
                [406791,10,98,'起亚','其他'],
                [174,11,98,'青年莲花','其他'],
                [1090184,19,78,'日产','其他'],
                [372607,14,89,'荣威','其他'],
                [120883,16,54,'三菱','其他'],
                [20841,23,52,'上汽大通','其他'],
                [304508,18,98,'斯柯达','其他'],
                [30927,9,78,'斯威','其他'],
                [4727,30,63,'腾势','其他'],
                [66264,17,88,'魏派','其他'],
                [89399,40,82,'沃尔沃','其他'],
                [845172,5,72,'五菱','其他'],
                [3499,20,87,'五十铃','其他'],
                [6315,5,83,'夏利','其他'],
                [559087,18,50,'雪佛兰','其他'],
                [149866,15,88,'雪铁龙','其他'],
                [26890,11,88,'野马','其他'],
                [181707,9,75,'一汽','其他'],
                [29665,35,84,'英菲尼迪','其他'],
                [12650,8,90,'英致','其他'],
                [67,4,86,'永源','其他'],
                [5322,12,85,'御捷马','其他'],
                [581,12,61,'裕路','其他'],
                [2472,15,55,'云度','其他'],
                [1092940,10,94,'长安','其他'],
                [8959,9,93,'长城','其他'],
                [91,35,74,'之诺','其他'],
                [35857,5,77,'知豆','其他'],
                [47662,10,99,'中华','其他'],
                [67,6,55,'中兴','其他'],
                [227487,12,54,'众泰','其他'],
                ]
        ];
// 盒须图数据
var he_data = {
   "compoted":[
        [65, 63, 73, 69],
			  [75, 73, 88, 77],
			  [72, 75, 88, 67],
			  [84, 86, 78, 84],
			  [65, 71, 73, 73],
			  [73, 80, 85, 73],
			  [73, 58, 100, 63],
			  [66, 71, 85, 69],
			  [77, 80, 83, 78],
			  [65, 69, 61, 74],
			  [66, 62, 0, 60],
			  [71, 72, 75, 73],
			  [71, 75, 71, 76],
			  [72, 78, 96, 72],
			  [63, 67, 76, 68],
			  [83, 86, 98, 81],
			  [63, 63, 56, 63],
			  [75, 81, 86, 78],
			  [72, 75, 73, 69],
    ],
    "data_title": ['信息娱乐', '越野性能', '感知品质', '装备', '操控', '外观', '售后服务', '舒适性', '软实力', '动力', '零部件', '服务态度', '经济性', '空间', '实用性 及便利性', '安全', '质量可靠性', '品牌', '内饰'],
    "option_title_text":"D50-指标分布图",
    "scatter_data":[82, 83, 84, 93, 80, 87, 80, 82, 74, 71, 76, 83, 85, 86, 81, 93, 71, 78, 89]
}
// 竞争关系图
var graph_data = {
    "graph":{"nodes":[{"id":"0","name":"Myriel","itemStyle":{"normal":{"color":"rgb(235,81,72)"}},"symbolSize":28.685715,"x":-266.82776,"y":299.6904,"attributes":{"modularity_class":0}},{"id":"1","name":"Napoleon","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-418.08344,"y":446.8853,"attributes":{"modularity_class":0}},{"id":"2","name":"MlleBaptistine","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":9.485714,"x":-212.76357,"y":245.29176,"attributes":{"modularity_class":1}},{"id":"3","name":"MmeMagloire","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":9.485714,"x":-242.82404,"y":235.26283,"attributes":{"modularity_class":1}},{"id":"4","name":"CountessDeLo","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-379.30386,"y":429.06424,"attributes":{"modularity_class":0}},{"id":"5","name":"Geborand","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-417.26337,"y":406.03506,"attributes":{"modularity_class":0}},{"id":"6","name":"Champtercier","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-332.6012,"y":485.16974,"attributes":{"modularity_class":0}},{"id":"7","name":"Cravatte","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-382.69568,"y":475.09113,"attributes":{"modularity_class":0}},{"id":"8","name":"Count","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-320.384,"y":387.17325,"attributes":{"modularity_class":0}},{"id":"9","name":"OldMan","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-344.39832,"y":451.16772,"attributes":{"modularity_class":0}},{"id":"10","name":"Labarre","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-89.34107,"y":234.56128,"attributes":{"modularity_class":1}},{"id":"11","name":"绅宝","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":100,"x":-87.93029,"y":-6.8120565,"attributes":{"modularity_class":1}},{"id":"12","name":"Marguerite","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":-339.77908,"y":-184.69139,"attributes":{"modularity_class":1}},{"id":"13","name":"MmeDeR","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-194.31313,"y":178.55301,"attributes":{"modularity_class":1}},{"id":"14","name":"Isabeau","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-158.05168,"y":201.99768,"attributes":{"modularity_class":1}},{"id":"15","name":"Gervais","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-127.701546,"y":242.55057,"attributes":{"modularity_class":1}},{"id":"16","name":"Tholomyes","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":25.942856,"x":-385.2226,"y":-393.5572,"attributes":{"modularity_class":2}},{"id":"17","name":"Listolier","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":-516.55884,"y":-393.98975,"attributes":{"modularity_class":2}},{"id":"18","name":"Fameuil","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":-464.79382,"y":-493.57944,"attributes":{"modularity_class":2}},{"id":"19","name":"Blacheville","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":-515.1624,"y":-456.9891,"attributes":{"modularity_class":2}},{"id":"20","name":"Favourite","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":-408.12122,"y":-464.5048,"attributes":{"modularity_class":2}},{"id":"21","name":"Dahlia","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":-456.44113,"y":-425.13303,"attributes":{"modularity_class":2}},{"id":"22","name":"Zephine","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":-459.1107,"y":-362.5133,"attributes":{"modularity_class":2}},{"id":"23","name":"Fantine","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":42.4,"x":-313.42786,"y":-289.44803,"attributes":{"modularity_class":2}},{"id":"24","name":"MmeThenardier","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":31.428574,"x":4.6313396,"y":-273.8517,"attributes":{"modularity_class":7}},{"id":"25","name":"Thenardier","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":45.142853,"x":82.80825,"y":-203.1144,"attributes":{"modularity_class":7}},{"id":"26","name":"Cosette","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":31.428574,"x":78.64646,"y":-31.512747,"attributes":{"modularity_class":6}},{"id":"27","name":"威旺","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":47.88571,"x":-81.46074,"y":-204.20204,"attributes":{"modularity_class":7}},{"id":"28","name":"Fauchelevent","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":12.228573,"x":-225.73984,"y":82.41631,"attributes":{"modularity_class":4}},{"id":"29","name":"Bamatabois","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":23.2,"x":-385.6842,"y":-20.206686,"attributes":{"modularity_class":3}},{"id":"30","name":"Perpetue","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":-403.92447,"y":-197.69823,"attributes":{"modularity_class":2}},{"id":"31","name":"Simplice","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":12.228573,"x":-281.4253,"y":-158.45137,"attributes":{"modularity_class":2}},{"id":"32","name":"Scaufflaire","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-122.41348,"y":210.37503,"attributes":{"modularity_class":1}},{"id":"33","name":"Woman1","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":-234.6001,"y":-113.15067,"attributes":{"modularity_class":1}},{"id":"34","name":"Judge","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":17.714287,"x":-387.84915,"y":58.7059,"attributes":{"modularity_class":3}},{"id":"35","name":"Champmathieu","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":17.714287,"x":-338.2307,"y":87.48405,"attributes":{"modularity_class":3}},{"id":"36","name":"Brevet","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":17.714287,"x":-453.26874,"y":58.94648,"attributes":{"modularity_class":3}},{"id":"37","name":"Chenildieu","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":17.714287,"x":-386.44904,"y":140.05937,"attributes":{"modularity_class":3}},{"id":"38","name":"Cochepaille","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":17.714287,"x":-446.7876,"y":123.38005,"attributes":{"modularity_class":3}},{"id":"39","name":"Pontmercy","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":9.485714,"x":336.49738,"y":-269.55914,"attributes":{"modularity_class":6}},{"id":"40","name":"Boulatruelle","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":29.187843,"y":-460.13132,"attributes":{"modularity_class":7}},{"id":"41","name":"Eponine","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":31.428574,"x":238.36697,"y":-210.00926,"attributes":{"modularity_class":7}},{"id":"42","name":"Anzelma","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":9.485714,"x":189.69513,"y":-346.50662,"attributes":{"modularity_class":7}},{"id":"43","name":"Woman2","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":9.485714,"x":-187.00418,"y":-145.02663,"attributes":{"modularity_class":6}},{"id":"44","name":"MotherInnocent","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":-252.99521,"y":129.87549,"attributes":{"modularity_class":4}},{"id":"45","name":"Gribier","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-296.07935,"y":163.11964,"attributes":{"modularity_class":4}},{"id":"46","name":"Jondrette","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":550.3201,"y":522.4031,"attributes":{"modularity_class":5}},{"id":"47","name":"MmeBurgon","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":488.13535,"y":356.8573,"attributes":{"modularity_class":5}},{"id":"48","name":"Gavroche","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":61.600006,"x":387.89572,"y":110.462326,"attributes":{"modularity_class":8}},{"id":"49","name":"Gillenormand","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":126.4831,"y":68.10622,"attributes":{"modularity_class":6}},{"id":"50","name":"Magnon","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":127.07365,"y":-113.05923,"attributes":{"modularity_class":6}},{"id":"51","name":"MlleGillenormand","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":162.63559,"y":117.6565,"attributes":{"modularity_class":6}},{"id":"52","name":"MmePontmercy","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":353.66415,"y":-205.89165,"attributes":{"modularity_class":6}},{"id":"53","name":"MlleVaubois","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":165.43939,"y":339.7736,"attributes":{"modularity_class":6}},{"id":"54","name":"LtGillenormand","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":12.228573,"x":137.69348,"y":196.1069,"attributes":{"modularity_class":6}},{"id":"55","name":"宝骏510","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":53.37143,"x":206.44687,"y":-13.805411,"attributes":{"modularity_class":6}},{"id":"56","name":"BaronessT","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":194.82993,"y":224.78036,"attributes":{"modularity_class":6}},{"id":"57","name":"Mabeuf","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":31.428574,"x":597.6618,"y":135.18481,"attributes":{"modularity_class":8}},{"id":"58","name":"Enjolras","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":42.4,"x":355.78366,"y":-74.882454,"attributes":{"modularity_class":8}},{"id":"59","name":"Combeferre","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":31.428574,"x":515.2961,"y":-46.167564,"attributes":{"modularity_class":8}},{"id":"60","name":"Prouvaire","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":25.942856,"x":614.29285,"y":-69.3104,"attributes":{"modularity_class":8}},{"id":"61","name":"Feuilly","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":31.428574,"x":550.1917,"y":-128.17537,"attributes":{"modularity_class":8}},{"id":"62","name":"Courfeyrac","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":36.91429,"x":436.17184,"y":-12.7286825,"attributes":{"modularity_class":8}},{"id":"63","name":"Bahorel","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":34.17143,"x":602.55225,"y":16.421427,"attributes":{"modularity_class":8}},{"id":"64","name":"Bossuet","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":36.91429,"x":455.81955,"y":-115.45826,"attributes":{"modularity_class":8}},{"id":"65","name":"Joly","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":34.17143,"x":516.40784,"y":47.242233,"attributes":{"modularity_class":8}},{"id":"66","name":"Grantaire","itemStyle":{"normal":{"color":"rgb(235,81,72)"}},"symbolSize":28.685715,"x":646.4313,"y":-151.06331,"attributes":{"modularity_class":8}},{"id":"67","name":"MotherPlutarch","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":668.9568,"y":204.65488,"attributes":{"modularity_class":8}},{"id":"68","name":"Gueulemer","itemStyle":{"normal":{"color":"rgb(235,81,72)"}},"symbolSize":28.685715,"x":78.4799,"y":-347.15146,"attributes":{"modularity_class":7}},{"id":"69","name":"Babet","itemStyle":{"normal":{"color":"rgb(235,81,72)"}},"symbolSize":28.685715,"x":150.35959,"y":-298.50797,"attributes":{"modularity_class":7}},{"id":"70","name":"Claquesous","itemStyle":{"normal":{"color":"rgb(235,81,72)"}},"symbolSize":28.685715,"x":137.3717,"y":-410.2809,"attributes":{"modularity_class":7}},{"id":"71","name":"Montparnasse","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":25.942856,"x":234.87747,"y":-400.85983,"attributes":{"modularity_class":7}},{"id":"72","name":"Toussaint","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":9.485714,"x":40.942253,"y":113.78272,"attributes":{"modularity_class":1}},{"id":"73","name":"Child1","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":437.939,"y":291.58234,"attributes":{"modularity_class":8}},{"id":"74","name":"Child2","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":6.742859,"x":466.04922,"y":283.3606,"attributes":{"modularity_class":8}},{"id":"75","name":"Brujon","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":238.79364,"y":-314.06345,"attributes":{"modularity_class":7}},{"id":"76","name":"MmeHucheloup","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":20.457146,"x":712.18353,"y":4.8131495,"attributes":{"modularity_class":8}}],"links":[{"id":"0","name":null,"source":"1","target":"0","lineStyle":{"normal":{}}},{"id":"1","name":null,"source":"2","target":"0","lineStyle":{"normal":{}}},{"id":"2","name":null,"source":"3","target":"0","lineStyle":{"normal":{}}},{"id":"3","name":null,"source":"3","target":"2","lineStyle":{"normal":{}}},{"id":"4","name":null,"source":"4","target":"0","lineStyle":{"normal":{}}},{"id":"5","name":null,"source":"5","target":"0","lineStyle":{"normal":{}}},{"id":"6","name":null,"source":"6","target":"0","lineStyle":{"normal":{}}},{"id":"7","name":null,"source":"7","target":"0","lineStyle":{"normal":{}}},{"id":"8","name":null,"source":"8","target":"0","lineStyle":{"normal":{}}},{"id":"9","name":null,"source":"9","target":"0","lineStyle":{"normal":{}}},{"id":"13","name":null,"source":"11","target":"0","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"11","target":"2","lineStyle":{"normal":{}}},{"id":"11","name":null,"source":"11","target":"3","lineStyle":{"normal":{}}},{"id":"10","name":null,"source":"11","target":"10","lineStyle":{"normal":{}}},{"id":"14","name":null,"source":"12","target":"11","lineStyle":{"normal":{}}},{"id":"15","name":null,"source":"13","target":"11","lineStyle":{"normal":{}}},{"id":"16","name":null,"source":"14","target":"11","lineStyle":{"normal":{}}},{"id":"17","name":null,"source":"15","target":"11","lineStyle":{"normal":{}}},{"id":"18","name":null,"source":"17","target":"16","lineStyle":{"normal":{}}},{"id":"19","name":null,"source":"18","target":"16","lineStyle":{"normal":{}}},{"id":"20","name":null,"source":"18","target":"17","lineStyle":{"normal":{}}},{"id":"21","name":null,"source":"19","target":"16","lineStyle":{"normal":{}}},{"id":"22","name":null,"source":"19","target":"17","lineStyle":{"normal":{}}},{"id":"23","name":null,"source":"19","target":"18","lineStyle":{"normal":{}}},{"id":"24","name":null,"source":"20","target":"16","lineStyle":{"normal":{}}},{"id":"25","name":null,"source":"20","target":"17","lineStyle":{"normal":{}}},{"id":"26","name":null,"source":"20","target":"18","lineStyle":{"normal":{}}},{"id":"27","name":null,"source":"20","target":"19","lineStyle":{"normal":{}}},{"id":"28","name":null,"source":"21","target":"16","lineStyle":{"normal":{}}},{"id":"29","name":null,"source":"21","target":"17","lineStyle":{"normal":{}}},{"id":"30","name":null,"source":"21","target":"18","lineStyle":{"normal":{}}},{"id":"31","name":null,"source":"21","target":"19","lineStyle":{"normal":{}}},{"id":"32","name":null,"source":"21","target":"20","lineStyle":{"normal":{}}},{"id":"33","name":null,"source":"22","target":"16","lineStyle":{"normal":{}}},{"id":"34","name":null,"source":"22","target":"17","lineStyle":{"normal":{}}},{"id":"35","name":null,"source":"22","target":"18","lineStyle":{"normal":{}}},{"id":"36","name":null,"source":"22","target":"19","lineStyle":{"normal":{}}},{"id":"37","name":null,"source":"22","target":"20","lineStyle":{"normal":{}}},{"id":"38","name":null,"source":"22","target":"21","lineStyle":{"normal":{}}},{"id":"47","name":null,"source":"23","target":"11","lineStyle":{"normal":{}}},{"id":"46","name":null,"source":"23","target":"12","lineStyle":{"normal":{}}},{"id":"39","name":null,"source":"23","target":"16","lineStyle":{"normal":{}}},{"id":"40","name":null,"source":"23","target":"17","lineStyle":{"normal":{}}},{"id":"41","name":null,"source":"23","target":"18","lineStyle":{"normal":{}}},{"id":"42","name":null,"source":"23","target":"19","lineStyle":{"normal":{}}},{"id":"43","name":null,"source":"23","target":"20","lineStyle":{"normal":{}}},{"id":"44","name":null,"source":"23","target":"21","lineStyle":{"normal":{}}},{"id":"45","name":null,"source":"23","target":"22","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"24","target":"11","lineStyle":{"normal":{}}},{"id":"48","name":null,"source":"24","target":"23","lineStyle":{"normal":{}}},{"id":"52","name":null,"source":"25","target":"11","lineStyle":{"normal":{}}},{"id":"51","name":null,"source":"25","target":"23","lineStyle":{"normal":{}}},{"id":"50","name":null,"source":"25","target":"24","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"26","target":"11","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"26","target":"16","lineStyle":{"normal":{}}},{"id":"53","name":null,"source":"26","target":"24","lineStyle":{"normal":{}}},{"id":"56","name":null,"source":"26","target":"25","lineStyle":{"normal":{}}},{"id":"57","name":null,"source":"27","target":"11","lineStyle":{"normal":{}}},{"id":"58","name":null,"source":"27","target":"23","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"27","target":"24","lineStyle":{"normal":{}}},{"id":"59","name":null,"source":"27","target":"25","lineStyle":{"normal":{}}},{"id":"61","name":null,"source":"27","target":"26","lineStyle":{"normal":{}}},{"id":"62","name":null,"source":"28","target":"11","lineStyle":{"normal":{}}},{"id":"63","name":null,"source":"28","target":"27","lineStyle":{"normal":{}}},{"id":"66","name":null,"source":"29","target":"11","lineStyle":{"normal":{}}},{"id":"64","name":null,"source":"29","target":"23","lineStyle":{"normal":{}}},{"id":"65","name":null,"source":"29","target":"27","lineStyle":{"normal":{}}},{"id":"67","name":null,"source":"30","target":"23","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"31","target":"11","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"31","target":"23","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"31","target":"27","lineStyle":{"normal":{}}},{"id":"68","name":null,"source":"31","target":"30","lineStyle":{"normal":{}}},{"id":"72","name":null,"source":"32","target":"11","lineStyle":{"normal":{}}},{"id":"73","name":null,"source":"33","target":"11","lineStyle":{"normal":{}}},{"id":"74","name":null,"source":"33","target":"27","lineStyle":{"normal":{}}},{"id":"75","name":null,"source":"34","target":"11","lineStyle":{"normal":{}}},{"id":"76","name":null,"source":"34","target":"29","lineStyle":{"normal":{}}},{"id":"77","name":null,"source":"35","target":"11","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"35","target":"29","lineStyle":{"normal":{}}},{"id":"78","name":null,"source":"35","target":"34","lineStyle":{"normal":{}}},{"id":"82","name":null,"source":"36","target":"11","lineStyle":{"normal":{}}},{"id":"83","name":null,"source":"36","target":"29","lineStyle":{"normal":{}}},{"id":"80","name":null,"source":"36","target":"34","lineStyle":{"normal":{}}},{"id":"81","name":null,"source":"36","target":"35","lineStyle":{"normal":{}}},{"id":"87","name":null,"source":"37","target":"11","lineStyle":{"normal":{}}},{"id":"88","name":null,"source":"37","target":"29","lineStyle":{"normal":{}}},{"id":"84","name":null,"source":"37","target":"34","lineStyle":{"normal":{}}},{"id":"85","name":null,"source":"37","target":"35","lineStyle":{"normal":{}}},{"id":"86","name":null,"source":"37","target":"36","lineStyle":{"normal":{}}},{"id":"93","name":null,"source":"38","target":"11","lineStyle":{"normal":{}}},{"id":"94","name":null,"source":"38","target":"29","lineStyle":{"normal":{}}},{"id":"89","name":null,"source":"38","target":"34","lineStyle":{"normal":{}}},{"id":"90","name":null,"source":"38","target":"35","lineStyle":{"normal":{}}},{"id":"91","name":null,"source":"38","target":"36","lineStyle":{"normal":{}}},{"id":"92","name":null,"source":"38","target":"37","lineStyle":{"normal":{}}},{"id":"95","name":null,"source":"39","target":"25","lineStyle":{"normal":{}}},{"id":"96","name":null,"source":"40","target":"25","lineStyle":{"normal":{}}},{"id":"97","name":null,"source":"41","target":"24","lineStyle":{"normal":{}}},{"id":"98","name":null,"source":"41","target":"25","lineStyle":{"normal":{}}},{"id":"101","name":null,"source":"42","target":"24","lineStyle":{"normal":{}}},{"id":"100","name":null,"source":"42","target":"25","lineStyle":{"normal":{}}},{"id":"99","name":null,"source":"42","target":"41","lineStyle":{"normal":{}}},{"id":"102","name":null,"source":"43","target":"11","lineStyle":{"normal":{}}},{"id":"103","name":null,"source":"43","target":"26","lineStyle":{"normal":{}}},{"id":"104","name":null,"source":"43","target":"27","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"44","target":"11","lineStyle":{"normal":{}}},{"id":"105","name":null,"source":"44","target":"28","lineStyle":{"normal":{}}},{"id":"107","name":null,"source":"45","target":"28","lineStyle":{"normal":{}}},{"id":"108","name":null,"source":"47","target":"46","lineStyle":{"normal":{}}},{"id":"112","name":null,"source":"48","target":"11","lineStyle":{"normal":{}}},{"id":"110","name":null,"source":"48","target":"25","lineStyle":{"normal":{}}},{"id":"111","name":null,"source":"48","target":"27","lineStyle":{"normal":{}}},{"id":"109","name":null,"source":"48","target":"47","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"49","target":"11","lineStyle":{"normal":{}}},{"id":"113","name":null,"source":"49","target":"26","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"50","target":"24","lineStyle":{"normal":{}}},{"id":"115","name":null,"source":"50","target":"49","lineStyle":{"normal":{}}},{"id":"119","name":null,"source":"51","target":"11","lineStyle":{"normal":{}}},{"id":"118","name":null,"source":"51","target":"26","lineStyle":{"normal":{}}},{"id":"117","name":null,"source":"51","target":"49","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"52","target":"39","lineStyle":{"normal":{}}},{"id":"120","name":null,"source":"52","target":"51","lineStyle":{"normal":{}}},{"id":"122","name":null,"source":"53","target":"51","lineStyle":{"normal":{}}},{"id":"125","name":null,"source":"54","target":"26","lineStyle":{"normal":{}}},{"id":"124","name":null,"source":"54","target":"49","lineStyle":{"normal":{}}},{"id":"123","name":null,"source":"54","target":"51","lineStyle":{"normal":{}}},{"id":"131","name":null,"source":"55","target":"11","lineStyle":{"normal":{}}},{"id":"132","name":null,"source":"55","target":"16","lineStyle":{"normal":{}}},{"id":"133","name":null,"source":"55","target":"25","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"55","target":"26","lineStyle":{"normal":{}}},{"id":"128","name":null,"source":"55","target":"39","lineStyle":{"normal":{}}},{"id":"134","name":null,"source":"55","target":"41","lineStyle":{"normal":{}}},{"id":"135","name":null,"source":"55","target":"48","lineStyle":{"normal":{}}},{"id":"127","name":null,"source":"55","target":"49","lineStyle":{"normal":{}}},{"id":"126","name":null,"source":"55","target":"51","lineStyle":{"normal":{}}},{"id":"129","name":null,"source":"55","target":"54","lineStyle":{"normal":{}}},{"id":"136","name":null,"source":"56","target":"49","lineStyle":{"normal":{}}},{"id":"137","name":null,"source":"56","target":"55","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"57","target":"41","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"57","target":"48","lineStyle":{"normal":{}}},{"id":"138","name":null,"source":"57","target":"55","lineStyle":{"normal":{}}},{"id":"145","name":null,"source":"58","target":"11","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"58","target":"27","lineStyle":{"normal":{}}},{"id":"142","name":null,"source":"58","target":"48","lineStyle":{"normal":{}}},{"id":"141","name":null,"source":"58","target":"55","lineStyle":{"normal":{}}},{"id":"144","name":null,"source":"58","target":"57","lineStyle":{"normal":{}}},{"id":"148","name":null,"source":"59","target":"48","lineStyle":{"normal":{}}},{"id":"147","name":null,"source":"59","target":"55","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"59","target":"57","lineStyle":{"normal":{}}},{"id":"146","name":null,"source":"59","target":"58","lineStyle":{"normal":{}}},{"id":"150","name":null,"source":"60","target":"48","lineStyle":{"normal":{}}},{"id":"151","name":null,"source":"60","target":"58","lineStyle":{"normal":{}}},{"id":"152","name":null,"source":"60","target":"59","lineStyle":{"normal":{}}},{"id":"153","name":null,"source":"61","target":"48","lineStyle":{"normal":{}}},{"id":"158","name":null,"source":"61","target":"55","lineStyle":{"normal":{}}},{"id":"157","name":null,"source":"61","target":"57","lineStyle":{"normal":{}}},{"id":"154","name":null,"source":"61","target":"58","lineStyle":{"normal":{}}},{"id":"156","name":null,"source":"61","target":"59","lineStyle":{"normal":{}}},{"id":"155","name":null,"source":"61","target":"60","lineStyle":{"normal":{}}},{"id":"164","name":null,"source":"62","target":"41","lineStyle":{"normal":{}}},{"id":"162","name":null,"source":"62","target":"48","lineStyle":{"normal":{}}},{"id":"159","name":null,"source":"62","target":"55","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"62","target":"57","lineStyle":{"normal":{}}},{"id":"160","name":null,"source":"62","target":"58","lineStyle":{"normal":{}}},{"id":"161","name":null,"source":"62","target":"59","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"62","target":"60","lineStyle":{"normal":{}}},{"id":"165","name":null,"source":"62","target":"61","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"63","target":"48","lineStyle":{"normal":{}}},{"id":"174","name":null,"source":"63","target":"55","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"63","target":"57","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"63","target":"58","lineStyle":{"normal":{}}},{"id":"167","name":null,"source":"63","target":"59","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"63","target":"60","lineStyle":{"normal":{}}},{"id":"172","name":null,"source":"63","target":"61","lineStyle":{"normal":{}}},{"id":"169","name":null,"source":"63","target":"62","lineStyle":{"normal":{}}},{"id":"184","name":null,"source":"64","target":"11","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"64","target":"48","lineStyle":{"normal":{}}},{"id":"175","name":null,"source":"64","target":"55","lineStyle":{"normal":{}}},{"id":"183","name":null,"source":"64","target":"57","lineStyle":{"normal":{}}},{"id":"179","name":null,"source":"64","target":"58","lineStyle":{"normal":{}}},{"id":"182","name":null,"source":"64","target":"59","lineStyle":{"normal":{}}},{"id":"181","name":null,"source":"64","target":"60","lineStyle":{"normal":{}}},{"id":"180","name":null,"source":"64","target":"61","lineStyle":{"normal":{}}},{"id":"176","name":null,"source":"64","target":"62","lineStyle":{"normal":{}}},{"id":"178","name":null,"source":"64","target":"63","lineStyle":{"normal":{}}},{"id":"187","name":null,"source":"65","target":"48","lineStyle":{"normal":{}}},{"id":"194","name":null,"source":"65","target":"55","lineStyle":{"normal":{}}},{"id":"193","name":null,"source":"65","target":"57","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"65","target":"58","lineStyle":{"normal":{}}},{"id":"192","name":null,"source":"65","target":"59","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"65","target":"60","lineStyle":{"normal":{}}},{"id":"190","name":null,"source":"65","target":"61","lineStyle":{"normal":{}}},{"id":"188","name":null,"source":"65","target":"62","lineStyle":{"normal":{}}},{"id":"185","name":null,"source":"65","target":"63","lineStyle":{"normal":{}}},{"id":"186","name":null,"source":"65","target":"64","lineStyle":{"normal":{}}},{"id":"200","name":null,"source":"66","target":"48","lineStyle":{"normal":{}}},{"id":"196","name":null,"source":"66","target":"58","lineStyle":{"normal":{}}},{"id":"197","name":null,"source":"66","target":"59","lineStyle":{"normal":{}}},{"id":"203","name":null,"source":"66","target":"60","lineStyle":{"normal":{}}},{"id":"202","name":null,"source":"66","target":"61","lineStyle":{"normal":{}}},{"id":"198","name":null,"source":"66","target":"62","lineStyle":{"normal":{}}},{"id":"201","name":null,"source":"66","target":"63","lineStyle":{"normal":{}}},{"id":"195","name":null,"source":"66","target":"64","lineStyle":{"normal":{}}},{"id":"199","name":null,"source":"66","target":"65","lineStyle":{"normal":{}}},{"id":"204","name":null,"source":"67","target":"57","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"68","target":"11","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"68","target":"24","lineStyle":{"normal":{}}},{"id":"205","name":null,"source":"68","target":"25","lineStyle":{"normal":{}}},{"id":"208","name":null,"source":"68","target":"27","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"68","target":"41","lineStyle":{"normal":{}}},{"id":"209","name":null,"source":"68","target":"48","lineStyle":{"normal":{}}},{"id":"213","name":null,"source":"69","target":"11","lineStyle":{"normal":{}}},{"id":"214","name":null,"source":"69","target":"24","lineStyle":{"normal":{}}},{"id":"211","name":null,"source":"69","target":"25","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"69","target":"27","lineStyle":{"normal":{}}},{"id":"217","name":null,"source":"69","target":"41","lineStyle":{"normal":{}}},{"id":"216","name":null,"source":"69","target":"48","lineStyle":{"normal":{}}},{"id":"212","name":null,"source":"69","target":"68","lineStyle":{"normal":{}}},{"id":"221","name":null,"source":"70","target":"11","lineStyle":{"normal":{}}},{"id":"222","name":null,"source":"70","target":"24","lineStyle":{"normal":{}}},{"id":"218","name":null,"source":"70","target":"25","lineStyle":{"normal":{}}},{"id":"223","name":null,"source":"70","target":"27","lineStyle":{"normal":{}}},{"id":"224","name":null,"source":"70","target":"41","lineStyle":{"normal":{}}},{"id":"225","name":null,"source":"70","target":"58","lineStyle":{"normal":{}}},{"id":"220","name":null,"source":"70","target":"68","lineStyle":{"normal":{}}},{"id":"219","name":null,"source":"70","target":"69","lineStyle":{"normal":{}}},{"id":"230","name":null,"source":"71","target":"11","lineStyle":{"normal":{}}},{"id":"233","name":null,"source":"71","target":"25","lineStyle":{"normal":{}}},{"id":"226","name":null,"source":"71","target":"27","lineStyle":{"normal":{}}},{"id":"232","name":null,"source":"71","target":"41","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"71","target":"48","lineStyle":{"normal":{}}},{"id":"228","name":null,"source":"71","target":"68","lineStyle":{"normal":{}}},{"id":"227","name":null,"source":"71","target":"69","lineStyle":{"normal":{}}},{"id":"229","name":null,"source":"71","target":"70","lineStyle":{"normal":{}}},{"id":"236","name":null,"source":"72","target":"11","lineStyle":{"normal":{}}},{"id":"234","name":null,"source":"72","target":"26","lineStyle":{"normal":{}}},{"id":"235","name":null,"source":"72","target":"27","lineStyle":{"normal":{}}},{"id":"237","name":null,"source":"73","target":"48","lineStyle":{"normal":{}}},{"id":"238","name":null,"source":"74","target":"48","lineStyle":{"normal":{}}},{"id":"239","name":null,"source":"74","target":"73","lineStyle":{"normal":{}}},{"id":"242","name":null,"source":"75","target":"25","lineStyle":{"normal":{}}},{"id":"244","name":null,"source":"75","target":"41","lineStyle":{"normal":{}}},{"id":null,"name":null,"source":"75","target":"48","lineStyle":{"normal":{}}},{"id":"241","name":null,"source":"75","target":"68","lineStyle":{"normal":{}}},{"id":"240","name":null,"source":"75","target":"69","lineStyle":{"normal":{}}},{"id":"245","name":null,"source":"75","target":"70","lineStyle":{"normal":{}}},{"id":"246","name":null,"source":"75","target":"71","lineStyle":{"normal":{}}},{"id":"252","name":null,"source":"76","target":"48","lineStyle":{"normal":{}}},{"id":"253","name":null,"source":"76","target":"58","lineStyle":{"normal":{}}},{"id":"251","name":null,"source":"76","target":"62","lineStyle":{"normal":{}}},{"id":"250","name":null,"source":"76","target":"63","lineStyle":{"normal":{}}},{"id":"247","name":null,"source":"76","target":"64","lineStyle":{"normal":{}}},{"id":"248","name":null,"source":"76","target":"65","lineStyle":{"normal":{}}},{"id":"249","name":null,"source":"76","target":"66","lineStyle":{"normal":{}}}]},
    "text": "竞品组"
}
// 竞争关系效果模板
 var  change_car= {
        list:[
            {
              name:'gl8',
              arr:[   
                {name:'艾力绅'},
                {name:'奥德赛'},
                {name:'马自达8'}
              ]
            },{
              name:'gl8',
              arr:[   
                {name:'艾力绅'},
                {name:'奥德赛'},
                {name:'马自达8'}
              ]
            },{
              name:'gl8',
              arr:[   
                {name:'艾力绅'},
                {name:'奥德赛'},
                {name:'马自达8'}
              ]
            },{
              name:'gl8',
              arr:[   
                {name:'艾力绅'},
                {name:'奥德赛'},
                {name:'马自达8'}
              ]
            },{
              name:'gl8',
              arr:[   
                {name:'艾力绅'},
                {name:'奥德赛'},
                {name:'马自达8'}
              ]
            },{
              name:'gl8',
              arr:[   
                {name:'艾力绅'},
                {name:'奥德赛'},
                {name:'马自达8'}
              ]
            }
        ]
       }