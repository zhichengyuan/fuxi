// 汽车tab
var car_config = {"data": 
{
	"text": "中国汽车销量分布图", 
	"car_img": [
		{"carName": "2018款 PLUS 2.0D 手动柴油四驱版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, 
                {"carName": "2018款 2.0T 手动柴油四驱尊贵版", "rate": [46, 23, 45, 36, 56, 68, 71, 70, 58, 49, 0, 0]}, 
                {"carName": "2018款 40L 2.0T 手动柴油四驱尊贵版", "rate": [229, 114, 223, 179, 281, 339, 357, 350, 290, 246, 0, 0]}, 
                {"carName": "2018款 PLUS 2.0T 手动四驱尊贵版", "rate": [46, 23, 45, 36, 56, 68, 71, 70, 58, 49, 0, 0]}, 
                {"carName": "2018款 PLUS 2.0T 手动四驱尊享版", "rate": [92, 46, 89, 72, 112, 136, 143, 140, 116, 99, 0, 0]}, 
                {"carName": "2018款 PLUS 2.0T 自动四驱城市猎人版", "rate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, 
                {"carName": "2018款 PLUS 2.3T 自动四驱尊享版", "rate": [734, 365, 712, 573, 900, 1086, 1142, 1121, 929, 789, 0, 0]}, 
                {"carName": "2018款 PLUS 2.3T 自动四驱旗舰版", "rate": [321, 160, 312, 250, 394, 475, 499, 490, 406, 345, 0, 0]}, 
                {"carName": "2018款 PLUS 2.3T 自动四驱环塔冠军版", "rate": [229, 114, 223, 179, 281, 339, 357, 350, 290, 246, 0, 0]}
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
			"img_url":["./image/BJ40手动黑2.0.jpg","./image/BJ40手动.jpg","./image/BJ40柴油尊享版.jpg","./image/BJ40柴油尊享版.jpg","./image/BJ40自动尊享.jpg","./image/BJ40猎人版.jpg",],
			"img_name":["2018款 PLUS 2.0T 手动四驱尊贵版","2018款 PLUS 2.0T 手动四驱尊享版","2018款 PLUS 2.3T 自动四驱尊享版","2018款 PLUS 2.3T 自动四驱旗舰版","2018款 PLUS 2.3T 自动四驱环塔冠军版","2018款 2.0T 手动柴油四驱尊贵版",],
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
	"text": "中国汽车市场销量分布图", 
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
		"text":"中国汽车市场占有率",
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
		"text":"中国汽车市场销量分布图",
		"car_img":[
            {"carName": "2018款 PLUS 2.0T 手动四驱尊贵版", "rate": [46, 23, 45, 36, 56, 68, 71, 70, 58, 49, 0, 0]}, 
			{"carName": "2018款 改款 蓝标H7 2.0T 自动智享型", "rate": [511, 286, 517, 411, 575, 388, 283, 838, 1163, 1182, 0, 0]},
            {"carName": "2018款 2.0T 四驱至尊版 7座", "rate": [1581, 393, 972, 1379, 1395, 1398, 1434, 1493, 1588, 1502, 0, 0]},
            {"carName": "2016款 220TURBO CVT尊耀版", "rate": [667, 419, 717, 769, 691, 670, 794, 767, 832, 713, 0, 0]},
            {"carName": "2018款 235T 自动四驱豪华智联版", "rate": [171, 89, 127, 91, 81, 72, 91, 101, 90, 101, 0, 0]}
			
			
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
			"img_url":["./image/汉兰达.jpg","./image/君威.jpg","./image/思域.jpg","./image/君威.jpg","./image/君威GS.jpg"],
			"img_name":["北京BJ40 2018款 PLUS 2.0T 手动四驱尊贵版","哈弗H7 2018款 蓝标H7 2.0T 自动悦享型","汉兰达 2018款 2.0T 两驱精英版 5座","思域 2016款 180TURBO 手动舒适版","君威 2018款 GS 28T 穿越火线联名限量版"],
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
				"carname" :"北京BJ40",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"职场新鲜人",
					"num":18,
					"text_arr":["对未来个人发展目标清晰","愿为工作投入更多努力"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"情怀消费",
					"num":16,
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
				"name_car":"北京BJ40-省分布图",
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
				"carname" :"哈弗F7",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"创想乐活",
					"num":16,
					"text_arr":["理性、不跟风满足个人喜好","玩转各种社交平台","喜好尝试各种新鲜事物"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"小镇青年",
					"num":18,
					"text_arr":["年龄通常在25到34岁，生活在相对富裕的三四线城市，接受过大学以上的教育","他们没有住房贷款的沉重压力，开着10万左右的轿车","与一二线城市的朋友相比拥有更多的闲暇时间"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"吐槽屌丝",
					"num":10,
					"text_arr":["贫嘴","毒舌","话多"]
				}
			],
			"user_map_city":{
				"name_car":"哈弗F7-省分布图",
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
				"carname" :"君威",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"享受安逸",
					"num":15,
					"text_arr":["安稳舒适的过小日子"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"互联网原生",
					"num":8,
					"text_arr":["社交至上","多元朋友圈","个性存于社会"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"愤青艺术家",
					"num":12,
					"text_arr":["有才华的叛逆者"]
				}
			],
			"user_map_city":{
				"name_car":"君威 -省分布图",
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
				"carname" :"汉兰达",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"酷玩奶爸",
					"num":16,
					"text_arr":["全能家庭主男"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"顾家进取族",
					"num":18,
					"text_arr":["积极进取","追求事业的进步","也有很强的家庭责任感"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"旅游达人",
					"num":13,
					"text_arr":["爱好旅游并且会玩","心态乐观积极"]
				}
			],
			"user_map_city":{
				"name_car":"汉兰达-省分布图",
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
				"carname" :"思域",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"睿智前行族",
					"num":12,
					"text_arr":["他们的生活压力里不大","追求生活的享受，特立独行","坚持自己想法，具有冒险精神"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"轻中产",
					"num":18,
					"text_arr":["年龄范围为25到35岁，具有高收入、高消费、高负债的特点","在生活态度上更加积极","知足、乐观是他们身上的印记"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"精致生活",
					"num":20,
					"text_arr":["讲究仪式感","品质生活"]
				}
			],
			"user_map_city":{
				"name_car":"思域-省分布图",
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
				"carname" :"思域",
				"carimg" : "./image/car1.png"
			},
			"user_dialogue":[
				{
					"img_url":"./image/ds.png",
					"name":"睿智前行族",
					"num":12,
					"text_arr":["他们的生活压力里不大","追求生活的享受，特立独行","坚持自己想法，具有冒险精神"]
				},
				{
					"img_url":"./image/fision.png",
					"name":"轻中产",
					"num":18,
					"text_arr":["年龄范围为25到35岁，具有高收入、高消费、高负债的特点","在生活态度上更加积极","知足、乐观是他们身上的印记"]
				},
				{
					"img_url":"./image/tz.png",
					"name":"精致生活",
					"num":20,
					"text_arr":["讲究仪式感","品质生活"]
				}
			],
			"user_map_city":{
				"name_car":"思域-省分布图",
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
}}
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
		"car_scend":{
			"title":"指标分类型T4",
			"data_arr": [{'name': '车身结构', 'satisfied_second': 41, 'neutral_second': 1, 'no_satisfied_second': 5, 'no_satisfied_percentage': 10.64, 'satisfied_percentage': 87.23, 'neutra_percentage': 2.13}, {'name': '车身稳定控制(ESC/ESP/DSC等)', 'satisfied_second': 29, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 96.67, 'neutra_percentage': 3.33}, {'name': '前排头部气囊(气帘)', 'satisfied_second': 33, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '后驻车雷达', 'satisfied_second': 16, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': 5.56, 'satisfied_percentage': 88.89, 'neutra_percentage': 5.56}, {'name': '车身钢板', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '发动机电子防盗', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '大灯高度可调', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '并线辅助', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '雷达系统', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '前排侧气囊', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 100.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '自动大灯', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '胎压监测装置', 'satisfied_second': 5, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 83.33, 'neutra_percentage': 16.67}, {'name': '刹车辅助(EBA/BAS/BA等)', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': 'A柱盲区', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '安全带', 'satisfied_second': 3, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': 20.0, 'satisfied_percentage': 60.0, 'neutra_percentage': 20.0}, {'name': 'ABS防抱死', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 16.67, 'satisfied_percentage': 83.33, 'neutra_percentage': 0.0}, {'name': '激光大灯', 'satisfied_second': 2, 'neutral_second': 2, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 50.0, 'neutra_percentage': 50.0}, {'name': '车内监控', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 12, 'no_satisfied_percentage': 48.0, 'satisfied_percentage': 52.0, 'neutra_percentage': 0.0}, {'name': '制动力分配(EBD/CBC等)', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '防撞钢梁', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '顶棚强度', 'satisfied_second': 40, 'neutral_second': 3, 'no_satisfied_second': 7, 'no_satisfied_percentage': 14.0, 'satisfied_percentage': 80.0, 'neutra_percentage': 6.0}, {'name': '后桥限滑差速器/差速锁', 'satisfied_second': 15, 'neutral_second': 2, 'no_satisfied_second': 8, 'no_satisfied_percentage': 32.0, 'satisfied_percentage': 60.0, 'neutra_percentage': 8.0}, {'name': '碰撞测试成绩', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': 25.93, 'satisfied_percentage': 74.07, 'neutra_percentage': 0.0}, {'name': '全景摄像头', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 8, 'no_satisfied_percentage': 61.54, 'satisfied_percentage': 38.46, 'neutra_percentage': 0.0}, {'name': '事故后的车身形变', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 12.5, 'satisfied_percentage': 87.5, 'neutra_percentage': 0.0}, {'name': '安全带未系提示', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '主动刹车/主动安全系统', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 100.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '大灯清洗装置', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '防倾杆', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '卤素大灯', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '后视镜盲区', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 100.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '车道偏离预警系统', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '自动驻车/上坡辅助', 'satisfied_second': 8, 'neutral_second': 1, 'no_satisfied_second': 1, 'no_satisfied_percentage': 10.0, 'satisfied_percentage': 80.0, 'neutra_percentage': 10.0}, {'name': '牵引力控制(ASR/TCS/TRC等)', 'satisfied_second': 18, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 5.26, 'satisfied_percentage': 94.74, 'neutra_percentage': 0.0}, {'name': '主动安全配置', 'satisfied_second': 464, 'neutral_second': 0, 'no_satisfied_second': 7, 'no_satisfied_percentage': 1.49, 'satisfied_percentage': 98.51, 'neutra_percentage': 0.0}, {'name': 'LED大灯', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '刹车类型', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': 40.0, 'satisfied_percentage': 60.0, 'neutra_percentage': 0.0}, {'name': '前大灯亮度', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 50.0, 'satisfied_percentage': 50.0, 'neutra_percentage': 0.0}, {'name': '转向头灯(辅助灯)', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '前桥限滑差速器/差速锁', 'satisfied_second': 19, 'neutral_second': 3, 'no_satisfied_second': 30, 'no_satisfied_percentage': 57.69, 'satisfied_percentage': 36.54, 'neutra_percentage': 5.77}, {'name': '中控锁', 'satisfied_second': 3, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': 33.33, 'satisfied_percentage': 50.0, 'neutra_percentage': 16.67}, {'name': '陡坡缓降', 'satisfied_second': 5, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '车头视野', 'satisfied_second': 37, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 97.37, 'neutra_percentage': 2.63}, {'name': '儿童座椅接口', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '氙气大灯', 'satisfied_second': 2, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '防夹', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '自适应巡航', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '防炫目', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '整车整备质量', 'satisfied_second': 9, 'neutral_second': 2, 'no_satisfied_second': 2, 'no_satisfied_percentage': 15.38, 'satisfied_percentage': 69.23, 'neutra_percentage': 15.38}, {'name': '定速巡航', 'satisfied_second': 7, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '中央差速器锁止功能', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '影像辅助（摄像头）', 'satisfied_second': 20, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': 13.04, 'satisfied_percentage': 86.96, 'neutra_percentage': 0.0}, {'name': '前驻车雷达', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}, {'name': '儿童锁', 'satisfied_second': 0, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 0.0, 'neutra_percentage': 0.0}]
			},
		"car_first":{
			"title":"指标分类型T3",
			"data_arr": [{'name': '主动安全系统/装备', 'satisfied_second': 597, 'neutral_second': 8, 'no_satisfied_second': 58, 'no_satisfied_percentage': 8.75, 'satisfied_percentage': 90.05, 'neutra_percentage': 1.21}, {'name': '材料和结构', 'satisfied_second': 84, 'neutral_second': 4, 'no_satisfied_second': 12, 'no_satisfied_percentage': 12.0, 'satisfied_percentage': 84.0, 'neutra_percentage': 4.0}, {'name': '车内监控', 'satisfied_second': 13, 'neutral_second': 0, 'no_satisfied_second': 12, 'no_satisfied_percentage': 48.0, 'satisfied_percentage': 52.0, 'neutra_percentage': 0.0}, {'name': '针对儿童的安全设计', 'satisfied_second': 6, 'neutral_second': 0, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 100.0, 'neutra_percentage': 0.0}, {'name': '盲区位置及影响', 'satisfied_second': 1, 'neutral_second': 0, 'no_satisfied_second': 1, 'no_satisfied_percentage': 50.0, 'satisfied_percentage': 50.0, 'neutra_percentage': 0.0}, {'name': '使用安全装备', 'satisfied_second': 3, 'neutral_second': 1, 'no_satisfied_second': 2, 'no_satisfied_percentage': 33.33, 'satisfied_percentage': 50.0, 'neutra_percentage': 16.67}, {'name': '被动安全装备', 'satisfied_second': 42, 'neutral_second': 2, 'no_satisfied_second': 2, 'no_satisfied_percentage': 4.35, 'satisfied_percentage': 91.3, 'neutra_percentage': 4.35}, {'name': '刹车类型', 'satisfied_second': 3, 'neutral_second': 0, 'no_satisfied_second': 2, 'no_satisfied_percentage': 40.0, 'satisfied_percentage': 60.0, 'neutra_percentage': 0.0}, {'name': '碰撞表现', 'satisfied_second': 27, 'neutral_second': 0, 'no_satisfied_second': 8, 'no_satisfied_percentage': 22.86, 'satisfied_percentage': 77.14, 'neutra_percentage': 0.0}, {'name': '车头视野', 'satisfied_second': 37, 'neutral_second': 1, 'no_satisfied_second': 0, 'no_satisfied_percentage': 0.0, 'satisfied_percentage': 97.37, 'neutra_percentage': 2.63}, {'name': '外部照明', 'satisfied_second': 7, 'neutral_second': 2, 'no_satisfied_second': 1, 'no_satisfied_percentage': 10.0, 'satisfied_percentage': 70.0, 'neutra_percentage': 20.0}, {'name': '盲区辅助', 'satisfied_second': 21, 'neutral_second': 0, 'no_satisfied_second': 3, 'no_satisfied_percentage': 12.5, 'satisfied_percentage': 87.5, 'neutra_percentage': 0.0}, {'name': '整车属性', 'satisfied_second': 9, 'neutral_second': 2, 'no_satisfied_second': 2, 'no_satisfied_percentage': 15.38, 'satisfied_percentage': 69.23, 'neutra_percentage': 15.38}]
		},
		"zhu_data":{
		    "title":"BJ40-安全T2指标提及率分布",
		    "zhu_data_m":{
		      "x_data":{
		        "text":"T2指标",
		        "arr":['越野性能', '维修保养花费', '前脸', '油耗表现', '感知品质', '正前', '操作舒适性（非驾驶行为的）', '副驾驶空间', '弯道表现', '车联网/手机车机互联', '续航里程', '中控台整体造型', '动力系统获奖情况', 'Logo设计', '非实际感受的空间感', '车价', '内饰细节', '制动', '停车便利性', '售后服务', '驾驶员空间', '视野舒适性', '选材/用料', '非内燃机/新能源', '发动机启动/熄火', '内饰装饰件', '车机屏幕的属性及功能', '二手车保值率', '通过性', '温度舒适性', '外观细节', '被动安全','车内实用性配件', '油门-离合踏板', '车身稳定性', '不同情况下的动力表现', '音响', '家族化表达', '仪表盘上的屏幕', '便利性装备', '人机工程舒适性', '内饰整体感受', '变速箱客观配置', '加速表现及感受', '维修便利性', '正后角度', '车钥匙及锁系统的功能', '顺利驾驶的难易程度', '外观装饰件（“有无”影响）', '销量', '正侧', '使用中的安全性', '其他外部设备连接', '上下车便利性', '驾驶视野盲区', '第二排座椅舒适性', '普通故障', '外观装饰件', 'NVH舒适性', '耐久性', '零部件', '转向性能', '保险花费', '奔驰', '涉水性', '空间可变性', '前排空间', '正侧角度', '听觉品质', '口碑', '交付质量', '气味舒适性', '帝豪', '接打电话', '服务态度', '主动安全', '外观整体感受', '触觉品质', '内饰颜色', '动力客观参数及技术', '抖动和异响', '前排座椅舒适性', '正后', '车身线条风格', '防盗', '必要配置', '品牌', '换档', '发动机舱开启与布局', '密封性', '悬架舒适性', '底盘舒适性（乘坐）', '多媒体播放', '第二排空间', '人机交互方式及感受', '车身比例', '做工工艺', '座椅舒适性', '整体感知品质', '实用性及便利性', '脱困能力', '车身形式', '装载大件物品', '功能的易读、易理解、易用性', '舒适性装备', '车辆客观尺寸', '故障率', '内部储物', '中控造型', '影响安全或正常驾驶的故障', '操控客观参数及配置', '第三排空间（第三排）', '车身颜色', '灯光带来的品质感', '不同档位的动力表现']
		      },
		      "y_data":[3221, 215, 232, 396, 761, 85, 190, 122, 65, 60, 38, 13, 1, 1, 0, 635, 401, 402, 181, 126, 108, 76, 62, 31, 41, 30, 165, 16, 693, 59, 2482, 391, 216, 59, 446, 31, 75, 13, 151, 10, 7, 826, 249, 1131, 199, 21, 121, 215, 182, 112, 134, 25, 19, 29, 119, 90, 19, 2, 1346, 293, 183, 196, 83, 150, 55, 25, 109, 11, 27, 41, 38, 6, 0, 67, 939, 1421, 1227, 126, 221, 965, 299, 371, 76, 17, 51, 3, 193, 191, 49, 48, 71, 91, 30, 8, 103, 3, 91, 43, 5, 13, 826, 2493, 130, 184, 613, 680, 37, 107, 157, 68, 1, 1, 17, 2, 1]
		    }
		},
		"bing_data":{
            "text":"BJ40-安全指标分布",
            "tata_x":['视频广告', '百度', '谷歌', '必应', '其他'],
            "data_message": [{"value": 13,"name": "不满意261",},{"value": 84,"name": "满意1691"},{"value": 3,"name": "中立55"}]
          },
		"word_loud":[
				{
		            "name": "花鸟市场",
		            "value": 14
		        },
		        {
		            "name": "汽车",
		            "value": 9
		        },
		        {
		            "name": "视频",
		            "value": 90
		        },
		        {
		            "name": "电视",
		            "value": 825
		        },
		        {
		            "name": "Lover Boy 88",
		            "value": 514
		        },
		        {
		            "name": "动漫",
		            "value": 48
		        },
		        {
		            "name": "音乐",
		            "value": 53
		        },
		        {
		            "name": "直播",
		            "value": 163
		        },
		        {
		            "name": "广播电台",
		            "value": 86
		        },
		        {
		            "name": "戏曲曲艺",
		            "value": 17
		        },
		        {
		            "name": "演出票务",
		            "value": 6
		        },
		        {
		            "name": "给陌生的你听",
		            "value": 1
		        },
		        {
		            "name": "资讯",
		            "value": 1437
		        },
		        {
		            "name": "商业财经",
		            "value": 422
		        },
		        {
		            "name": "娱乐八卦",
		            "value": 353
		        },
		        {
		            "name": "军事",
		            "value": 331
		        },
		        {
		            "name": "科技资讯",
		            "value": 313
		        },
		        {
		            "name": "社会时政",
		            "value": 307
		        },
		        {
		            "name": "时尚",
		            "value": 43
		        },
		        {
		            "name": "网络奇闻",
		            "value": 15
		        },
		        {
		            "name": "旅游出行",
		            "value": 438
		        },
		        {
		            "name": "景点类型",
		            "value": 957
		        },
		        {
		            "name": "国内游",
		            "value": 927
		        },
		        {
		            "name": "远途出行方式",
		            "value": 908
		        },
		        {
		            "name": "酒店",
		            "value": 693
		        },
		        {
		            "name": "关注景点",
		            "value": 611
		        },
		        {
		            "name": "旅游网站偏好",
		            "value": 512
		        },
		        {
		            "name": "出国游",
		            "value": 382
		        },
		        {
		            "name": "交通票务",
		            "value": 312
		        },
		        {
		            "name": "旅游方式",
		            "value": 187
		        },
		        {
		            "name": "旅游主题",
		            "value": 163
		        },
		        {
		            "name": "港澳台",
		            "value": 104
		        },
		        {
		            "name": "本地周边游",
		            "value": 3
		        },
		        {
		            "name": "小卖家",
		            "value": 1331
		        },
		        {
		            "name": "全日制学校",
		            "value": 941
		        },
		        {
		            "name": "基础教育科目",
		            "value": 585
		        },
		        {
		            "name": "考试培训",
		            "value": 473
		        },
		        {
		            "name": "语言学习",
		            "value": 358
		        },
		        {
		            "name": "留学",
		            "value": 246
		        },
		        {
		            "name": "K12课程培训",
		            "value": 207
		        },
		        {
		            "name": "艺术培训",
		            "value": 194
		        },
		        {
		            "name": "技能培训",
		            "value": 104
		        },
		        {
		            "name": "IT培训",
		            "value": 87
		        },
		        {
		            "name": "高等教育专业",
		            "value": 63
		        },
		        {
		            "name": "家教",
		            "value": 48
		        },
		        {
		            "name": "体育培训",
		            "value": 23
		        },
		        {
		            "name": "职场培训",
		            "value": 5
		        },
		        {
		            "name": "金融财经",
		            "value": 1328
		        },
		        {
		            "name": "银行",
		            "value": 765
		        },
		        {
		            "name": "股票",
		            "value": 452
		        },
		        {
		            "name": "保险",
		            "value": 415
		        },
		        {
		            "name": "贷款",
		            "value": 253
		        },
		        {
		            "name": "基金",
		            "value": 211
		        },
		        {
		            "name": "信用卡",
		            "value": 180
		        },
		        {
		            "name": "外汇",
		            "value": 138
		        },
		        {
		            "name": "P2P",
		            "value": 116
		        },
		        {
		            "name": "贵金属",
		            "value": 98
		        },
		        {
		            "name": "债券",
		            "value": 93
		        },
		        {
		            "name": "网络理财",
		            "value": 92
		        },
		        {
		            "name": "信托",
		            "value": 90
		        },
		        {
		            "name": "征信",
		            "value": 76
		        },
		        {
		            "name": "期货",
		            "value": 76
		        },
		        {
		            "name": "公积金",
		            "value": 40
		        },
		        {
		            "name": "银行理财",
		            "value": 36
		        },
		        {
		            "name": "银行业务",
		            "value": 30
		        },
		        {
		            "name": "典当",
		            "value": 7
		        },
		        {
		            "name": "海外置业",
		            "value": 1
		        },
		        {
		            "name": "汽车",
		            "value": 1309
		        },
		        {
		            "name": "汽车档次",
		            "value": 965
		        },
		        {
		            "name": "汽车品牌",
		            "value": 900
		        },
		        {
		            "name": "汽车车型",
		            "value": 727
		        },
		        {
		            "name": "购车阶段",
		            "value": 461
		        },
		        {
		            "name": "二手车",
		            "value": 309
		        },
		        {
		            "name": "汽车美容",
		            "value": 260
		        },
		        {
		            "name": "新能源汽车",
		            "value": 173
		        },
		        {
		            "name": "汽车维修",
		            "value": 155
		        },
		        {
		            "name": "租车服务",
		            "value": 136
		        },
		        {
		            "name": "车展",
		            "value": 121
		        },
		        {
		            "name": "违章查询",
		            "value": 76
		        },
		        {
		            "name": "汽车改装",
		            "value": 62
		        },
		        {
		            "name": "汽车用品",
		            "value": 37
		        },
		        {
		            "name": "路况查询",
		            "value": 32
		        },
		        {
		            "name": "汽车保险",
		            "value": 28
		        },
		        {
		            "name": "陪驾代驾",
		            "value": 4
		        },
		        {
		            "name": "网络购物",
		            "value": 1275
		        },
		        {
		            "name": "做我的猫",
		            "value": 1088
		        },
		        {
		            "name": "只想要你知道",
		            "value": 907
		        },
		        {
		            "name": "团购",
		            "value": 837
		        },
		        {
		            "name": "比价",
		            "value": 201
		        },
		        {
		            "name": "海淘",
		            "value": 195
		        },
		        {
		            "name": "移动APP购物",
		            "value": 179
		        },
		        {
		            "name": "支付方式",
		            "value": 119
		        },
		        {
		            "name": "代购",
		            "value": 43
		        },
		        {
		            "name": "体育健身",
		            "value": 1234
		        },
		        {
		            "name": "体育赛事项目",
		            "value": 802
		        },
		        {
		            "name": "运动项目",
		            "value": 405
		        },
		        {
		            "name": "体育类赛事",
		            "value": 337
		        },
		        {
		            "name": "健身项目",
		            "value": 199
		        },
		        {
		            "name": "健身房健身",
		            "value": 78
		        },
		        {
		            "name": "运动健身",
		            "value": 77
		        },
		        {
		            "name": "家庭健身",
		            "value": 36
		        },
		        {
		            "name": "健身器械",
		            "value": 29
		        },
		        {
		            "name": "办公室健身",
		            "value": 3
		        },
		        {
		            "name": "商务服务",
		            "value": 1201
		        },
		        {
		            "name": "法律咨询",
		            "value": 508
		        },
		        {
		            "name": "化工材料",
		            "value": 147
		        },
		        {
		            "name": "广告服务",
		            "value": 125
		        },
		        {
		            "name": "会计审计",
		            "value": 115
		        },
		        {
		            "name": "人员招聘",
		            "value": 101
		        },
		        {
		            "name": "印刷打印",
		            "value": 66
		        },
		        {
		            "name": "知识产权",
		            "value": 32
		        },
		        {
		            "name": "翻译",
		            "value": 22
		        },
		        {
		            "name": "安全安保",
		            "value": 9
		        },
		        {
		            "name": "公关服务",
		            "value": 8
		        },
		        {
		            "name": "商旅服务",
		            "value": 2
		        },
		        {
		            "name": "展会服务",
		            "value": 2
		        },
		        {
		            "name": "特许经营",
		            "value": 1
		        },
		        {
		            "name": "休闲爱好",
		            "value": 1169
		        },
		        {
		            "name": "收藏",
		            "value": 412
		        },
		        {
		            "name": "摄影",
		            "value": 393
		        },
		        {
		            "name": "温泉",
		            "value": 230
		        },
		        {
		            "name": "博彩彩票",
		            "value": 211
		        },
		        {
		            "name": "美术",
		            "value": 207
		        },
		        {
		            "name": "书法",
		            "value": 139
		        },
		        {
		            "name": "DIY手工",
		            "value": 75
		        },
		        {
		            "name": "舞蹈",
		            "value": 23
		        },
		        {
		            "name": "钓鱼",
		            "value": 21
		        },
		        {
		            "name": "棋牌桌游",
		            "value": 17
		        },
		        {
		            "name": "KTV",
		            "value": 6
		        },
		        {
		            "name": "密室",
		            "value": 5
		        },
		        {
		            "name": "采摘",
		            "value": 4
		        },
		        {
		            "name": "电玩",
		            "value": 1
		        },
		        {
		            "name": "真人CS",
		            "value": 1
		        },
		        {
		            "name": "轰趴",
		            "value": 1
		        },
		        {
		            "name": "家电数码",
		            "value": 1111
		        },
		        {
		            "name": "手机",
		            "value": 885
		        },
		        {
		            "name": "电脑",
		            "value": 543
		        },
		        {
		            "name": "大家电",
		            "value": 321
		        },
		        {
		            "name": "家电关注品牌",
		            "value": 253
		        },
		        {
		            "name": "网络设备",
		            "value": 162
		        },
		        {
		            "name": "摄影器材",
		            "value": 149
		        },
		        {
		            "name": "影音设备",
		            "value": 133
		        },
		        {
		            "name": "办公数码设备",
		            "value": 113
		        },
		        {
		            "name": "生活电器",
		            "value": 67
		        },
		        {
		            "name": "厨房电器",
		            "value": 54
		        },
		        {
		            "name": "智能设备",
		            "value": 45
		        },
		        {
		            "name": "个人护理电器",
		            "value": 22
		        },
		        {
		            "name": "服饰鞋包",
		            "value": 1047
		        },
		        {
		            "name": "服装",
		            "value": 566
		        },
		        {
		            "name": "饰品",
		            "value": 289
		        },
		        {
		            "name": "鞋",
		            "value": 184
		        },
		        {
		            "name": "箱包",
		            "value": 168
		        },
		        {
		            "name": "奢侈品",
		            "value": 137
		        },
		        {
		            "name": "母婴亲子",
		            "value": 1041
		        },
		        {
		            "name": "孕婴保健",
		            "value": 505
		        },
		        {
		            "name": "母婴社区",
		            "value": 299
		        },
		        {
		            "name": "早教",
		            "value": 103
		        },
		        {
		            "name": "奶粉辅食",
		            "value": 66
		        },
		        {
		            "name": "童车童床",
		            "value": 41
		        },
		        {
		            "name": "关注品牌",
		            "value": 271
		        },
		        {
		            "name": "宝宝玩乐",
		            "value": 30
		        },
		        {
		            "name": "母婴护理服务",
		            "value": 25
		        },
		        {
		            "name": "纸尿裤湿巾",
		            "value": 16
		        },
		        {
		            "name": "妈妈用品",
		            "value": 15
		        },
		        {
		            "name": "宝宝起名",
		            "value": 12
		        },
		        {
		            "name": "童装童鞋",
		            "value": 9
		        },
		        {
		            "name": "胎教",
		            "value": 8
		        },
		        {
		            "name": "宝宝安全",
		            "value": 1
		        },
		        {
		            "name": "宝宝洗护用品",
		            "value": 1
		        },
		        {
		            "name": "软件应用",
		            "value": 1018
		        },
		        {
		            "name": "系统工具",
		            "value": 896
		        },
		        {
		            "name": "理财购物",
		            "value": 440
		        },
		        {
		            "name": "生活实用",
		            "value": 365
		        },
		        {
		            "name": "影音图像",
		            "value": 256
		        },
		        {
		            "name": "社交通讯",
		            "value": 214
		        },
		        {
		            "name": "手机美化",
		            "value": 39
		        },
		        {
		            "name": "办公学习",
		            "value": 28
		        },
		        {
		            "name": "应用市场",
		            "value": 23
		        },
		        {
		            "name": "母婴育儿",
		            "value": 14
		        },
		        {
		            "name": "游戏",
		            "value": 946
		        },
		        {
		            "name": "手机游戏",
		            "value": 565
		        },
		        {
		            "name": "PC游戏",
		            "value": 353
		        },
		        {
		            "name": "网页游戏",
		            "value": 254
		        },
		        {
		            "name": "游戏机",
		            "value": 188
		        },
		        {
		            "name": "模拟辅助",
		            "value": 166
		        },
		        {
		            "name": "个护美容",
		            "value": 942
		        },
		        {
		            "name": "护肤品",
		            "value": 177
		        },
		        {
		            "name": "彩妆",
		            "value": 133
		        },
		        {
		            "name": "美发",
		            "value": 80
		        },
		        {
		            "name": "香水",
		            "value": 50
		        },
		        {
		            "name": "个人护理",
		            "value": 46
		        },
		        {
		            "name": "美甲",
		            "value": 26
		        },
		        {
		            "name": "SPA美体",
		            "value": 21
		        },
		        {
		            "name": "花鸟萌宠",
		            "value": 914
		        },
		        {
		            "name": "绿植花卉",
		            "value": 311
		        },
		        {
		            "name": "狗",
		            "value": 257
		        },
		        {
		            "name": "其他宠物",
		            "value": 131
		        },
		        {
		            "name": "水族",
		            "value": 125
		        },
		        {
		            "name": "猫",
		            "value": 122
		        },
		        {
		            "name": "动物",
		            "value": 81
		        },
		        {
		            "name": "鸟",
		            "value": 67
		        },
		        {
		            "name": "宠物用品",
		            "value": 41
		        },
		        {
		            "name": "宠物服务",
		            "value": 26
		        },
		        {
		            "name": "书籍阅读",
		            "value": 913
		        },
		        {
		            "name": "网络小说",
		            "value": 483
		        },
		        {
		            "name": "关注书籍",
		            "value": 128
		        },
		        {
		            "name": "文学",
		            "value": 105
		        },
		        {
		            "name": "报刊杂志",
		            "value": 77
		        },
		        {
		            "name": "人文社科",
		            "value": 22
		        },
		        {
		            "name": "建材家居",
		            "value": 907
		        },
		        {
		            "name": "装修建材",
		            "value": 644
		        },
		        {
		            "name": "家具",
		            "value": 273
		        },
		        {
		            "name": "家居风格",
		            "value": 187
		        },
		        {
		            "name": "家居家装关注品牌",
		            "value": 140
		        },
		        {
		            "name": "家纺",
		            "value": 107
		        },
		        {
		            "name": "厨具",
		            "value": 47
		        },
		        {
		            "name": "灯具",
		            "value": 43
		        },
		        {
		            "name": "家居饰品",
		            "value": 29
		        },
		        {
		            "name": "家居日常用品",
		            "value": 10
		        },
		        {
		            "name": "生活服务",
		            "value": 883
		        },
		        {
		            "name": "物流配送",
		            "value": 536
		        },
		        {
		            "name": "家政服务",
		            "value": 108
		        },
		        {
		            "name": "摄影服务",
		            "value": 49
		        },
		        {
		            "name": "搬家服务",
		            "value": 38
		        },
		        {
		            "name": "物业维修",
		            "value": 37
		        },
		        {
		            "name": "婚庆服务",
		            "value": 24
		        },
		        {
		            "name": "二手回收",
		            "value": 24
		        },
		        {
		            "name": "鲜花配送",
		            "value": 3
		        },
		        {
		            "name": "维修服务",
		            "value": 3
		        },
		        {
		            "name": "殡葬服务",
		            "value": 1
		        },
		        {
		            "name": "求职创业",
		            "value": 874
		        },
		        {
		            "name": "创业",
		            "value": 363
		        },
		        {
		            "name": "目标职位",
		            "value": 162
		        },
		        {
		            "name": "目标行业",
		            "value": 50
		        },
		        {
		            "name": "兼职",
		            "value": 21
		        },
		        {
		            "name": "期望年薪",
		            "value": 20
		        },
		        {
		            "name": "实习",
		            "value": 16
		        },
		        {
		            "name": "雇主类型",
		            "value": 10
		        },
		        {
		            "name": "星座运势",
		            "value": 789
		        },
		        {
		            "name": "星座",
		            "value": 316
		        },
		        {
		            "name": "算命",
		            "value": 303
		        },
		        {
		            "name": "解梦",
		            "value": 196
		        },
		        {
		            "name": "风水",
		            "value": 93
		        },
		        {
		            "name": "面相分析",
		            "value": 47
		        },
		        {
		            "name": "手相",
		            "value": 32
		        },
		        {
		            "name": "公益",
		            "value": 90
		        }
		],
		"front_post_data":{
			"more":"http:www.baidu.com",
			"arr":[
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/f0a84095809160fe/78354006-1.html",
			  "text":"不野不浪，天冷了我只想文艺一波。",
			  "time":"2018-12-27"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/31b8403b8f96c1a3/78324232-1.html",
			  "text":"开上40 越野无疆",
			  "time":"2018-12-26"
			},
				{
                    "url":"https://club.autohome.com.cn/bbs/thread/73fa9e7e267e7a51/78300667-1.html ",
                    "text":"BJ40无所不能”！",
                    "time":"2018-12-25"
                },
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/614bec02c23118b2/78193720-1.html",
			  "text":"嘉陵江畔做一个有情怀的北京40越野人",
			  "time":"2018-12-19"
			},
			{
			  "url":"https://club.autohome.com.cn/bhttps://club.autohome.com.cn/bbs/thread/c6b404ed4782b925/78168307-1.html",
			  "text":"平淡才是真 宝贝儿与BJ40PLUS喜提‘C’位",
			  "time":"2018-12-18"
			}
		]
		},
		"negative_post_data":{
		   "more":"http:www.baidu.com",
		   "arr":[
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/ea693ec29c3c1061/78326551-1.html",
			  "text":"前挡没有外界因素，吹暖风突然炸裂，北京售后和4S店都不管",
			  "time":"2018-12-26 "
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/4c31afdc616c522e/78310561-1.html",
			  "text":"城市猎人发动机真面目？！",
			  "time":"2018-12-25 "
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/c30e4c0f10ab8ebf/78202128-1.html ",
			  "text":"40的分动箱就那么弱吗？有重庆车友说已经换了两个了.......",
			  "time":"2018-12-20"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/969b9135bdb90376/78198865-1.html ",
			  "text":"求助2.4老款40油泵总是坏怎么办",
			  "time":"2018-12-19"
			},
			{
			  "url":"https://club.autohome.com.cn/bbs/thread/2ab82b9b573118cb/78165969-1.html",
			  "text":"40plus 收音机很差，蓝牙电话很差",
			  "time":"2018-12-18"
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
var user_graph={
	"text":"北京BJ40-词云图",
	"data_arr":[
		 {
              "name": "北京BJ40",
              x: 0,
              y: yy,
              "symbolSize": 80,
              "category": "北京BJ40",
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
				[85, 70, 76, 67, 0],
				[82, 78, 79, 76, 100],
				[82, 74, 79, 77, 0],
				[89, 85, 87, 79, 0],
				[82, 68, 74, 68, 86],
				[80, 77, 80, 76, 50],
				[70, 81, 90, 78, 0],
				[82, 78, 83, 72, 100],
				[80, 53, 62, 40, 0],
				[77, 71, 72, 74, 50],
				[84, 72, 83, 61, 0],
				[81, 77, 80, 73, 100],
				[79, 76, 80, 71, 100],
				[88, 81, 85, 82, 0],
				[82, 71, 77, 71, 100],
				[92, 83, 87, 77, 67],
				[76, 66, 74, 61, 0],
				[88, 76, 78, 65, 0],
				[85, 79, 80, 73, 0]

		  ],
		  "data_title": ['信息娱乐', '越野性能', '感知品质', '装备', '操控', '外观', '售后服务', '舒适性', '软实力', '动力', '零部件', '服务态度', '经济性', '空间', '实用性 及便利性', '安全', '质量可靠性', '品牌', '内饰'],
		  "option_title_text":"北京BJ40-指标分布图",
		  "scatter_data":[76, 79, 79, 87, 74, 80, 90, 83, 62, 72, 83, 80, 80, 85, 77, 87, 74, 78, 80]
	  },]
}
// 盒须图数据
var he_data = {
	"data_arr":[
		
		{
            "compoted":[
          [0, 75, 79, 62],
          [0, 100, 0, 80],
          [0, 50, 100, 0],
          [0, 79, 100, 92],
          [0, 0, 100, 100],
          ],
          "data_title": ['被动安全', '驾驶视野盲区', '使用中的安全性', '主动安全', '防盗'],
          "option_title_text":"BJ40-安全",
          "scatter_data":[73, 87, 64, 88, 57]
      },
      {
        "compoted":[
      [0, 50, 100, 80],
      [0, 100, 100, 0],
      ],
      "data_title": ['销量', '口碑'],
      "option_title_text":"BJ40-软实力",
      "scatter_data":[65, 49]
  },

  {
    "compoted":[
  [0, 67, 81, 87],
  [0, 67, 0, 0],
  [0, 50, 75, 0],
  [0, 0, 100, 100],
  [0, 0, 0, 100],
  [0, 100, 0, 50],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  ],
  "data_title": ['感知品质','听觉品质','触觉品质','发动机舱开启与布局','密封性','做工工艺','整体感知品质','灯光带来的品质感'],
  "option_title_text":"BJ40-感知品质",
  "scatter_data":[78, 67, 73, 92, 27, 71, 100, 100]
},
{
    "compoted":[
  [0, 78, 0, 100],
  [0, 50, 56, 62],
  [0, 76, 80, 75],
  [0, 100, 100, 100],
  [0, 80, 100, 75],
  [0, 86, 100, 100],
  [0, 67, 50, 62],
  [0, 0, 0, 57],
  [0, 0, 100, 0],
  ],
  "data_title": ['弯道表现','制动','车身稳定性','油门-离合踏板','变速箱客观配置','顺利驾驶的难易程度','转向性能','换档','操控客观参数及配置'],
  "option_title_text":"BJ40-操控",
  "scatter_data":[65, 59, 83, 56, 70, 73, 73, 59, 100]
},
{
    "compoted":[
  [0, 100, 100, 0],
  [0, 0, 0, 100],
  [0, 100, 100, 0],
  [0, 0, 0, 0],
  [0, 68, 83, 67],
  [0, 70, 78, 74],
  ],
  "data_title": ['动力系统获奖情况','非内燃机/新能源','发动机启动/熄火','不同情况下的动力表现','加速表现及感受','动力客观参数及技术'],
  "option_title_text":"BJ40-动力",
  "scatter_data":[0, 94, 83, 81, 74, 68]
},
{
    "compoted":[
  [0, 67, 67, 100],
  [0, 100, 0, 0],
  [0, 0, 0, 0],
  [0, 72, 82, 84],
  [0, 0, 100, 0],
  [0, 100, 50, 67],
  [0, 100, 100, 100],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 100],
  [0, 82, 91, 70],
  [0, 80, 100, 100],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 75, 66, 58],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  ],
  "data_title": ['前脸', '正前','Logo设计','外观细节','家族化表达','正侧','外观装饰件（“有无”影响）','外观装饰件','正后角度','正侧角度','外观整体感受','正后','车身线条风格','车身比例','车身形式','车身颜色','车钥匙造型'],
  "option_title_text":"BJ40-外观",
  "scatter_data":[71, 59, 100, 79, 85, 80, 81, 100, 67, 100, 85, 78, 94, 67, 74, 88, 0]
}

	]
}
// 热力图数据
var hot_data ={
    "text":"北京BJ40-热力图",
    "hot_img_clier":[[3, 10, 7.5], [7, 12, 419.33], [17, 10, 67.33], [5, 10, 12.0], [1, 10, 31.5], [25, 10, 54.67], [14, 8, 53.33], [12, 10, 45.33], [4, 6, 36.67], [30, 6, 39.0], [3, 11, 164.67], [12, 11, 289.33], [11, 1, 84.67], [1, 12, 156.0], [11, 10, 42.0], [25, 11, 283.33], [7, 7, 58.0], [28, 10, 74.67], [21, 5, 99.33], [20, 7, 70.5], [10, 6, 114.67], [27, 6, 53.33], [22, 8, 61.33], [23, 9, 36.0], [23, 8, 70.67], [10, 12, 613.33], [30, 10, 34.5], [17, 11, 313.33], [20, 8, 55.5], [2, 12, 66.67], [9, 7, 111.33], [12, 12, 310.0], [13, 3, 137.33], [24, 10, 42.0], [15, 3, 246.0], [27, 3, 157.33], [13, 9, 27.0], [18, 10, 66.0], [8, 10, 48.67], [10, 8, 46.5], [2, 9, 66.0], [12, 8, 46.67], [8, 9, 37.5], [12, 4, 98.67], [14, 11, 238.0], [2, 11, 317.33], [6, 7, 54.67], [18, 1, 42.0], [20, 11, 164.67], [29, 11, 119.33], [5, 7, 48.67], [25, 9, 9.0], [14, 10, 58.5], [14, 9, 36.0], [22, 4, 220.67], [14, 6, 13.5], [16, 10, 46.0], [10, 11, 74.0], [11, 12, 322.0], [9, 12, 1044.0], [5, 12, 240.0], [13, 10, 35.33], [17, 1, 90.0], [12, 7, 63.0], [4, 9, 38.67], [5, 8, 36.0], [16, 1, 49.33], [19, 1, 0.0], [27, 11, 574.0], [17, 5, 71.33], [3, 4, 98.67], [31, 3, 332.0], [11, 9, 63.0], [23, 1, 10.5], [23, 10, 48.67], [10, 9, 38.67], [8, 12, 648.0], [24, 8, 74.67], [30, 7, 62.0], [19, 10, 33.33], [17, 12, 0.0], [28, 9, 51.0], [13, 11, 139.33], [15, 8, 47.33], [29, 9, 37.5], [21, 1, 1.5], [3, 12, 149.33], [6, 12, 620.67], [7, 11, 128.0], [7, 8, 59.33], [25, 8, 72.0], [17, 9, 67.5], [9, 11, 51.33], [16, 11, 155.33], [30, 5, 93.33], [3, 1, 51.33], [13, 12, 57.0], [26, 11, 155.33], [21, 10, 42.0], [25, 7, 67.5], [15, 11, 139.33], [6, 10, 18.0], [6, 9, 10.5], [24, 4, 90.0], [19, 6, 10.5], [29, 5, 59.33], [4, 12, 98.67], [14, 1, 170.0], [4, 10, 60.0], [22, 10, 64.0], [18, 11, 528.67], [9, 9, 49.5], [18, 9, 36.0], [27, 9, 46.0], [29, 8, 63.33], [26, 9, 30.0], [17, 7, 7.5], [16, 8, 91.33], [12, 9, 70.5], [13, 8, 52.5], [9, 10, 91.33], [16, 3, 319.33], [15, 10, 149.33], [24, 11, 323.33], [6, 8, 43.5], [1, 8, 37.33], [29, 10, 45.33], [20, 3, 166.0], [30, 9, 24.0], [28, 7, 46.67], [9, 1, 53.33], [27, 10, 45.0], [21, 11, 120.0], [12, 6, 59.33], [6, 11, 57.0], [10, 10, 35.33], [9, 3, 196.67], [15, 2, 33.0], [17, 2, 40.67], [30, 11, 90.67], [28, 11, 178.0], [27, 8, 64.67], [20, 9, 33.0], [23, 11, 202.67], [7, 3, 75.33], [19, 11, 249.33], [22, 9, 64.5], [26, 8, 56.67], [29, 7, 91.33], [1, 11, 66.67], [24, 6, 72.0], [18, 7, 45.33], [24, 7, 58.5], [20, 10, 52.0], [5, 1, 121.33], [19, 8, 93.33], [25, 4, 48.0], [22, 12, 212.67], [3, 5, 163.33], [4, 7, 22.5], [3, 8, 60.0], [4, 11, 49.33], [22, 11, 127.33], [12, 3, 264.0], [4, 1, 64.67], [21, 8, 59.33], [27, 2, 150.0], [28, 2, 110.67], [14, 2, 64.0], [5, 11, 170.0], [11, 8, 63.0], [15, 9, 30.0], [23, 7, 1.5], [2, 5, 88.67], [26, 7, 34.5], [3, 9, 22.5], [11, 5, 140.0], [8, 8, 50.67], [19, 9, 16.5], [21, 9, 40.0], [30, 8, 61.5], [8, 7, 55.33], [7, 10, 16.5], [18, 5, 72.0], [8, 6, 80.67], [6, 1, 91.33], [26, 10, 21.0], [24, 3, 284.67], [22, 7, 42.0], [27, 7, 61.5], [17, 8, 73.5], [6, 3, 40.67], [11, 6, 63.0], [25, 3, 386.0], [7, 9, 25.5], [1, 7, 56.0], [11, 3, 430.0], [6, 4, 199.33], [8, 1, 41.33], [7, 1, 158.0], [19, 7, 64.5], [6, 5, 354.67], [28, 4, 252.0], [3, 7, 46.67], [31, 7, 53.33], [4, 8, 60.0], [26, 4, 107.33], [29, 3, 160.67], [29, 6, 36.0], [30, 3, 274.0], [19, 12, -3.0], [19, 3, 230.0], [12, 5, 192.67], [19, 2, 120.67], [5, 4, 66.67], [24, 5, 72.67], [1, 9, 57.0], [24, 9, 72.0], [10, 5, 230.0], [13, 7, 34.5], [21, 7, 80.0], [28, 8, 54.67], [17, 3, 278.67], [29, 4, 274.0], [14, 7, 86.0], [15, 6, 59.33], [31, 5, 65.33], [28, 6, 64.5], [1, 5, 57.33], [26, 5, 188.0], [30, 12, 292.67], [8, 3, 99.33], [16, 7, 54.0], [9, 4, 150.67], [7, 4, 268.67], [14, 3, 196.0], [9, 5, 68.0], [25, 6, 92.67], [23, 3, 323.33], [6, 6, 40.0], [9, 6, 54.0], [8, 5, 120.0], [20, 6, 33.0], [17, 6, 90.67], [13, 4, 250.67], [7, 6, 60.0], [2, 7, 51.0], [22, 3, 155.33], [10, 4, 143.33], [10, 7, 34.0], [16, 5, 63.33], [10, 3, 234.67], [23, 6, 60.0], [5, 6, 35.33], [15, 4, 363.33], [11, 4, 43.33], [4, 5, 76.0], [2, 8, 109.33], [8, 4, 357.33], [21, 3, 109.33], [7, 5, 80.0], [13, 5, 340.0], [22, 5, 84.67], [21, 6, 133.33], [22, 6, 70.67], [20, 5, 387.33], [26, 3, 125.33], [5, 5, 112.0], [23, 2, 93.33], [28, 3, 148.0], [1, 6, 128.67], [27, 5, 310.67], [4, 4, 58.0], [23, 5, 110.67], [28, 5, 136.0], [14, 4, 171.33], [23, 4, 141.33], [18, 3, 364.67], [27, 4, 258.67], [30, 4, 42.67], [18, 6, 34.67], [21, 4, 327.33], [13, 6, 90.0], [19, 4, 73.5], [16, 4, 76.67], [20, 4, 181.33], [1, 4, 275.33], [2, 4, 142.67], [8, 2, 119.33], [14, 5, 116.0], [16, 9, 38.0], [18, 2, 57.0], [4, 2, 228.0], [19, 5, 332.0], [15, 7, 67.5], [11, 11, 1163.33], [13, 2, 135.33], [18, 8, 61.33], [3, 3, 93.33], [8, 11, 34.67], [15, 5, 47.33], [1, 3, 38.0], [4, 3, 196.0], [5, 3, 239.33], [29, 1, 6.0], [24, 1, -1.5], [18, 4, 124.67], [17, 4, 43.33], [29, 12, 330.0], [26, 12, 212.0], [31, 12, 518.0], [12, 2, 181.33], [20, 12, 152.0], [28, 12, 378.0], [25, 2, 147.33], [24, 2, 129.33], [21, 2, 64.5], [2, 3, 72.0], [26, 2, 194.67], [22, 2, 46.67], [16, 2, 42.67], [13, 1, 120.0], [10, 1, 81.33], [1, 1, 66.0], [12, 1, 183.33], [25, 12, 123.33], [24, 12, 258.0], [11, 2, 210.67], [27, 12, 154.67], [2, 1, 75.33], [7, 2, 165.33], [10, 2, 208.67], [23, 12, 161.33], [15, 1, 42.0], [21, 12, 179.33], [9, 2, 199.33], [6, 2, 178.0], [5, 2, 196.0], [3, 2, 171.33], [1, 2, 62.0], [31, 8, 37.33], [3, 6, 261.33], [2, 6, 128.0], [16, 6, 50.0], [25, 5, 192.67], [9, 8, 65.33], [20, 1, 24.0], [25, 1, 6.0], [2, 10, 16.5], [28, 1, -3.0], [16, 12, 16.5], [11, 7, 19.5], [5, 9, 37.5], [22, 1, 6.0], [26, 6, 30.0], [20, 2, 67.5], [2, 2, 46.67], [27, 1, 0.0], [31, 10, 30.0], [30, 1, 9.0], [31, 1, 4.5], [26, 1, 6.0], [15, 12, 4.5]]
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
	"Sankey_title":'北京BJ40-经济性指标声量分布'

}
// 指标tab切换业指标统计折线图
var user_zb_option_data = {
	"text":"BJ40-T1指标满意度分布",
	"data_x":['信息娱乐', '越野性能', '感知品质', '外观', '操控', '售后服务', '装备', '舒适性', '软实力', '动力', '零部件', '经济性', '服务态度', '安全', '质量可靠性', '实用性及便利性', '品牌', '空间', '内饰'],
	"series":[
	[28759, 473, 3737, 883, 5436, 1268, 104, 518, 1857, 93, 1577, 134, 1037, 733, 1691, 507, 895, 260, 850, 1305],
	[3288, 44, 440, 99, 704, 100, 4, 33, 157, 19, 177, 7, 93, 80, 55, 45, 75, 22, 37, 112],
	[7009, 153, 618, 189, 856, 456, 18, 48, 363, 41, 447, 42, 215, 126, 261, 202, 273, 61, 141, 231]
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