// 汽车tab
var car_config = {"data": 
{
	"text": "中国汽车销量分布图", 
	"car_img": [
		{"carName": "2018款 1.5L 手动时尚智驾版", "rate": [41, 26, 49, 19, 15, 21, 6, 14, 9, 20, 0, 0]},
		 {"carName": "2018款 1.5L 手动豪华智驾版", "rate": [448, 290, 536, 209, 165, 235, 71, 150, 94, 225, 0, 0]},
		  {"carName": "2018款 1.5L 手动尊贵智驾版", "rate": [693, 448, 829, 323, 255, 364, 110, 232, 146, 348, 0, 0]}, 
		  {"carName": "2018款 1.5L CVT时尚智驾版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, 
		  {"carName": "2018款 1.5L CVT豪华智驾版", "rate": [408, 263, 487, 190, 150, 214, 65, 137, 86, 204, 0, 0]}, 
		  {"carName": "2018款 1.5L CVT尊贵智驾版", "rate": [978, 632, 1170, 456, 359, 513, 155, 328, 206, 491, 0, 0]}, 
		  {"carName": "2018款 1.5L 手动尊贵智联版", "rate": [82, 53, 97, 38, 30, 43, 13, 27, 17, 41, 0, 0]}, 
		  {"carName": "2018款 1.5L 手动尊享智联版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, 
		  {"carName": "2018款 1.5L CVT尊贵智联版", "rate": [82, 53, 97, 38, 30, 43, 13, 27, 17, 41, 0, 0]}, 
		  {"carName": "2018款 1.5L CVT尊享智联版", "rate": [82, 53, 97, 38, 30, 43, 13, 27, 17, 41, 0, 0]}
		],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":2,"title":"车身参数"},
		   {"id":3,"title":"发动机"},
		   {"id":4,"title":"变速箱"},
		   {"id":5,"title":"底盘转向"},
		   {"id":6,"title":"车轮制动"},
		   {"id":7,"title":"安全配置"},
		   {"id":8,"title":"操控配置"},
		   {"id":9,"title":"外部配置"},
		   {"id":10,"title":"内部配置"},
		   {"id":11,"title":"座椅配置"},
		   {"id":12,"title":"多媒体配置"},
		   {"id":13,"title":"灯光配置"},
		   {"id":14,"title":"玻璃/后视镜"},
		   {"id":15,"title":"空调/冰箱"},
		   {"id":16,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/shoudong1.jpg","./image/shoudong2.jpg","./image/shoudong3.jpg","./image/shoudong4.jpg","./image/shoudong5.jpg","./image/shoudong1.jpg","./image/shoudong1.jpg","./image/shoudong2.jpg",],
			"img_name":["2018款 1.5L 手动时尚智驾版","2018款 1.5L 手动豪华智驾版","2018款 1.5L CVT时尚智驾版","2018款 1.5L CVT豪华智驾版","2018款 1.5L CVT尊贵智驾版","2018款 1.5L CVT尊贵智驾版","2018款 1.5L CVT豪华智驾版","2018款 1.5L CVT尊贵智驾版",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"经销商参考价：","is_true":1},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}]
			]
	   }
	}
}
// 汽车tab
var car_config1 = {"data": 
{
	"text": "中国汽车销量分布图", 
	"car_img": [
		{"carName": "2018款 1.5T 手动进取版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
		{"carName": "2018款 1.5T 手动精英版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 305, 197, 0, 0]}, 
		{"carName": "2018款 1.5T 手动新智版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 51, 33, 0, 0]}, 
		{"carName": "2018款 1.5T CVT精英版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 762, 492, 0, 0]}, 
		{"carName": "2018款 1.5T CVT新智版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 610, 393, 0, 0]}, 
		{"carName": "2018款 1.5T CVT智领版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 305, 197, 0, 0]}
	],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":2,"title":"车身参数"},
		   {"id":3,"title":"发动机"},
		   {"id":4,"title":"变速箱"},
		   {"id":5,"title":"底盘转向"},
		   {"id":6,"title":"车轮制动"},
		   {"id":7,"title":"安全配置"},
		   {"id":8,"title":"操控配置"},
		   {"id":9,"title":"外部配置"},
		   {"id":10,"title":"内部配置"},
		   {"id":11,"title":"座椅配置"},
		   {"id":12,"title":"多媒体配置"},
		   {"id":13,"title":"灯光配置"},
		   {"id":14,"title":"玻璃/后视镜"},
		   {"id":15,"title":"空调/冰箱"},
		   {"id":16,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png","./image/car5.png","./image/car6.png",],
			"img_name":["2018款 1.5T 手动进取版","2018款 1.5T 手动精英版","2018款 1.5T 手动新智版","1.5T CVT精英版","2018款 1.5T CVT新智版","2018款 1.5T CVT智领版",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"经销商参考价：","is_true":1},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}]
			]
	   }
	}
}
// 汽车tab
var car_config2 = {
	"data":{
		"text":"中国汽车销量分布图",
		"car_img":[
			 {"carName" : "2018 1.5L CVT尊享智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智联","rate":[46,65,23,34,65,21,23,34,45,54,78,87]},
			 {"carName" : "2018 1.5L CVT时尚智驾版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]},
			 {"carName" : "2018 1.5L CVT手动豪华智驾版","rate":[23,34,45,54,78,87,23,34,65,21,23,34]},
			 {"carName" : "2018 1.5L CVT尊享智联版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]}
			
		],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":2,"title":"车身参数"},
		   {"id":3,"title":"发动机"},
		   {"id":4,"title":"变速箱"},
		   {"id":5,"title":"底盘转向"},
		   {"id":6,"title":"车轮制动"},
		   {"id":7,"title":"安全配置"},
		   {"id":8,"title":"操控配置"},
		   {"id":9,"title":"外部配置"},
		   {"id":10,"title":"内部配置"},
		   {"id":11,"title":"座椅配置"},
		   {"id":12,"title":"多媒体配置"},
		   {"id":13,"title":"灯光配置"},
		   {"id":14,"title":"玻璃/后视镜"},
		   {"id":15,"title":"空调/冰箱"},
		   {"id":16,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png","./image/car5.png","./image/car6.png",],
			"img_name":["奔驰","宝马","大众","北汽","奥迪","联系啊",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"经销商参考价：","is_true":1},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}]
			]
	   }
	}
}
//var car_config3 = {"data": {"text": "\u4e2d\u56fd\u6c7d\u8f66\u5e02\u573a\u5360\u6709\u7387\u5206\u6790\u56fe", "car_img": [{"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u90fd\u5e02\u578b", "rate": [984, 204, 902, 511, 1133, 784, 640, 839, 764, 723, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u98ce\u5c1a\u578b", "rate": [609, 126, 558, 317, 701, 485, 396, 519, 473, 447, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u950b\u9510\u578b", "rate": [328, 68, 301, 170, 378, 261, 213, 280, 255, 241, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u56db\u9a71\u90fd\u5e02\u578b", "rate": [187, 39, 172, 97, 216, 149, 122, 160, 146, 138, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u56db\u9a71\u98ce\u5c1a\u578b", "rate": [234, 49, 215, 122, 270, 187, 152, 200, 182, 172, 0, 0]}, {"carName": "2018\u6b3e 28TGDI \u81ea\u52a8\u56db\u9a71Sports\u667a\u81fb\u578b", "rate": [47, 10, 43, 24, 54, 37, 30, 40, 36, 34, 0, 0]}, {"carName": "2018\u6b3e 28TGDI \u81ea\u52a8\u56db\u9a71Sports\u65d7\u8230\u578b", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}]}}{"data": {"text": "\u4e2d\u56fd\u6c7d\u8f66\u5e02\u573a\u5360\u6709\u7387\u5206\u6790\u56fe", "car_img": [{"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u90fd\u5e02\u578b", "rate": [984, 204, 902, 511, 1133, 784, 640, 839, 764, 723, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u98ce\u5c1a\u578b", "rate": [609, 126, 558, 317, 701, 485, 396, 519, 473, 447, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u950b\u9510\u578b", "rate": [328, 68, 301, 170, 378, 261, 213, 280, 255, 241, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u56db\u9a71\u90fd\u5e02\u578b", "rate": [187, 39, 172, 97, 216, 149, 122, 160, 146, 138, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u56db\u9a71\u98ce\u5c1a\u578b", "rate": [234, 49, 215, 122, 270, 187, 152, 200, 182, 172, 0, 0]}, {"carName": "2018\u6b3e 28TGDI \u81ea\u52a8\u56db\u9a71Sports\u667a\u81fb\u578b", "rate": [47, 10, 43, 24, 54, 37, 30, 40, 36, 34, 0, 0]}, {"carName": "2018\u6b3e 28TGDI \u81ea\u52a8\u56db\u9a71Sports\u65d7\u8230\u578b", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71GT\u9510\u9177\u578b", "rate": [0, 0, 0, 0, 59, 54, 5, 103, 52, 98, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71GT\u81f3\u9177\u578b", "rate": [0, 0, 0, 0, 59, 54, 5, 103, 52, 98, 0, 0]}]}}{"data": {"text": "\u4e2d\u56fd\u6c7d\u8f66\u5e02\u573a\u5360\u6709\u7387\u5206\u6790\u56fe", "car_img": [{"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u90fd\u5e02\u578b", "rate": [984, 204, 902, 511, 1133, 784, 640, 839, 764, 723, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u98ce\u5c1a\u578b", "rate": [609, 126, 558, 317, 701, 485, 396, 519, 473, 447, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u4e24\u9a71\u950b\u9510\u578b", "rate": [328, 68, 301, 170, 378, 261, 213, 280, 255, 241, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u56db\u9a71\u90fd\u5e02\u578b", "rate": [187, 39, 172, 97, 216, 149, 122, 160, 146, 138, 0, 0]}, {"carName": "2018\u6b3e 25TGDI \u81ea\u52a8\u56db\u9a71\u98ce\u5c1a\u578b", "rate": [234, 49, 215, 122, 270, 187, 152, 200, 182, 172, 0, 0]}, {"carName": "2018\u6b3e 28TGDI \u81ea\u52a8\u56db\u9a71Sports\u667a\u81fb\u578b", "rate": [47, 10, 43, 24, 54, 37, 30, 40, 36, 34, 0, 0]}, {"carName": "2018\u6b3e 28TGDI \u81ea\u52a8\u56db\u9a71Sports\u65d7\u8230\u578b", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71GT\u9510\u9177\u578b", "rate": [0, 0, 0, 0, 59, 54, 5, 103, 52, 98, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71GT\u81f3\u9177\u578b", "rate": [0, 0, 0, 0, 59, 54, 5, 103, 52, 98, 0, 0]}, {"carName": "2018\u6b3e 28T \u4e24\u9a71\u8212\u9002\u578b 5\u5ea7", "rate": [110, 28, 111, 88, 91, 247, 155, 96, 115, 183, 0, 0]}, {"carName": "2018\u6b3e 28T \u4e24\u9a71\u8d28\u4eab\u578b 5\u5ea7", "rate": [331, 84, 332, 265, 274, 742, 465, 287, 344, 550, 0, 0]}, {"carName": "2018\u6b3e 28T \u4e24\u9a71\u8c6a\u534e\u578b 5\u5ea7", "rate": [193, 49, 194, 155, 160, 433, 271, 168, 200, 321, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71\u8c6a\u534e\u578b 5\u5ea7", "rate": [110, 28, 111, 88, 91, 247, 155, 96, 115, 183, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71\u65d7\u8230\u578b 5\u5ea7", "rate": [28, 7, 28, 22, 23, 62, 39, 24, 29, 46, 0, 0]}, {"carName": "2018\u6b3e 28T \u4e24\u9a71\u8d28\u4eab\u578b 7\u5ea7", "rate": [28, 7, 28, 22, 23, 62, 39, 24, 29, 46, 0, 0]}, {"carName": "2018\u6b3e 28T \u4e24\u9a71\u8c6a\u534e\u578b 7\u5ea7", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71\u65d7\u8230\u578b 7\u5ea7", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71\u8212\u9002\u578b 5\u5ea7", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 28T \u4e24\u9a71\u8212\u9002\u578b 7\u5ea7", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71\u8212\u9002\u578b 7\u5ea7", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 28T \u56db\u9a71\u8c6a\u534e\u578b 7\u5ea7", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 2.0T TS \u56db\u9a71\u8c6a\u534e\u578b", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {"carName": "2018\u6b3e 2.0T TS \u56db\u9a71\u65d7\u8230\u578b", "rate": [28, 7, 28, 22, 23, 62, 39, 24, 29, 46, 0, 0]}, {"carName": "2018\u6b3e 2.0T TS \u56db\u9a71\u81f3\u5c0a\u578b", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}]}}


// 竞品
var power_config = {
	"data":{
		"text":"中国汽车销量分布图",
		"car_img":[
			 {"carName" : "2018 1.5L CVT本品智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智联","rate":[46,65,23,34,65,21,23,34,45,54,78,87]},
			 {"carName" : "2018 1.5L CVT时尚智驾版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]},
			 {"carName" : "2018 1.5L CVT手动豪华智驾版","rate":[23,34,45,54,78,87,23,34,65,21,23,34]},
			 {"carName" : "2018 1.5L CVT尊享智联版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]}
			
		],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":1,"title":"车身参数"},
		   {"id":1,"title":"发动机"},
		   {"id":1,"title":"变速箱"},
		   {"id":1,"title":"底盘转向"},
		   {"id":1,"title":"车轮制动"},
		   {"id":1,"title":"安全配置"},
		   {"id":1,"title":"操控配置"},
		   {"id":1,"title":"外部配置"},
		   {"id":1,"title":"内部配置"},
		   {"id":1,"title":"座椅配置"},
		   {"id":1,"title":"多媒体配置"},
		   {"id":1,"title":"灯光配置"},
		   {"id":1,"title":"玻璃/后视镜"},
		   {"id":1,"title":"空调/冰箱"},
		   {"id":1,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/car6.png","./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png",],
			"img_name":["绅宝智行 2018款 1.5T 手动进取版","帝豪GSe 2018款 领尚型","逸动DT 2018款 1.0T 手动尊享型","荣威i6 2018款 16T 手动豪华版","科沃兹 2018款 320 自动欣享天窗版",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{'car_pei': '6.79万'}, {'car_pei': '北京汽车'}, {'car_pei': '紧凑型车'}, {'car_pei': '汽油'}, {'car_pei': '2017.11'}, {'car_pei': '85'}, {'car_pei': '148'}, {'car_pei': '1.5L 116马力 L4'}, {'car_pei': '5挡手动'}, {'car_pei': '4630*1820*1480'}, {'car_pei': '三厢车'}, {'car_pei': '-'}, {'car_pei': '-'}]
			]
	   }
	}
}
// 竞品1
var power_config1 = {
	"data":{
		"text":"国汽车市场占有率分析图",
		"car_img":[
			 {"carName" : "2018 1.5L CVT本品智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智联","rate":[46,65,23,34,65,21,23,34,45,54,78,87]},
			 {"carName" : "2018 1.5L CVT时尚智驾版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]},
			 {"carName" : "2018 1.5L CVT手动豪华智驾版","rate":[23,34,45,54,78,87,23,34,65,21,23,34]},
			 {"carName" : "2018 1.5L CVT尊享智联版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]}
			
		],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":1,"title":"车身参数"},
		   {"id":1,"title":"发动机"},
		   {"id":1,"title":"变速箱"},
		   {"id":1,"title":"底盘转向"},
		   {"id":1,"title":"车轮制动"},
		   {"id":1,"title":"安全配置"},
		   {"id":1,"title":"操控配置"},
		   {"id":1,"title":"外部配置"},
		   {"id":1,"title":"内部配置"},
		   {"id":1,"title":"座椅配置"},
		   {"id":1,"title":"多媒体配置"},
		   {"id":1,"title":"灯光配置"},
		   {"id":1,"title":"玻璃/后视镜"},
		   {"id":1,"title":"空调/冰箱"},
		   {"id":1,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png","./image/car5.png","./image/car6.png",],
			"img_name":["奔驰","宝马","大众","北汽","奥迪","联系啊",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"经销商参考价：","is_true":1},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}]
			]
	   }
	}
}// 竞品2
var power_config2 = {
	"data":{
		"text":"汽车市场占有率分析图",
		"car_img":[
			 {"carName" : "2018 1.5L CVT本品智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智联","rate":[46,65,23,34,65,21,23,34,45,54,78,87]},
			 {"carName" : "2018 1.5L CVT时尚智驾版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]},
			 {"carName" : "2018 1.5L CVT手动豪华智驾版","rate":[23,34,45,54,78,87,23,34,65,21,23,34]},
			 {"carName" : "2018 1.5L CVT尊享智联版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]}
			
		],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":1,"title":"车身参数"},
		   {"id":1,"title":"发动机"},
		   {"id":1,"title":"变速箱"},
		   {"id":1,"title":"底盘转向"},
		   {"id":1,"title":"车轮制动"},
		   {"id":1,"title":"安全配置"},
		   {"id":1,"title":"操控配置"},
		   {"id":1,"title":"外部配置"},
		   {"id":1,"title":"内部配置"},
		   {"id":1,"title":"座椅配置"},
		   {"id":1,"title":"多媒体配置"},
		   {"id":1,"title":"灯光配置"},
		   {"id":1,"title":"玻璃/后视镜"},
		   {"id":1,"title":"空调/冰箱"},
		   {"id":1,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png","./image/car5.png","./image/car6.png",],
			"img_name":["奔驰","宝马","大众","北汽","奥迪","联系啊",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"经销商参考价：","is_true":1},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}]
			]
	   }
	}
}

// 竞品3
var power_config3 = {
	"data":{
		"text":"车市场占有率分析图",
		"car_img":[
			 {"carName" : "2018 1.5L CVT本品智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智联","rate":[46,65,23,34,65,21,23,34,45,54,78,87]},
			 {"carName" : "2018 1.5L CVT时尚智驾版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]},
			 {"carName" : "2018 1.5L CVT手动豪华智驾版","rate":[23,34,45,54,78,87,23,34,65,21,23,34]},
			 {"carName" : "2018 1.5L CVT尊享智联版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]}
			
		],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":1,"title":"车身参数"},
		   {"id":1,"title":"发动机"},
		   {"id":1,"title":"变速箱"},
		   {"id":1,"title":"底盘转向"},
		   {"id":1,"title":"车轮制动"},
		   {"id":1,"title":"安全配置"},
		   {"id":1,"title":"操控配置"},
		   {"id":1,"title":"外部配置"},
		   {"id":1,"title":"内部配置"},
		   {"id":1,"title":"座椅配置"},
		   {"id":1,"title":"多媒体配置"},
		   {"id":1,"title":"灯光配置"},
		   {"id":1,"title":"玻璃/后视镜"},
		   {"id":1,"title":"空调/冰箱"},
		   {"id":1,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png","./image/car5.png","./image/car6.png",],
			"img_name":["奔驰","宝马","大众","北汽","奥迪","联系啊",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"经销商参考价：","is_true":1},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}]
			]
	   }
	}
}
// 竞品4
var power_config4 = {
	"data":{
		"text":"市场占有率分析图",
		"car_img":[
			 {"carName" : "2018 1.5L CVT本品智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智驾版","rate":[12,34,56,34,57,23,45,34,76,87,45,23]},
			 {"carName" : "2018 1.5L CVT尊享智联","rate":[46,65,23,34,65,21,23,34,45,54,78,87]},
			 {"carName" : "2018 1.5L CVT时尚智驾版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]},
			 {"carName" : "2018 1.5L CVT手动豪华智驾版","rate":[23,34,45,54,78,87,23,34,65,21,23,34]},
			 {"carName" : "2018 1.5L CVT尊享智联版","rate":[21,23,34,54,78,87,34,57,23,45,34,76]}
			
		],
		"tab_car":[
		   {"id":1,"title":"基本参数"},
		   {"id":1,"title":"车身参数"},
		   {"id":1,"title":"发动机"},
		   {"id":1,"title":"变速箱"},
		   {"id":1,"title":"底盘转向"},
		   {"id":1,"title":"车轮制动"},
		   {"id":1,"title":"安全配置"},
		   {"id":1,"title":"操控配置"},
		   {"id":1,"title":"外部配置"},
		   {"id":1,"title":"内部配置"},
		   {"id":1,"title":"座椅配置"},
		   {"id":1,"title":"多媒体配置"},
		   {"id":1,"title":"灯光配置"},
		   {"id":1,"title":"玻璃/后视镜"},
		   {"id":1,"title":"空调/冰箱"},
		   {"id":1,"title":"其他"}
		],
		"car_table":{
			"img_url":["./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png","./image/car5.png","./image/car6.png",],
			"img_name":["奔驰","宝马","大众","北汽","奥迪","联系啊",],
			"car_tables":[
			  [{"car_pei":"厂商指导价："},{"car_pei":"经销商参考价：","is_true":1},{"car_pei":"厂商"},{"car_pei":"级别："},{"car_pei":"汽油"},{"car_pei":"上市时间"},{"car_pei":"最大功率（kW）"},{"car_pei":"最大扭矩（N-m）"},{"car_pei":"发动机："},{"car_pei":"变速箱："},{"car_pei":"长x宽x高（mm)："},{"car_pei":"车身结构："},{"car_pei":"最高车速（km/h）"},{"car_pei":"官方0-100km/h加速(s)"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}],
			  [{"car_pei":"18.89万"},{"car_pei":"15.66万起","is_true":1},{"car_pei":"上海大众"},{"car_pei":"中型车"},{"car_pei":"汽油"},{"car_pei":"2018"},{"car_pei":"110"},{"car_pei":"250"},{"car_pei":"1.4T150马力L4"},{"car_pei":"7挡双离合"},{"car_pei":"4933*1836*1469："},{"car_pei":"4门5座三厢车"},{"car_pei":"-"},{"car_pei":"9.3"}]
			]
	   }
	}
}
var user_config = {
	"data":{
		"benpin" : {
			"user_tab":{
				"carname" :"绅宝D50",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"酷玩奶爸",
					"num":18,
					"text_arr":["全能家庭主男"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"顾家进取族",
					"num":16,
					"text_arr":["积极进取","追求事业的进步","也有很强的家庭责任感"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"旅游达人",
					"num":12,
					"text_arr":["爱好旅游并且会玩","心态乐观积极"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:207},
					{name:"天津",value:8},
					{name:"河北",value:90},
					{name:"山西",value:32},
					{name:"内蒙古",value:14},
					{name:"辽宁",value:6},
					{name:"吉林",value:1},
					{name:"黑龙江",value:8},
					{name:"上海",value:21},
					{name:"江苏",value:38},
					{name:"浙江",value:23},
					{name:"安徽",value:27},
					{name:"福建",value:8},
					{name:"江西",value:7},
					{name:"山东",value:149},
					{name:"河南",value:178},
					{name:"湖北",value:28},
					{name:"湖南",value:23},
					{name:"重庆",value:18},
					{name:"四川",value:84},
					{name:"贵州",value:16},
					{name:"云南",value:22},
					{name:"西藏",value:0},
					{name:"陕西",value:32},
					{name:"甘肃",value:5},
					{name:"青海",value:2},
					{name:"宁夏",value:4},
					{name:"新疆",value:7},
					{name:"广东",value:41},
					{name:"广西",value:19},
					{name:"海南",value:178},
					{name:"台湾",value:0}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}, {
					name: '接送孩子'
				}
			]
		},
		"jingpin1" : {
			"user_tab":{
				"carname" :"荣威i6",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"睿智前行族",
					"num":8,
					"text_arr":["他们的生活压力里不大","追求生活的享受，特立独行","坚持自己想法，具有冒险精神"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"轻中产",
					"num":22,
					"text_arr":["年龄范围为25到35岁，具有高收入、高消费、高负债的特点","在生活态度上更加积极","知足、乐观是他们身上的印记"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"精致生活",
					"num":18,
					"text_arr":["讲究仪式感","品质生活"]
				}
			],
			"user_map_city":{
				"name_car":"荣威i6-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}
			]
		},
		"jingpin2" : {
			"user_tab":{
				"carname" :"逸动 ",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"享受安逸",
					"num":19,
					"text_arr":["安稳舒适的过小日子"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"互联网原生",
					"num":10,
					"text_arr":["社交至上","多元朋友圈","个性存于社会"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"愤青艺术家",
					"num":8,
					"text_arr":["有才华的叛逆者"]
				}
			],
			"user_map_city":{
				"name_car":"逸动 -省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '逛街',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}
			]
		},
		"jingpin3" : {
			"user_tab":{
				"carname" :"逸动",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"创想乐活",
					"num":12,
					"text_arr":["理性、不跟风满足个人喜好","玩转各种社交平台","喜好尝试各种新鲜事物"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"小镇青年",
					"num":23,
					"text_arr":["年龄通常在25到34岁，生活在相对富裕的三四线城市，接受过大学以上的教育","他们没有住房贷款的沉重压力，开着10万左右的轿车","与一二线城市的朋友相比拥有更多的闲暇时间"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"吐槽屌丝",
					"num":12,
					"text_arr":["贫嘴","毒舌","话多"]
				}
			],
			"user_map_city":{
				"name_car":"逸动-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				},  {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, 
			]
		},
		"jingpin4" : {
			"user_tab":{
				"carname" :"帝豪",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"职场新鲜人",
					"num":16,
					"text_arr":["对未来个人发展目标清晰","愿为工作投入更多努力"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"情怀消费",
					"num":8,
					"text_arr":["热爱有文化气质的产品","喜欢有内涵有鲜明态度的品牌"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"精致生活",
					"num":12,
					"text_arr":["讲究仪式感","品质生活"]
				}
			],
			"user_map_city":{
				"name_car":"帝豪-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin5" : {
			"user_tab":{
				"carname" :"科沃兹",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"科沃兹-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '接送孩子',
				}
			]
		}
	}
}
// 用户tab
var user_config1 = {
	"data":{
		"benpin" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin1" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin2" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin3" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin4" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin5" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		}
	}
}

// 用户tab1
var user_config1 = {
	"data":{
		"benpin" : {
			"user_tab":{
				"carname" :"啊啊啊啊啊",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin1" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin2" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin3" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin4" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin5" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		}
	}
}
// 用户tab2
var user_config2 = {
	"data":{
		"benpin" : {
			"user_tab":{
				"carname" :"好好",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin1" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin2" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin3" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin4" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin5" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		}
	}
}
// 用户tab3
var user_config3 = {
	"data":{
		"benpin" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin1" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin2" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin3" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin4" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin5" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		}
	}
}
// 用户tab4
var user_config4 = {
	"data":{
		"benpin" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin1" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin2" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin3" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin4" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		},
		"jingpin5" : {
			"user_tab":{
				"carname" :"绅宝D60",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/fision.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				},
				{
					"img_url":"./image/tz.png",
					"num":12,
					"text_arr":["三线城市富二代，家族企业担任管理，或做份小生意","关注档次、顶级、格调","期望车辆外观拉分、配置高端"]
				}
			],
			"user_map_city":{
				"name_car":"绅宝D50-省分布图",
				"arr":[
					{name:"北京",value:177},
					{name:"天津",value:42},
					{name:"河北",value:102},
					{name:"山西",value:81},
					{name:"内蒙古",value:47},
					{name:"辽宁",value:67},
					{name:"吉林",value:82},
					{name:"黑龙江",value:66},
					{name:"上海",value:24},
					{name:"江苏",value:92},
					{name:"浙江",value:114},
					{name:"安徽",value:109},
					{name:"福建",value:116},
					{name:"江西",value:91},
					{name:"山东",value:119},
					{name:"河南",value:137},
					{name:"湖北",value:116},
					{name:"湖南",value:114},
					{name:"重庆",value:91},
					{name:"四川",value:125},
					{name:"贵州",value:62},
					{name:"云南",value:83},
					{name:"西藏",value:9},
					{name:"陕西",value:80},
					{name:"甘肃",value:56},
					{name:"青海",value:10},
					{name:"宁夏",value:18},
					{name:"新疆",value:67},
					{name:"广东",value:123},
					{name:"广西",value:59},
					{name:"海南",value:14},
					{name:"台湾",value:16}
				]
			},
			"user_advantage":[
				{
					name: '购物',
				}, {
					name: '拉货',
				}, {
					name: '商务接送',
				}, {
					name: '面子',
				}, {
					name: '自驾游',
				}, {
					name: '上下班',
				}, {
					name: '自由行',
				}, {
					name: '睡觉',
				}
			]
		}
	}
}
//指标统计tab
var index_data_config = {
		"car_first":{
			"title":"指标分类型T3",
			"data_arr": [{'name': '油耗表现', 'satisfied_second': 350, 'neutral_second': 18, 'no_satisfied_second': 34, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.04'}, {'name': '前脸', 'satisfied_second': 538, 'neutral_second': 138, 'no_satisfied_second': 22, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.20'}, {'name': '感知品质', 'satisfied_second': 753, 'neutral_second': 66, 'no_satisfied_second': 81, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.07'}, {'name': '越野性能', 'satisfied_second': 79, 'neutral_second': 5, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.05'}, {'name': '维修保养花费', 'satisfied_second': 198, 'neutral_second': 17, 'no_satisfied_second': 39, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.07'}, {'name': '异响', 'satisfied_second': 101, 'neutral_second': 7, 'no_satisfied_second': 38, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.69', 'neutra_percentage': '0.05'}, {'name': '抖动', 'satisfied_second': 276, 'neutral_second': 6, 'no_satisfied_second': 73, 'no_satisfied_percentage': '0.21', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.02'}, {'name': '怠速时的NVH表现', 'satisfied_second': 53, 'neutral_second': 0, 'no_satisfied_second': 22, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '仪表盘上屏幕显示的信息', 'satisfied_second': 69, 'neutral_second': 16, 'no_satisfied_second': 42, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.54', 'neutra_percentage': '0.13'}, {'name': '停车辅助装备', 'satisfied_second': 3, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.30', 'neutra_percentage': '0.20'}, {'name': '仪表盘', 'satisfied_second': 278, 'neutral_second': 16, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.05'}, {'name': '正前', 'satisfied_second': 118, 'neutral_second': 21, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.14'}, {'name': '车漆的耐久性', 'satisfied_second': 21, 'neutral_second': 2, 'no_satisfied_second': 13, 'no_satisfied_percentage': '0.36', 'satisfied_percentage': '0.58', 'neutra_percentage': '0.06'}, {'name': '车内接打电话的通话质量', 'satisfied_second': 96, 'neutral_second': 9, 'no_satisfied_second': 13, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.08'}, {'name': '动力系统获奖情况', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.60', 'neutra_percentage': '-'}, {'name': '特殊天气的驾驶难易程度', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.91', 'neutra_percentage': '-'}, {'name': '坐姿', 'satisfied_second': 70, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.01'}, {'name': '关门声的声音品质', 'satisfied_second': 14, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.06'}, {'name': '副驾驶座椅空间', 'satisfied_second': 79, 'neutral_second': 1, 'no_satisfied_second': 41, 'no_satisfied_percentage': '0.34', 'satisfied_percentage': '0.65', 'neutra_percentage': '0.01'}, {'name': '内饰做工工艺', 'satisfied_second': 64, 'neutral_second': 6, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.08'}, {'name': '盲区位置及影响', 'satisfied_second': 61, 'neutral_second': 1, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.01'}, {'name': 'OBD', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '中控台整体造型', 'satisfied_second': 16, 'neutral_second': 7, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.27'}, {'name': '空调出风口的位置', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.71', 'satisfied_percentage': '0.29', 'neutra_percentage': '-'}, {'name': '收音机', 'satisfied_second': 11, 'neutral_second': 0, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.48', 'satisfied_percentage': '0.52', 'neutra_percentage': '-'}, {'name': '前大灯', 'satisfied_second': 33, 'neutral_second': 2, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.05'}, {'name': '车机屏幕显示效果', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '蓝牙电话', 'satisfied_second': 19, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '外后视镜折叠', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.86', 'neutra_percentage': '-'}, {'name': '音响品牌', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': 'LOGO', 'satisfied_second': 68, 'neutral_second': 9, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.11'}, {'name': '车载电视', 'satisfied_second': 13, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.06'}, {'name': '加载/满载动力表现', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.92', 'neutra_percentage': '-'}, {'name': '长按按键指向的功能', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '仪表盘上屏幕的位置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '设计传达的品质感', 'satisfied_second': 5, 'neutral_second': 4, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.56', 'neutra_percentage': '0.44'}, {'name': '续航里程', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '品牌力', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '驾驶员腿部空间', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '碰撞表现', 'satisfied_second': 138, 'neutral_second': 3, 'no_satisfied_second': 23, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.02'}, {'name': '非内燃机/新能源', 'satisfied_second': 57, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.03'}, {'name': '首保的里程和时间', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.37', 'satisfied_percentage': '0.63', 'neutra_percentage': '-'}, {'name': '蓝牙', 'satisfied_second': 16, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.89', 'neutra_percentage': '-'}, {'name': '方向盘', 'satisfied_second': 264, 'neutral_second': 4, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.01'}, {'name': '加强油门时的加速表现', 'satisfied_second': 85, 'neutral_second': 6, 'no_satisfied_second': 49, 'no_satisfied_percentage': '0.35', 'satisfied_percentage': '0.61', 'neutra_percentage': '0.04'}, {'name': '车窗尺寸', 'satisfied_second': 64, 'neutral_second': 8, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.80', 'neutra_percentage': '0.10'}, {'name': '转向感受', 'satisfied_second': 87, 'neutral_second': 6, 'no_satisfied_second': 46, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.63', 'neutra_percentage': '0.04'}, {'name': '内饰材料', 'satisfied_second': 48, 'neutral_second': 2, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.04'}, {'name': '超车性能', 'satisfied_second': 165, 'neutral_second': 6, 'no_satisfied_second': 61, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.71', 'neutra_percentage': '0.03'}, {'name': '售后服务', 'satisfied_second': 97, 'neutral_second': 5, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.16', 'satisfied_percentage': '0.80', 'neutra_percentage': '0.04'}, {'name': '车内插孔', 'satisfied_second': 14, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.74', 'neutra_percentage': '-'}, {'name': '车内储物空间的位置', 'satisfied_second': 62, 'neutral_second': 8, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.10'}, {'name': '4S店维修配件费用', 'satisfied_second': 70, 'neutral_second': 3, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.74', 'neutra_percentage': '0.03'}, {'name': '制动', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.56', 'satisfied_percentage': '0.44', 'neutra_percentage': '-'}, {'name': '驾驶员空间', 'satisfied_second': 104, 'neutral_second': 12, 'no_satisfied_second': 24, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.74', 'neutra_percentage': '0.09'}, {'name': '座椅软硬度', 'satisfied_second': 134, 'neutral_second': 4, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.94', 'neutra_percentage': '0.03'}, {'name': '喇叭数量', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '饰条', 'satisfied_second': 60, 'neutral_second': 6, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.09'}, {'name': '门把手', 'satisfied_second': 46, 'neutral_second': 5, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.09'}, {'name': '车机屏幕的属性及功能', 'satisfied_second': 213, 'neutral_second': 18, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.02', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.08'}, {'name': '涉水深度', 'satisfied_second': 7, 'neutral_second': 2, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.22'}, {'name': '针对不同常用物件的储物设计', 'satisfied_second': 41, 'neutral_second': 1, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.32', 'satisfied_percentage': '0.66', 'neutra_percentage': '0.02'}, {'name': '拖拽/拉钩', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '后备箱开启方式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '迎宾灯品质感', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '头枕舒适性', 'satisfied_second': 19, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.95', 'neutra_percentage': '-'}, {'name': '方向盘的人体工程学（位置、手感）', 'satisfied_second': 37, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.03'}, {'name': '遮阳板', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '前排头部空间', 'satisfied_second': 45, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车内信息阅读的清晰程度', 'satisfied_second': 35, 'neutral_second': 4, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.10'}, {'name': 'logo的构成元素', 'satisfied_second': 0, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '1.00'}, {'name': '扶手材质舒适性', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车机系统稳定性', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '内饰缝线', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '后备箱空间', 'satisfied_second': 322, 'neutral_second': 17, 'no_satisfied_second': 38, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.05'}, {'name': '停车辅助功能的实用性', 'satisfied_second': 325, 'neutral_second': 15, 'no_satisfied_second': 52, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.04'}, {'name': '方向盘跑偏', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '车内监控', 'satisfied_second': 167, 'neutral_second': 7, 'no_satisfied_second': 39, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.03'}, {'name': '后门进出的便利性', 'satisfied_second': 18, 'neutral_second': 0, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.49', 'satisfied_percentage': '0.51', 'neutra_percentage': '-'}, {'name': '油门踏板的调校、回馈', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.58', 'satisfied_percentage': '0.42', 'neutra_percentage': '-'}, {'name': '刹车踏板的人机工程（位置、尺寸）', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '使用安全装备', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '车高', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': 'AUX接口', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.33'}, {'name': '驾驶员头部空间', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '空调出风口', 'satisfied_second': 249, 'neutral_second': 35, 'no_satisfied_second': 28, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.80', 'neutra_percentage': '0.11'}, {'name': '外观细节', 'satisfied_second': 11, 'neutral_second': 2, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.69', 'neutra_percentage': '0.12'}, {'name': '发动机缸体缸盖材质', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.35', 'satisfied_percentage': '0.65', 'neutra_percentage': '-'}, {'name': '变速箱重大故障', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '商业险', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车头视野', 'satisfied_second': 22, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.88', 'neutra_percentage': '-'}, {'name': '空气动力学参数', 'satisfied_second': 43, 'neutral_second': 11, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.74', 'neutra_percentage': '0.19'}, {'name': '音响', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.82', 'neutra_percentage': '-'}, {'name': '油门踏板的人机工程（位置、尺寸）', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '冷却液渗漏', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '后备箱总容积', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.48', 'satisfied_percentage': '0.52', 'neutra_percentage': '-'}, {'name': '扶手的位置', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车身稳定性', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '内饰整体感受', 'satisfied_second': 1486, 'neutral_second': 67, 'no_satisfied_second': 72, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.04'}, {'name': '躲避障碍（城市路况）', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.40', 'neutra_percentage': '0.20'}, {'name': '外观灯饰', 'satisfied_second': 525, 'neutral_second': 28, 'no_satisfied_second': 56, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.05'}, {'name': '配置', 'satisfied_second': 179, 'neutral_second': 26, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.79', 'neutra_percentage': '0.12'}, {'name': '正侧', 'satisfied_second': 485, 'neutral_second': 16, 'no_satisfied_second': 14, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.94', 'neutra_percentage': '0.03'}, {'name': '变速箱客观配置', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.90', 'neutra_percentage': '-'}, {'name': '发动机重大故障', 'satisfied_second': 20, 'neutral_second': 4, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.27', 'satisfied_percentage': '0.61', 'neutra_percentage': '0.12'}, {'name': '外观装饰件', 'satisfied_second': 43, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.04'}, {'name': '变速箱技术类型（手动/自动/双离合/CVT）', 'satisfied_second': 252, 'neutral_second': 26, 'no_satisfied_second': 66, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.08'}, {'name': '换档感受', 'satisfied_second': 35, 'neutral_second': 3, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.21', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.06'}, {'name': '盲区辅助', 'satisfied_second': 136, 'neutral_second': 6, 'no_satisfied_second': 44, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.03'}, {'name': '顺利驾驶的难易程度', 'satisfied_second': 188, 'neutral_second': 4, 'no_satisfied_second': 28, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.02'}, {'name': '销量', 'satisfied_second': 51, 'neutral_second': 9, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.13'}, {'name': '车钥匙及锁系统的功能', 'satisfied_second': 280, 'neutral_second': 10, 'no_satisfied_second': 31, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.03'}, {'name': '车身材料', 'satisfied_second': 79, 'neutral_second': 9, 'no_satisfied_second': 15, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.09'}, {'name': '座椅舒适性装备', 'satisfied_second': 29, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '控制零件的反应灵敏程度（触屏、按键等）', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '灯光、雨刮、后视镜、座椅等调节的便利性', 'satisfied_second': 131, 'neutral_second': 11, 'no_satisfied_second': 31, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.06'}, {'name': '过弯时的车身姿态及稳定性', 'satisfied_second': 91, 'neutral_second': 2, 'no_satisfied_second': 25, 'no_satisfied_percentage': '0.21', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.02'}, {'name': '被动安全装备', 'satisfied_second': 291, 'neutral_second': 9, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.03'}, {'name': '离合踏板的调校、回馈（MT）', 'satisfied_second': 47, 'neutral_second': 12, 'no_satisfied_second': 26, 'no_satisfied_percentage': '0.31', 'satisfied_percentage': '0.55', 'neutra_percentage': '0.14'}, {'name': '外车门把手', 'satisfied_second': 104, 'neutral_second': 5, 'no_satisfied_second': 26, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.04'}, {'name': '刹车类型', 'satisfied_second': 7, 'neutral_second': 1, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.38', 'satisfied_percentage': '0.54', 'neutra_percentage': '0.08'}, {'name': 'SD卡', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '悬架的乘坐感受', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.81', 'neutra_percentage': '-'}, {'name': '座椅可调的角度和方式', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '功能引起的噪音（按键音、提示音等）', 'satisfied_second': 1, 'neutral_second': 8, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.36', 'satisfied_percentage': '0.07', 'neutra_percentage': '0.57'}, {'name': '后保险杠', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '塑料件、塑胶件的耐久性', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.57', 'satisfied_percentage': '0.29', 'neutra_percentage': '0.14'}, {'name': '油箱容积', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '钥匙孔的位置', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '久坐的舒适性', 'satisfied_second': 23, 'neutral_second': 0, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.74', 'neutra_percentage': '-'}, {'name': '外后视镜电加热', 'satisfied_second': 10, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.15'}, {'name': '车内操作的方便性（电子开关、按键等的布局和易用性）', 'satisfied_second': 51, 'neutral_second': 5, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.08'}, {'name': '车长', 'satisfied_second': 23, 'neutral_second': 3, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.12'}, {'name': '外后视镜', 'satisfied_second': 11, 'neutral_second': 12, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.46', 'neutra_percentage': '0.50'}, {'name': '内后视镜尺寸', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '第二排座椅舒适性', 'satisfied_second': 45, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.02', 'satisfied_percentage': '0.98', 'neutra_percentage': '-'}, {'name': '化妆灯', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '多媒体功能区造型风格', 'satisfied_second': 10, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.15'}, {'name': '正后角度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '防擦条', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '档杆', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.95', 'neutra_percentage': '-'}, {'name': '座椅对腰部、肩部、颈部等的支撑', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '语音交互', 'satisfied_second': 176, 'neutral_second': 16, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.08'}, {'name': '前排进出的便利性', 'satisfied_second': 1, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.50'}, {'name': '空调工作时散发的气味', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '尾灯', 'satisfied_second': 422, 'neutral_second': 46, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.09'}, {'name': '驱动形式', 'satisfied_second': 18, 'neutral_second': 1, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.04'}, {'name': '前格栅', 'satisfied_second': 330, 'neutral_second': 33, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.09'}, {'name': '轴距', 'satisfied_second': 78, 'neutral_second': 8, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.09'}, {'name': '保险花费', 'satisfied_second': 55, 'neutral_second': 6, 'no_satisfied_second': 15, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.72', 'neutra_percentage': '0.08'}, {'name': '远程服务', 'satisfied_second': 295, 'neutral_second': 20, 'no_satisfied_second': 69, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.05'}, {'name': '主动安全系统/装备', 'satisfied_second': 2863, 'neutral_second': 16, 'no_satisfied_second': 94, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.96', 'neutra_percentage': '0.01'}, {'name': '车载冰箱', 'satisfied_second': 322, 'neutral_second': 46, 'no_satisfied_second': 104, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.68', 'neutra_percentage': '0.10'}, {'name': '按键设计的易用性', 'satisfied_second': 449, 'neutral_second': 34, 'no_satisfied_second': 43, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.06'}, {'name': '车机屏幕尺寸', 'satisfied_second': 430, 'neutral_second': 29, 'no_satisfied_second': 54, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.06'}, {'name': '口碑', 'satisfied_second': 38, 'neutral_second': 3, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.06'}, {'name': '转向辅助功能', 'satisfied_second': 14, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.93', 'neutra_percentage': '0.07'}, {'name': '外部照明', 'satisfied_second': 23, 'neutral_second': 2, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.68', 'neutra_percentage': '0.06'}, {'name': '奔驰', 'satisfied_second': 452, 'neutral_second': 73, 'no_satisfied_second': 47, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.79', 'neutra_percentage': '0.13'}, {'name': '零部件', 'satisfied_second': 86, 'neutral_second': 7, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.06'}, {'name': '启动方式', 'satisfied_second': 68, 'neutral_second': 3, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.04'}, {'name': '交付质量', 'satisfied_second': 102, 'neutral_second': 2, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.02'}, {'name': '座椅空间', 'satisfied_second': 65, 'neutral_second': 1, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.01'}, {'name': '自行维修的便利性', 'satisfied_second': 31, 'neutral_second': 5, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.23', 'satisfied_percentage': '0.66', 'neutra_percentage': '0.11'}, {'name': '前排空间', 'satisfied_second': 163, 'neutral_second': 37, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.18'}, {'name': '后排座椅放倒的方式和组合', 'satisfied_second': 91, 'neutral_second': 2, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.02'}, {'name': '爬坡动力表现', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '扶手杯托（杯坐）', 'satisfied_second': 75, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.01'}, {'name': '吉利', 'satisfied_second': 42, 'neutral_second': 8, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.15'}, {'name': '坐垫尺寸', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '变速箱其他参数', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '变速箱品牌', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '手机映射的系统适应性', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '针对儿童的安全设计', 'satisfied_second': 35, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '前悬长度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '手势控制', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '轮距', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车身做工工艺', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '服务态度', 'satisfied_second': 1382, 'neutral_second': 120, 'no_satisfied_second': 173, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.07'}, {'name': '前排座椅舒适性', 'satisfied_second': 563, 'neutral_second': 11, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.02'}, {'name': '发动机参数及技术', 'satisfied_second': 586, 'neutral_second': 67, 'no_satisfied_second': 191, 'no_satisfied_percentage': '0.23', 'satisfied_percentage': '0.69', 'neutra_percentage': '0.08'}, {'name': '正后', 'satisfied_second': 354, 'neutral_second': 25, 'no_satisfied_second': 18, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.06'}, {'name': '方向盘的调校、回馈', 'satisfied_second': 268, 'neutral_second': 12, 'no_satisfied_second': 37, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.04'}, {'name': '外观整体感受', 'satisfied_second': 2554, 'neutral_second': 191, 'no_satisfied_second': 107, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.07'}, {'name': '轮胎', 'satisfied_second': 24, 'neutral_second': 3, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.11'}, {'name': '加速感受', 'satisfied_second': 508, 'neutral_second': 77, 'no_satisfied_second': 138, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.11'}, {'name': '车外操作的方便性（机舱盖、后备箱开启等）', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '内饰氛围灯', 'satisfied_second': 63, 'neutral_second': 4, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.05'}, {'name': '底盘调教感受', 'satisfied_second': 456, 'neutral_second': 11, 'no_satisfied_second': 40, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.02'}, {'name': '车顶行李架类型', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '发动机舱布局的整齐程度', 'satisfied_second': 139, 'neutral_second': 9, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.06'}, {'name': '音响效果', 'satisfied_second': 29, 'neutral_second': 2, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.05'}, {'name': '喇叭声', 'satisfied_second': 10, 'neutral_second': 2, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.56', 'neutra_percentage': '0.11'}, {'name': '空调功能', 'satisfied_second': 78, 'neutral_second': 5, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.05'}, {'name': '按键式交互', 'satisfied_second': 268, 'neutral_second': 24, 'no_satisfied_second': 33, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.07'}, {'name': '车门的密封性', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.44', 'satisfied_percentage': '0.56', 'neutra_percentage': '-'}, {'name': '支撑机盖的机构', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '轮眉', 'satisfied_second': 3, 'neutral_second': 3, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.50'}, {'name': '车身线条风格', 'satisfied_second': 13, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.07'}, {'name': '后备箱平整程度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '内饰颜色', 'satisfied_second': 37, 'neutral_second': 1, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.02'}, {'name': '车联网提供的服务', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.76', 'neutra_percentage': '-'}, {'name': '尾翼/扰流板', 'satisfied_second': 12, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.08'}, {'name': '中控屏设计风格', 'satisfied_second': 133, 'neutral_second': 4, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.01', 'satisfied_percentage': '0.96', 'neutra_percentage': '0.03'}, {'name': '不同情况下的车身稳定性', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '按键标识易读性', 'satisfied_second': 9, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.10'}, {'name': '副驾驶腿部空间', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '换档策略（AT）', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '轮毂', 'satisfied_second': 331, 'neutral_second': 47, 'no_satisfied_second': 28, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.12'}, {'name': '腰线', 'satisfied_second': 2100, 'neutral_second': 112, 'no_satisfied_second': 108, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.05'}, {'name': '噪音控制', 'satisfied_second': 1128, 'neutral_second': 84, 'no_satisfied_second': 216, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.79', 'neutra_percentage': '0.06'}, {'name': '底盘的防锈', 'satisfied_second': 22, 'neutral_second': 0, 'no_satisfied_second': 16, 'no_satisfied_percentage': '0.42', 'satisfied_percentage': '0.58', 'neutra_percentage': '-'}, {'name': '易损件的耐久性', 'satisfied_second': 238, 'neutral_second': 15, 'no_satisfied_second': 103, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.04'}, {'name': '材料和结构', 'satisfied_second': 33, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.92', 'neutra_percentage': '-'}, {'name': '二手车残值', 'satisfied_second': 17, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.94', 'neutra_percentage': '-'}, {'name': '品牌', 'satisfied_second': 214, 'neutral_second': 28, 'no_satisfied_second': 34, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.10'}, {'name': '单色', 'satisfied_second': 226, 'neutral_second': 32, 'no_satisfied_second': 13, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.12'}, {'name': '油箱加满后的续航里程', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '底盘重大故障', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.80', 'satisfied_percentage': '0.20', 'neutra_percentage': '-'}, {'name': 'USB', 'satisfied_second': 33, 'neutral_second': 0, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.21', 'satisfied_percentage': '0.79', 'neutra_percentage': '-'}, {'name': '多媒体播放', 'satisfied_second': 35, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.83', 'neutra_percentage': '-'}, {'name': '天线', 'satisfied_second': 24, 'neutral_second': 1, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.03'}, {'name': '档杆的人机工程（位置、手感）', 'satisfied_second': 208, 'neutral_second': 16, 'no_satisfied_second': 25, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.06'}, {'name': '尾翼', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.38', 'satisfied_percentage': '0.62', 'neutra_percentage': '-'}, {'name': '抓地力', 'satisfied_second': 28, 'neutral_second': 0, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.78', 'neutra_percentage': '-'}, {'name': '外包围', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '人机交互方式及感受', 'satisfied_second': 96, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.97', 'neutra_percentage': '-'}, {'name': '做工工艺', 'satisfied_second': 116, 'neutral_second': 1, 'no_satisfied_second': 13, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.01'}, {'name': '座椅包裹性', 'satisfied_second': 36, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.95', 'neutra_percentage': '-'}, {'name': '市区油耗', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '迎宾灯', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '冷启动难易程度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 9, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '悬架舒适性', 'satisfied_second': 25, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.78', 'neutra_percentage': '-'}, {'name': '第二排空间', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '饰板饰条材料', 'satisfied_second': 14, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.78', 'neutra_percentage': '-'}, {'name': '车内储物空间的个数', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '发动机舱开启与布局', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '四驱系统功能及装备', 'satisfied_second': 8, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.09'}, {'name': '内饰的触觉感受', 'satisfied_second': 37, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '家族化后产品之间的辨识度', 'satisfied_second': 13, 'neutral_second': 8, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.38'}, {'name': '椅背尺寸', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.92', 'satisfied_percentage': '0.08', 'neutra_percentage': '-'}, {'name': '车身比例', 'satisfied_second': 17, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '单色/双色/多色', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '测评参数', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '实用性及便利性', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车辆客观尺寸', 'satisfied_second': 1242, 'neutral_second': 43, 'no_satisfied_second': 82, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.03'}, {'name': '车身形式', 'satisfied_second': 546, 'neutral_second': 45, 'no_satisfied_second': 85, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.07'}, {'name': '家族化涉及的外观细节', 'satisfied_second': 95, 'neutral_second': 12, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.11'}, {'name': '备胎', 'satisfied_second': 19, 'neutral_second': 2, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.32', 'satisfied_percentage': '0.61', 'neutra_percentage': '0.06'}, {'name': '特殊路况的通过性（非铺装路面）', 'satisfied_second': 591, 'neutral_second': 36, 'no_satisfied_second': 80, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.05'}, {'name': '价格', 'satisfied_second': 809, 'neutral_second': 52, 'no_satisfied_second': 46, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.06'}, {'name': '舒适性装备', 'satisfied_second': 1891, 'neutral_second': 59, 'no_satisfied_second': 78, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.93', 'neutra_percentage': '0.03'}, {'name': '悬架类型', 'satisfied_second': 16, 'neutral_second': 0, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.27', 'satisfied_percentage': '0.73', 'neutra_percentage': '-'}, {'name': '储物空间的尺寸', 'satisfied_second': 80, 'neutral_second': 4, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.04'}, {'name': '锁车功能', 'satisfied_second': 7, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.11'}, {'name': '车窗的密封性', 'satisfied_second': 25, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.03'}, {'name': '悬架的滤震效果', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '仪表盘信息易读性', 'satisfied_second': 136, 'neutral_second': 4, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.03'}, {'name': '中控造型', 'satisfied_second': 423, 'neutral_second': 18, 'no_satisfied_second': 43, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.04'}, {'name': '制动时的车身姿态及稳定性', 'satisfied_second': 74, 'neutral_second': 1, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.01'}, {'name': '制动距离', 'satisfied_second': 109, 'neutral_second': 4, 'no_satisfied_second': 49, 'no_satisfied_percentage': '0.30', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.02'}, {'name': '故障率', 'satisfied_second': 18, 'neutral_second': 1, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.37', 'satisfied_percentage': '0.60', 'neutra_percentage': '0.03'}, {'name': '灯光带来的品质感', 'satisfied_second': 9, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.17'}, {'name': '刹车踏板的调校、回馈', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '排气管', 'satisfied_second': 6, 'neutral_second': 2, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.27', 'satisfied_percentage': '0.55', 'neutra_percentage': '0.18'}, {'name': '后悬长度', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '高速油耗', 'satisfied_second': 18, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.05'}, {'name': '阅读灯', 'satisfied_second': 8, 'neutral_second': 1, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.31', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.08'}, {'name': '离合踏板的人机工程（MT）', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '刹车卡钳', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车内气味', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.45', 'satisfied_percentage': '0.55', 'neutra_percentage': '-'}, {'name': '车身颜色', 'satisfied_second': 17, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.10'}, {'name': '发动机燃料形式', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车宽', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '车身的防锈', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.40', 'neutra_percentage': '0.20'}, {'name': '前排腿部空间', 'satisfied_second': 24, 'neutral_second': 1, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.03'}, {'name': '技术来源/品牌', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.25'}, {'name': '眼镜/墨镜盒', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '整车属性', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '接缝大小及视觉感受', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '启动时的发动机声音', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '杯架', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '脱困能力', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '不同季节的动力表现', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车钥匙造型', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '后备箱入口的最低离地距离', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车机屏幕个数及位置', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '交强险', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '石英钟', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '第三排空间', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '初段动力表现', 'satisfied_second': 0, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '1.00'}]
			},
		"car_scend":{
			"title":"指标分类型T3",
			"data_arr": [{'name': '前脸', 'satisfied_second': 538, 'neutral_second': 138, 'no_satisfied_second': 22, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.20'}, {'name': '接近角', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '感知品质', 'satisfied_second': 753, 'neutral_second': 66, 'no_satisfied_second': 81, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.07'}, {'name': '高配', 'satisfied_second': 130, 'neutral_second': 23, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.14'}, {'name': '轮毂尺寸', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.88', 'neutra_percentage': '-'}, {'name': '越野性能', 'satisfied_second': 79, 'neutral_second': 5, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.05'}, {'name': '维修保养花费', 'satisfied_second': 198, 'neutral_second': 17, 'no_satisfied_second': 39, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.07'}, {'name': '性价比', 'satisfied_second': 155, 'neutral_second': 15, 'no_satisfied_second': 16, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.08'}, {'name': '变速箱异响', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.86', 'neutra_percentage': '-'}, {'name': '玻璃异响', 'satisfied_second': 66, 'neutral_second': 7, 'no_satisfied_second': 26, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.07'}, {'name': '怠速时的NVH表现', 'satisfied_second': 35, 'neutral_second': 0, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.36', 'satisfied_percentage': '0.64', 'neutra_percentage': '-'}, {'name': '全景摄像头', 'satisfied_second': 222, 'neutral_second': 6, 'no_satisfied_second': 23, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.02'}, {'name': '空调异响', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '胎噪', 'satisfied_second': 8, 'neutral_second': 1, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.53', 'satisfied_percentage': '0.42', 'neutra_percentage': '0.05'}, {'name': '仪表盘', 'satisfied_second': 256, 'neutral_second': 11, 'no_satisfied_second': 19, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.04'}, {'name': '正前', 'satisfied_second': 118, 'neutral_second': 21, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.14'}, {'name': '车内接打电话的通话质量', 'satisfied_second': 96, 'neutral_second': 9, 'no_satisfied_second': 13, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.08'}, {'name': '行李架', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '合资品牌', 'satisfied_second': 96, 'neutral_second': 6, 'no_satisfied_second': 23, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.05'}, {'name': '涡轮增压', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.28', 'satisfied_percentage': '0.72', 'neutra_percentage': '-'}, {'name': '功率', 'satisfied_second': 4, 'neutral_second': 13, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.21', 'neutra_percentage': '0.68'}, {'name': '关门声的声音品质', 'satisfied_second': 14, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.06'}, {'name': '副驾驶空间', 'satisfied_second': 79, 'neutral_second': 1, 'no_satisfied_second': 41, 'no_satisfied_percentage': '0.34', 'satisfied_percentage': '0.65', 'neutra_percentage': '0.01'}, {'name': '机油滤清耐久性', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': 'OBD', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '油门踏板抖动', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '加冷却液', 'satisfied_second': 2, 'neutral_second': 3, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.29', 'neutra_percentage': '0.43'}, {'name': '中控台整体造型', 'satisfied_second': 16, 'neutral_second': 7, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.27'}, {'name': '怠速噪音', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '离合踏板的位置', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '座椅调节方式', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.78', 'neutra_percentage': '-'}, {'name': '内饰用材气味', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.45', 'satisfied_percentage': '0.55', 'neutra_percentage': '-'}, {'name': '悬架异响', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '车机屏幕显示效果', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '蓝牙电话', 'satisfied_second': 19, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '外后视镜折叠', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.86', 'neutra_percentage': '-'}, {'name': '音响品牌', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': 'LOGO', 'satisfied_second': 68, 'neutral_second': 9, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.11'}, {'name': '刹车盘耐久性', 'satisfied_second': 1, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.25', 'neutra_percentage': '0.25'}, {'name': '碳纤饰条', 'satisfied_second': 46, 'neutral_second': 6, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.02', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.11'}, {'name': '怠速抖动', 'satisfied_second': 15, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.88', 'neutra_percentage': '-'}, {'name': '划痕险', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车载电视', 'satisfied_second': 13, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.06'}, {'name': '方向盘旷量', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '加载/满载动力表现', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.92', 'neutra_percentage': '-'}, {'name': '内饰做工工艺', 'satisfied_second': 10, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.15'}, {'name': '长按按键指向的功能', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '开门方式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '仪表盘上屏幕的位置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '颜色搭配', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.95', 'neutra_percentage': '-'}, {'name': '不同档位爬坡动力表现（MT）', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '按键音', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车道偏离预警系统', 'satisfied_second': 68, 'neutral_second': 0, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.85', 'neutra_percentage': '-'}, {'name': '远程解锁', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '轮胎异响', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '按钮的易读性（照明）', 'satisfied_second': 9, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.10'}, {'name': '设计传达的品质感', 'satisfied_second': 5, 'neutral_second': 4, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.56', 'neutra_percentage': '0.44'}, {'name': '坐姿', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车身钢板', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '续航里程', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '中央差速器锁止功能', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '发动机电子防盗', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '品牌力', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '轮胎抖动', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '百公里加速时间', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '防炫目', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '驾驶员腿部空间', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '座椅对腰部肩部颈部等的支撑', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '主动刹车/主动安全系统', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '按键风格', 'satisfied_second': 7, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.12'}, {'name': '门把手位置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '大灯高度可调', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '雨雪天气', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '颜色', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '速度表', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '非内燃机/新能源', 'satisfied_second': 57, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.03'}, {'name': '雾灯造型', 'satisfied_second': 83, 'neutral_second': 1, 'no_satisfied_second': 19, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.01'}, {'name': '首保的里程和时间', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.37', 'satisfied_percentage': '0.63', 'neutra_percentage': '-'}, {'name': '车身结构', 'satisfied_second': 15, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.94', 'neutra_percentage': '-'}, {'name': '隔音棉及其他降噪设施', 'satisfied_second': 35, 'neutral_second': 3, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.06'}, {'name': '影像辅助（摄像头）', 'satisfied_second': 129, 'neutral_second': 5, 'no_satisfied_second': 43, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.03'}, {'name': '蓝牙', 'satisfied_second': 16, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.89', 'neutra_percentage': '-'}, {'name': '方向盘', 'satisfied_second': 239, 'neutral_second': 4, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.02'}, {'name': '倒车雷达', 'satisfied_second': 3, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.30', 'neutra_percentage': '0.20'}, {'name': '加强油门时的加速表现', 'satisfied_second': 85, 'neutral_second': 6, 'no_satisfied_second': 49, 'no_satisfied_percentage': '0.35', 'satisfied_percentage': '0.61', 'neutra_percentage': '0.04'}, {'name': '车窗尺寸', 'satisfied_second': 43, 'neutral_second': 7, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.12'}, {'name': '手套箱尺寸', 'satisfied_second': 8, 'neutral_second': 1, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.36', 'satisfied_percentage': '0.57', 'neutra_percentage': '0.07'}, {'name': '座椅表面材料', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '超车性能', 'satisfied_second': 165, 'neutral_second': 6, 'no_satisfied_second': 61, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.71', 'neutra_percentage': '0.03'}, {'name': '售后服务', 'satisfied_second': 97, 'neutral_second': 5, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.16', 'satisfied_percentage': '0.80', 'neutra_percentage': '0.04'}, {'name': '外后视镜调节便利性', 'satisfied_second': 113, 'neutral_second': 8, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.80', 'neutra_percentage': '0.06'}, {'name': '电瓶耐久性', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.36', 'satisfied_percentage': '0.64', 'neutra_percentage': '-'}, {'name': '4S店维修配件费用', 'satisfied_second': 70, 'neutral_second': 3, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.74', 'neutra_percentage': '0.03'}, {'name': '开门感受', 'satisfied_second': 104, 'neutral_second': 5, 'no_satisfied_second': 26, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.04'}, {'name': '驾驶员空间', 'satisfied_second': 104, 'neutral_second': 12, 'no_satisfied_second': 24, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.74', 'neutra_percentage': '0.09'}, {'name': '座椅软硬度', 'satisfied_second': 134, 'neutral_second': 4, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.94', 'neutra_percentage': '0.03'}, {'name': '挂档时的入档困难', 'satisfied_second': 79, 'neutral_second': 7, 'no_satisfied_second': 19, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.07'}, {'name': '发动机异响', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '日行灯发光介质', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '汽油滤清耐久性', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.83', 'neutra_percentage': '-'}, {'name': '后排出风口', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.67', 'satisfied_percentage': '0.33', 'neutra_percentage': '-'}, {'name': '喇叭数量', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '内饰饰条', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.83', 'neutra_percentage': '-'}, {'name': '帝豪', 'satisfied_second': 42, 'neutral_second': 8, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.15'}, {'name': '车机屏幕的属性及功能', 'satisfied_second': 213, 'neutral_second': 18, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.02', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.08'}, {'name': '内饰缝线', 'satisfied_second': 11, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.08'}, {'name': '传动比', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '多功能方向盘控制键操作方便性', 'satisfied_second': 40, 'neutral_second': 5, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.10'}, {'name': '换档平顺性', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '缸盖材质', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.60', 'neutra_percentage': '-'}, {'name': '扶手箱尺寸', 'satisfied_second': 68, 'neutral_second': 3, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.04'}, {'name': '离合踏板行程', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '涉水深度', 'satisfied_second': 7, 'neutral_second': 2, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.22'}, {'name': '独立悬架', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '迎宾灯品质感', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '后备箱开启方式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '油门踏板失灵', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '头枕舒适性', 'satisfied_second': 19, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.95', 'neutra_percentage': '-'}, {'name': '信息查询', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '遮阳板', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '内饰材料', 'satisfied_second': 10, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.09'}, {'name': '腰部支撑', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '前桥限滑差速器/差速锁', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '前驱', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '气囊开启故障', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '过弯时的侧倾程度', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 14, 'no_satisfied_percentage': '0.64', 'satisfied_percentage': '0.36', 'neutra_percentage': '-'}, {'name': '前排头部空间', 'satisfied_second': 45, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '木纹饰条', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '后视镜盲区', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.80', 'satisfied_percentage': '0.20', 'neutra_percentage': '-'}, {'name': '提示音', 'satisfied_second': 0, 'neutral_second': 7, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '1.00'}, {'name': '杯架个数', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '制动', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车轮生锈', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '车内储物空间的位置', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '发动机喷油/燃烧技术', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '扶手材质舒适型', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '陡坡缓降', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车机系统稳定性', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '换挡时机', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '胎压监测表', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '后备箱空间', 'satisfied_second': 322, 'neutral_second': 17, 'no_satisfied_second': 38, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.05'}, {'name': '前大灯造型', 'satisfied_second': 373, 'neutral_second': 23, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.06'}, {'name': '变速箱技术类型', 'satisfied_second': 252, 'neutral_second': 26, 'no_satisfied_second': 66, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.08'}, {'name': '停车辅助功能的实用性', 'satisfied_second': 102, 'neutral_second': 4, 'no_satisfied_second': 25, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.03'}, {'name': '转速表', 'satisfied_second': 46, 'neutral_second': 15, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.56', 'neutra_percentage': '0.18'}, {'name': '方向盘跑偏', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '机舱盖打开', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '车内监控', 'satisfied_second': 167, 'neutral_second': 7, 'no_satisfied_second': 39, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.03'}, {'name': '黑色', 'satisfied_second': 226, 'neutral_second': 32, 'no_satisfied_second': 13, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.12'}, {'name': '雨刮异响', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '后门进出的便利性', 'satisfied_second': 18, 'neutral_second': 0, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.49', 'satisfied_percentage': '0.51', 'neutra_percentage': '-'}, {'name': '第二排老板键信息易读性', 'satisfied_second': 192, 'neutral_second': 27, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.80', 'neutra_percentage': '0.11'}, {'name': '点烟器', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '油耗表信息易读性', 'satisfied_second': 136, 'neutral_second': 4, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.03'}, {'name': '前排头部气囊(气帘)', 'satisfied_second': 196, 'neutral_second': 5, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.02'}, {'name': '油门踏板的调校、回馈', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.44', 'satisfied_percentage': '0.56', 'neutra_percentage': '-'}, {'name': '扶手箱储物空间', 'satisfied_second': 16, 'neutral_second': 6, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.64', 'neutra_percentage': '0.24'}, {'name': '电器系统异响', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '刹车踏板的位置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': 'A柱盲区', 'satisfied_second': 60, 'neutral_second': 1, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.01'}, {'name': '离合器抖动异常', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.38', 'satisfied_percentage': '0.62', 'neutra_percentage': '-'}, {'name': '前唇', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '坑洼路面', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车高', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': 'AUX接口', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.33'}, {'name': '驾驶员头部空间', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '空调出风口', 'satisfied_second': 244, 'neutral_second': 32, 'no_satisfied_second': 28, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.80', 'neutra_percentage': '0.11'}, {'name': '外观细节', 'satisfied_second': 11, 'neutral_second': 2, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.69', 'neutra_percentage': '0.12'}, {'name': '塑料饰条', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '跑车', 'satisfied_second': 29, 'neutral_second': 2, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.06'}, {'name': '油箱盖打开', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '汽油', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '安全带', 'satisfied_second': 18, 'neutral_second': 3, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.12'}, {'name': '压缩比', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车头视野', 'satisfied_second': 22, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.88', 'neutra_percentage': '-'}, {'name': '氙气大灯', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '遥控式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '空气动力学参数', 'satisfied_second': 43, 'neutral_second': 11, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.74', 'neutra_percentage': '0.19'}, {'name': '音响', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.82', 'neutra_percentage': '-'}, {'name': '过弯时的侧滑', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '儿童锁', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '第一排车内储物空间的个数', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': 'LED大灯', 'satisfied_second': 1, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.50'}, {'name': '手套箱异响', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '油门踏板的位置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '后轮悬架类型', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '冷却液渗漏', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '全时四驱', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '第二排车内储物空间的位置', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '后备箱总容积', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.48', 'satisfied_percentage': '0.52', 'neutra_percentage': '-'}, {'name': '月销量', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '高速车身稳定性', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '座椅通风', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '前排出风口位置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '比例放倒', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '制热时散发出的气味', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '制动力分配(EBD/CBC等)', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '皮质饰条', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '中控大屏信息阅读清晰程度', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '扶手的位置', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '内饰整体感受', 'satisfied_second': 1486, 'neutral_second': 67, 'no_satisfied_second': 72, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.04'}, {'name': '最大扭矩转速', 'satisfied_second': 478, 'neutral_second': 51, 'no_satisfied_second': 158, 'no_satisfied_percentage': '0.23', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.07'}, {'name': '正侧', 'satisfied_second': 485, 'neutral_second': 16, 'no_satisfied_second': 14, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.94', 'neutra_percentage': '0.03'}, {'name': '变速箱客观配置', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.90', 'neutra_percentage': '-'}, {'name': '日行灯造型', 'satisfied_second': 23, 'neutral_second': 2, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.06'}, {'name': '发动机漏汽油', 'satisfied_second': 20, 'neutral_second': 4, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.27', 'satisfied_percentage': '0.61', 'neutra_percentage': '0.12'}, {'name': '外观装饰件', 'satisfied_second': 43, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.04'}, {'name': '车身共振异常', 'satisfied_second': 242, 'neutral_second': 6, 'no_satisfied_second': 63, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.02'}, {'name': '换档感受', 'satisfied_second': 22, 'neutral_second': 3, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.63', 'neutra_percentage': '0.09'}, {'name': '顺利驾驶的难易程度', 'satisfied_second': 188, 'neutral_second': 4, 'no_satisfied_second': 28, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.02'}, {'name': '多功能方向盘按键信息易读性', 'satisfied_second': 54, 'neutral_second': 3, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.05'}, {'name': '销量', 'satisfied_second': 44, 'neutral_second': 9, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.16', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.14'}, {'name': '转向精准性', 'satisfied_second': 87, 'neutral_second': 6, 'no_satisfied_second': 46, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.63', 'neutra_percentage': '0.04'}, {'name': '车钥匙及锁系统的功能', 'satisfied_second': 280, 'neutral_second': 10, 'no_satisfied_second': 31, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.03'}, {'name': '火花塞耐久性', 'satisfied_second': 44, 'neutral_second': 5, 'no_satisfied_second': 16, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.68', 'neutra_percentage': '0.08'}, {'name': '设计造型', 'satisfied_second': 18, 'neutral_second': 4, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.18'}, {'name': '对其他的密封性', 'satisfied_second': 25, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.03'}, {'name': '减速带', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.45', 'satisfied_percentage': '0.55', 'neutra_percentage': '-'}, {'name': '油门', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '夜视系统', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.90', 'neutra_percentage': '-'}, {'name': '过弯时的车身姿态及稳定性', 'satisfied_second': 83, 'neutral_second': 2, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.02'}, {'name': '皮带异响', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '分区空调', 'satisfied_second': 50, 'neutral_second': 5, 'no_satisfied_second': 16, 'no_satisfied_percentage': '0.23', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.07'}, {'name': '刹车类型', 'satisfied_second': 7, 'neutral_second': 1, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.38', 'satisfied_percentage': '0.54', 'neutra_percentage': '0.08'}, {'name': 'SD卡', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '换机油', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.82', 'neutra_percentage': '-'}, {'name': '前排阅读灯', 'satisfied_second': 8, 'neutral_second': 1, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.31', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.08'}, {'name': '座椅可调的角度和方式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '后保险杠', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '坡道起步性能', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '鲨鱼鳍', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '后备箱打开', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '油箱容积', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '钥匙孔的位置', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '事故后的车身形变', 'satisfied_second': 29, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.97', 'neutra_percentage': '-'}, {'name': '前大灯透镜组合', 'satisfied_second': 33, 'neutral_second': 2, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.05'}, {'name': '久坐的舒适性', 'satisfied_second': 23, 'neutral_second': 0, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.74', 'neutra_percentage': '-'}, {'name': '低音表现', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '外后视镜电加热', 'satisfied_second': 10, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.15'}, {'name': '刹车辅助(EBA/BAS/BA等)', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车长', 'satisfied_second': 23, 'neutral_second': 3, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.12'}, {'name': '液压支撑杆', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '变速箱漏油', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '外后视镜', 'satisfied_second': 11, 'neutral_second': 12, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.46', 'neutra_percentage': '0.50'}, {'name': '内后视镜尺寸', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '第二排座椅舒适性', 'satisfied_second': 45, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.02', 'satisfied_percentage': '0.98', 'neutra_percentage': '-'}, {'name': '位置', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '造型款式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '最小离地间隙', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.40', 'neutra_percentage': '0.20'}, {'name': '多媒体功能区造型风格', 'satisfied_second': 3, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.25'}, {'name': '防夹', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '正后角度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '防擦条', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '年销量', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '方向盘适应手感设计', 'satisfied_second': 35, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.97', 'neutra_percentage': '-'}, {'name': 'MPV', 'satisfied_second': 3, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.60', 'neutra_percentage': '0.20'}, {'name': '发动机停机', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '内饰塑料件的塑料感', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '加速时的噪音', 'satisfied_second': 23, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.88', 'neutra_percentage': '-'}, {'name': '柴油', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '语音交互', 'satisfied_second': 176, 'neutral_second': 16, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.08'}, {'name': '门把手类型', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车内电源', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '整体放倒', 'satisfied_second': 27, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.93', 'neutra_percentage': '-'}, {'name': '内饰表面材质', 'satisfied_second': 5, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.17'}, {'name': '仪表盘信息阅读清晰程度', 'satisfied_second': 31, 'neutral_second': 4, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.11'}, {'name': '外观灯饰', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '非独立悬架', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '自适应巡航', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '多媒体控制按钮操作方便性', 'satisfied_second': 11, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.21', 'satisfied_percentage': '0.79', 'neutra_percentage': '-'}, {'name': '前大灯发光介质', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '后排头部气囊(气帘)', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '自动驻车功能实用性', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '底盘部件生锈', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '底盘技术来源/品牌', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '碰撞测试成绩', 'satisfied_second': 109, 'neutral_second': 3, 'no_satisfied_second': 22, 'no_satisfied_percentage': '0.16', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.02'}, {'name': '车辆内部空间', 'satisfied_second': 1242, 'neutral_second': 43, 'no_satisfied_second': 82, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.03'}, {'name': '尾灯', 'satisfied_second': 422, 'neutral_second': 46, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.09'}, {'name': '后驱', 'satisfied_second': 0, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '-', 'neutra_percentage': '0.50'}, {'name': '转向比', 'satisfied_second': 268, 'neutral_second': 12, 'no_satisfied_second': 37, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.04'}, {'name': '前格栅', 'satisfied_second': 330, 'neutral_second': 33, 'no_satisfied_second': 17, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.09'}, {'name': '轴距', 'satisfied_second': 78, 'neutral_second': 8, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.09'}, {'name': '轮胎尺寸', 'satisfied_second': 17, 'neutral_second': 3, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.14'}, {'name': '刹车片耐久性', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 15, 'no_satisfied_percentage': '0.43', 'satisfied_percentage': '0.57', 'neutra_percentage': '-'}, {'name': '保险花费', 'satisfied_second': 55, 'neutral_second': 6, 'no_satisfied_second': 15, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.72', 'neutra_percentage': '0.08'}, {'name': '变速箱油耐久性', 'satisfied_second': 7, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.36', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.14'}, {'name': '倒车影像实用性', 'satisfied_second': 218, 'neutral_second': 11, 'no_satisfied_second': 25, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.04'}, {'name': '远程推送导航', 'satisfied_second': 294, 'neutral_second': 19, 'no_satisfied_second': 69, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.05'}, {'name': '进口车', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.90', 'neutra_percentage': '-'}, {'name': '制冷效果', 'satisfied_second': 321, 'neutral_second': 46, 'no_satisfied_second': 104, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.68', 'neutra_percentage': '0.10'}, {'name': '车机屏幕尺寸', 'satisfied_second': 430, 'neutral_second': 29, 'no_satisfied_second': 54, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.06'}, {'name': '空调滤芯耐久性', 'satisfied_second': 21, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.16', 'satisfied_percentage': '0.84', 'neutra_percentage': '-'}, {'name': '前悬架类型', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.38', 'satisfied_percentage': '0.62', 'neutra_percentage': '-'}, {'name': '口碑', 'satisfied_second': 38, 'neutral_second': 3, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.06'}, {'name': '沃德/其他', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.60', 'neutra_percentage': '-'}, {'name': '防撞钢梁', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '零部件', 'satisfied_second': 86, 'neutral_second': 7, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.06'}, {'name': '坐姿视野', 'satisfied_second': 55, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.93', 'neutra_percentage': '0.02'}, {'name': '正时皮带耐久性', 'satisfied_second': 46, 'neutral_second': 1, 'no_satisfied_second': 28, 'no_satisfied_percentage': '0.37', 'satisfied_percentage': '0.61', 'neutra_percentage': '0.01'}, {'name': '交付质量', 'satisfied_second': 102, 'neutral_second': 2, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.02'}, {'name': '座椅空间', 'satisfied_second': 65, 'neutral_second': 1, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.01'}, {'name': '灯泡耐久性', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '三厢车', 'satisfied_second': 23, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.08'}, {'name': '自行维修的便利性', 'satisfied_second': 12, 'neutral_second': 2, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.30', 'satisfied_percentage': '0.60', 'neutra_percentage': '0.10'}, {'name': '档杆的位置', 'satisfied_second': 9, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.09'}, {'name': '前排空间', 'satisfied_second': 163, 'neutral_second': 37, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.18'}, {'name': '后排座椅放倒的方式和组合', 'satisfied_second': 59, 'neutral_second': 2, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.03'}, {'name': '空调出风口方向调整信息易读性', 'satisfied_second': 29, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.97', 'neutra_percentage': '-'}, {'name': '车门异响', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '档杆的吸入感', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '按键设计的易用性', 'satisfied_second': 174, 'neutral_second': 4, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.02'}, {'name': '扶手杯托（杯坐）', 'satisfied_second': 73, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.01'}, {'name': '后驻车雷达', 'satisfied_second': 47, 'neutral_second': 2, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.04'}, {'name': '坐垫尺寸', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '门把手装饰', 'satisfied_second': 46, 'neutral_second': 5, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.09'}, {'name': '变速箱品牌', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '驱动形式', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '瞬时油耗', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '远程启动', 'satisfied_second': 0, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '1.00'}, {'name': '方向盘位置可调', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.33'}, {'name': '整车整备质量', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '儿童座椅接口', 'satisfied_second': 27, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '前悬长度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '卤素大灯', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '手势控制', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车载冰箱', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '信息资讯', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.80', 'satisfied_percentage': '0.20', 'neutra_percentage': '-'}, {'name': '轮距', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '塑料件，塑胶件老化', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '制动时的直线行驶性能', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '非全尺寸备胎', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车门内板扶手位置', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '后备箱入库的最低离地距离', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '前排中央扶手位置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '全景影像实用性', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '防倾杆', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '仪表盘异响', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '石英钟造型', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '轮毂颜色搭配', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '手动空调', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车身做工工艺', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '服务态度', 'satisfied_second': 1382, 'neutral_second': 120, 'no_satisfied_second': 173, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.07'}, {'name': '前排座椅舒适性', 'satisfied_second': 563, 'neutral_second': 11, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.02'}, {'name': '腰线造型', 'satisfied_second': 1841, 'neutral_second': 104, 'no_satisfied_second': 94, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.05'}, {'name': '正后', 'satisfied_second': 354, 'neutral_second': 25, 'no_satisfied_second': 18, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.06'}, {'name': '外观整体感受', 'satisfied_second': 2554, 'neutral_second': 191, 'no_satisfied_second': 107, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.07'}, {'name': '加速感受', 'satisfied_second': 508, 'neutral_second': 77, 'no_satisfied_second': 138, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.11'}, {'name': '刹车异响', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车漆（车身表面材料）', 'satisfied_second': 79, 'neutral_second': 9, 'no_satisfied_second': 15, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.09'}, {'name': '内饰氛围灯', 'satisfied_second': 63, 'neutral_second': 4, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.05'}, {'name': '底盘调校感受', 'satisfied_second': 136, 'neutral_second': 2, 'no_satisfied_second': 25, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.01'}, {'name': '触摸屏反应速度', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '北京奔驰', 'satisfied_second': 452, 'neutral_second': 73, 'no_satisfied_second': 47, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.79', 'neutra_percentage': '0.13'}, {'name': '发动机舱布局的整齐程度', 'satisfied_second': 139, 'neutral_second': 9, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.90', 'neutra_percentage': '0.06'}, {'name': '低配', 'satisfied_second': 37, 'neutral_second': 1, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.79', 'neutra_percentage': '0.02'}, {'name': '音响效果', 'satisfied_second': 28, 'neutral_second': 2, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.76', 'neutra_percentage': '0.05'}, {'name': '刹车失灵', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.75', 'satisfied_percentage': '0.25', 'neutra_percentage': '-'}, {'name': '雨刷调节便利性', 'satisfied_second': 10, 'neutral_second': 3, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.41', 'satisfied_percentage': '0.45', 'neutra_percentage': '0.14'}, {'name': '轮胎品牌', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车身稳定控制(ESC/ESP/DSC等)', 'satisfied_second': 172, 'neutral_second': 0, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.94', 'neutra_percentage': '-'}, {'name': '喇叭声', 'satisfied_second': 10, 'neutral_second': 2, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.56', 'neutra_percentage': '0.11'}, {'name': '示宽灯', 'satisfied_second': 9, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.17'}, {'name': '面包车', 'satisfied_second': 9, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.08'}, {'name': '悬架软硬程度', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.19', 'satisfied_percentage': '0.81', 'neutra_percentage': '-'}, {'name': '按键式交互', 'satisfied_second': 268, 'neutral_second': 24, 'no_satisfied_second': 33, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.82', 'neutra_percentage': '0.07'}, {'name': 'ABS防抱死', 'satisfied_second': 19, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.04'}, {'name': '侧裙', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车门的密封性', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.44', 'satisfied_percentage': '0.56', 'neutra_percentage': '-'}, {'name': '离合器异响', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '座椅调节便利性', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '发动机技术来源/品牌', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.89', 'neutra_percentage': '-'}, {'name': '自动空调', 'satisfied_second': 28, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.97', 'neutra_percentage': '-'}, {'name': '雷达系统', 'satisfied_second': 5, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.71', 'neutra_percentage': '0.14'}, {'name': '掉漆生锈', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.40', 'neutra_percentage': '0.20'}, {'name': '拉钩', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '轮眉', 'satisfied_second': 3, 'neutral_second': 3, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.50'}, {'name': '车身线条风格', 'satisfied_second': 13, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.07'}, {'name': '内饰颜色', 'satisfied_second': 37, 'neutral_second': 1, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.02'}, {'name': '顶棚强度', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.40', 'satisfied_percentage': '0.60', 'neutra_percentage': '-'}, {'name': '尾翼/扰流板', 'satisfied_second': 12, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.08'}, {'name': '自动驻车/上坡辅助', 'satisfied_second': 27, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.93', 'neutra_percentage': '-'}, {'name': '车联网提供的服务', 'satisfied_second': 11, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '支撑机盖的机构', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '轮毂幅数（含单双条幅）', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': 'carplay', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '座椅可调节角度', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '雨刮片耐久性', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '副驾驶腿部空间', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '嵌入式', 'satisfied_second': 0, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '1.00'}, {'name': '轮毂', 'satisfied_second': 268, 'neutral_second': 42, 'no_satisfied_second': 19, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.13'}, {'name': '轿车', 'satisfied_second': 350, 'neutral_second': 23, 'no_satisfied_second': 49, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.05'}, {'name': '排量', 'satisfied_second': 76, 'neutral_second': 3, 'no_satisfied_second': 24, 'no_satisfied_percentage': '0.23', 'satisfied_percentage': '0.74', 'neutra_percentage': '0.03'}, {'name': '离去角', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '噪音控制', 'satisfied_second': 872, 'neutral_second': 41, 'no_satisfied_second': 141, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.04'}, {'name': '补胎胶', 'satisfied_second': 18, 'neutral_second': 2, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.31', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.07'}, {'name': '腰线', 'satisfied_second': 259, 'neutral_second': 8, 'no_satisfied_second': 14, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.03'}, {'name': '发动机机油耐久性', 'satisfied_second': 77, 'neutral_second': 5, 'no_satisfied_second': 36, 'no_satisfied_percentage': '0.31', 'satisfied_percentage': '0.65', 'neutra_percentage': '0.04'}, {'name': '二手车残值', 'satisfied_second': 17, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.06', 'satisfied_percentage': '0.94', 'neutra_percentage': '-'}, {'name': '定速巡航', 'satisfied_second': 38, 'neutral_second': 1, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.15', 'satisfied_percentage': '0.83', 'neutra_percentage': '0.02'}, {'name': '车漆易修复性', 'satisfied_second': 21, 'neutral_second': 2, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.30', 'satisfied_percentage': '0.64', 'neutra_percentage': '0.06'}, {'name': '油箱加满后的续航里程', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '路躁', 'satisfied_second': 154, 'neutral_second': 30, 'no_satisfied_second': 36, 'no_satisfied_percentage': '0.16', 'satisfied_percentage': '0.70', 'neutra_percentage': '0.14'}, {'name': '车门储物空间', 'satisfied_second': 42, 'neutral_second': 2, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.08', 'satisfied_percentage': '0.88', 'neutra_percentage': '0.04'}, {'name': '发动机冷却液耐久性', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '自主品牌', 'satisfied_second': 109, 'neutral_second': 22, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.16'}, {'name': '一键启动', 'satisfied_second': 67, 'neutral_second': 3, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.04'}, {'name': 'USB', 'satisfied_second': 33, 'neutral_second': 0, 'no_satisfied_second': 9, 'no_satisfied_percentage': '0.21', 'satisfied_percentage': '0.79', 'neutra_percentage': '-'}, {'name': '垫片耐久性', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.88', 'neutra_percentage': '-'}, {'name': '多媒体播放', 'satisfied_second': 35, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.83', 'neutra_percentage': '-'}, {'name': '胎压监测装置', 'satisfied_second': 52, 'neutral_second': 1, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.02'}, {'name': '天线', 'satisfied_second': 15, 'neutral_second': 1, 'no_satisfied_second': 6, 'no_satisfied_percentage': '0.27', 'satisfied_percentage': '0.68', 'neutra_percentage': '0.05'}, {'name': '尾翼', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.38', 'satisfied_percentage': '0.62', 'neutra_percentage': '-'}, {'name': '抓地力', 'satisfied_second': 28, 'neutral_second': 0, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.78', 'neutra_percentage': '-'}, {'name': '底盘稳定性', 'satisfied_second': 320, 'neutral_second': 9, 'no_satisfied_second': 15, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.93', 'neutra_percentage': '0.03'}, {'name': '转向灯', 'satisfied_second': 24, 'neutral_second': 2, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.71', 'neutra_percentage': '0.06'}, {'name': '前排侧气囊', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '空调功能引起的噪音', 'satisfied_second': 1, 'neutral_second': 1, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.71', 'satisfied_percentage': '0.14', 'neutra_percentage': '0.14'}, {'name': '风噪', 'satisfied_second': 8, 'neutral_second': 8, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.44', 'neutra_percentage': '0.44'}, {'name': '中控锁', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.71', 'neutra_percentage': '-'}, {'name': '人机交互方式及感受', 'satisfied_second': 96, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.03', 'satisfied_percentage': '0.97', 'neutra_percentage': '-'}, {'name': '发动机抖动异常', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.76', 'neutra_percentage': '-'}, {'name': '雷达实用性', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '排挡', 'satisfied_second': 62, 'neutral_second': 3, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.07', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.04'}, {'name': '轮毂形状/类型', 'satisfied_second': 55, 'neutral_second': 5, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.12', 'satisfied_percentage': '0.81', 'neutra_percentage': '0.07'}, {'name': '做工工艺', 'satisfied_second': 116, 'neutral_second': 1, 'no_satisfied_second': 13, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.89', 'neutra_percentage': '0.01'}, {'name': '灯光效果', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '档杆的人机工程（位置、手感）', 'satisfied_second': 58, 'neutral_second': 5, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.92', 'neutra_percentage': '0.08'}, {'name': '座椅包裹性', 'satisfied_second': 36, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.95', 'neutra_percentage': '-'}, {'name': '个数', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '卡槽', 'satisfied_second': 41, 'neutral_second': 1, 'no_satisfied_second': 20, 'no_satisfied_percentage': '0.32', 'satisfied_percentage': '0.66', 'neutra_percentage': '0.02'}, {'name': '市区油耗', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '迎宾灯', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '冷启动难易程度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 9, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '天窗尺寸', 'satisfied_second': 21, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.04'}, {'name': '后桥限滑差速器/差速锁', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '炮筒式', 'satisfied_second': 4, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.17'}, {'name': '自动大灯', 'satisfied_second': 3, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.75', 'neutra_percentage': '0.25'}, {'name': '过弯时的甩尾现象', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '销量爬升', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '悬架舒适性', 'satisfied_second': 25, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.22', 'satisfied_percentage': '0.78', 'neutra_percentage': '-'}, {'name': '第二排空间', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '饰板饰条材料', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.43', 'satisfied_percentage': '0.57', 'neutra_percentage': '-'}, {'name': '全尺寸备胎', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '发动机舱开启与布局', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '分时四驱', 'satisfied_second': 8, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.09'}, {'name': '驾驶涉及的部位的触觉感受', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '家族化后产品之间的辨识度', 'satisfied_second': 13, 'neutral_second': 8, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.38'}, {'name': '方向盘抖动异常', 'satisfied_second': 11, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '安全带未系提示', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '椅背尺寸', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.92', 'satisfied_percentage': '0.08', 'neutra_percentage': '-'}, {'name': '气缸数', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车身比例', 'satisfied_second': 17, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '内饰的触觉感受', 'satisfied_second': 27, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车logo', 'satisfied_second': 0, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '1.00'}, {'name': '车机屏幕位置', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '造型设计', 'satisfied_second': 25, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '大灯清洗装置', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '实用性及便利性', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '多色', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '按键灯光颜色', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '刹车踏板的旷量', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '实际油耗', 'satisfied_second': 347, 'neutral_second': 18, 'no_satisfied_second': 34, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.05'}, {'name': '家族化涉及的外观细节', 'satisfied_second': 95, 'neutral_second': 12, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.11'}, {'name': 'SUV', 'satisfied_second': 126, 'neutral_second': 16, 'no_satisfied_second': 30, 'no_satisfied_percentage': '0.17', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.09'}, {'name': '中配', 'satisfied_second': 12, 'neutral_second': 2, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.26', 'satisfied_percentage': '0.63', 'neutra_percentage': '0.11'}, {'name': '特殊路况的通过性（非铺装路面）', 'satisfied_second': 591, 'neutral_second': 36, 'no_satisfied_second': 80, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.84', 'neutra_percentage': '0.05'}, {'name': '价格', 'satisfied_second': 654, 'neutral_second': 37, 'no_satisfied_second': 30, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.05'}, {'name': '舒适性装备', 'satisfied_second': 1891, 'neutral_second': 59, 'no_satisfied_second': 78, 'no_satisfied_percentage': '0.04', 'satisfied_percentage': '0.93', 'neutra_percentage': '0.03'}, {'name': '空气滤芯耐久性', 'satisfied_second': 17, 'neutral_second': 1, 'no_satisfied_second': 4, 'no_satisfied_percentage': '0.18', 'satisfied_percentage': '0.77', 'neutra_percentage': '0.05'}, {'name': '后轮随动转向', 'satisfied_second': 14, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.93', 'neutra_percentage': '0.07'}, {'name': '前大灯亮度', 'satisfied_second': 12, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.37', 'satisfied_percentage': '0.63', 'neutra_percentage': '-'}, {'name': '锁车功能', 'satisfied_second': 7, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.78', 'neutra_percentage': '0.11'}, {'name': '座椅加热', 'satisfied_second': 28, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '主动安全配置', 'satisfied_second': 2174, 'neutral_second': 6, 'no_satisfied_second': 30, 'no_satisfied_percentage': '0.01', 'satisfied_percentage': '0.98', 'neutra_percentage': '0.00'}, {'name': '中控造型', 'satisfied_second': 423, 'neutral_second': 18, 'no_satisfied_second': 43, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.87', 'neutra_percentage': '0.04'}, {'name': '制动时的车身姿态及稳定性', 'satisfied_second': 73, 'neutral_second': 1, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.13', 'satisfied_percentage': '0.86', 'neutra_percentage': '0.01'}, {'name': '离合结合点位置', 'satisfied_second': 47, 'neutral_second': 12, 'no_satisfied_second': 26, 'no_satisfied_percentage': '0.31', 'satisfied_percentage': '0.55', 'neutra_percentage': '0.14'}, {'name': '制动距离', 'satisfied_second': 109, 'neutral_second': 4, 'no_satisfied_second': 49, 'no_satisfied_percentage': '0.30', 'satisfied_percentage': '0.67', 'neutra_percentage': '0.02'}, {'name': '故障警示', 'satisfied_second': 23, 'neutral_second': 1, 'no_satisfied_second': 21, 'no_satisfied_percentage': '0.47', 'satisfied_percentage': '0.51', 'neutra_percentage': '0.02'}, {'name': '山路路况', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.91', 'neutra_percentage': '-'}, {'name': '发动机噪音', 'satisfied_second': 28, 'neutral_second': 1, 'no_satisfied_second': 12, 'no_satisfied_percentage': '0.29', 'satisfied_percentage': '0.68', 'neutra_percentage': '0.02'}, {'name': '制动力', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '故障率', 'satisfied_second': 18, 'neutral_second': 1, 'no_satisfied_second': 11, 'no_satisfied_percentage': '0.37', 'satisfied_percentage': '0.60', 'neutra_percentage': '0.03'}, {'name': '内饰接缝缝隙大小', 'satisfied_second': 43, 'neutral_second': 3, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.02', 'satisfied_percentage': '0.91', 'neutra_percentage': '0.06'}, {'name': '刹车踏板的调校、回馈', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '加玻璃水', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.11', 'satisfied_percentage': '0.89', 'neutra_percentage': '-'}, {'name': '排气管', 'satisfied_second': 6, 'neutral_second': 2, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.60', 'neutra_percentage': '0.20'}, {'name': '后悬长度', 'satisfied_second': 9, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '高速油耗', 'satisfied_second': 18, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.95', 'neutra_percentage': '0.05'}, {'name': '两厢车', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '软管老化', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.33', 'neutra_percentage': '0.17'}, {'name': '中控材料', 'satisfied_second': 28, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.10', 'satisfied_percentage': '0.90', 'neutra_percentage': '-'}, {'name': '刹车卡钳', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '收音机信号', 'satisfied_second': 11, 'neutral_second': 0, 'no_satisfied_second': 10, 'no_satisfied_percentage': '0.48', 'satisfied_percentage': '0.52', 'neutra_percentage': '-'}, {'name': '中控台异响', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.50', 'satisfied_percentage': '0.50', 'neutra_percentage': '-'}, {'name': '扭矩', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.14', 'satisfied_percentage': '0.86', 'neutra_percentage': '-'}, {'name': '前驻车雷达', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '车身颜色', 'satisfied_second': 17, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.05', 'satisfied_percentage': '0.85', 'neutra_percentage': '0.10'}, {'name': '车宽', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '缸体材质', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 5, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '车门抖动异常', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '前排腿部空间', 'satisfied_second': 24, 'neutral_second': 1, 'no_satisfied_second': 8, 'no_satisfied_percentage': '0.24', 'satisfied_percentage': '0.73', 'neutra_percentage': '0.03'}, {'name': 'usb映射', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.75', 'neutra_percentage': '-'}, {'name': '技术来源/品牌', 'satisfied_second': 2, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.25', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.25'}, {'name': '不计免赔', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '眼镜/墨镜盒', 'satisfied_second': 8, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.20', 'satisfied_percentage': '0.80', 'neutra_percentage': '-'}, {'name': '储物空间的尺寸', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '方向盘异响', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '接缝大小及视觉感受', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '第二排扶手杯托（杯坐）', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '启动时的发动机声音', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.33', 'satisfied_percentage': '0.67', 'neutra_percentage': '-'}, {'name': '后排阅读灯', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '杯架', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '0.30', 'satisfied_percentage': '0.70', 'neutra_percentage': '-'}, {'name': '脱困能力', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '进气方式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '悬浮式', 'satisfied_second': 133, 'neutral_second': 3, 'no_satisfied_second': 2, 'no_satisfied_percentage': '0.01', 'satisfied_percentage': '0.96', 'neutra_percentage': '0.02'}, {'name': '外观造型', 'satisfied_second': 5, 'neutral_second': 3, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.62', 'neutra_percentage': '0.38'}, {'name': '并线辅助', 'satisfied_second': 41, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '镀铬', 'satisfied_second': 10, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '0.09', 'satisfied_percentage': '0.91', 'neutra_percentage': '-'}, {'name': '时速信息易读性', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '亮度', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '敞篷车', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '夏天的动力表现', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '牵引力控制(ASR/TCS/TRC等)', 'satisfied_second': 36, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车钥匙造型', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '座椅位置', 'satisfied_second': 1, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '0.50', 'neutra_percentage': '0.50'}, {'name': '激光大灯', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '乘坐舒适性', 'satisfied_second': 14, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '钥匙启动', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车辆客观尺寸', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '双色', 'satisfied_second': 4, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '交强险', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '感应式', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '尾灯发光介质', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '车漆褪色', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': '1.00', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '内后视镜调节便利性', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '金属饰条', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '1.00', 'neutra_percentage': '-'}, {'name': '横摆', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '第三排空间', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '-'}, {'name': '初段动力表现', 'satisfied_second': 0, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': '-', 'satisfied_percentage': '-', 'neutra_percentage': '1.00'}]
		},
		"zhu_data":{
		    "title":"绅宝D50-安全T2指标提及率分布",
		    "zhu_data_m":{
		      "x_data":{
		        "text":"T2指标",
		        "arr":['油耗表现', '前脸', '感知品质', '越野性能', '维修保养花费', '车联网/手机车机互联', '操作舒适性（非驾驶行为的）', '正前', '动力系统获奖情况', '续航里程', '弯道表现', '副驾驶空间', '中控台整体造型', 'Logo设计', '非内燃机/新能源', '车价', '停车便利性', '二手车保值率', '内饰细节', '车机屏幕的属性及功能', '视野舒适性', '选材/用料', '售后服务', '制动', '发动机启动/熄火', '驾驶员空间', '内饰装饰件', '被动安全', '外观细节', '家族化表达', '通过性', '仪表盘上的屏幕', '车内实用性配件', '车身稳定性', '油门-离合踏板', '音响', '温度舒适性', '不同情况下的动力表现', '人机工程舒适性', '便利性装备', '内饰整体感受', '维修便利性', '正侧', '变速箱客观配置', '加速表现及感受', '外观装饰件（“有无”影响）', '驾驶视野盲区', '顺利驾驶的难易程度', '其他外部设备连接', '普通故障', '销量', '上下车便利性', '车钥匙及锁系统的功能', '第二排座椅舒适性', '外观装饰件', '使用中的安全性', '正后角度', '转向性能', 'NVH舒适性', '耐久性', '保险花费', '口碑', '奔驰', '零部件', '听觉品质', '交付质量', '前排空间', '空间可变性', '正侧角度', '气味舒适性', '吉利', '涉水性', '服务态度', '前排座椅舒适性', '动力客观参数及技术', '正后', '外观整体感受', '抖动和异响', '主动安全', '防盗', '内饰颜色', '接打电话', '必要配置', '触觉品质', '车身线条风格', '品牌', '换档', '底盘舒适性（乘坐）', '人机交互方式及感受', '发动机舱开启与布局', '密封性', '多媒体播放', '做工工艺', '座椅舒适性', '悬架舒适性', '第二排空间', '油液渗漏', '整体感知品质', '车身比例', '实用性及便利性', '装载大件物品', '车辆客观尺寸', '车身形式', '影响安全或正常驾驶的故障', '舒适性装备', '功能的易读、易理解、易用性', '内部储物', '中控造型', '故障率', '灯光带来的品质感', '脱困能力', '车身颜色', '操控客观参数及配置', '车钥匙造型', '车机系统', '第三排空间（第三排）']
		      },
		      "y_data":[429, 698, 900, 91, 367, 406, 291, 151, 5, 20, 118, 125, 26, 1, 64, 1133, 402, 18, 1165, 758, 81, 157, 122, 267, 92, 220, 70, 534, 4457, 132, 712, 128, 619, 509, 101, 54, 107, 20, 9, 27, 1625, 81, 515, 359, 1096, 113, 283, 242, 70, 10, 70, 37, 331, 188, 17, 42, 1, 510, 1535, 442, 77, 50, 572, 113, 16, 111, 288, 99, 9, 12, 55, 9, 1675, 695, 947, 397, 2852, 501, 3007, 213, 317, 137, 7, 172, 15, 276, 298, 50, 644, 161, 38, 79, 207, 99, 32, 4, 0, 9, 17, 4, 403, 1493, 676, 38, 2057, 688, 233, 484, 30, 14, 49, 20, 4, 1, 0, 0]
		    }
		},
		"bing_data":{
			"text":"绅宝D50安全指标分布",
			"tata_x":['视频广告', '百度', '谷歌', '必应', '其他'],
			"data_message": [{"value": 6,"name": "不满意249",},{"value": 93,"name": "满意3785"},{"value": 1,"name": "中立45"}]
		  },
		"word_loud":[
				{
		            "name": "动力强低电耗重安全 名爵EZS三电系统技术解析",
					"value": 14,
					"age":15
		        },
		        
		        {
		            "name": "兴瑞科技：不贪图做大、稳健发展 深耕智能终端和汽车电子",
					"value": 14,
					"age":15
		        },
		        {
		            "name": "同样是旗舰，为何7系降价20万卖不动，而S级加价20万买不到？",
					"value": 14,
					"age":15
		        },
		        {
		            "name": "销量稳优惠少 汉兰达为什么能成7座SUV标杆",
		            "value": 14
		        },
		        {
		            "name": "奔驰全新GLE到店实拍 外观比宝马X5威武",
		            "value": 14
				},
				{
		            "name": "斯巴鲁召回部分森林人、XV、翼豹 安全系统可能失效",
					"value": 14,
					"age":15
				},
				{
		            "name": "新款MINI CLUBMAN实车曝光 换装全新尾灯组",
		            "value": 14
				},
				{
		            "name": "福特任命亚马逊前高管斯通为新任CFO",
		            "value": 14
				},
				{
		            "name": "新零售被长安汽车玩得溜 “车和美”首家加盟店重庆开业",
		            "value": 14
				},
				{
		            "name": "超42万辆小汽车被召回！涉及多个品牌，快看有没有你的爱车？",
		            "value": 14
				},
				{
		            "name": "保时捷召回部分718、911等车型 共计728辆",
		            "value": 14
		        },
				{
		            "name": "保时捷召回部分718、911等车型 共计728辆",
		            "value": 14
				},
				{
		            "name": "新零售被长安汽车玩得溜 “车和美”首家加盟店重庆开业",
		            "value": 14
				},
				{
		            "name": "福特任命亚马逊前高管斯通为新任CFO",
		            "value": 14
				},
		        
		],
		"front_post_data":{
			"more":"http:www.baidu.com",
			"arr":[
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/c57f9eee9e421107a/77006362-1.html",
			  "text":"不选贵的，只选对的 18款D50提车、出保、轻改定妆综合作业！",
			  "time":"2018-10-21"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/90efdb46bc173121/78341687-1.html",
			  "text":"爱车讲堂，冬季服务月",
			  "time":"2018-12-27"
			},
				{
                    "url":"https://club.autohome.com.cn/bbs/thread/ebf5d85b740f2c71/77316542-1.html",
                    "text":"千年水乡~“三河古镇”！",
                    "time":"2018-11-05"
                },
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/c1b7a217793ff53c/77299482-1.html",
			  "text":"人·车·生活，展现我的爱车之道 爱护“家人”",
			  "time":"2018-11-04"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/1a2136054993843a/78265567-1.html",
			  "text":"拥有爱车 养护爱车 。 爱车大讲堂开课啦！",
			  "time":"2018-12-23"
			}
		]
		},
		"negative_post_data":{
		   "more":"http:www.baidu.com",
		   "arr":[
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/8e14db16a9896063/75170584-1.html",
			  "text":"D50漏水了副驾驶都是水",
			  "time":"2018-12-07"
			},
			{
			  "url":"ttps://club.autohome.com.cn/bbs/thread/50f20f4fd1a82380/77952087-1.html",
			  "text":"今天发现副驾驶漏水了，你们有没有这种现象？之前没太在意",
			  "time":"2018-12-07"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/b991089c7a245716/77649722-1.html",
			  "text":"从买了车子天天进修理厂，刚开始左前轮异响",
			  "time":"2018-11-22"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/65fb0419e7404635/77707630-1.html",
			  "text":"车子打不着火了",
			  "time":"2018-11-25"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/7a5ef212993db7b0/76879354-1.html",
			  "text":"14款绅宝D50行驶中断油是什么原因。",
			  "time":"2018-10-15"
			}
		]
		}
    }
// 用户促销数据
var price_config = {
	"user_map":{
		"show_price":{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"65","name":"新疆","cp":[84.9023,41.748],"childNum":18},"geometry":{"type":"Polygon","coordinates":[[[96.416,42.7588],[96.416,42.7148],[95.9766,42.4951],[96.0645,42.3193],[96.2402,42.2314],[95.9766,41.9238],[95.2734,41.6162],[95.1855,41.792],[94.5703,41.4844],[94.043,41.0889],[93.8672,40.6934],[93.0762,40.6494],[92.6367,39.6387],[92.373,39.3311],[92.373,39.1113],[92.373,39.0234],[90.1758,38.4961],[90.3516,38.2324],[90.6152,38.3203],[90.5273,37.8369],[91.0547,37.4414],[91.3184,37.0898],[90.7031,36.7822],[90.791,36.6064],[91.0547,36.5186],[91.0547,36.0791],[90.8789,36.0352],[90,36.2549],[89.9121,36.0791],[89.7363,36.0791],[89.209,36.2988],[88.7695,36.3428],[88.5938,36.4746],[87.3633,36.4307],[86.2207,36.167],[86.1328,35.8594],[85.6055,35.6836],[85.0781,35.7275],[84.1992,35.376],[83.1445,35.4199],[82.8809,35.6836],[82.4414,35.7275],[82.002,35.332],[81.6504,35.2441],[80.4199,35.4199],[80.2441,35.2881],[80.332,35.1563],[80.2441,35.2002],[79.8926,34.8047],[79.8047,34.4971],[79.1016,34.4531],[79.0137,34.3213],[78.2227,34.7168],[78.0469,35.2441],[78.0469,35.5078],[77.4316,35.4639],[76.8164,35.6396],[76.5527,35.8594],[76.2012,35.8154],[75.9375,36.0352],[76.0254,36.4746],[75.8496,36.6943],[75.498,36.7383],[75.4102,36.958],[75.0586,37.002],[74.8828,36.9141],[74.7949,37.0459],[74.5313,37.0898],[74.5313,37.2217],[74.8828,37.2217],[75.1465,37.4414],[74.8828,37.5732],[74.9707,37.749],[74.8828,38.4521],[74.3555,38.6719],[74.1797,38.6719],[74.0918,38.54],[73.8281,38.584],[73.7402,38.8477],[73.8281,38.9795],[73.4766,39.375],[73.916,39.5068],[73.916,39.6826],[73.8281,39.7705],[74.0039,40.0342],[74.8828,40.3418],[74.7949,40.5176],[75.2344,40.4297],[75.5859,40.6494],[75.7617,40.2979],[76.377,40.3857],[76.9043,41.001],[77.6074,41.001],[78.1348,41.2207],[78.1348,41.3965],[80.1563,42.0557],[80.2441,42.2754],[80.1563,42.627],[80.2441,42.8467],[80.5078,42.8906],[80.4199,43.0664],[80.7715,43.1982],[80.4199,44.165],[80.4199,44.6045],[79.9805,44.8242],[79.9805,44.9561],[81.7383,45.3955],[82.0898,45.2197],[82.5293,45.2197],[82.2656,45.6592],[83.0566,47.2412],[83.6719,47.0215],[84.7266,47.0215],[84.9023,46.8896],[85.5176,47.0654],[85.6934,47.2852],[85.5176,48.1201],[85.7813,48.4277],[86.5723,48.5596],[86.8359,48.8232],[86.748,48.9551],[86.8359,49.1309],[87.8027,49.1748],[87.8906,48.999],[87.7148,48.9111],[88.0664,48.7354],[87.9785,48.6035],[88.5059,48.3838],[88.6816,48.1641],[89.1211,47.9883],[89.5605,48.0322],[89.7363,47.8564],[90.0879,47.8564],[90.3516,47.6807],[90.5273,47.2412],[90.8789,46.9775],[91.0547,46.582],[90.8789,46.3184],[91.0547,46.0107],[90.7031,45.7471],[90.7031,45.5273],[90.8789,45.2197],[91.582,45.0879],[93.5156,44.9561],[94.7461,44.3408],[95.3613,44.2969],[95.3613,44.0332],[95.5371,43.9014],[95.8887,43.2422],[96.3281,42.9346],[96.416,42.7588]]]}},{"type":"Feature","properties":{"id":"54","name":"西藏","cp":[88.7695,31.6846],"childNum":7},"geometry":{"type":"Polygon","coordinates":[[[79.0137,34.3213],[79.1016,34.4531],[79.8047,34.4971],[79.8926,34.8047],[80.2441,35.2002],[80.332,35.1563],[80.2441,35.2881],[80.4199,35.4199],[81.6504,35.2441],[82.002,35.332],[82.4414,35.7275],[82.8809,35.6836],[83.1445,35.4199],[84.1992,35.376],[85.0781,35.7275],[85.6055,35.6836],[86.1328,35.8594],[86.2207,36.167],[87.3633,36.4307],[88.5938,36.4746],[88.7695,36.3428],[89.209,36.2988],[89.7363,36.0791],[89.3848,36.0352],[89.4727,35.9033],[89.7363,35.7715],[89.7363,35.4199],[89.4727,35.376],[89.4727,35.2441],[89.5605,34.8926],[89.8242,34.8486],[89.7363,34.6729],[89.8242,34.3652],[89.6484,34.0137],[90.0879,33.4863],[90.7031,33.1348],[91.4063,33.1348],[91.9336,32.8271],[92.1973,32.8271],[92.2852,32.7393],[92.9883,32.7393],[93.5156,32.4756],[93.7793,32.5635],[94.1309,32.4316],[94.6582,32.6074],[95.1855,32.4316],[95.0098,32.2998],[95.1855,32.3438],[95.2734,32.2119],[95.3613,32.168],[95.3613,31.9922],[95.4492,31.8164],[95.8008,31.6846],[95.9766,31.8164],[96.1523,31.5967],[96.2402,31.9482],[96.5039,31.7285],[96.8555,31.6846],[96.7676,31.9922],[97.2949,32.0801],[97.3828,32.5635],[97.7344,32.5195],[98.1738,32.3438],[98.4375,31.8604],[98.877,31.4209],[98.6133,31.2012],[98.9648,30.7617],[99.1406,29.2676],[98.9648,29.1357],[98.9648,28.8281],[98.7891,28.8721],[98.7891,29.0039],[98.7012,28.916],[98.6133,28.5205],[98.7891,28.3447],[98.7012,28.2129],[98.3496,28.125],[98.2617,28.3887],[98.1738,28.125],[97.5586,28.5205],[97.2949,28.0811],[97.3828,27.9053],[97.0313,27.7295],[96.5039,28.125],[95.7129,28.2568],[95.3613,28.125],[95.2734,27.9492],[94.2188,27.5537],[93.8672,27.0264],[93.6035,26.9385],[92.1094,26.8506],[92.0215,27.4658],[91.582,27.5537],[91.582,27.9053],[91.4063,28.0371],[91.0547,27.8613],[90.7031,28.0811],[89.8242,28.2129],[89.6484,28.1689],[89.1211,27.5977],[89.1211,27.334],[89.0332,27.2021],[88.7695,27.4219],[88.8574,27.9932],[88.6816,28.125],[88.1543,27.9053],[87.8906,27.9492],[87.7148,27.8174],[87.0996,27.8174],[86.748,28.125],[86.5723,28.125],[86.4844,27.9053],[86.1328,28.125],[86.0449,27.9053],[85.6934,28.3447],[85.6055,28.2568],[85.166,28.3447],[85.166,28.6523],[84.9023,28.5645],[84.4629,28.7402],[84.2871,28.8721],[84.1992,29.2236],[84.1113,29.2676],[83.584,29.1797],[83.2324,29.5752],[82.1777,30.0586],[82.0898,30.3223],[81.3867,30.3662],[81.2109,30.0146],[81.0352,30.2344],[80.0684,30.5859],[79.7168,30.9375],[79.0137,31.0693],[78.75,31.333],[78.8379,31.5967],[78.6621,31.8164],[78.75,31.9043],[78.4863,32.124],[78.3984,32.5195],[78.75,32.6953],[78.9258,32.3438],[79.2773,32.5635],[79.1016,33.1787],[78.6621,33.6621],[78.6621,34.1016],[78.9258,34.1455],[79.0137,34.3213]]]}},{"type":"Feature","properties":{"id":"15","name":"内蒙古","cp":[117.5977,44.3408],"childNum":12},"geometry":{"type":"Polygon","coordinates":[[[97.207,42.8027],[99.4922,42.583],[100.8105,42.6709],[101.7773,42.4951],[102.041,42.2314],[102.7441,42.1436],[103.3594,41.8799],[103.8867,41.792],[104.502,41.8799],[104.502,41.6602],[105.0293,41.5723],[105.7324,41.9238],[107.4023,42.4512],[109.4238,42.4512],[110.3906,42.7588],[111.0059,43.3301],[111.9727,43.6816],[111.9727,43.8135],[111.4453,44.3848],[111.7969,45],[111.9727,45.0879],[113.6426,44.7363],[114.1699,44.9561],[114.5215,45.3955],[115.6641,45.4395],[116.1914,45.7031],[116.2793,45.9668],[116.543,46.2744],[117.334,46.3623],[117.4219,46.582],[117.7734,46.5381],[118.3008,46.7578],[118.7402,46.7139],[118.916,46.7578],[119.0918,46.6699],[119.707,46.626],[119.9707,46.7139],[119.707,47.1973],[118.4766,47.9883],[117.8613,48.0322],[117.334,47.6807],[116.8066,47.9004],[116.1914,47.8564],[115.9277,47.6807],[115.5762,47.9004],[115.4883,48.1641],[115.8398,48.252],[115.8398,48.5596],[116.7188,49.834],[117.7734,49.5264],[118.5645,49.9219],[119.2676,50.0977],[119.3555,50.3174],[119.1797,50.3613],[119.5313,50.7568],[119.5313,50.8887],[119.707,51.0645],[120.1465,51.6797],[120.6738,51.9434],[120.7617,52.1191],[120.7617,52.251],[120.5859,52.3389],[120.6738,52.5146],[120.4102,52.6465],[120.0586,52.6025],[120.0586,52.7344],[120.8496,53.2617],[121.4648,53.3496],[121.8164,53.042],[121.2012,52.5586],[121.6406,52.4268],[121.7285,52.2949],[121.9922,52.2949],[122.168,52.5146],[122.6953,52.251],[122.6074,52.0752],[122.959,51.3281],[123.3105,51.2402],[123.6621,51.3721],[124.3652,51.2842],[124.541,51.3721],[124.8926,51.3721],[125.0684,51.6357],[125.332,51.6357],[126.0352,51.0205],[125.7715,50.7568],[125.7715,50.5371],[125.332,50.1416],[125.1563,49.834],[125.2441,49.1748],[124.8047,49.1309],[124.4531,48.1201],[124.2773,48.5156],[122.4316,47.373],[123.0469,46.7139],[123.3984,46.8896],[123.3984,46.9775],[123.4863,46.9775],[123.5742,46.8457],[123.5742,46.8896],[123.5742,46.6699],[123.0469,46.582],[123.2227,46.2305],[122.7832,46.0107],[122.6953,45.7031],[122.4316,45.8789],[122.2559,45.791],[121.8164,46.0107],[121.7285,45.7471],[121.9043,45.7031],[122.2559,45.2637],[122.0801,44.8682],[122.3438,44.2529],[123.1348,44.4727],[123.4863,43.7256],[123.3105,43.5059],[123.6621,43.374],[123.5742,43.0225],[123.3105,42.9785],[123.1348,42.8027],[122.7832,42.7148],[122.3438,42.8467],[122.3438,42.6709],[121.9922,42.7148],[121.7285,42.4512],[121.4648,42.4951],[120.498,42.0996],[120.1465,41.7041],[119.8828,42.1875],[119.5313,42.3633],[119.3555,42.2754],[119.2676,41.7041],[119.4434,41.6162],[119.2676,41.3086],[118.3887,41.3086],[118.125,41.748],[118.3008,41.792],[118.3008,42.0996],[118.125,42.0557],[117.9492,42.2314],[118.0371,42.4072],[117.7734,42.627],[117.5098,42.583],[117.334,42.4512],[116.8945,42.4072],[116.8066,42.0117],[116.2793,42.0117],[116.0156,41.792],[115.9277,41.9238],[115.2246,41.5723],[114.9609,41.6162],[114.873,42.0996],[114.5215,42.1436],[114.1699,41.792],[114.2578,41.5723],[113.9063,41.4404],[113.9941,41.2207],[113.9063,41.1328],[114.082,40.7373],[114.082,40.5176],[113.8184,40.5176],[113.5547,40.3418],[113.2031,40.3857],[112.7637,40.166],[112.3242,40.2539],[111.9727,39.5947],[111.4453,39.6387],[111.3574,39.4189],[111.0938,39.375],[111.0938,39.5947],[110.6543,39.2871],[110.127,39.4629],[110.2148,39.2871],[109.8633,39.2432],[109.9512,39.1553],[108.9844,38.3203],[109.0723,38.0127],[108.8965,37.9688],[108.8086,38.0127],[108.7207,37.7051],[108.1934,37.6172],[107.666,37.8809],[107.3145,38.1006],[106.7871,38.1885],[106.5234,38.3203],[106.9629,38.9795],[106.7871,39.375],[106.3477,39.2871],[105.9082,38.7158],[105.8203,37.793],[104.3262,37.4414],[103.4473,37.8369],[103.3594,38.0127],[103.5352,38.1445],[103.4473,38.3643],[104.2383,38.9795],[104.0625,39.4189],[103.3594,39.3311],[103.0078,39.1113],[102.4805,39.2432],[101.8652,39.1113],[102.041,38.8916],[101.7773,38.6719],[101.3379,38.7598],[101.25,39.0234],[100.9863,38.9355],[100.8105,39.4189],[100.5469,39.4189],[100.0195,39.7705],[99.4922,39.8584],[100.1074,40.2539],[100.1953,40.6494],[99.9316,41.001],[99.2285,40.8691],[99.0527,40.6934],[98.9648,40.7813],[98.7891,40.6055],[98.5254,40.7373],[98.6133,40.6494],[98.3496,40.5615],[98.3496,40.9131],[97.4707,41.4844],[97.8223,41.6162],[97.8223,41.748],[97.207,42.8027]]]}},{"type":"Feature","properties":{"id":"63","name":"青海","cp":[96.2402,35.4199],"childNum":8},"geometry":{"type":"Polygon","coordinates":[[[89.7363,36.0791],[89.9121,36.0791],[90,36.2549],[90.8789,36.0352],[91.0547,36.0791],[91.0547,36.5186],[90.791,36.6064],[90.7031,36.7822],[91.3184,37.0898],[91.0547,37.4414],[90.5273,37.8369],[90.6152,38.3203],[90.3516,38.2324],[90.1758,38.4961],[92.373,39.0234],[92.373,39.1113],[93.1641,39.1992],[93.1641,38.9795],[93.6914,38.9355],[93.8672,38.7158],[94.3066,38.7598],[94.5703,38.3643],[95.0098,38.4082],[95.4492,38.2764],[95.7129,38.3643],[96.2402,38.1006],[96.416,38.2324],[96.6797,38.1885],[96.6797,38.4521],[97.1191,38.584],[97.0313,39.1992],[98.1738,38.8037],[98.3496,39.0234],[98.6133,38.9355],[98.7891,39.0674],[99.1406,38.9355],[99.8438,38.3643],[100.1953,38.2764],[100.0195,38.4521],[100.1074,38.4961],[100.459,38.2764],[100.7227,38.2324],[101.1621,37.8369],[101.5137,37.8809],[101.7773,37.6172],[101.9531,37.7051],[102.1289,37.4414],[102.5684,37.1777],[102.4805,36.958],[102.6563,36.8262],[102.5684,36.7383],[102.832,36.3428],[103.0078,36.2549],[102.9199,36.0791],[102.9199,35.9033],[102.6563,35.7715],[102.832,35.5957],[102.4805,35.5957],[102.3047,35.4199],[102.3926,35.2002],[101.9531,34.8486],[101.9531,34.6289],[102.2168,34.4092],[102.1289,34.2773],[101.6895,34.1016],[100.9863,34.3652],[100.8105,34.2773],[101.25,33.6621],[101.5137,33.7061],[101.6016,33.5303],[101.7773,33.5303],[101.6895,33.3105],[101.7773,33.2227],[101.6016,33.1348],[101.1621,33.2227],[101.25,32.6953],[100.7227,32.6514],[100.7227,32.5195],[100.3711,32.7393],[100.1074,32.6514],[100.1074,32.8711],[99.8438,33.0029],[99.7559,32.7393],[99.2285,32.915],[99.2285,33.0469],[98.877,33.1787],[98.4375,34.0576],[97.8223,34.1895],[97.6465,34.1016],[97.7344,33.9258],[97.3828,33.8818],[97.4707,33.5742],[97.7344,33.3984],[97.3828,32.8711],[97.4707,32.6953],[97.7344,32.5195],[97.3828,32.5635],[97.2949,32.0801],[96.7676,31.9922],[96.8555,31.6846],[96.5039,31.7285],[96.2402,31.9482],[96.1523,31.5967],[95.9766,31.8164],[95.8008,31.6846],[95.4492,31.8164],[95.3613,31.9922],[95.3613,32.168],[95.2734,32.2119],[95.1855,32.3438],[95.0098,32.2998],[95.1855,32.4316],[94.6582,32.6074],[94.1309,32.4316],[93.7793,32.5635],[93.5156,32.4756],[92.9883,32.7393],[92.2852,32.7393],[92.1973,32.8271],[91.9336,32.8271],[91.4063,33.1348],[90.7031,33.1348],[90.0879,33.4863],[89.6484,34.0137],[89.8242,34.3652],[89.7363,34.6729],[89.8242,34.8486],[89.5605,34.8926],[89.4727,35.2441],[89.4727,35.376],[89.7363,35.4199],[89.7363,35.7715],[89.4727,35.9033],[89.3848,36.0352],[89.7363,36.0791]]]}},{"type":"Feature","properties":{"id":"51","name":"四川","cp":[102.9199,30.1904],"childNum":21},"geometry":{"type":"Polygon","coordinates":[[[101.7773,33.5303],[101.8652,33.5742],[101.9531,33.4424],[101.8652,33.0908],[102.4805,33.4424],[102.2168,33.9258],[102.9199,34.3213],[103.0957,34.1895],[103.1836,33.7939],[104.1504,33.6182],[104.2383,33.3984],[104.4141,33.3105],[104.3262,33.2227],[104.4141,33.0469],[104.3262,32.8711],[104.4141,32.7393],[105.2051,32.6074],[105.3809,32.7393],[105.3809,32.8711],[105.4688,32.915],[105.5566,32.7393],[106.084,32.8711],[106.084,32.7393],[106.3477,32.6514],[107.0508,32.6953],[107.1387,32.4756],[107.2266,32.4316],[107.4023,32.5195],[108.0176,32.168],[108.2813,32.2559],[108.5449,32.2119],[108.3691,32.168],[108.2813,31.9043],[108.5449,31.6846],[108.1934,31.5088],[107.9297,30.8496],[107.4902,30.8496],[107.4023,30.7617],[107.4902,30.6299],[107.0508,30.0146],[106.7871,30.0146],[106.6113,30.3223],[106.2598,30.1904],[105.8203,30.4541],[105.6445,30.2783],[105.5566,30.1025],[105.7324,29.8828],[105.293,29.5313],[105.4688,29.3115],[105.7324,29.2676],[105.8203,28.96],[106.2598,28.8721],[106.3477,28.5205],[105.9961,28.7402],[105.6445,28.4326],[105.9082,28.125],[106.1719,28.125],[106.3477,27.8174],[105.6445,27.6416],[105.5566,27.7734],[105.293,27.7295],[105.2051,27.9932],[105.0293,28.0811],[104.8535,27.9053],[104.4141,27.9492],[104.3262,28.0371],[104.4141,28.125],[104.4141,28.2568],[104.2383,28.4326],[104.4141,28.6084],[103.8867,28.6523],[103.7988,28.3008],[103.4473,28.125],[103.4473,27.7734],[102.9199,27.29],[103.0078,26.3672],[102.6563,26.1914],[102.5684,26.3672],[102.1289,26.1035],[101.8652,26.0596],[101.6016,26.2354],[101.6895,26.3672],[101.4258,26.5869],[101.4258,26.8066],[101.4258,26.7188],[101.1621,27.0264],[101.1621,27.1582],[100.7227,27.8613],[100.3711,27.8174],[100.2832,27.7295],[100.0195,28.125],[100.1953,28.3447],[99.668,28.8281],[99.4043,28.5205],[99.4043,28.1689],[99.2285,28.3008],[99.1406,29.2676],[98.9648,30.7617],[98.6133,31.2012],[98.877,31.4209],[98.4375,31.8604],[98.1738,32.3438],[97.7344,32.5195],[97.4707,32.6953],[97.3828,32.8711],[97.7344,33.3984],[97.4707,33.5742],[97.3828,33.8818],[97.7344,33.9258],[97.6465,34.1016],[97.8223,34.1895],[98.4375,34.0576],[98.877,33.1787],[99.2285,33.0469],[99.2285,32.915],[99.7559,32.7393],[99.8438,33.0029],[100.1074,32.8711],[100.1074,32.6514],[100.3711,32.7393],[100.7227,32.5195],[100.7227,32.6514],[101.25,32.6953],[101.1621,33.2227],[101.6016,33.1348],[101.7773,33.2227],[101.6895,33.3105],[101.7773,33.5303]]]}},{"type":"Feature","properties":{"id":"23","name":"黑龙江","cp":[128.1445,48.5156],"childNum":13},"geometry":{"type":"Polygon","coordinates":[[[121.4648,53.3496],[123.6621,53.5693],[124.8926,53.0859],[125.0684,53.2178],[125.5957,53.0859],[125.6836,52.9102],[126.123,52.7783],[126.0352,52.6025],[126.2109,52.5146],[126.3867,52.2949],[126.3867,52.207],[126.5625,52.1631],[126.4746,51.9434],[126.9141,51.3721],[126.8262,51.2842],[127.002,51.3281],[126.9141,51.1084],[127.2656,50.7568],[127.3535,50.2734],[127.6172,50.2295],[127.5293,49.8779],[127.793,49.6143],[128.7598,49.5703],[129.1113,49.3506],[129.4629,49.4385],[130.2539,48.8672],[130.6934,48.8672],[130.5176,48.6475],[130.8691,48.2959],[130.6934,48.1201],[131.0449,47.6807],[132.5391,47.7246],[132.627,47.9443],[133.0664,48.1201],[133.5059,48.1201],[134.209,48.3838],[135.0879,48.4277],[134.7363,48.252],[134.5605,47.9883],[134.7363,47.6807],[134.5605,47.4609],[134.3848,47.4609],[134.209,47.2852],[134.209,47.1533],[133.8574,46.5381],[133.9453,46.2744],[133.5059,45.835],[133.418,45.5713],[133.2422,45.5273],[133.0664,45.1318],[132.8906,45.0439],[131.9238,45.3516],[131.5723,45.0439],[131.0449,44.8682],[131.3086,44.0771],[131.2207,43.7256],[131.3086,43.4619],[130.8691,43.418],[130.5176,43.6377],[130.3418,43.9893],[129.9902,43.8574],[129.9023,44.0332],[129.8145,43.9014],[129.2871,43.8135],[129.1992,43.5938],[128.8477,43.5498],[128.4961,44.165],[128.4082,44.4727],[128.0566,44.3408],[128.0566,44.1211],[127.7051,44.1211],[127.5293,44.6045],[127.0898,44.6045],[127.002,44.7803],[127.0898,45],[126.9141,45.1318],[126.5625,45.2637],[126.0352,45.1758],[125.7715,45.3076],[125.6836,45.5273],[125.0684,45.3955],[124.8926,45.5273],[124.3652,45.4395],[124.0137,45.7471],[123.9258,46.2305],[123.2227,46.2305],[123.0469,46.582],[123.5742,46.6699],[123.5742,46.8896],[123.5742,46.8457],[123.4863,46.9775],[123.3984,46.9775],[123.3984,46.8896],[123.0469,46.7139],[122.4316,47.373],[124.2773,48.5156],[124.4531,48.1201],[124.8047,49.1309],[125.2441,49.1748],[125.1563,49.834],[125.332,50.1416],[125.7715,50.5371],[125.7715,50.7568],[126.0352,51.0205],[125.332,51.6357],[125.0684,51.6357],[124.8926,51.3721],[124.541,51.3721],[124.3652,51.2842],[123.6621,51.3721],[123.3105,51.2402],[122.959,51.3281],[122.6074,52.0752],[122.6953,52.251],[122.168,52.5146],[121.9922,52.2949],[121.7285,52.2949],[121.6406,52.4268],[121.2012,52.5586],[121.8164,53.042],[121.4648,53.3496]]]}},{"type":"Feature","properties":{"id":"62","name":"甘肃","cp":[95.7129,40.166],"childNum":14},"geometry":{"type":"Polygon","coordinates":[[[96.416,42.7148],[97.207,42.8027],[97.8223,41.748],[97.8223,41.6162],[97.4707,41.4844],[98.3496,40.9131],[98.3496,40.5615],[98.6133,40.6494],[98.5254,40.7373],[98.7891,40.6055],[98.9648,40.7813],[99.0527,40.6934],[99.2285,40.8691],[99.9316,41.001],[100.1953,40.6494],[100.1074,40.2539],[99.4922,39.8584],[100.0195,39.7705],[100.5469,39.4189],[100.8105,39.4189],[100.9863,38.9355],[101.25,39.0234],[101.3379,38.7598],[101.7773,38.6719],[102.041,38.8916],[101.8652,39.1113],[102.4805,39.2432],[103.0078,39.1113],[103.3594,39.3311],[104.0625,39.4189],[104.2383,38.9795],[103.4473,38.3643],[103.5352,38.1445],[103.3594,38.0127],[103.4473,37.8369],[104.3262,37.4414],[104.5898,37.4414],[104.5898,37.2217],[104.8535,37.2217],[105.293,36.8262],[105.2051,36.6943],[105.4688,36.123],[105.293,35.9912],[105.3809,35.7715],[105.7324,35.7275],[105.8203,35.5518],[105.9961,35.4639],[105.9082,35.4199],[105.9961,35.4199],[106.084,35.376],[106.2598,35.4199],[106.3477,35.2441],[106.5234,35.332],[106.4355,35.6836],[106.6992,35.6836],[106.9629,35.8154],[106.875,36.123],[106.5234,36.2549],[106.5234,36.4746],[106.4355,36.5625],[106.6113,36.7822],[106.6113,37.0898],[107.3145,37.0898],[107.3145,36.9141],[108.7207,36.3428],[108.6328,35.9912],[108.5449,35.8594],[108.6328,35.5518],[108.5449,35.2881],[107.7539,35.2881],[107.7539,35.1123],[107.8418,35.0244],[107.666,34.9365],[107.2266,34.8926],[106.9629,35.0684],[106.6113,35.0684],[106.5234,34.7607],[106.3477,34.585],[106.6992,34.3213],[106.5234,34.2773],[106.6113,34.1455],[106.4355,33.9258],[106.5234,33.5303],[105.9961,33.6182],[105.7324,33.3984],[105.9961,33.1787],[105.9082,33.0029],[105.4688,32.915],[105.3809,32.8711],[105.3809,32.7393],[105.2051,32.6074],[104.4141,32.7393],[104.3262,32.8711],[104.4141,33.0469],[104.3262,33.2227],[104.4141,33.3105],[104.2383,33.3984],[104.1504,33.6182],[103.1836,33.7939],[103.0957,34.1895],[102.9199,34.3213],[102.2168,33.9258],[102.4805,33.4424],[101.8652,33.0908],[101.9531,33.4424],[101.8652,33.5742],[101.7773,33.5303],[101.6016,33.5303],[101.5137,33.7061],[101.25,33.6621],[100.8105,34.2773],[100.9863,34.3652],[101.6895,34.1016],[102.1289,34.2773],[102.2168,34.4092],[101.9531,34.6289],[101.9531,34.8486],[102.3926,35.2002],[102.3047,35.4199],[102.4805,35.5957],[102.832,35.5957],[102.6563,35.7715],[102.9199,35.9033],[102.9199,36.0791],[103.0078,36.2549],[102.832,36.3428],[102.5684,36.7383],[102.6563,36.8262],[102.4805,36.958],[102.5684,37.1777],[102.1289,37.4414],[101.9531,37.7051],[101.7773,37.6172],[101.5137,37.8809],[101.1621,37.8369],[100.7227,38.2324],[100.459,38.2764],[100.1074,38.4961],[100.0195,38.4521],[100.1953,38.2764],[99.8438,38.3643],[99.1406,38.9355],[98.7891,39.0674],[98.6133,38.9355],[98.3496,39.0234],[98.1738,38.8037],[97.0313,39.1992],[97.1191,38.584],[96.6797,38.4521],[96.6797,38.1885],[96.416,38.2324],[96.2402,38.1006],[95.7129,38.3643],[95.4492,38.2764],[95.0098,38.4082],[94.5703,38.3643],[94.3066,38.7598],[93.8672,38.7158],[93.6914,38.9355],[93.1641,38.9795],[93.1641,39.1992],[92.373,39.1113],[92.373,39.3311],[92.6367,39.6387],[93.0762,40.6494],[93.8672,40.6934],[94.043,41.0889],[94.5703,41.4844],[95.1855,41.792],[95.2734,41.6162],[95.9766,41.9238],[96.2402,42.2314],[96.0645,42.3193],[95.9766,42.4951],[96.416,42.7148]]]}},{"type":"Feature","properties":{"id":"53","name":"云南","cp":[101.8652,25.1807],"childNum":16},"geometry":{"type":"Polygon","coordinates":[[[98.1738,28.125],[98.2617,28.3887],[98.3496,28.125],[98.7012,28.2129],[98.7891,28.3447],[98.6133,28.5205],[98.7012,28.916],[98.7891,29.0039],[98.7891,28.8721],[98.9648,28.8281],[98.9648,29.1357],[99.1406,29.2676],[99.2285,28.3008],[99.4043,28.1689],[99.4043,28.5205],[99.668,28.8281],[100.1953,28.3447],[100.0195,28.125],[100.2832,27.7295],[100.3711,27.8174],[100.7227,27.8613],[101.1621,27.1582],[101.1621,27.0264],[101.4258,26.7188],[101.4258,26.8066],[101.4258,26.5869],[101.6895,26.3672],[101.6016,26.2354],[101.8652,26.0596],[102.1289,26.1035],[102.5684,26.3672],[102.6563,26.1914],[103.0078,26.3672],[102.9199,27.29],[103.4473,27.7734],[103.4473,28.125],[103.7988,28.3008],[103.8867,28.6523],[104.4141,28.6084],[104.2383,28.4326],[104.4141,28.2568],[104.4141,28.125],[104.3262,28.0371],[104.4141,27.9492],[104.8535,27.9053],[105.0293,28.0811],[105.2051,27.9932],[105.293,27.7295],[105.2051,27.3779],[104.5898,27.334],[104.4141,27.4658],[104.1504,27.2461],[103.8867,27.4219],[103.623,27.0264],[103.7109,26.9824],[103.7109,26.7627],[103.8867,26.543],[104.4141,26.6748],[104.6777,26.4111],[104.3262,25.708],[104.8535,25.2246],[104.5898,25.0488],[104.6777,24.9609],[104.502,24.7412],[104.6777,24.3457],[104.7656,24.4775],[105.0293,24.4336],[105.2051,24.082],[105.4688,24.0381],[105.5566,24.126],[105.9961,24.126],[106.1719,23.8184],[106.1719,23.5547],[105.6445,23.4229],[105.5566,23.2031],[105.293,23.3789],[104.8535,23.1592],[104.7656,22.8516],[104.3262,22.6758],[104.1504,22.8076],[103.9746,22.5439],[103.623,22.7637],[103.5352,22.5879],[103.3594,22.8076],[103.0957,22.4561],[102.4805,22.7637],[102.3047,22.4121],[101.8652,22.3682],[101.7773,22.5],[101.6016,22.1924],[101.8652,21.6211],[101.7773,21.1377],[101.6016,21.2256],[101.25,21.1816],[101.1621,21.7529],[100.6348,21.4453],[100.1074,21.4893],[99.9316,22.0605],[99.2285,22.1484],[99.4043,22.5879],[99.3164,22.7197],[99.4922,23.0713],[98.877,23.2031],[98.7012,23.9502],[98.877,24.126],[98.1738,24.082],[97.7344,23.8623],[97.5586,23.9063],[97.7344,24.126],[97.6465,24.4336],[97.5586,24.4336],[97.5586,24.7412],[97.7344,24.8291],[97.8223,25.2686],[98.1738,25.4004],[98.1738,25.6201],[98.3496,25.5762],[98.5254,25.8398],[98.7012,25.8838],[98.6133,26.0596],[98.7012,26.1475],[98.7891,26.5869],[98.7012,27.5098],[98.5254,27.6416],[98.3496,27.5098],[98.1738,28.125]]]}},{"type":"Feature","properties":{"id":"45","name":"广西","cp":[108.2813,23.6426],"childNum":14},"geometry":{"type":"Polygon","coordinates":[[[104.502,24.7412],[104.6777,24.6094],[105.2051,24.9609],[105.9961,24.6533],[106.1719,24.7852],[106.1719,24.9609],[106.875,25.1807],[107.0508,25.2686],[106.9629,25.4883],[107.2266,25.6201],[107.4902,25.2246],[107.7539,25.2246],[107.8418,25.1367],[108.1055,25.2246],[108.1934,25.4443],[108.3691,25.5322],[108.6328,25.3125],[108.6328,25.5762],[109.0723,25.5322],[108.9844,25.752],[109.3359,25.708],[109.5117,26.0156],[109.7754,25.8838],[109.9512,26.1914],[110.2148,25.9717],[110.5664,26.3232],[111.1816,26.3232],[111.2695,26.2354],[111.2695,25.8838],[111.4453,25.8398],[111.0059,25.0049],[111.0938,24.9609],[111.3574,25.1367],[111.5332,24.6533],[111.709,24.7852],[112.0605,24.7412],[111.8848,24.6533],[112.0605,24.3457],[111.8848,24.2139],[111.8848,23.9941],[111.7969,23.8184],[111.6211,23.8184],[111.6211,23.6865],[111.3574,23.4668],[111.4453,23.0273],[111.2695,22.8076],[110.7422,22.5439],[110.7422,22.2803],[110.6543,22.1484],[110.3027,22.1484],[110.3027,21.8848],[109.9512,21.8408],[109.8633,21.665],[109.7754,21.6211],[109.7754,21.4014],[109.5996,21.4453],[109.1602,21.3574],[109.248,20.874],[109.0723,20.9619],[109.0723,21.5332],[108.7207,21.5332],[108.6328,21.665],[108.2813,21.4893],[107.8418,21.6211],[107.4023,21.6211],[107.0508,21.7969],[107.0508,21.9287],[106.6992,22.0166],[106.6113,22.4121],[106.7871,22.7637],[106.6992,22.8955],[105.9082,22.9395],[105.5566,23.0713],[105.5566,23.2031],[105.6445,23.4229],[106.1719,23.5547],[106.1719,23.8184],[105.9961,24.126],[105.5566,24.126],[105.4688,24.0381],[105.2051,24.082],[105.0293,24.4336],[104.7656,24.4775],[104.6777,24.3457],[104.502,24.7412]]]}},{"type":"Feature","properties":{"id":"43","name":"湖南","cp":[111.5332,27.3779],"childNum":14},"geometry":{"type":"Polygon","coordinates":[[[109.248,28.4766],[109.248,29.1357],[109.5117,29.6191],[109.6875,29.6191],[109.7754,29.751],[110.4785,29.6631],[110.6543,29.751],[110.4785,30.0146],[110.8301,30.1465],[111.7969,29.9268],[112.2363,29.5313],[112.5,29.6191],[112.6758,29.5752],[112.9395,29.7949],[113.0273,29.751],[112.9395,29.4873],[113.0273,29.4434],[113.5547,29.8389],[113.5547,29.707],[113.7305,29.5752],[113.6426,29.3115],[113.7305,29.0918],[113.9063,29.0479],[114.1699,28.8281],[114.082,28.5645],[114.2578,28.3447],[113.7305,27.9492],[113.6426,27.5977],[113.6426,27.3779],[113.8184,27.29],[113.7305,27.1143],[113.9063,26.9385],[113.9063,26.6309],[114.082,26.5869],[113.9941,26.1914],[114.2578,26.1475],[113.9941,26.0596],[113.9063,25.4443],[113.6426,25.3125],[113.2031,25.5322],[112.8516,25.3564],[113.0273,25.2246],[113.0273,24.9609],[112.8516,24.917],[112.5879,25.1367],[112.2363,25.1807],[112.1484,24.873],[112.0605,24.7412],[111.709,24.7852],[111.5332,24.6533],[111.3574,25.1367],[111.0938,24.9609],[111.0059,25.0049],[111.4453,25.8398],[111.2695,25.8838],[111.2695,26.2354],[111.1816,26.3232],[110.5664,26.3232],[110.2148,25.9717],[109.9512,26.1914],[109.7754,25.8838],[109.5117,26.0156],[109.4238,26.2793],[109.248,26.3232],[109.4238,26.5869],[109.3359,26.7188],[109.5117,26.8066],[109.5117,27.0264],[109.3359,27.1582],[108.8965,27.0264],[108.8086,27.1143],[109.4238,27.5977],[109.3359,27.9053],[109.3359,28.2568],[109.248,28.4766]]]}},{"type":"Feature","properties":{"id":"61","name":"陕西","cp":[109.5996,35.6396],"childNum":10},"geometry":{"type":"Polygon","coordinates":[[[105.4688,32.915],[105.9082,33.0029],[105.9961,33.1787],[105.7324,33.3984],[105.9961,33.6182],[106.5234,33.5303],[106.4355,33.9258],[106.6113,34.1455],[106.5234,34.2773],[106.6992,34.3213],[106.3477,34.585],[106.5234,34.7607],[106.6113,35.0684],[106.9629,35.0684],[107.2266,34.8926],[107.666,34.9365],[107.8418,35.0244],[107.7539,35.1123],[107.7539,35.2881],[108.5449,35.2881],[108.6328,35.5518],[108.5449,35.8594],[108.6328,35.9912],[108.7207,36.3428],[107.3145,36.9141],[107.3145,37.0898],[107.3145,37.6172],[107.666,37.8809],[108.1934,37.6172],[108.7207,37.7051],[108.8086,38.0127],[108.8965,37.9688],[109.0723,38.0127],[108.9844,38.3203],[109.9512,39.1553],[109.8633,39.2432],[110.2148,39.2871],[110.127,39.4629],[110.6543,39.2871],[111.0938,39.5947],[111.0938,39.375],[111.1816,39.2432],[110.918,38.7158],[110.8301,38.4961],[110.4785,38.1885],[110.4785,37.9688],[110.8301,37.6611],[110.3906,37.002],[110.4785,36.123],[110.5664,35.6396],[110.2148,34.8926],[110.2148,34.6729],[110.3906,34.585],[110.4785,34.2334],[110.6543,34.1455],[110.6543,33.8379],[111.0059,33.5303],[111.0059,33.2666],[110.7422,33.1348],[110.5664,33.2666],[110.3027,33.1787],[109.5996,33.2666],[109.4238,33.1348],[109.7754,33.0469],[109.7754,32.915],[110.127,32.7393],[110.127,32.6074],[109.6875,32.6074],[109.5117,32.4316],[109.5996,31.7285],[109.248,31.7285],[109.0723,31.9482],[108.5449,32.2119],[108.2813,32.2559],[108.0176,32.168],[107.4023,32.5195],[107.2266,32.4316],[107.1387,32.4756],[107.0508,32.6953],[106.3477,32.6514],[106.084,32.7393],[106.084,32.8711],[105.5566,32.7393],[105.4688,32.915]]]}},{"type":"Feature","properties":{"id":"44","name":"广东","cp":[113.4668,22.8076],"childNum":21},"geometry":{"type":"Polygon","coordinates":[[[109.7754,21.4014],[109.7754,21.6211],[109.8633,21.665],[109.9512,21.8408],[110.3027,21.8848],[110.3027,22.1484],[110.6543,22.1484],[110.7422,22.2803],[110.7422,22.5439],[111.2695,22.8076],[111.4453,23.0273],[111.3574,23.4668],[111.6211,23.6865],[111.6211,23.8184],[111.7969,23.8184],[111.8848,23.9941],[111.8848,24.2139],[112.0605,24.3457],[111.8848,24.6533],[112.0605,24.7412],[112.1484,24.873],[112.2363,25.1807],[112.5879,25.1367],[112.8516,24.917],[113.0273,24.9609],[113.0273,25.2246],[112.8516,25.3564],[113.2031,25.5322],[113.6426,25.3125],[113.9063,25.4443],[113.9941,25.2686],[114.6094,25.4004],[114.7852,25.2686],[114.6973,25.1367],[114.4336,24.9609],[114.1699,24.6973],[114.4336,24.5215],[115.4004,24.7852],[115.8398,24.5654],[115.752,24.7852],[115.9277,24.917],[116.2793,24.7852],[116.3672,24.873],[116.543,24.6094],[116.7188,24.6533],[116.9824,24.1699],[116.9824,23.9063],[117.1582,23.5547],[117.334,23.2471],[116.8945,23.3789],[116.6309,23.1152],[116.543,22.8516],[115.9277,22.7197],[115.6641,22.7637],[115.5762,22.6318],[115.0488,22.6758],[114.6094,22.3682],[114.3457,22.5439],[113.9941,22.5],[113.8184,22.1924],[114.3457,22.1484],[114.4336,22.0166],[114.082,21.9287],[113.9941,21.7969],[113.5547,22.0166],[113.1152,21.8408],[112.9395,21.5771],[112.4121,21.4453],[112.2363,21.5332],[111.5332,21.4893],[111.2695,21.3574],[110.7422,21.3574],[110.6543,21.2256],[110.7422,20.918],[110.4785,20.874],[110.6543,20.2588],[110.5664,20.2588],[110.3906,20.127],[110.0391,20.127],[109.8633,20.127],[109.8633,20.3027],[109.5996,20.918],[109.7754,21.4014],[109.7754,21.4014]],[[113.5986,22.1649],[113.6096,22.1265],[113.5547,22.11],[113.5437,22.2034],[113.5767,22.2034],[113.5986,22.1649]]]}},{"type":"Feature","properties":{"id":"22","name":"吉林","cp":[126.4746,43.5938],"childNum":9},"geometry":{"type":"Polygon","coordinates":[[[123.2227,46.2305],[123.9258,46.2305],[124.0137,45.7471],[124.3652,45.4395],[124.8926,45.5273],[125.0684,45.3955],[125.6836,45.5273],[125.7715,45.3076],[126.0352,45.1758],[126.5625,45.2637],[126.9141,45.1318],[127.0898,45],[127.002,44.7803],[127.0898,44.6045],[127.5293,44.6045],[127.7051,44.1211],[128.0566,44.1211],[128.0566,44.3408],[128.4082,44.4727],[128.4961,44.165],[128.8477,43.5498],[129.1992,43.5938],[129.2871,43.8135],[129.8145,43.9014],[129.9023,44.0332],[129.9902,43.8574],[130.3418,43.9893],[130.5176,43.6377],[130.8691,43.418],[131.3086,43.4619],[131.3086,43.3301],[131.1328,42.9346],[130.4297,42.7148],[130.6055,42.6709],[130.6055,42.4512],[130.2539,42.7588],[130.2539,42.8906],[130.166,42.9785],[129.9023,43.0225],[129.7266,42.4951],[129.375,42.4512],[128.9355,42.0117],[128.0566,42.0117],[128.3203,41.5723],[128.1445,41.3525],[127.0898,41.5283],[127.1777,41.5723],[126.9141,41.792],[126.6504,41.6602],[126.4746,41.3965],[126.123,40.957],[125.6836,40.8691],[125.5957,40.9131],[125.7715,41.2207],[125.332,41.6602],[125.332,41.9678],[125.4199,42.0996],[125.332,42.1436],[124.8926,42.8027],[124.8926,43.0664],[124.7168,43.0664],[124.4531,42.8467],[124.2773,43.2422],[123.8379,43.4619],[123.6621,43.374],[123.3105,43.5059],[123.4863,43.7256],[123.1348,44.4727],[122.3438,44.2529],[122.0801,44.8682],[122.2559,45.2637],[121.9043,45.7031],[121.7285,45.7471],[121.8164,46.0107],[122.2559,45.791],[122.4316,45.8789],[122.6953,45.7031],[122.7832,46.0107],[123.2227,46.2305]]]}},{"type":"Feature","properties":{"id":"13","name":"河北","cp":[115.4004,37.9688],"childNum":11},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.5215,39.5068],[114.3457,39.8584],[113.9941,39.9902],[114.5215,40.3418],[114.3457,40.3857],[114.2578,40.6055],[114.082,40.7373],[113.9063,41.1328],[113.9941,41.2207],[113.9063,41.4404],[114.2578,41.5723],[114.1699,41.792],[114.5215,42.1436],[114.873,42.0996],[114.9609,41.6162],[115.2246,41.5723],[115.9277,41.9238],[116.0156,41.792],[116.2793,42.0117],[116.8066,42.0117],[116.8945,42.4072],[117.334,42.4512],[117.5098,42.583],[117.7734,42.627],[118.0371,42.4072],[117.9492,42.2314],[118.125,42.0557],[118.3008,42.0996],[118.3008,41.792],[118.125,41.748],[118.3887,41.3086],[119.2676,41.3086],[118.8281,40.8252],[119.2676,40.5176],[119.5313,40.5615],[119.707,40.1221],[119.8828,39.9463],[119.5313,39.6826],[119.4434,39.4189],[118.916,39.0674],[118.4766,38.9355],[118.125,39.0234],[118.0371,39.1992],[118.0371,39.2432],[117.8613,39.4189],[117.9492,39.5947],[117.6855,39.5947],[117.5098,39.7705],[117.5098,39.9902],[117.6855,39.9902],[117.6855,40.0781],[117.4219,40.21],[117.2461,40.5176],[117.4219,40.6494],[116.9824,40.6934],[116.6309,41.0449],[116.3672,40.9131],[116.4551,40.7813],[116.1914,40.7813],[116.1035,40.6055],[115.752,40.5615],[115.9277,40.2539],[115.4004,39.9463],[115.4883,39.6387],[115.752,39.5068],[116.1914,39.5947],[116.3672,39.4629],[116.543,39.5947],[116.8066,39.5947],[116.8945,39.1113],[116.7188,38.9355],[116.7188,38.8037],[117.2461,38.54],[117.5977,38.6279],[117.9492,38.3203],[117.4219,37.8369],[116.8066,37.8369],[116.4551,37.4854],[116.2793,37.5732],[116.2793,37.3535],[116.0156,37.3535],[115.752,36.9141],[115.3125,36.5186],[115.4883,36.167],[115.3125,36.0791],[115.1367,36.2109],[114.9609,36.0791],[114.873,36.123],[113.7305,36.3428],[113.4668,36.6504],[113.7305,36.8701],[113.7305,37.1338],[114.1699,37.6611],[113.9941,37.7051],[113.8184,38.1445],[113.5547,38.2764],[113.5547,38.54],[113.8184,38.8037],[113.8184,38.9355],[113.9063,39.0234],[114.3457,39.0674],[114.5215,39.5068]]],[[[117.2461,40.0781],[117.1582,39.8145],[117.1582,39.6387],[116.8945,39.6826],[116.8945,39.8145],[116.8066,39.9902],[117.2461,40.0781]]]]}},{"type":"Feature","properties":{"id":"42","name":"湖北","cp":[112.2363,31.1572],"childNum":17},"geometry":{"type":"Polygon","coordinates":[[[110.2148,31.1572],[110.127,31.377],[109.6875,31.5527],[109.7754,31.6846],[109.5996,31.7285],[109.5117,32.4316],[109.6875,32.6074],[110.127,32.6074],[110.127,32.7393],[109.7754,32.915],[109.7754,33.0469],[109.4238,33.1348],[109.5996,33.2666],[110.3027,33.1787],[110.5664,33.2666],[110.7422,33.1348],[111.0059,33.2666],[111.5332,32.6074],[112.3242,32.3438],[113.2031,32.4316],[113.4668,32.2998],[113.7305,32.4316],[113.8184,31.8604],[113.9941,31.7725],[114.1699,31.8604],[114.5215,31.7725],[114.6094,31.5527],[114.7852,31.4648],[115.1367,31.5967],[115.2246,31.4209],[115.4004,31.4209],[115.5762,31.2012],[116.0156,31.0254],[115.752,30.6738],[116.1035,30.1904],[116.1035,29.8389],[115.9277,29.707],[115.4883,29.7949],[114.873,29.3994],[114.2578,29.3555],[113.9063,29.0479],[113.7305,29.0918],[113.6426,29.3115],[113.7305,29.5752],[113.5547,29.707],[113.5547,29.8389],[113.0273,29.4434],[112.9395,29.4873],[113.0273,29.751],[112.9395,29.7949],[112.6758,29.5752],[112.5,29.6191],[112.2363,29.5313],[111.7969,29.9268],[110.8301,30.1465],[110.4785,30.0146],[110.6543,29.751],[110.4785,29.6631],[109.7754,29.751],[109.6875,29.6191],[109.5117,29.6191],[109.248,29.1357],[109.0723,29.3555],[108.9844,29.3115],[108.6328,29.8389],[108.457,29.7949],[108.5449,30.2344],[108.457,30.4102],[108.6328,30.5859],[108.8086,30.498],[109.0723,30.6299],[109.1602,30.542],[109.248,30.6299],[109.4238,30.542],[109.8633,30.8936],[110.0391,30.8057],[110.2148,31.1572]]]}},{"type":"Feature","properties":{"id":"52","name":"贵州","cp":[106.6113,26.9385],"childNum":9},"geometry":{"type":"Polygon","coordinates":[[[104.1504,27.2461],[104.4141,27.4658],[104.5898,27.334],[105.2051,27.3779],[105.293,27.7295],[105.5566,27.7734],[105.6445,27.6416],[106.3477,27.8174],[106.1719,28.125],[105.9082,28.125],[105.6445,28.4326],[105.9961,28.7402],[106.3477,28.5205],[106.5234,28.5645],[106.4355,28.7842],[106.5234,28.7842],[106.6113,28.6523],[106.6113,28.5205],[106.6992,28.4766],[106.875,28.7842],[107.4023,28.8721],[107.4023,29.1797],[107.5781,29.2236],[107.8418,29.1357],[107.8418,29.0039],[108.2813,29.0918],[108.3691,28.6523],[108.5449,28.6523],[108.5449,28.3887],[108.7207,28.4766],[108.7207,28.2129],[109.0723,28.2129],[109.248,28.4766],[109.3359,28.2568],[109.3359,27.9053],[109.4238,27.5977],[108.8086,27.1143],[108.8965,27.0264],[109.3359,27.1582],[109.5117,27.0264],[109.5117,26.8066],[109.3359,26.7188],[109.4238,26.5869],[109.248,26.3232],[109.4238,26.2793],[109.5117,26.0156],[109.3359,25.708],[108.9844,25.752],[109.0723,25.5322],[108.6328,25.5762],[108.6328,25.3125],[108.3691,25.5322],[108.1934,25.4443],[108.1055,25.2246],[107.8418,25.1367],[107.7539,25.2246],[107.4902,25.2246],[107.2266,25.6201],[106.9629,25.4883],[107.0508,25.2686],[106.875,25.1807],[106.1719,24.9609],[106.1719,24.7852],[105.9961,24.6533],[105.2051,24.9609],[104.6777,24.6094],[104.502,24.7412],[104.6777,24.9609],[104.5898,25.0488],[104.8535,25.2246],[104.3262,25.708],[104.6777,26.4111],[104.4141,26.6748],[103.8867,26.543],[103.7109,26.7627],[103.7109,26.9824],[103.623,27.0264],[103.8867,27.4219],[104.1504,27.2461]]]}},{"type":"Feature","properties":{"id":"37","name":"山东","cp":[118.7402,36.4307],"childNum":17},"geometry":{"type":"Polygon","coordinates":[[[115.4883,36.167],[115.3125,36.5186],[115.752,36.9141],[116.0156,37.3535],[116.2793,37.3535],[116.2793,37.5732],[116.4551,37.4854],[116.8066,37.8369],[117.4219,37.8369],[117.9492,38.3203],[118.125,38.1445],[118.916,38.1445],[119.3555,37.6611],[119.0039,37.5293],[119.0039,37.3535],[119.3555,37.1338],[119.707,37.1338],[119.8828,37.3975],[120.498,37.8369],[120.5859,38.1445],[120.9375,38.4521],[121.0254,37.8369],[121.2012,37.6611],[121.9043,37.4854],[122.168,37.6172],[122.2559,37.4854],[122.6074,37.4854],[122.6953,37.3535],[122.6074,36.9141],[122.4316,36.7822],[121.8164,36.8701],[121.7285,36.6943],[121.1133,36.6064],[121.1133,36.4307],[121.377,36.2549],[120.7617,36.167],[120.9375,35.8594],[120.6738,36.0352],[119.707,35.4639],[119.9707,34.9805],[119.3555,35.0244],[119.2676,35.1123],[118.916,35.0244],[118.7402,34.7168],[118.4766,34.6729],[118.3887,34.4092],[118.2129,34.4092],[118.125,34.6289],[117.9492,34.6729],[117.5977,34.4531],[117.334,34.585],[117.2461,34.4531],[116.8066,34.9365],[116.4551,34.8926],[116.3672,34.6289],[116.1914,34.585],[115.5762,34.585],[115.4004,34.8486],[114.7852,35.0684],[115.0488,35.376],[115.2246,35.4199],[115.4883,35.7275],[116.1035,36.0791],[115.3125,35.8154],[115.4883,36.167]]]}},{"type":"Feature","properties":{"id":"36","name":"江西","cp":[116.0156,27.29],"childNum":11},"geometry":{"type":"Polygon","coordinates":[[[114.2578,28.3447],[114.082,28.5645],[114.1699,28.8281],[113.9063,29.0479],[114.2578,29.3555],[114.873,29.3994],[115.4883,29.7949],[115.9277,29.707],[116.1035,29.8389],[116.2793,29.7949],[116.7188,30.0586],[116.8945,29.9268],[116.7188,29.751],[116.7188,29.6191],[117.1582,29.707],[117.0703,29.8389],[117.1582,29.9268],[117.5098,29.6191],[118.0371,29.5752],[118.2129,29.3994],[118.0371,29.1797],[118.0371,29.0479],[118.3887,28.7842],[118.4766,28.3447],[118.4766,28.3008],[118.3008,28.0811],[117.7734,27.8174],[117.5098,27.9932],[116.9824,27.6416],[117.1582,27.29],[117.0703,27.1143],[116.543,26.8066],[116.6309,26.4551],[116.3672,26.2354],[116.4551,26.1035],[116.1914,25.8838],[116.0156,25.2686],[115.8398,25.2246],[115.9277,24.917],[115.752,24.7852],[115.8398,24.5654],[115.4004,24.7852],[114.4336,24.5215],[114.1699,24.6973],[114.4336,24.9609],[114.6973,25.1367],[114.7852,25.2686],[114.6094,25.4004],[113.9941,25.2686],[113.9063,25.4443],[113.9941,26.0596],[114.2578,26.1475],[113.9941,26.1914],[114.082,26.5869],[113.9063,26.6309],[113.9063,26.9385],[113.7305,27.1143],[113.8184,27.29],[113.6426,27.3779],[113.6426,27.5977],[113.7305,27.9492],[114.2578,28.3447]]]}},{"type":"Feature","properties":{"id":"41","name":"河南","cp":[113.4668,33.8818],"childNum":17},"geometry":{"type":"Polygon","coordinates":[[[110.3906,34.585],[110.8301,34.6289],[111.1816,34.8047],[111.5332,34.8486],[111.7969,35.0684],[112.0605,35.0684],[112.0605,35.2881],[112.7637,35.2002],[113.1152,35.332],[113.6426,35.6836],[113.7305,36.3428],[114.873,36.123],[114.9609,36.0791],[115.1367,36.2109],[115.3125,36.0791],[115.4883,36.167],[115.3125,35.8154],[116.1035,36.0791],[115.4883,35.7275],[115.2246,35.4199],[115.0488,35.376],[114.7852,35.0684],[115.4004,34.8486],[115.5762,34.585],[116.1914,34.585],[116.1914,34.4092],[116.543,34.2773],[116.6309,33.9258],[116.1914,33.7061],[116.0156,33.9697],[115.6641,34.0576],[115.5762,33.9258],[115.5762,33.6621],[115.4004,33.5303],[115.3125,33.1787],[114.873,33.1348],[114.873,33.0029],[115.1367,32.8711],[115.2246,32.6074],[115.5762,32.4316],[115.8398,32.5195],[115.9277,31.7725],[115.4883,31.6846],[115.4004,31.4209],[115.2246,31.4209],[115.1367,31.5967],[114.7852,31.4648],[114.6094,31.5527],[114.5215,31.7725],[114.1699,31.8604],[113.9941,31.7725],[113.8184,31.8604],[113.7305,32.4316],[113.4668,32.2998],[113.2031,32.4316],[112.3242,32.3438],[111.5332,32.6074],[111.0059,33.2666],[111.0059,33.5303],[110.6543,33.8379],[110.6543,34.1455],[110.4785,34.2334],[110.3906,34.585]]]}},{"type":"Feature","properties":{"id":"21","name":"辽宁","cp":[122.3438,41.0889],"childNum":14},"geometry":{"type":"Polygon","coordinates":[[[119.2676,41.3086],[119.4434,41.6162],[119.2676,41.7041],[119.3555,42.2754],[119.5313,42.3633],[119.8828,42.1875],[120.1465,41.7041],[120.498,42.0996],[121.4648,42.4951],[121.7285,42.4512],[121.9922,42.7148],[122.3438,42.6709],[122.3438,42.8467],[122.7832,42.7148],[123.1348,42.8027],[123.3105,42.9785],[123.5742,43.0225],[123.6621,43.374],[123.8379,43.4619],[124.2773,43.2422],[124.4531,42.8467],[124.7168,43.0664],[124.8926,43.0664],[124.8926,42.8027],[125.332,42.1436],[125.4199,42.0996],[125.332,41.9678],[125.332,41.6602],[125.7715,41.2207],[125.5957,40.9131],[125.6836,40.8691],[124.541,40.21],[124.1016,39.6826],[123.3984,39.6826],[123.1348,39.4189],[123.1348,39.0234],[122.0801,39.0234],[121.5527,38.7158],[121.1133,38.6719],[120.9375,38.9795],[121.377,39.1992],[121.2012,39.5508],[122.0801,40.3857],[121.9922,40.6934],[121.7285,40.8252],[121.2012,40.8252],[120.5859,40.21],[119.8828,39.9463],[119.707,40.1221],[119.5313,40.5615],[119.2676,40.5176],[118.8281,40.8252],[119.2676,41.3086]]]}},{"type":"Feature","properties":{"id":"14","name":"山西","cp":[112.4121,37.6611],"childNum":11},"geometry":{"type":"Polygon","coordinates":[[[110.918,38.7158],[111.1816,39.2432],[111.0938,39.375],[111.3574,39.4189],[111.4453,39.6387],[111.9727,39.5947],[112.3242,40.2539],[112.7637,40.166],[113.2031,40.3857],[113.5547,40.3418],[113.8184,40.5176],[114.082,40.5176],[114.082,40.7373],[114.2578,40.6055],[114.3457,40.3857],[114.5215,40.3418],[113.9941,39.9902],[114.3457,39.8584],[114.5215,39.5068],[114.3457,39.0674],[113.9063,39.0234],[113.8184,38.9355],[113.8184,38.8037],[113.5547,38.54],[113.5547,38.2764],[113.8184,38.1445],[113.9941,37.7051],[114.1699,37.6611],[113.7305,37.1338],[113.7305,36.8701],[113.4668,36.6504],[113.7305,36.3428],[113.6426,35.6836],[113.1152,35.332],[112.7637,35.2002],[112.0605,35.2881],[112.0605,35.0684],[111.7969,35.0684],[111.5332,34.8486],[111.1816,34.8047],[110.8301,34.6289],[110.3906,34.585],[110.2148,34.6729],[110.2148,34.8926],[110.5664,35.6396],[110.4785,36.123],[110.3906,37.002],[110.8301,37.6611],[110.4785,37.9688],[110.4785,38.1885],[110.8301,38.4961],[110.918,38.7158]]]}},{"type":"Feature","properties":{"id":"34","name":"安徽","cp":[117.2461,32.0361],"childNum":17},"geometry":{"type":"Polygon","coordinates":[[[116.6309,33.9258],[116.543,34.2773],[116.1914,34.4092],[116.1914,34.585],[116.3672,34.6289],[116.8945,34.4092],[117.1582,34.0576],[117.5977,34.0137],[117.7734,33.7061],[118.125,33.75],[117.9492,33.2227],[118.0371,33.1348],[118.2129,33.2227],[118.3008,32.7832],[118.7402,32.7393],[118.916,32.959],[119.1797,32.8271],[119.1797,32.4756],[118.5645,32.5635],[118.6523,32.2119],[118.4766,32.168],[118.3887,31.9482],[118.916,31.5527],[118.7402,31.377],[118.8281,31.2451],[119.3555,31.2891],[119.4434,31.1572],[119.6191,31.1133],[119.6191,31.0693],[119.4434,30.6738],[119.2676,30.6299],[119.3555,30.4102],[118.916,30.3223],[118.916,29.9707],[118.7402,29.707],[118.2129,29.3994],[118.0371,29.5752],[117.5098,29.6191],[117.1582,29.9268],[117.0703,29.8389],[117.1582,29.707],[116.7188,29.6191],[116.7188,29.751],[116.8945,29.9268],[116.7188,30.0586],[116.2793,29.7949],[116.1035,29.8389],[116.1035,30.1904],[115.752,30.6738],[116.0156,31.0254],[115.5762,31.2012],[115.4004,31.4209],[115.4883,31.6846],[115.9277,31.7725],[115.8398,32.5195],[115.5762,32.4316],[115.2246,32.6074],[115.1367,32.8711],[114.873,33.0029],[114.873,33.1348],[115.3125,33.1787],[115.4004,33.5303],[115.5762,33.6621],[115.5762,33.9258],[115.6641,34.0576],[116.0156,33.9697],[116.1914,33.7061],[116.6309,33.9258]]]}},{"type":"Feature","properties":{"id":"35","name":"福建","cp":[118.3008,25.9277],"childNum":9},"geometry":{"type":"Polygon","coordinates":[[[118.4766,28.3008],[118.8281,28.2568],[118.7402,28.0371],[118.916,27.4658],[119.2676,27.4219],[119.6191,27.6855],[119.7949,27.29],[120.2344,27.4219],[120.4102,27.1582],[120.7617,27.0264],[120.6738,26.8945],[120.2344,26.8506],[120.2344,26.7188],[120.4102,26.6748],[120.498,26.3672],[120.2344,26.2793],[120.4102,26.1475],[120.0586,26.1914],[119.9707,25.9277],[119.7949,25.9277],[119.9707,25.4004],[119.7949,25.2686],[119.5313,25.1367],[119.4434,25.0049],[119.2676,25.0928],[118.916,24.8291],[118.6523,24.5215],[118.4766,24.5215],[118.4766,24.4336],[118.2129,24.3457],[118.2129,24.1699],[117.8613,23.9941],[117.7734,23.7744],[117.5098,23.5986],[117.1582,23.5547],[116.9824,23.9063],[116.9824,24.1699],[116.7188,24.6533],[116.543,24.6094],[116.3672,24.873],[116.2793,24.7852],[115.9277,24.917],[115.8398,25.2246],[116.0156,25.2686],[116.1914,25.8838],[116.4551,26.1035],[116.3672,26.2354],[116.6309,26.4551],[116.543,26.8066],[117.0703,27.1143],[117.1582,27.29],[116.9824,27.6416],[117.5098,27.9932],[117.7734,27.8174],[118.3008,28.0811],[118.4766,28.3008]]]}},{"type":"Feature","properties":{"id":"33","name":"浙江","cp":[120.498,29.0918],"childNum":11},"geometry":{"type":"Polygon","coordinates":[[[118.2129,29.3994],[118.7402,29.707],[118.916,29.9707],[118.916,30.3223],[119.3555,30.4102],[119.2676,30.6299],[119.4434,30.6738],[119.6191,31.0693],[119.6191,31.1133],[119.9707,31.1572],[120.498,30.8057],[120.9375,31.0254],[121.2891,30.6738],[121.9922,30.8057],[122.6953,30.8936],[122.8711,30.7178],[122.959,30.1465],[122.6074,30.1025],[122.6074,29.9268],[122.168,29.5313],[122.3438,28.8721],[121.9922,28.8721],[121.9922,28.4326],[121.7285,28.3447],[121.7285,28.2129],[121.4648,28.2129],[121.5527,28.0371],[121.2891,27.9492],[121.1133,27.4219],[120.6738,27.334],[120.6738,27.1582],[120.9375,27.0264],[120.7617,27.0264],[120.4102,27.1582],[120.2344,27.4219],[119.7949,27.29],[119.6191,27.6855],[119.2676,27.4219],[118.916,27.4658],[118.7402,28.0371],[118.8281,28.2568],[118.4766,28.3008],[118.4766,28.3447],[118.3887,28.7842],[118.0371,29.0479],[118.0371,29.1797],[118.2129,29.3994]]]}},{"type":"Feature","properties":{"id":"32","name":"江苏","cp":[120.0586,32.915],"childNum":13},"geometry":{"type":"Polygon","coordinates":[[[116.3672,34.6289],[116.4551,34.8926],[116.8066,34.9365],[117.2461,34.4531],[117.334,34.585],[117.5977,34.4531],[117.9492,34.6729],[118.125,34.6289],[118.2129,34.4092],[118.3887,34.4092],[118.4766,34.6729],[118.7402,34.7168],[118.916,35.0244],[119.2676,35.1123],[119.3555,35.0244],[119.3555,34.8486],[119.707,34.585],[120.3223,34.3652],[120.9375,33.0469],[121.0254,32.6514],[121.377,32.4756],[121.4648,32.168],[121.9043,31.9922],[121.9922,31.6846],[121.9922,31.5967],[121.2012,31.8604],[121.1133,31.7285],[121.377,31.5088],[121.2012,31.4648],[120.9375,31.0254],[120.498,30.8057],[119.9707,31.1572],[119.6191,31.1133],[119.4434,31.1572],[119.3555,31.2891],[118.8281,31.2451],[118.7402,31.377],[118.916,31.5527],[118.3887,31.9482],[118.4766,32.168],[118.6523,32.2119],[118.5645,32.5635],[119.1797,32.4756],[119.1797,32.8271],[118.916,32.959],[118.7402,32.7393],[118.3008,32.7832],[118.2129,33.2227],[118.0371,33.1348],[117.9492,33.2227],[118.125,33.75],[117.7734,33.7061],[117.5977,34.0137],[117.1582,34.0576],[116.8945,34.4092],[116.3672,34.6289]]]}},{"type":"Feature","properties":{"id":"50","name":"重庆","cp":[107.7539,30.1904],"childNum":40},"geometry":{"type":"Polygon","coordinates":[[[108.5449,31.6846],[108.2813,31.9043],[108.3691,32.168],[108.5449,32.2119],[109.0723,31.9482],[109.248,31.7285],[109.5996,31.7285],[109.7754,31.6846],[109.6875,31.5527],[110.127,31.377],[110.2148,31.1572],[110.0391,30.8057],[109.8633,30.8936],[109.4238,30.542],[109.248,30.6299],[109.1602,30.542],[109.0723,30.6299],[108.8086,30.498],[108.6328,30.5859],[108.457,30.4102],[108.5449,30.2344],[108.457,29.7949],[108.6328,29.8389],[108.9844,29.3115],[109.0723,29.3555],[109.248,29.1357],[109.248,28.4766],[109.0723,28.2129],[108.7207,28.2129],[108.7207,28.4766],[108.5449,28.3887],[108.5449,28.6523],[108.3691,28.6523],[108.2813,29.0918],[107.8418,29.0039],[107.8418,29.1357],[107.5781,29.2236],[107.4023,29.1797],[107.4023,28.8721],[106.875,28.7842],[106.6992,28.4766],[106.6113,28.5205],[106.6113,28.6523],[106.5234,28.7842],[106.4355,28.7842],[106.5234,28.5645],[106.3477,28.5205],[106.2598,28.8721],[105.8203,28.96],[105.7324,29.2676],[105.4688,29.3115],[105.293,29.5313],[105.7324,29.8828],[105.5566,30.1025],[105.6445,30.2783],[105.8203,30.4541],[106.2598,30.1904],[106.6113,30.3223],[106.7871,30.0146],[107.0508,30.0146],[107.4902,30.6299],[107.4023,30.7617],[107.4902,30.8496],[107.9297,30.8496],[108.1934,31.5088],[108.5449,31.6846]]]}},{"type":"Feature","properties":{"id":"64","name":"宁夏","cp":[105.9961,37.3096],"childNum":5},"geometry":{"type":"Polygon","coordinates":[[[104.3262,37.4414],[105.8203,37.793],[105.9082,38.7158],[106.3477,39.2871],[106.7871,39.375],[106.9629,38.9795],[106.5234,38.3203],[106.7871,38.1885],[107.3145,38.1006],[107.666,37.8809],[107.3145,37.6172],[107.3145,37.0898],[106.6113,37.0898],[106.6113,36.7822],[106.4355,36.5625],[106.5234,36.4746],[106.5234,36.2549],[106.875,36.123],[106.9629,35.8154],[106.6992,35.6836],[106.4355,35.6836],[106.5234,35.332],[106.3477,35.2441],[106.2598,35.4199],[106.084,35.376],[105.9961,35.4199],[106.084,35.4639],[105.9961,35.4639],[105.8203,35.5518],[105.7324,35.7275],[105.3809,35.7715],[105.293,35.9912],[105.4688,36.123],[105.2051,36.6943],[105.293,36.8262],[104.8535,37.2217],[104.5898,37.2217],[104.5898,37.4414],[104.3262,37.4414]]]}},{"type":"Feature","properties":{"id":"46","name":"海南","cp":[109.9512,19.2041],"childNum":18},"geometry":{"type":"Polygon","coordinates":[[[108.6328,19.3799],[109.0723,19.6436],[109.248,19.9512],[109.5996,20.0391],[110.0391,20.127],[110.3906,20.127],[110.5664,20.2588],[110.6543,20.2588],[111.0938,19.9512],[111.2695,19.9951],[110.6543,19.1602],[110.5664,18.6768],[110.2148,18.5889],[110.0391,18.3691],[109.8633,18.3691],[109.6875,18.1055],[108.9844,18.2813],[108.6328,18.457],[108.6328,19.3799]]]}},{"type":"Feature","properties":{"id":"71","name":"台湾","cp":[121.0254,23.5986],"childNum":1},"geometry":{"type":"Polygon","coordinates":[[[121.9043,25.0488],[121.9922,25.0049],[121.8164,24.7412],[121.9043,24.5654],[121.6406,24.0381],[121.377,23.1152],[121.0254,22.6758],[120.8496,22.0605],[120.7617,21.9287],[120.6738,22.3242],[120.2344,22.5879],[120.0586,23.0713],[120.1465,23.6865],[121.0254,25.0488],[121.5527,25.3125],[121.9043,25.0488]]]}},{"type":"Feature","properties":{"id":"11","name":"北京","cp":[116.4551,40.2539],"childNum":19},"geometry":{"type":"Polygon","coordinates":[[[117.4219,40.21],[117.334,40.1221],[117.2461,40.0781],[116.8066,39.9902],[116.8945,39.8145],[116.8945,39.6826],[116.8066,39.5947],[116.543,39.5947],[116.3672,39.4629],[116.1914,39.5947],[115.752,39.5068],[115.4883,39.6387],[115.4004,39.9463],[115.9277,40.2539],[115.752,40.5615],[116.1035,40.6055],[116.1914,40.7813],[116.4551,40.7813],[116.3672,40.9131],[116.6309,41.0449],[116.9824,40.6934],[117.4219,40.6494],[117.2461,40.5176],[117.4219,40.21]]]}},{"type":"Feature","properties":{"id":"12","name":"天津","cp":[117.4219,39.4189],"childNum":18},"geometry":{"type":"Polygon","coordinates":[[[116.8066,39.5947],[116.8945,39.6826],[117.1582,39.6387],[117.1582,39.8145],[117.2461,40.0781],[117.334,40.1221],[117.4219,40.21],[117.6855,40.0781],[117.6855,39.9902],[117.5098,39.9902],[117.5098,39.7705],[117.6855,39.5947],[117.9492,39.5947],[117.8613,39.4189],[118.0371,39.2432],[118.0371,39.1992],[117.8613,39.1113],[117.5977,38.6279],[117.2461,38.54],[116.7188,38.8037],[116.7188,38.9355],[116.8945,39.1113],[116.8066,39.5947]]]}},{"type":"Feature","properties":{"id":"31","name":"上海","cp":[121.4648,31.2891],"childNum":19},"geometry":{"type":"Polygon","coordinates":[[[120.9375,31.0254],[121.2012,31.4648],[121.377,31.5088],[121.1133,31.7285],[121.2012,31.8604],[121.9922,31.5967],[121.9043,31.1572],[121.9922,30.8057],[121.2891,30.6738],[120.9375,31.0254]]]}},{"type":"Feature","properties":{"id":"81","name":"香港","cp":[114.2578,22.3242],"childNum":1},"geometry":{"type":"Polygon","coordinates":[[[114.6094,22.4121],[114.5215,22.1484],[114.3457,22.1484],[113.9063,22.1484],[113.8184,22.1924],[113.9063,22.4121],[114.1699,22.5439],[114.3457,22.5439],[114.4336,22.5439],[114.4336,22.4121],[114.6094,22.4121]]]}},{"type":"Feature","properties":{"id":"82","name":"澳门","cp":[113.5547,22.1484],"childNum":1},"geometry":{"type":"Polygon","coordinates":[[[113.5986,22.1649],[113.6096,22.1265],[113.5547,22.11],[113.5437,22.2034],[113.5767,22.2034],[113.5986,22.1649]]]}}]},
		"convertData":[{"name":"海南","value":[110.17,19.92,99925.73]},{"name":"河南","value":[113.700339,34.751827,17737.01]},{"name":"河北","value":[114.54095,38.058913,13177.64]},{"name":"湖北","value":[114.289984,30.5942,12174.96]},{"name":"广东","value":[113.293215,23.102603,8230.15]},{"name":"湖南","value":[113.03042,28.188898,8173.05]},{"name":"江西","value":[115.911671,28.658012,7423.08]},{"name":"黑龙江","value":[126.629804,45.774197,6829.69]},{"name":"四川","value":[104.112035,30.630737,6158.43]},{"name":"安徽","value":[117.321109,31.850184,5930.8]}],
		"data_city":[
			{
	            name: '海南',
	            value: 99925.73
	        },
	        {
	            name: '河南',
	            value: 17737.01
	        },
	        {
	            name: '河北',
	            value: 13177.64
	        },
	        {
	            name: '湖北',
	            value: 12174.96
	        },
	        {
	            name: '广东',
	            value: 8230.15
	        },
	        {
	            name: '湖南',
	            value: 8173.05
	        },
	        {
	            name: '江西',
	            value: 7423.08
	        },
	        {
	            name: '黑龙江',
	            value: 6829.69
	        },
	        {
	            name: '四川',
	            value: 6158.43
	        },
	        {
	            name: '安徽',
	            value: 5930.80
	        }
	    ]
	},
	"price_table":[{
          "name": "宝骏510"
          ,"num_price": "5-8"
          ,"num_discount": "0.1"
        },{
          "name": "帝豪GL"
          ,"num_price": "6.9-10"
          ,"num_discount": "1.1"
        },{
          "name": "博越"
          ,"num_price": "9.88-15.98"
          ,"num_discount": "1.0"
        },{
          "name": "艾瑞泽5"
          ,"num_price": "4.99-7.49"
          ,"num_discount": "102"
        },{
          "name": "传祺GA4"
          ,"num_price": "6.88-7.38"
          ,"num_discount": "0.6"
        }],
    "price_min":{
	  "text":"售价促销分析图",
	  "item":[
	    {"name":"北汽","color":"#f6021c","data_line":[3,5,6,4,2,6,5,4,1,5,2,6]},
	    {"name":"宝骏210","color":"#009ffe","data_line":[3,6,4,2,6,5,3,6,5,2,3,3]},
	    {"name":"帝豪","color":"#ffc857","data_line":[3,2,1,3,6,3,1,5,6,2,5,3]},
	    {"name":"博越","color":"#d851c7","data_line":[3,6,2,5,4,1,2,5,6,2,5,6]},
	    {"name":"博越1","color":"#51dc81","data_line":[3,2,1,5,6,2,2,5,2,2,5,5]}
	  ]
	}
}
// 用户关系词云图
var yy = 200;
var yy1 = 100;
var user_graph1 = {
	"tilte1":"绅宝D50-词云图",
	"tilte2":"帝豪",
	"tilte3":"逸动",
	"tilte4":"逸动",
	"title5":"科沃兹",
	"title5":"",
}
var user_graph={
	"text":"绅宝D50-词云图",
	"data_arr":[
		 {
              "name": "绅宝",
              x: 0,
              y: yy,
              "symbolSize": 80,
              "category": "绅宝",
              "draggable": "true"
          }, {
              "name": "耗油",
              x: 10,
              y: yy1,
              "symbolSize": 30,
              "category": "耗油",
              "draggable": "true"

          }, {
              "name": "HDFS",
              x: 30,
              y: yy,
              "symbolSize": 16,
              "category": "耗油",
              "draggable": "true"
          }, {
              x: 30,
              y: yy1,
              "name": "MapReduce",
              "symbolSize": 16,
              "category": "耗油",
              "draggable": "true"
          }, {
              x: 40,
              y: yy,
              "name": "YARN",
              "symbolSize": 16,
              "category": "耗油",
              "draggable": "true",
              "value": 1
          }, {
              x: 50,
              y: yy1,
              "name": "马立足",
              "symbolSize": 30,
              "category": "马立足",
              "draggable": "true"
          }, {
              x: 60,
              y: yy,
              "name": "Zookeeper",
              "symbolSize": 16,
              "category": "其它组件",
              "draggable": "true"
          }, {
              x: 70,
              y: yy1,
              "name": "Hive",
              "symbolSize": 16,
              "category": "马立足",
              "draggable": "true"
          }, {
              x: 80,
              y: yy,
              "name": "透气性好",
              "symbolSize": 30,
              "category": "透气性好",
              "draggable": "true"
          }, {
              x: 90,
              y: yy1,
              "name": "Scala",
              "symbolSize": 16,
              "category": "透气性好",
              "draggable": "true"
          }, {
              x: 100,
              y: yy,
              "name": "透气性好 SQL",
              "symbolSize": 16,
              "category": "透气性好",
              "draggable": "true"
          }, {
              x: 110,
              y: yy1,
              "name": "透气性好 Streaming",
              "symbolSize": 16,
              "category": "透气性好",
              "draggable": "true"
          }, {
              x: 120,
              y: yy,
              "name": "功能多",
              "symbolSize": 30,
              "category": "功能多",
              "draggable": "true"
          }, {
              x: 130,
              y: yy1,
              "name": "其它组件",
              "symbolSize": 30,
              "category": "其它组件",
              "draggable": "true"
          }, {
              x: 140,
              y: yy,
              "name": "Flume",
              "symbolSize": 16,
              "category": "其它组件",
              "draggable": "true"
          }, {
              x: 150,
              y: yy1,
              "name": "Kafka",
              "symbolSize": 16,
              "category": "其它组件",
              "draggable": "true"
          }, {
              x: 160,
              y: yy,
              "name": "Pig",
              "symbolSize": 16,
              "category": "马立足",
              "draggable": "true"
          }, {
              x: 170,
              y: yy1,
              "name": "NoSQL",
              "symbolSize": 30,
              "category": "NoSQL",
              "draggable": "true"
          }, {
              x: 180,
              y: yy,
              "name": "Redis",
              "symbolSize": 16,
              "category": "NoSQL",
              "draggable": "true"
          }, {
              x: 190,
              y: yy1,
              "name": "MongoDB",
              "symbolSize": 16,
              "category": "NoSQL",
              "draggable": "true"
          }, {
              x: 200,
              y: yy,
              "name": "LevelDB",
              "symbolSize": 16,
              "category": "NoSQL",
              "draggable": "true"
          }, {
              x: 210,
              y: yy1,
              "name": "数据挖掘",
              "symbolSize": 30,
              "category": "数据挖掘",
              "draggable": "true"
          }, {
              x: 220,
              y: yy,
              "name": "Mahout",
              "symbolSize": 16,
              "category": "数据挖掘",
              "draggable": "true"
          }, {
              x: 230,
              y: yy1,
              "name": "透气性好 MLlib",
              "symbolSize": 16,
              "category": "数据挖掘",
              "draggable": "true"
          }, {
              x: 240,
              y: yy,
              "name": "Python",
              "symbolSize": 16,
              "category": "数据挖掘",
              "draggable": "true"
          }, {
              x: 250,
              y: yy1,
              "name": "R语言",
              "symbolSize": 16,
              "category": "数据挖掘",
              "draggable": "true"
          }, {
              x: 260,
              y: yy,
              "name": "行业应用",
              "symbolSize": 30,
              "category": "行业应用",
              "draggable": "true"
          }, {
              x: 270,
              y: yy1,
              "name": "交通大数据",
              "symbolSize": 16,
              "category": "行业应用",
              "draggable": "true"
          }, {
              x: 280,
              y: yy,
              "name": "搜索引擎",
              "symbolSize": 16,
              "category": "行业应用",
              "draggable": "true"
          }, {
              x: 290,
              y: yy1,
              "name": "精确营销",
              "symbolSize": 16,
              "category": "行业应用",
              "draggable": "true"
          }, {
              x: 300,
              y: yy,
              "name": "环境大数据",
              "symbolSize": 16,
              "category": "行业应用",
              "draggable": "true"
          }, {
              x: 310,
              y: yy1,
              "name": "物联网",
              "symbolSize": 16,
              "category": "行业应用",
              "draggable": "true"
          }, {
              x: 320,
              y: yy,
              "name": "银行贷款风险评估",
              "symbolSize": 16,
              "category": "行业应用",
              "draggable": "true"
    }],
    "links_arr":[
    	 {
              "source": "绅宝",
              "target": "耗油"
          }, {
              "source": "绅宝",
              "target": "透气性好"
          }, {
              "source": "绅宝",
              "target": "功能多"
          }, {
              "source": "绅宝",
              "target": "其它组件"
          }, {
              "source": "绅宝",
              "target": "NoSQL"
          }, {
              "source": "绅宝",
              "target": "数据挖掘"
          }, {
              "source": "绅宝",
              "target": "行业应用"
          }, {
              "source": "耗油",
              "target": "HDFS"
          }, {
              "source": "耗油",
              "target": "YARN"
          }, {
              "source": "耗油",
              "target": "MapReduce"
          }, {
              "source": "马立足",
              "target": "Hive"
          }, {
              "source": "耗油",
              "target": "马立足"
          }, {
              "source": "其它组件",
              "target": "Zookeeper"
          }, {
              "source": "透气性好",
              "target": "Scala"
          }, {
              "source": "透气性好",
              "target": "透气性好 SQL"
          }, {
              "source": "透气性好",
              "target": "透气性好 Streaming"
          }, {
              "source": "其它组件",
              "target": "Flume"
          }, {
              "source": "其它组件",
              "target": "Kafka"
          }, {
              "source": "马立足",
              "target": "Pig"
          }, {
              "source": "NoSQL",
              "target": "Redis"
          }, {
              "source": "NoSQL",
              "target": "MongoDB"
          }, {
              "source": "NoSQL",
              "target": "LevelDB"
          }, {
              "source": "数据挖掘",
              "target": "Mahout"
          }, {
              "source": "数据挖掘",
              "target": "透气性好 MLlib"
          }, {
              "source": "数据挖掘",
              "target": "Python"
          }, {
              "source": "数据挖掘",
              "target": "R语言"
          }, {
              "source": "行业应用",
              "target": "交通大数据"
          }, {
              "source": "行业应用",
              "target": "搜索引擎"
          }, {
              "source": "行业应用",
              "target": "精确营销"
          }, {
              "source": "行业应用",
              "target": "环境大数据"
          }, {
              "source": "行业应用",
              "target": "物联网"
          }, {
              "source": "行业应用",
              "target": "银行贷款风险评估"
    }],
    "categories_arr": [
    	 {
              'name': '绅宝'
          }, {
              'name': '耗油'
          }, {
              'name': '马立足'
          }, {
              'name': '透气性好'
          }, {
              'name': '功能多'
          }, {
              'name': '其它组件'
          }, {
              'name': 'NoSQL'
          }, {
              'name': '数据挖掘'
          }, {
              'name': '行业应用'
          }
    ]

}
var he_data1 = {
	"data_arr":[
		{
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
	  },]
}
// 盒须图数据
var he_data = {
	"data_arr":[
		
		{
		  	"compoted":[
                [73, 79, 83, 78],
                [66, 73, 0, 70],
                [79, 77, 100, 79],
                [89, 91, 100, 85],
                [58, 65, 100, 60],
		    ],
		    "data_title": ['被动安全', '驾驶视野盲区', '使用中的安全性', '主动安全', '防盗'],
		    "option_title_text":"D50-安全指标分布图",
		    "scatter_data":[89, 77, 95, 96, 78]
		},
		{
		  	"compoted":[
                [78, 79, 100, 72],
                [60, 69, 0, 52],
                [62, 75, 100, 66],
                [67, 75, 0, 46],
                [36, 70, 0, 40],
                [75, 60, 50, 70],
                [100, 75, 0, 0],
                [71, 61, 0, 73],
		    ],
		    "data_title": ['感知品质','听觉品质','触觉品质','发动机舱开启与布局','密封性','做工工艺','整体感知品质','灯光带来的品质感'],
		    "option_title_text":"D50-感知品质指标分布图",
		    "scatter_data":[84, 88, 82, 90, 79, 89, 56, 71]
		},
		{
		  	"compoted":[
                [76, 81, 83, 76],
                [77, 78, 0, 80],
		    ],
		    "data_title": ['销量', '口碑'],
		    "option_title_text":"D50-软实力指标分布图",
		    "scatter_data":[73, 76]
		},
		{
		  	"compoted":[
                [63, 67, 0, 59],
                [60, 54, 100, 60],
                [72, 76, 0, 81],
                [68, 71, 0, 66],
                [60, 50, 0, 0],
                [55, 52, 50, 53],
                [71, 72, 67, 72],
		    ],
		    "data_title": ['普通故障', '耐久性', '交付质量', '抖动和异响', '油液渗漏', '影响安全或正常驾驶的故障', '故障率'],
		    "option_title_text":"D50-质量可靠性指标分布图",
		    "scatter_data":[50, 64, 92, 75, 0, 55, 60]
		},
		{
			"compoted":[
			  [63, 67, 0, 59],
			  [60, 54, 100, 60],
			  [72, 76, 0, 81],
			  [68, 71, 0, 66],
			  [60, 50, 0, 0],
			  [55, 52, 50, 53],
			  [71, 72, 67, 72],
			],
			"data_title": ['普通故障', '耐久性', '交付质量', '抖动和异响', '油液渗漏', '影响安全或正常驾驶的故障', '故障率'],
			"option_title_text":"D50-质量可靠性指标分布图",
			"scatter_data":[50, 64, 92, 75, 0, 55, 60]
		},
		{
			"compoted":[
			  [63, 67, 0, 59],
			  [60, 54, 100, 60],
			  [72, 76, 0, 81],
			  [68, 71, 0, 66],
			  [60, 50, 0, 0],
			  [55, 52, 50, 53],
			  [71, 72, 67, 72],
			],
			"data_title": ['普通故障', '耐久性', '交付质量', '抖动和异响', '油液渗漏', '影响安全或正常驾驶的故障', '故障率'],
			"option_title_text":"D50-质量可靠性指标分布图",
			"scatter_data":[50, 64, 92, 75, 0, 55, 60]
		},
		{
			"compoted":[
			  [63, 67, 0, 59],
			  [60, 54, 100, 60],
			  [72, 76, 0, 81],
			  [68, 71, 0, 66],
			  [60, 50, 0, 0],
			  [55, 52, 50, 53],
			  [71, 72, 67, 72],
			],
			"data_title": ['普通故障', '耐久性', '交付质量', '抖动和异响', '油液渗漏', '影响安全或正常驾驶的故障', '故障率'],
			"option_title_text":"D50-质量可靠性指标分布图",
			"scatter_data":[50, 64, 92, 75, 0, 55, 60]
		},
		{
			"compoted":[
			  [63, 67, 0, 59],
			  [60, 54, 100, 60],
			  [72, 76, 0, 81],
			  [68, 71, 0, 66],
			  [60, 50, 0, 0],
			  [55, 52, 50, 53],
			  [71, 72, 67, 72],
			],
			"data_title": ['普通故障', '耐久性', '交付质量', '抖动和异响', '油液渗漏', '影响安全或正常驾驶的故障', '故障率'],
			"option_title_text":"D50-质量可靠性指标分布图",
			"scatter_data":[50, 64, 92, 75, 0, 55, 60]
		},
		{
			"compoted":[
			  [63, 67, 0, 59],
			  [60, 54, 100, 60],
			  [72, 76, 0, 81],
			  [68, 71, 0, 66],
			  [60, 50, 0, 0],
			  [55, 52, 50, 53],
				[71, 72, 67, 72],
			],
			"data_title": ['普通故障', '耐久性', '交付质量', '抖动和异响', '油液渗漏', '影响安全或正常驾驶的故障', '故障率'],
			"option_title_text":"D50-质量可靠性指标分布图",
			"scatter_data":[50, 64, 92, 75, 0, 55, 60]
		},
		{
		  	"compoted":[
                [55, 100, 0, 50],
                [85, 79, 0, 76],
                [74, 71, 0, 71],
                [69, 69, 0, 76],
                [65, 69, 64, 75],
                [64, 69, 67, 73],
		    ],
		    "data_title": ['动力系统获奖情况','非内燃机/新能源','发动机启动/熄火','不同情况下的动力表现','加速表现及感受','动力客观参数及技术'],
		    "option_title_text":"D50-动力指标分布图",
		    "scatter_data":[60, 89, 76, 90, 69, 70]
		},
		{
		  	"compoted":[
                [64, 79, 67, 68],
                [60, 64, 83, 65],
                [72, 83, 83, 83],
                [67, 67, 75, 66],
                [65, 64, 50, 73],
                [71, 81, 75, 82],
                [66, 76, 71, 63],
                [61, 58, 69, 72],
                [84, 83, 100, 68],
            ],
		    "data_title": ['弯道表现','制动','车身稳定性','油门-离合踏板','变速箱客观配置','顺利驾驶的难易程度','转向性能','换档','操控客观参数及配置'],
		    "option_title_text":"D50-动力指标分布图",
		    "scatter_data":[77, 72, 90, 53, 74, 86, 80, 82, 50]
		}
	]
}
// 热力图数据
var hot_data ={
    "text":"绅宝D50-热力图",
    "hot_img_clier":[[3, 10, 5], [7, 12, 629], [17, 10, 101], [5, 10, 8], [1, 10, 21], [25, 10, 82], [14, 8, 80], [12, 10, 68], [4, 6, 55], [30, 6, 26], [3, 11, 247], [12, 11, 434], [11, 1, 127], [1, 12, 234], [11, 10, 63], [25, 11, 425], [7, 7, 87], [28, 10, 112], [21, 5, 149], [20, 7, 47], [10, 6, 172], [27, 6, 80], [22, 8, 92], [23, 9, 24], [23, 8, 106], [10, 12, 920], [30, 10, 23], [17, 11, 470], [20, 8, 37], [2, 12, 100], [9, 7, 167], [12, 12, 465], [13, 3, 206], [24, 10, 28], [15, 3, 369], [27, 3, 236], [13, 9, 18], [18, 10, 44], [8, 10, 73], [10, 8, 31], [2, 9, 44], [12, 8, 70], [8, 9, 25], [12, 4, 148], [14, 11, 357], [2, 11, 476], [6, 7, 82], [18, 1, 63], [20, 11, 247], [29, 11, 179], [5, 7, 73], [25, 9, 6], [14, 10, 39], [14, 9, 54], [22, 4, 331], [14, 6, 9], [16, 10, 69], [10, 11, 111], [11, 12, 483], [9, 12, 1566], [5, 12, 360], [13, 10, 53], [17, 1, 135], [12, 7, 42], [4, 9, 58], [5, 8, 54], [16, 1, 74], [19, 1, 0], [27, 11, 861], [17, 5, 107], [3, 4, 148], [31, 3, 498], [11, 9, 42], [23, 1, 7], [23, 10, 73], [10, 9, 58], [8, 12, 972], [24, 8, 112], [30, 7, 93], [19, 10, 50], [17, 12, 0], [28, 9, 34], [13, 11, 209], [15, 8, 71], [29, 9, 25], [21, 1, 1], [3, 12, 224], [6, 12, 931], [7, 11, 192], [7, 8, 89], [25, 8, 48], [17, 9, 45], [9, 11, 77], [16, 11, 233], [30, 5, 140], [3, 1, 77], [13, 12, 38], [26, 11, 233], [21, 10, 28], [25, 7, 45], [15, 11, 209], [6, 10, 12], [6, 9, 7], [24, 4, 135], [19, 6, 7], [29, 5, 89], [4, 12, 148], [14, 1, 255], [4, 10, 40], [22, 10, 96], [18, 11, 793], [9, 9, 33], [18, 9, 24], [27, 9, 69], [29, 8, 95], [26, 9, 20], [17, 7, 5], [16, 8, 137], [12, 9, 47], [13, 8, 35], [9, 10, 137], [16, 3, 479], [15, 10, 224], [24, 11, 485], [6, 8, 29], [1, 8, 56], [29, 10, 68], [20, 3, 249], [30, 9, 16], [28, 7, 70],[9, 1, 80], [27, 10, 30], [21, 11, 180], [12, 6, 89], [6, 11, 38], [10, 10, 53], [9, 3, 295], [15, 2, 22], [17, 2, 61], [30, 11, 136], [28, 11, 267], [27, 8, 97], [20, 9, 22], [23, 11, 304], [7, 3, 113], [19, 11, 374], [22, 9, 43], [26, 8, 85], [29, 7, 137], [1, 11, 100], [24, 6, 108], [18, 7, 68], [24, 7, 39], [20, 10, 78], [5, 1, 182], [19, 8, 140], [25, 4, 72], [22, 12, 319], [3, 5, 245], [4, 7, 15], [3, 8, 40], [4, 11, 74], [22, 11, 191], [12, 3, 396], [4, 1, 97], [21, 8, 89], [27, 2, 225], [28, 2, 166], [14, 2, 96], [5, 11, 255], [11, 8, 42], [15, 9, 20], [23, 7, 1], [2, 5, 133], [26, 7, 23], [3, 9, 15], [11, 5, 210], [8, 8, 76], [19, 9, 11], [21, 9, 60], [30, 8, 41], [8, 7, 83], [7, 10, 11], [18, 5, 108], [8, 6, 121], [6, 1, 137], [26, 10, 14], [24, 3, 427], [22, 7, 28], [27, 7, 41], [17, 8, 49], [6, 3, 61], [11, 6, 42], [25, 3, 579], [7, 9, 17], [1, 7, 84], [11, 3, 645], [6, 4, 299], [8, 1, 62], [7, 1, 237], [19, 7, 43], [6, 5, 532], [28, 4, 378], [3, 7, 70], [31, 7, 80], [4, 8, 90], [26, 4, 161], [29, 3, 241], [29, 6, 24], [30, 3, 411], [19, 12, -2], [19, 3, 345], [12, 5, 289], [19, 2, 181], [5, 4, 100], [24, 5, 109], [1, 9, 38], [24, 9, 108], [10, 5, 345], [13, 7, 23], [21, 7, 120], [28, 8, 82], [17, 3, 418], [29, 4, 411], [14, 7, 129], [15, 6, 89], [31, 5, 98], [28, 6, 43], [1, 5, 86], [26, 5, 282], [30, 12, 439], [8, 3, 149], [16, 7, 36], [9, 4, 226], [7, 4, 403], [14, 3, 294], [9, 5, 102], [25, 6, 139], [23, 3, 485], [6, 6, 60], [9, 6, 81], [8, 5, 180], [20, 6, 22], [17, 6, 136], [13, 4, 376], [7, 6, 90], [2, 7, 34], [22, 3, 233], [10, 4, 215], [10, 7, 51], [16, 5, 95], [10, 3, 352], [23, 6, 90], [5, 6, 53], [15, 4, 545], [11, 4, 65], [4, 5, 114], [2, 8, 164], [8, 4, 536], [21, 3, 164], [7, 5, 120], [13, 5, 510], [22, 5, 127], [21, 6, 200], [22, 6, 106], [20, 5, 581], [26, 3, 188], [5, 5, 168], [23, 2, 140], [28, 3, 222], [1, 6, 193], [27, 5, 466], [4, 4, 87], [23, 5, 166], [28, 5, 204], [14, 4, 257], [23, 4, 212], [18, 3, 547], [27, 4, 388], [30, 4, 64], [18, 6, 52], [21, 4, 491], [13, 6, 135], [19, 4, 49], [16, 4, 115], [20, 4, 272], [1, 4, 413], [2, 4, 214], [8, 2, 179], [14, 5, 174], [16, 9, 57], [18, 2, 38], [4, 2, 342], [19, 5, 498], [15, 7, 45], [11, 11, 1745], [13, 2, 203], [18, 8, 92], [3, 3, 140], [8, 11, 52], [15, 5, 71], [1, 3, 57], [4, 3, 294], [5, 3, 359], [29, 1, 4], [24, 1, -1], [18, 4, 187], [17, 4, 65], [29, 12, 495], [26, 12, 318], [31, 12, 777], [12, 2, 272], [20, 12, 228], [28, 12, 567], [25, 2, 221], [24, 2, 194], [21, 2, 43], [2, 3, 108], [26, 2, 292], [22, 2, 70], [16, 2, 64], [13, 1, 180], [10, 1, 122], [1, 1, 99], [12, 1, 275], [25, 12, 185], [24, 12, 387], [11, 2, 316], [27, 12, 232], [2, 1, 113], [7, 2, 248], [10, 2, 313], [23, 12, 242], [15, 1, 63], [21, 12, 269], [9, 2, 299], [6, 2, 267], [5, 2, 294], [3, 2, 257], [1, 2, 93], [31, 8, 56], [3, 6, 392], [2, 6, 192], [16, 6, 75], [25, 5, 289], [9, 8, 98], [20, 1, 16], [25, 1, 4], [2, 10, 11], [28, 1, -2], [16, 12, 11], [11, 7, 13], [5, 9, 25], [22, 1, 4], [26, 6, 20], [20, 2, 45], [2, 2, 70], [27, 1, 0], [31, 10, 20], [30, 1, 6], [31, 1, 3], [26, 1, 4], [15, 12, 3]]
}
// 桑基图  
var sankey_img = {
	"Sankey_data":{
		"nodes":[
	    {"name":"经济性"},
	    {"name":"车价"},
	    {"name":"维修保养花费"},
	    {"name":"保险花费"},
	    {"name":"油耗表现"},
	    {"name":"二手车保值率"},
	    {"name":"配置"},
	    {"name":"价格"},
	    {"name":"4S店维修配件费用"},
	    {"name":"首保的里程和时间"},
	    {"name":"维修保养费用3"},
	    {"name":"保险花费3"},
	    {"name":"交强险"},
	    {"name":"商业险"},
	    {"name":"油耗表现3"},
	    {"name":"高速油耗"},
	    {"name":"市区油耗"},
	    {"name":"二手车残值"},
	    {"name":"低配"},
	    {"name":"中配"},
	    {"name":"高配"},
	    {"name":"价格4"},
	    {"name":"性价比"},
	    {"name":"维修保养花费4"},
	    {"name":"4S店维修配件费用4"},
	    {"name":"首保的里程和时间4"},
	    {"name":"保险花费4"},
	    {"name":"交强险4"},
	    {"name":"玻璃险"},
	    {"name":"实际油耗"},
	    {"name":"公告油耗"},
	    {"name":"高速油耗4"},
	    {"name":"市区油耗4"},
	    {"name":"瞬时油耗"},
	    {"name":"二手车残值4"},
	    ],
	    "links":[
	        {"source":"经济性","target":"车价","value":293},
	        {"source":"经济性","target":"保险花费","value":2014},
	        {"source":"经济性","target":"油耗表现","value":1336},
	        {"source":"经济性","target":"维修保养花费","value":738},
	        {"source":"经济性","target":"二手车保值率","value":70},
	        {"source":"车价","target":"配置","value":512},
	        {"source":"车价","target":"价格","value":1442},
	        {"source":"保险花费","target":"保险花费3","value":289},
	        {"source":"保险花费","target":"交强险","value":3},
	        {"source":"保险花费","target":"商业险","value":1},
	        {"source":"油耗表现","target":"油耗表现3","value":1213},
	        {"source":"油耗表现","target":"高速油耗","value":98},
	        {"source":"油耗表现","target":"市区油耗","value":25},
	        {"source":"维修保养花费","target":"维修保养花费3","value":403},
	        {"source":"维修保养花费","target":"4S店维修配件费用","value":248},
	        {"source":"维修保养花费","target":"首保的里程和时间","value":87},
	        {"source":"二手车保值率","target":"二手车残值","value":87},
	        {"source":"配置","target":"低配","value":78},
	        {"source":"配置","target":"中配","value":13},
	        {"source":"配置","target":"高配","value":481},
	        {"source":"价格","target":"价格4","value":1219},
	        {"source":"价格","target":"性价比","value":223},
	        {"source":"维修保养花费3","target":"维修保养花费4","value":403},
	        {"source":"4S店维修配件费用","target":"4S店维修配件费用4","value":248},
	        {"source":"首保的里程和时间","target":"首保的里程和时间4","value":87},
	        {"source":"保险花费3","target":"保险花费4","value":289},
	        {"source":"交强险","target":"交强险4","value":3},
	        {"source":"商业险","target":"商业险4","value":1},
	        {"source":"油耗表现3","target":"实际油耗","value":1194},
	        {"source":"油耗表现3","target":"公告油耗","value":1},
	        {"source":"油耗表现3","target":"瞬时油耗","value":98},
	        {"source":"高速油耗","target":"高速油耗4","value":25},
	        {"source":"市区油耗","target":"市区油耗4","value":18},
	        {"source":"二手车残值","target":"二手车残值4","value":70},
	    ]
	},
	"Sankey_title":'绅宝D50-经济性指标声量分布'

}
// 指标tab切换业指标统计折线图
var user_zb_option_data = {
	"text":"绅宝D50-T1指标满意度分布",
	"data_x":['越野性能', '感知品质', '信息娱乐', '外观', '操控', '装备', '售后服务', '舒适性', '软实力', '动力', '零部件', '服务态度', '经济性', '安全', '实用性及便利性', '空间', '质量可靠性', '品牌', '内饰'],
	"series":[
		[717, 1409, 1861, 8774, 1920, 1920, 97, 2577, 89, 1568, 86, 1382, 1716, 3785, 2360, 1836, 808, 708, 3271],
		 [45, 106, 136, 768, 100, 61, 5, 143, 12, 174, 7, 120, 123, 45, 155, 106, 39, 109, 196],
		[99, 159, 279, 530, 388, 81, 20, 408, 19, 482, 20, 173, 185, 249, 402, 188, 285, 86, 220]
	]


}
  var new_car = {
    "text":'新车发布',
    "time":['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    "h":[200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    "car_event":[
        [
          {value:20, name:'迈巴赫'},
          {value:20, name:'哈佛'},
          {value:20, name:'奔驰'},
          {value:20, name:'奥迪'},
          {value:20, name:'凌派'},
          {value:20, name:'北京'},
          {value:20, name:'北京昌河'},
          {value:20, name:'其他'}
        ],
        [ {value:''},
          {value:120, name:'哈佛h6'},
          {value:120, name:'联盟广告1'},
          {value:120, name:'视频广告1'},
          {value:120, name:'百度1'},
          {value:120, name:'谷歌1'},
          {value:120, name:'必应1'},
          {value:120, name:'其他1'}
        ]
    ]
  }