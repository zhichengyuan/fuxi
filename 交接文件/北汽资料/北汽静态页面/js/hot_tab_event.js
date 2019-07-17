//生成柱状图数据
function initData(text,data,chart,num) {
    console.log(text);
    var arrData = [];
    var legendData = [];
    var seriesValue = [];
    var bgColorList = ['#f1526d','#75a6f6','#ef7d4f','#ebb465','#6db983'
    ];
    data.forEach(function (ele,index) {
        legendData.push(ele.carName);
        arrData.push(ele.rate);
    })
    for (var i = 0; i < legendData.length; i++) {
        var seriesDataVal = null;
        seriesDataVal = {
            barWidth: '6%',//柱状条宽度
            barGap:"0",
            name:legendData[i],
            type:'bar',
            itemStyle: {
                normal: {
                    show: true,//鼠标悬停时显示label数据
                    barBorderRadius: [0, 0, 0, 0],//柱形图圆角，初始化效果
                    color: bgColorList[i]
                }
            },
            label: {
                normal: {
                    show: false, //显示数据
                    position: 'top'//显示数据位置 'top/right/left/insideLeft/insideRight/insideTop/insideBottom'
                }
            } ,
            data:arrData[i]
        };
        seriesValue.push(seriesDataVal);
    }
    console.log(seriesValue);
    buildChart(text,legendData, seriesValue,chart,num);
}
//生成柱状图
function buildChart(text,legendData, seriesValue,chart,num) {
    var echart = echarts.init(chart);
    var axisLabel = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var option = {
        title: {
            text: text,//正标题
            // backgroundColor:'#ccd7dc',
            left:'30px',
            top:'10px',
            // x: "left", //标题水平方向位置
            // y: "0px", //标题竖直方向位置
            // textStyle: {
            //     fontSize: 18,
            //     fontWeight: '700',
            //     color: '#000'
            // }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'//阴影，若需要为直线，则值为'line'
            }
        },
        toolbox: {
            show: true,
            feature: {
                // myTool1: {
                //     show: true,
                //     title: '自定义扩展方法1',
                //     icon: 'image://image/save_img.png',
                //     onclick: function (){
                //         alert('myToolHandler1')
                //     }
                // },
 
                dataView: {
                  readOnly: false,
                  icon:'image://image/save_data.png'
                },
                saveAsImage: {
                  icon:'image://image/save_img.png'
                },
                emphasis:{//触发时
                    iconStyle:{
                        color:"#000",
                        borderColor:"#000"//图形的描边颜色
                    }
                }
            }
        },
        legend: {
                data: legendData,
                y: '15%',//图例说明文字设置
                x:'right',
        },
        grid: {
            x:400,
            left: '3%',
            right: '4%',
            bottom: '10%',
            top:'50%',
            borderWidth:0,
            containLabel: true
        },
        xAxis: [{
            min: 0,
            type: 'category', //纵向柱状图，若需要为横向，则此处值为'value'， 下面 yAxis 的type值为'category'
            boundaryGap:true,
            name: '月份',
            splitLine: {
                show:false
            },
            data: axisLabel
        }
    ],
        yAxis: [{
        max: num,  
        splitNumber:10,
        type: 'value', 
        name:'销售数量',
        splitLine: {
            show:false
        }, 
        axisLabel: {  
                    show: true,  
                    interval: 'auto',  
                    formatter: '{value}'  
                    },  
                show: true
            }],
        label: {
            normal: { //显示bar数据
                show: true,
                position: 'top'
            }
        },
        series: seriesValue
    };

    echart.setOption(option,true);
}


// 新车事件
function new_car_fn(text,time_arr,h,time_arr_event) {
  var series_arr = [
      {
       type:'bar',
        barWidth : 2,
        barMinHeight: 150,
        itemStyle:{
            color:"#cccccc"
        },
        data: h
      }
  ];
  for(var i = 0; i < time_arr_event.length; i++) {
      series_arr.push({
          type: 'effectScatter',
          yAxisIndex: 0,
          symbolSize: 6,
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  color:'#ffffff',
                  backgroundColor:'#000000',
                  padding:5,
                  borderRadius:2,
                  formatter: function(params) {
                      if (typeof(params.data.name) == 'undefined') {
                          return "";
                      } else {
                          return params.data.name;
                      }
                  }
              }
          },
          itemStyle: {
              color: '#fc2a2d',
              shadowColor: '#eadfdb',
              shadowBlur: 16
          },

          data: time_arr_event[i]
      })
  }
      new_car_option = {
          title:{
            show:true,
            text:'新车发布',
            left:'center',
            top:20
          },
          toolbox: {
              feature: {
                  dataView: {
                      show: true,
                      readOnly: false
                  },
                  saveAsImage: {
                      show: true
                  }
              }
          },
          tooltip: {
              show: false
          },
          dataZoom: {
              start: 0,
              end: 10
          },
          xAxis: {
              type: 'category',
              show: 'true',
              axisTick: {
                  interval: 2
              },
              width: 100,
              data: time_arr
          },
          yAxis: [{
              show: false,
              type: 'value',
              max: 500
          }, {
              show: false,
              type: 'value',
              max: 500
          }],
          series: series_arr
      };
    return new_car_option;
}
//车配置
function car_pie_fn(text,data_car) {
    console.log(data_car);
  var occupancy_rate_img_option = {
      title: {
          text: text,
          left:'center'
      },
      xAxis: {
          name:'月份',
          splitLine: {
              show:false
          },
          axisLabel: {
              formatter: '{value} %'
          },
          position:'bottom'
      },
      toolbox: {
            show: true,
            feature: {
                dataView: {
                  readOnly: false,
                  icon:'image://image/save_data.png'
                },
                saveAsImage: {
                  icon:'image://image/save_img.png'
                }
            }
        },
      yAxis: {
          name:'市场占有率变化率',
          splitLine: {
          show:false
         },
          scale: true,
          axisLabel: {
              formatter: '{value} %'
          }
      },
      series: [{
          name: '1990',
          data: data_car[0],
          type: 'scatter',
          symbolSize:20,
          label: {
              emphasis: {
                  show: true,
                  formatter: function (param) {
                      return param.data[2];
                  },
                  position: 'top'
              }
          },
          itemStyle: {
              normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(120, 36, 50, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: '#2f86fa'
                  }, {
                      offset: 1,
                      color: '#2f86fa'
                  }])
              }
          }
      }, {
          name: '2015',
          data: data_car[1],
          type: 'scatter',
          symbolSize:20,
          label: {
              emphasis: {
                  show: true,
                  formatter: function (param) {
                      return param.data[2];
                  },
                  position: 'top'
              }
          },
          itemStyle: {
              normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: '#eb3b3d'
                  }, {
                      offset: 1,
                      color: '#eb3b3d'
                  }])
              }
          }
      }]
  };
  return occupancy_rate_img_option
}
// 地图销量
function user_fn(show_price,convertData,data_city) {
    echarts.registerMap('china', show_price);
    var data = data_city;
    var price_map_img_option = {
        title: {
            text: '售价市场概览',
            x: 'center',
            top:20
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if(isNaN(params.value)){
                    return "暂无数据";
                }else{
                    return params.name+':'+params.value;
                }
            }
        },
        toolbox: {
          show: true,
          feature: {
              dataView: {
                readOnly: false,
                icon:'image://image/save_data.png'
              },
              saveAsImage: {
                icon:'image://image/save_img.png'
              }
          }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['sell_area'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#3c3b40', '#5e3136'] 
            }
        },
        geo: {
            show: true,
            map: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#3c3b40',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series: [
                  {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData,
                    symbolSize: function(val) {
                        return 0
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                      itemStyle: {
                          normal: {
                              color: '#05C3F9'
                          }
                      }
                  },
                  {
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    aspectScale: 0.75,
                    showLegendSymbol: false,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                  }
        ]
    };
    return price_map_img_option;
}
// 促销图
function price_num_fn(text,item) {
    var res = [];
    var resName = [];
    for(var i = 0; i< item.length;i++) {
     resName.push(item[i].name);
     res.push({
              name: item[i].name,
              type: 'line',
              data: item[i].data_line,
              smooth: true,
              itemStyle:{
                  color:item[i].dcolor
              }
          });
    }
    var cuxiao_option = {
        title: {
            text: text,
            left: 'center',
            top:0
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
         toolbox: {
              show: true,
              feature: {
                  dataView: {
                    readOnly: false,
                    icon:'image://image/save_data.png'
                  },
                  saveAsImage: {
                    icon:'image://image/save_img.png'
                  }
              }
          },
        legend: {
            left: 'center',
            icon:'line',
            itemWidth:10,
            data: resName,
            top:30
        },
        xAxis: {
            type: 'category',
            name: '月',
            splitLine: {show: false},
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
            splitLine:{
                show:false
            }
        },
        grid: {
            left: '3%',
            right: '6%',
            bottom: '1%',
            containLabel: true
        },
        yAxis: {
            name: '优惠（万）',
            splitLine:{
                show:false
            }
        },
        series:res
    };
    return cuxiao_option;
}
// 热力图
function hot_img_fn(text,hot_data) {
  var hours = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10','11','12',
    '13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  var days = ['1', '2', '3','4', '5', '6', '7', '8', '9', '10', '11', '12'];
  var option = {
      title:{
          show:true,
          text:text,
          left:20,
          top:10
      },
      tooltip: {
          position: 'top'
      },
      animation: false,
      grid: {
          height: '50%',
          y: '10%',
          top:60
      },
     toolbox: {
          show: true,
          feature: {
              dataView: {
                readOnly: false,
                icon:'image://image/save_data.png'
              },
              saveAsImage: {
                icon:'image://image/save_img.png'
              }
          }
      },
      xAxis: {
          type: 'category',
          name:'(日)',
          data: hours,
          splitArea: {
              show: true
          }
      },
      yAxis: {
          name:'(月)',
          type: 'category',
          data: days,
          splitArea: {
              show: true
          }
      },
      visualMap: {
          min: 0,
          max: 500,
          calculable: true,
          orient: 'horizontal',
          right: '7%',
          top: '1%'
      },
      series: [{
          name: 'Punch Card',
          type: 'heatmap',
          data: hot_data,
          label: {
              normal: {
                  show: true
              }
          },
          itemStyle: {
              emphasis: {
                  shadowBlur: 20,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }]
  };
  return option
}
// 柱状图
function zhu_fn(title_text,zhu_data) {
    var zhu_option = {
          title: {
              text: title_text,
              top:10,
              left:20
          },
          color:'#f5292a',
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
                show: true,
                right:10,
                feature: {
                    dataView: {
                      readOnly: false,
                      icon:'image://image/save_data.png'
                    },
                    saveAsImage: {
                      icon:'image://image/save_img.png'
                    }
                }
            },
          xAxis: {
              type: 'value',
              name:'提及率',
              boundaryGap: [0, 0.01]
          },
          yAxis: {
              type: 'category',
              name:zhu_data.x_data.text,
              data:zhu_data.x_data.arr
          },
          series: [
              {
                  type: 'bar',
                  data: zhu_data.y_data
              }
          ]
     }
     return zhu_option;
}
// 桑基图
function sankey_fn(Sankey_data,Sankey_title) {
      var option = {
              title: {
                  text: Sankey_title,
                  left:20,
                  top:10
              },
              tooltip: {
                  trigger: 'item',
                  triggerOn: 'mousemove'

              },
              series: [
                {
                  type: 'sankey',
                  layout:'none',
                  top:'20%',
                  height:260,
                  data: Sankey_data.nodes,
                  links: Sankey_data.links,
                  focusNodeAdjacency: true,
                    itemStyle: {
                    normal: {
                      borderWidth: 1,
                      borderColor: '#aaa'
                    }
                  },
                  lineStyle: {
                    normal: {
                      curveness: 0.5
                    }
                  }   
                }
              ]
          }
      return option
}
//盒须图
function he_fn(compoted,data_title,option_title_text,scatter_data) {
  var data = echarts.dataTool.prepareBoxplotData(compoted)  
  var data_title = data_title ;
  var option_title_text = option_title_text;
  var scatter_data = scatter_data;
  var he_option = {
      title: [
          {
              text: option_title_text,
              left: 20,
              top:10
          },
      ],
      tooltip: {
          trigger: 'item',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          left: '10%',
          right:'10',
          bottom: '25%',
          height:180
      },
      toolbox: {
          show: true,
          top:15,
          right:20,
          feature: {
              dataView: {
                readOnly: false,
                icon:'image://image/save_data.png'
              },
              saveAsImage: {
                icon:'image://image/save_img.png'
              }
          }
      },
      xAxis: {
          type: 'category',
          data: data_title,
          boundaryGap: true,
          splitArea: {
              show: true
          },
          axisLabel:{
                interval: 0,
                rotate:30,
               textStyle: {
                  color: '#101010'
              }

          },
          splitLine: {
              show: false
          }
      },
      yAxis: {
          type: 'value',
          splitLine: {
              show: false
          }
      },
      series: [
          {
              type: 'boxplot',
              color:'#f62929',
              itemStyle:{
              borderColor:'#f62929',
              color:{
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 1,
                  y2: 0.35,
                  colorStops: [
                      {
                          offset: 1, color: '#318ae4' // 0% 处的颜色
                      },
                      {
                      offset: 1, color: '#71aeed' // 100% 处的颜色
                      }
                  ],
                  globalCoord: false // 缺省为 false
                  }
              },
              data: data.boxData,
              tooltip: {
                  show:false
              }
          },
          {
              type: 'scatter',
              color:'#f62929',
              zlevel:1,
              data: scatter_data
          }
      ]
  };
  return he_option;
}
// 指标饼图配置
function bing_fn(text,tata_x,data_message) {
  var bing_option = {
      title:{
          show:true,
          text:text,
          top:10,
          left:20
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}({d}%)"
      },
      legend: {
          orient: 'vertical',
          show: false,
          x: 'center',
          data: tata_x
      },
      toolbox: {
            show: true,
            feature: {
                dataView: {
                  readOnly: false,
                  icon:'image://image/save_data.png'
                },
                saveAsImage: {
                  icon:'image://image/save_img.png'
                }
            }
        },
      series: [

          {
              type: 'pie',
              radius:'60%',
              center: ['50%', '50%'],
              color:['#f5292a', '#009cff','#ffb005'],
              labelLine: {
                  normal: {
                      length: 20,
                      length2: 70,
                      lineStyle: {
                          color: '#333'
                      }
                  }

              },
              label: {
                  normal: {
                      formatter: '\n\n{a|{d}%}\n\n{b|{b}}\n\n',
                      padding: [0, -70],
                      rich: {
                          a: {
                              color: ['#f5292a','#009cff','#ffb005'],
                              fontSize: 18,
                              lineHeight: 20
                          },
                          b: {
                              fontSize: 14,
                              lineHeight: 20,
                              color: '#373b3e',
                              fontWeight:'bold'
                          }
                      }
                  }
              },
              data:data_message
          }
      ]
  };
  return bing_option;
}
// 用户关系词云图
function user_graph_fn(text,data_arr,links_arr,categories_arr) {
  var user_graph_option = {
      title: {
          text: text,
          top: "10",
          left: "20",
         
      },
      tooltip: {
          formatter: '{b}'
      },
      toolbox: {
          show: true,
          feature: {
              restore: {
                  show: true
              },
              saveAsImage: {
                  show: true
              }
          }
      },
      series: [{
          type: 'graph',
          layout: 'force',
          force: {
              repulsion: 60,
              gravity: 0.1,
              edgeLength: 20,
              layoutAnimation: true,
          },
          data: data_arr,
          links:links_arr,
          categories:categories_arr,
          roam: false,
          label: {
              normal: {
                  show: true,
                  position: 'inside',
                  formatter: '{b}',
                  fontSize: 12
              }
          },
          lineStyle: {
              normal: {
                  width:1,
                  color: 'source',
                  curveness: 0,
                  type: "solid"
              }
          }
      }]
  };
  return user_graph_option;
}
// 指标tab切换业指标统计折线图
function user_zb_fn(text,data_x,series_arr) {
  var user_zb_option = {
      title: {
          text: text,
          top:10,
          left:20
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['不满意','满意','中立'],
          right:'10%',
          top:5
      },
      grid: {
          left: '6%',
          right: '4%',
          bottom:'10%',
          height:200,
          containLabel: true
      },
      toolbox: {
          show: true,
          feature: {
              dataView: {
                readOnly: false,
                icon:'image://image/save_data.png'
              },
              saveAsImage: {
                icon:'image://image/save_img.png'
              }
          }
      },
      xAxis: {
          type: 'category',
          name:'指标',
          boundaryGap: false,
          axisLabel:{
              interval:0,
              rotate:20
          },
          
          data: data_x
      },
      yAxis: {
          type: 'value',
          name:'提及率'
      },
      series: [
          {
              name:'满意',
              type:'line',
              color:'#019afa',
              data:series_arr[0]
          },
          {
              name:'不满意',
              type:'line',
              color:'#f75653',
              data:series_arr[1]
          },
          {
              name:'中立',
              type:'line',
              color:'#feb006',
              data:series_arr[2]
          }
      ]
  };
  return user_zb_option
}
//词云图
function car_ci(data,name) {
  var cloun_option = {
    height:320,
    width:670,
    title: {
        text: name,
        x: 'center',
        textStyle: {
            fontSize: 23
        }

    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            console.log(params);

            // if(params.data){
            //     return params.data.name+'<br>'+params.data.value +'人'
            // } else {
            //     return '';
            // }
        }
    },
    series: [{
        type: 'wordCloud',
        gridSize: 1,
        sizeRange: [14,16],
        rotationRange: [0, 0],
        maskImage: maskImage,
        textPadding: 0,

        autoSize: {
            enable: true,
            minSize: 18
        },
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        textStyle: {
             normal: {
                color: function(v) {
                     var color = ['#4ecb72', '#36cbcb', '#fbd536', '#975ee5','#f3627a','#3aa1ff'];
                     var num =Math.floor(Math.random() * (5 + 1));
                    return color[num];
                },
            },
        },
        data: data
    }]
  };
  return cloun_option
}
// 用户优势气泡图
function user_advantage_fn (plantCap,titlename) {
    // var plantCap = user_config.data.user_advantage;
      var datalist = [
          {
              offset: [56, 48],
              symbolSize: 40,
              opacity: .95,
              fontSize:12,
              color: '#f467ce'
          }, {
              offset: [35, 80],
              symbolSize: 50,
              opacity: .88,
              fontSize:14,
              color: '#7aabe2'
          }, {
              offset: [20, 43],
              symbolSize: 66,
              opacity: .84,
              fontSize:13,
              color: '#ff7123'
          }, {
              offset: [83, 30],
              symbolSize: 66,
              opacity: .8,
              fontSize:14,
              color: '#ffc400'
          }, {
              offset: [36, 20],
              symbolSize: 50,
              opacity: .75,
              fontSize:14,
              color: '#5e333f'
          }, {
              offset: [64, 10],
              symbolSize: 40,
              opacity: .7,
              fontSize:14,
              color: '#5fe05c'
          }, {
              offset: [75, 75],
              symbolSize: 60,
              opacity: .68,
              fontSize:12,
              color: '#8a3147'
          }, {
              offset: [88, 62],
              symbolSize: 40,
              opacity: .6,
              fontSize:12,
              color: '#837bea'
          },{
            offset: [45, 62],
            symbolSize: 40,
            opacity: .6,
            fontSize:12,
            color: '#837bef'
        }
      ];
      var datas = [];
      for (var i = 0; i < plantCap.length; i++) {
          var item = plantCap[i];
          var itemToStyle = datalist[i];
          datas.push({
              name:  item.name,
              value: itemToStyle.offset,
              symbolSize: itemToStyle.symbolSize,
              label: {
                  normal: {
                      textStyle: {
                          fontSize: itemToStyle.fontSize
                      }
                  }
              },
              itemStyle: {
                  normal: {
                      color: itemToStyle.color,
                      opacity: itemToStyle.opacity
                  }
              },
          })
      }
      var user_advantage_option = {
            
            title: {
                text: titlename,
                top:10,
                left:20
              
        
            },
          grid: {
              show: false,
              top: 10,
              bottom: 10
          },
          xAxis: [{
              gridIndex: 0,
              type: 'value',
              show: false,
              min: 0,
              max: 100,
              nameLocation: 'middle',
              nameGap: 5
          }],
          toolbox: {
                show: true,
                feature: {
                    dataView: {
                      readOnly: false,
                      icon:'image://image/save_data.png'
                    },
                    saveAsImage: {
                      icon:'image://image/save_img.png'
                    }
                }
            },
          yAxis: [{
              gridIndex: 0,
              min: 0,
              show: false,
              max: 100,
              nameLocation: 'middle',
              nameGap: 30
          }],
          series: [{
              type: 'scatter',
              symbol: 'circle',
              symbolSize: 120,
              label: {
                  normal: {
                      show: true,
                      formatter: '{b}',
                      color: '#fff',
                      textStyle: {
                          fontSize: '20'
                      }
                  },
              },
              itemStyle: {
                  normal: {
                      color: '#00acea'
                  }
              },
              data: datas
          }]
      };
      return user_advantage_option;
}
// 用户tab页面地图
function map_city(name_title,data_map) {
    var nameColor = " rgb(55, 75, 113)"
    var name_fontFamily = '等线'
    var mapName = 'china'
        
    var geoCoordMap = {};
    /*获取地图数据*/
    var mapFeatures = echarts.getMap(mapName).geoJson.features;
    for(var i = 0;i < mapFeatures.length;i++){
      var name = mapFeatures[i].properties.name;
        // 地区经纬度
      geoCoordMap[name] = mapFeatures[i].properties.cp;
    }
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data_map.length; i++) {
            var geoCoord = geoCoordMap[data_map[i].name];
                res.push({
                    name: data_map[i].name,
                    value: geoCoord.concat(data_map[i].value),
                });
        }
        return res;
    }; 
    user_map_num_option = {
        title: {
            text: name_title,
            top:10,
            left:20,
            // textStyle: {
            //     color: nameColor,
            //     fontFamily: name_fontFamily,
            //     fontSize: 18
            // },
            subtextStyle:{
                fontSize:15,
                fontFamily:name_fontFamily
            }
        },
        toolbox: {
              show: true,
              feature: {
                  dataView: {
                    readOnly: false,
                    icon:'image://image/save_data.png'
                  },
                  saveAsImage: {
                    icon:'image://image/save_img.png'
                  }
              }
          },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if(params.data.name){
                  return params.data.name+'<br>'+params.data.value +'万辆'
                } else {
                  return '';
                }
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 300,
            left: 'center',
            top: 'bottom',
            text: ['High','Low'],
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#cfe8fe', '#b1d9fd'] 

            }
        },
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        width:460,
        series: [{
                type: 'scatter',
                coordinateSystem: 'geo',
                tooltip: {show: false},
                data: convertData(data_map),
                symbolSize: function(val) {
                    return 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'bottom',
                        show: true,
                        color:'#5991c0'
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6e04'
                    }
                }
            },
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,
                aspectScale: 1,
                showLegendSymbol: false, 
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data_map
            }

        ]
    };
    return user_map_num_option;
}
// 竞品配置图
function finished_goods_img(finished_goods,finished_goods_data) {
    var finished_goods_l_img_option = {
              title: {
                  text: finished_goods,
                  left:'center'
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#283b56'
                      }
                  }
              },
              toolbox: {
                  show: true,
                  right:10,
                  feature: {
                      dataView: {
                        readOnly: false,
                        icon:'image://image/save_data.png'
                      },
                      saveAsImage: {
                        icon:'image://image/save_img.png'
                      }
                  }
              },
              dataZoom: {
                  show: false,
                  start: 0,
                  end: 100
              },
              xAxis: [
                  {
                      name:'车型',
                      type: 'category',
                      splitLine:{
                          show:false
                      },
                      boundaryGap: true,
                      data:finished_goods_data.data_x
                  },
                  {
                      type: 'category',
                      boundaryGap: true,
                      splitLine:{
                          show:false
                      }
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      scale: true,
                      name: '销量（万）',
                      max: 30,
                      min: 0,
                      boundaryGap: [0.2, 0.2],
                      splitLine:{
                          show:false
                      }
                  },
                  {
                      type: 'value',
                      scale: true,
                      name: '口碑',
                      max: 500,
                      min: 0,
                      boundaryGap: [0.2, 0.2],
                      splitLine:{
                          show:false
                      }
                  }
              ],
              series: [
                  {
                      type:'bar',
                      xAxisIndex: 1,
                      yAxisIndex: 1,
                      data:finished_goods_data.data_bar,
                      itemStyle:{
                          color:'#f62929'
                      },
                      barWidth:40
                  },
                  {
                      type:'line',
                      data:finished_goods_data.data_line,
                      itemStyle:{
                          color:'#2f85fc'
                      },
                  }
              ]
      };
      return finished_goods_l_img_option;
}