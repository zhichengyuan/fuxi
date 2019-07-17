<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.zkjw.core.util.CMSUtil"%>
<%@page import="com.zkjw.core.modules.rightDefInfo.service.RightService"%>
<%@page import="com.zkjw.core.util.ConfigUtil"%>
<%@page import="com.zkjw.core.modules.indexstatistics.Statistics"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.zkjw.core.util.common.ParamUtil"%>
<%@page import="com.zkjw.core.util.common.DateUtil"%>
<%@page import="com.zkjw.core.dao.impl.BaseDao"%>
<%@page import="com.zkjw.core.util.BeanFactoryUtil"%>

<% 
Statistics statistics = new Statistics();
String key = request.getParameter("keyword");
if(key==null){key="";}
String car_name = CMSUtil.base16ToStr(request.getParameter("_car_name")) ;
if("请选择".equals(car_name)){car_name="";}
String startTime = ParamUtil.getString(CMSUtil.base16ToStr(request.getParameter("startTime")));
if(startTime==null){
	startTime=  "";//DateUtil.getMonthFirstDayStr();
}
String endTime = ParamUtil.getString(CMSUtil.base16ToStr(request.getParameter("endTime")));
if(endTime==null){
	 endTime=  "";//DateUtil.getSysDateStr();
}
String T1 = CMSUtil.base16ToStr(request.getParameter("_T1"));
String T2 = CMSUtil.base16ToStr(request.getParameter("_T2"));
String T3 = CMSUtil.base16ToStr(request.getParameter("_T3"));
String T4 = CMSUtil.base16ToStr(request.getParameter("_T4"));
long T=0;
String T_NAME = "";
if("请选择".equals(T1)){T1=null;}
if(!"".equals(T1)){T=1;T_NAME=T1;}
if("请选择".equals(T2)){T2=null;}
if(!"".equals(T2)){T=2;T_NAME=T2;}
if("请选择".equals(T3)){T3=null;}
if(!"".equals(T3)){T=3;T_NAME=T3;}
if("请选择".equals(T4)){T4=null;} 
if(!"".equals(T4)){T=4;T_NAME=T4;}

String keyword = CMSUtil.base16ToStr(request.getParameter("_keyword"));
if("请输入主题词".equals(keyword)){keyword=null;}
String satisfy = CMSUtil.base16ToStr(request.getParameter("_satisfy"));
String method = CMSUtil.base16ToStr(request.getParameter("_method"));
//List<Map<String,Object>> list = statistics.getListData(1661);
List<Map<String,Object>> list_cat = statistics.getListData2();
//List<Map<String,Object>> listdata = statistics.getListData(car_name,T1,T2,T3,T4,keyword,satisfy);
//北汽权限
	long userId=CMSUtil.getLoginUserId(request);
	BaseDao baseDao = (BaseDao)BeanFactoryUtil.getBean("baseDao");
	String sqlquanxian = "select DUANJUGUANLI from BQ_ROLE where USERID = "+userId;
	List<Map<String,Object>> listquanxian = new ArrayList<Map<String,Object>>();
	listquanxian = baseDao.find(sqlquanxian);
	int quanxian = 0;
	if(listquanxian.size()>0){
		quanxian = CMSUtil.intFormat(listquanxian.get(0).get("DUANJUGUANLI"),0);
	}
	//结束
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
	<title></title>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/css.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/cms/js/layer/skin/layer.css"/>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/cms/js/layer/skin/layer.ext.css"/>
	<script src="${pageContext.request.contextPath}/cms/js/jquery-1.7.2.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/cms/js/jquery.form.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/cms/js/baseCode16.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/cms/js/utiltool.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/cms/js/calendar/WdatePicker.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/cms/js/jquery.dialog.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/cms/js/jquery.form.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/cms/js/layer/layer.js" type="text/javascript"></script>
	<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath}/cms/ueditor/ueditor.config.js"></script>
	<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath}/cms/ueditor/ueditor.all.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath}/cms/ueditor/lang/zh-cn/zh-cn.js"></script>
 	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 	<style>
		.badInput{border:1px solid #fc4343};
		.goodInput{border:1px solid #e7e7e7};
		.auto{position: absolute;display:none;width:290px;overflow-y:hidden;overflow-x:hidden;} 
		.auto table{width:284px;} 
		.auto table tr{padding:2px;line-height:20px;background-color:white;margin:0;}
		.auto table tr td{padding:2px;line-height:20px;background-color:white;margin:0;}
		.auto table td{display:block;width:284px;height:20px;overflow:hidden;text-overflow:ellipsis;border:1px solid #a4b97f;border-top:none !important;}
		.auto table td a{width:284px;height:20px;overflow:hidden;text-overflow:ellipsis; white-space:nowrap;}
		.auto table tr td:hover{background-color: #c5c5c5;width:284px;}	
	</style>
 	
	<script type="text/javascript">
		$(function(){
			//全选
			$("#quanxuan").click(function(){
				$("input[name='checkbox2']").attr("checked",true);
			})
			//取消全选
			$("#quxiao").click(function(){
				$("input[name='checkbox2']").attr("checked",false);
			})	
			$("#queding").click(function(){
				var ids="";
				var id="";
				var checked=$('input[name="checkbox2"]:checked');
				 checked.each(function(){  
			    	ids +=$(this).val()+";"; 
			    	id+=$(this).attr('val')+",";  
			     });
			    var tes=$("#tes").val();
			    $("#"+tes).val(ids);
			    $("#"+tes+"_").val(id);
			    kuang.style.display="none";
			})	
			$("#noshow").click(function(){
				kuang.style.display="none";
			})	
		 
			$("#brandkeyword").click(function(){
				var keyword = $("#brandkeyword").val();
				if(keyword=="关键词"){
					var keyword = $("#brandkeyword").val('');
				}
			})
			
			$("#car_brand").click(function(){
				var car_name = $("#car_name1").val();
				var car_brand = $("#car_brand").val();
				if(car_name!=""){
					var car_name= $("#car_name1").val();
					var url="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/brand.jsp?car_name="+base16Str(car_name)+"&car_brand="+base16Str(car_brand);
				 	op(url);
			 	}else{
			 		alert("请选择车企");
			 	}
			})
			$("#car_type").click(function(){
				var car_brand= $("#car_brand1").val();
				var car_type = $("#car_type").val();
				if(car_brand!=""){
					var url="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/cartype.jsp?car_name=&car_brand="+base16Str(car_brand)+"&car_type="+base16Str(car_type);
				 	op(url);
				}else{
					alert("请选择品牌");
				}
			})
			$("#T1").click(function(){
				var T = $("#T1").val();
				var url="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/T1.jsp?id=1661;&T="+base16Str(T);
				op(url);
			})
			$("#T2").click(function(){
				var T = $("#T2").val();
				var id=$("#T1_").val();
				if(id!=""){
					var url="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/T2.jsp?id="+id+"&T="+base16Str(T);
					op(url);
				}else{
					alert("请选择一级指标");
				}
			})
			$("#T3").click(function(){
				var T =$("#T3").val();
				var id=$("#T2_").val();
				if(id!=""){
					var url="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/T3.jsp?id="+id+"&T="+base16Str(T);
					op(url);
				}else{
					alert("请选择二级指标");
				}
			})
			$("#T4").click(function(){
				var T=$("#T4").val();
				var id=$("#T3_").val();
				if(id!=""){
					var url="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/T4.jsp?id="+id+"&T="+base16Str(T);
					op(url);
				}else{
					alert("请选择三级指标");
				}
			})
			$("input").click(function(){$(this).focus();})
			$("#keyword").click(function(){
				var keyword = $("#keyword").val();
				if("请输入主题词"==keyword){
					 $("#keyword").val("")
				}
			})
		});
		
		
		function setT1(v,id){
			$("#T1").val(v);
			$("#T1_").val(id);
		}
		function setT2(v,id){
			$("#T2").val(v);
			$("#T2_").val(id);
		}
		function setT3(v,id){
			$("#T3").val(v);
			$("#T3_").val(id);
		}
		function setT4(v,id){
			$("#T4").val(v);
			$("#T4_").val(id);
		}	
		function getT(T2,T1){
			 var id = $("#"+T1).val();
			 var html= "<option value='0' selected=''>请选择</option>";
			 $.ajax({
			 	type: "post",
			 	url: "${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/ajaxData.jsp",
			 	data: {id:id},
			 	success: function(data){
			 		var obj= $.parseJSON(data);
			 		$.each(obj, function (key, value) {
			    		if(value.NAME){
			    			html+="<li><input value='"+value.CHNLNAME+"' val='"+value.CHANNELID+"' type='checkbox' checked=\"checked\" name='checkbox2' id='checkbox2'><span>"+value.CHNLNAME+"</span></li>";
			    		}else{
			    			html+="<li><input value='"+value.CHNLNAME+"' val='"+value.CHANNELID+"' type='checkbox' name='checkbox2' id='checkbox2'><span>"+value.CHNLNAME+"</span></li>";
			    		}
			    	});
			    	$("#").html(html);
			 	}
			}); 
		}
		function search(){
			var car_name = $("#car_name").val();
			var car_brand = $("#car_brand").val();
			var car_type = $("#car_type").val();
			var T1 = $("#T1").val();
			var T2 = $("#T2").val();
			var T3 = $("#T3").val();
			var T4 = $("#T4").val();
			var keyword = $("#keyword").val();
			var satisfy = $("#satisfy").val();
			var year = $('#year').val();
			var polymerize = $('#polymerize').val();
			var startime = $("#startTime").val();
			var endtime = $("#endTime").val();;
			$("#_startTime").val(startime);
			$("#_endTime").val(endtime);
			$("#_car_type").val(car_type);
			$("#_car_brand").val(car_brand);
			$("#_car_name").val(car_name);
			$("#_T1").val(T1);
			$("#_T2").val(T2);
			$("#_T3").val(T3);
			$("#_T4").val(T4);
			$("#_keyword").val(keyword);
			$("#_satisfy").val(satisfy);
			$("#_year").val(year);
			$("#_polymerize").val(polymerize);
			sub();
		}
		function clear(){
			var keyword = $("#keyword").val();
			if(keyword=="请输入主题词"){
				var keyword = $("#keyword").val('');
			}
		}
		
		function newweb(T,car,brand,type,Ts){
			 type =base16Str(type);
			 brand =base16Str(brand);
			 var keyword =$("#keyword").val();
			 var starTime = $("#starTime").val();
			 var endTime = $("#endTime").val();
			 var satisfy = base16Str($("#_satisfy").val());
			 window.open("${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/carlistData.jsp?T="+base16Str(T)+"&car="+base16Str(car)+"&Ts="+base16Str(Ts)+"&keyword="+base16Str(keyword)+"&endTime="+base16Str(endTime)+"&starTime="+base16Str(starTime)+"&brand="+brand+"&type="+type+"&satisfy="+satisfy,"","top=100,left=100,width=1000,height=600");
			
		}
		
		function jumping(carModels){
			$("#_carModel").val(carModels);
			alert($("#_carModel").val());
			base16Form('pageForm','pageForm');//加密Form
			
			//$("#pageForm").submit();
		}
		function setValue(v,id){
			$("#car_name").val(v);
			$("#car_name1").val(id);
		}
		
		function setBrand(v,id){
			$("#car_brand").val(v);
			$("#car_brand1").val(id);
		}
		
		function setType(v,id){
			$("#car_type").val(v);
		}
		function op(url){
		  window.open(url,"","top=100,left=100,width=350,height=350,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
		}
		function sub(){
			console.log($("#fomData").serialize());
			base16Form('fomData','fomData1');//加密Form
			var T1 = $("#_T1").val();
			var T2 = $("#_T2").val();
			var T3 = $("#_T3").val();
			var T4 = $("#_T4").val();
			if(T1=="请选择"){T1="";}
			if(T2=="请选择"){T2="";}
			if(T3=="请选择"){T3="";}
			if(T4=="请选择"){T4="";}
			var polymerize = $('#sortable input[name="polymerize"]:checked ').val();
			var html = "";
			var html1 ="";
			  $.ajax({
			 	type: "post",
			 	url: "${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/listSerchDataT.jsp",
			 	data: $("#fomData1").serialize(),
			 	beforeSend:function(XMLHttpRequest){
				    noticeDiv('正在查询数据!请稍候……');
			 		setTimeout(function(){closeNotice();},1000000);	
				}, 
			 	success: function(data){
			 		closeNotice();
			 		var obj= $.parseJSON(data);
			 		$.each(obj, function (key, value) {
			 			if(polymerize==0){
			 				var k = key+2;
			 			}else{
			 				var k = key+1;
			 			}
			 			if(polymerize==0&&key==obj.length-1){
			 				html1+="<tr></br><td class='firsttd' >"+1+"</td></br>"; 
			 				html1+="<td>"+value.BBS_TABLENAME+"</a>  </td>";
			 				html1+="<td>"+value.BRAND+"</a>  </td>";
			 				html1+="<td>"+value.PRICES+"</a>  </td>";
				 			html1+="<td> /</td>";
							html1+="<td>/</td>";
							html1+="<td> /</td>";
							html1+="<td>/</td>";
							html1+="<td class='firsttd'>"+value.COUNT+"</td>";
							html1+="<td class='firsttd'>0</td>";
							html1+="<td class='firsttd'>0</td>";
							html1+="<td class='firsttd'>0</td></tr>";
				    		html1+="</tr></br>";
			 			}else{
			 				var SATISFIED=value.SATISFIED!=null?value.SATISFIED:0;
			 				var NEUTRAL= value.NEUTRAL!=null?value.NEUTRAL:0;
			 				var UNSATISFY=value.UNSATISFY!=null?value.UNSATISFY:0;
			 				var PRICES=value.PRICES!=undefined?value.PRICES:"";
			 				var BRAND=value.BRAND!=undefined?value.BRAND:"";
			 				var BBS_TABLENAME=value.BBS_TABLENAME!=undefined?value.BBS_TABLENAME:"";
			 				var T1 = value.T1!=undefined?value.T1:"";
			 				var T2 = value.T2!=undefined?value.T2:"";
			 				var T3 = value.T3!=undefined?value.T3:"";
			 				var T4 = value.T4!=undefined?value.T4:"";
				 			html+="<tr></br><td class='firsttd' >"+k+"</td></br>"; 
				 			html+="<td><a href='javascript:void(0);' onclick='jumpingPrice(\""+PRICES+"\")'>"+PRICES+"</a>  </td>";
				 			html+="<td><a href='javascript:void(0);' onclick='jumpingBrand(\""+BRAND+"\")'>"+BRAND+"</a>  </td>";
				 			html+="<td><a href='javascript:void(0);' onclick='jumping(\""+BBS_TABLENAME+"\")'>"+BBS_TABLENAME+"</a>  </td>";
				 			html+="<td><a href='javascript:void(0);' onclick='newweb(\""+T1+"\",\""+PRICES+"\",\""+BRAND+"\",\""+BBS_TABLENAME+"\",\"T2\")'> "+T1+"</a></td>";
							html+="<td><a href='javascript:void(0);' onclick='newweb(\""+T2+"\",\""+PRICES+"\",\""+BRAND+"\",\""+BBS_TABLENAME+"\",\"T3\")'> "+T2+"</a></td>";
							html+="<td><a href='javascript:void(0);' onclick='newweb(\""+T3+"\",\""+PRICES+"\",\""+BRAND+"\",\""+BBS_TABLENAME+"\",\"T4\")'> "+T3+"</a></td>";
							html+="<td>"+T4+"</td>";
							html+="<td class='firsttd'><a href='javascript:void(0);' onclick='jumpingTijilv(\""+PRICES+"\",\""+BRAND+"\",\""+BBS_TABLENAME+"\",\""+T1+"\",\""+T2+"\",\""+T3+"\",\""+T4+"\")'>"+value.COUNT+"</a></td>";
							html+="<td class='firsttd'><a href='javascript:void(0);' onclick='jumpingManyi(\""+PRICES+"\",\""+BRAND+"\",\""+BBS_TABLENAME+"\",\""+T1+"\",\""+T2+"\",\""+T3+"\",\""+T4+"\")'>"+SATISFIED+"</a></td>";
							html+="<td class='firsttd'><a href='javascript:void(0);' onclick='jumpingZhongli(\""+PRICES+"\",\""+BRAND+"\",\""+BBS_TABLENAME+"\",\""+T1+"\",\""+T2+"\",\""+T3+"\",\""+T4+"\")'>"+NEUTRAL+"</a></td>";
							html+="<td class='firsttd'><a href='javascript:void(0);' onclick='jumpingBumanyi(\""+PRICES+"\",\""+BRAND+"\",\""+BBS_TABLENAME+"\",\""+T1+"\",\""+T2+"\",\""+T3+"\",\""+T4+"\")'>"+UNSATISFY+"</a></td></tr>";
				    		html+="</tr></br>";
			    		}
			    	});
			    	$("#list_l").html(html1+html); 
			 	}
			});
		}
		//提及率跳转
		function jumpingTijilv(car_name,car_brand,carModels,T1,T2,T3,T4){
			
			$("#__startTime").val($("#startTime").val());
			$("#__endTime").val($("#endTime").val());
			if(car_name!=null && car_name!=""){
				$("#_car_name11").val(car_name);
			}else{
				$("#_car_name11").val("");
			}
			
			if(car_brand!=null && car_brand!=""){
				$("#_car_brand11").val(car_brand);
			}else{
				$("#_car_brand11").val("");
			}
			
			if(carModels!=null && carModels!=""){
				$("#_carModels11").val(carModels);
			}else{
				$("#_carModels11").val("");
			}
			
			if(T1!=null && T1!=""){
				$("#1_T1").val(T1);
			}else{
				$("#1_T1").val("");
			}
			
			if(T2!=null && T2!=""){
				$("#1_T2").val(T2);
			}else{
				$("#1_T2").val("");
			}
			
			if(T3!=null && T3!=""){
				$("#1_T3").val(T3);
			}else{
				$("#1_T3").val("");
			}
			
			if(T4!=null && T4!=""){
				$("#1_T4").val(T4);
			}else{
				$("#1_T4").val("");
			}
			
			
			$("#1_manyi").val("");
			$("#1_zhongli").val("");
			$("#1_bumanyi").val("");
			base16Form('pageForm','pageForm1');//加密Form
			$("#pageForm1").submit();
		}
		
		
		//满意跳转
		function jumpingManyi(car_name,car_brand,carModels,T1,T2,T3,T4){
			
			
			$("#__startTime").val($("#startTime").val());
			$("#__endTime").val($("#endTime").val());
			if(car_name!=null && car_name!=""){
				$("#_car_name11").val(car_name);
			}else{
				$("#_car_name11").val("");
			}
			
			if(car_brand!=null && car_brand!=""){
				$("#_car_brand11").val(car_brand);
			}else{
				$("#_car_brand11").val("");
			}
			
			if(carModels!=null && carModels!=""){
				$("#_carModels11").val(carModels);
			}else{
				$("#_carModels11").val("");
			}
			
			if(T1!=null && T1!=""){
				$("#1_T1").val(T1);
			}else{
				$("#1_T1").val("");
			}
			
			if(T2!=null && T2!=""){
				$("#1_T2").val(T2);
			}else{
				$("#1_T2").val("");
			}
			
			if(T3!=null && T3!=""){
				$("#1_T3").val(T3);
			}else{
				$("#1_T3").val("");
			}
			
			if(T4!=null && T4!=""){
				$("#1_T4").val(T4);
			}else{
				$("#1_T4").val("");
			}
			
			
			$("#1_manyi").val("1");
			$("#1_zhongli").val("");
			$("#1_bumanyi").val("");
			base16Form('pageForm','pageForm1');//加密Form
			$("#pageForm1").submit();
		}
		//中立跳转
		function jumpingZhongli(car_name,car_brand,carModels,T1,T2,T3,T4){
			$("#__startTime").val($("#startTime").val());
			$("#__endTime").val($("#endTime").val());
			if(car_name!=null && car_name!=""){
				$("#_car_name11").val(car_name);
			}else{
				$("#_car_name11").val("");
			}
			
			if(car_brand!=null && car_brand!=""){
				$("#_car_brand11").val(car_brand);
			}else{
				$("#_car_brand11").val("");
			}
			
			if(carModels!=null && carModels!=""){
				$("#_carModels11").val(carModels);
			}else{
				$("#_carModels11").val("");
			}
			
			if(T1!=null && T1!=""){
				$("#1_T1").val(T1);
			}else{
				$("#1_T1").val("");
			}
			
			if(T2!=null && T2!=""){
				$("#1_T2").val(T2);
			}else{
				$("#1_T2").val("");
			}
			
			if(T3!=null && T3!=""){
				$("#1_T3").val(T3);
			}else{
				$("#1_T3").val("");
			}
			
			if(T4!=null && T4!=""){
				$("#1_T4").val(T4);
			}else{
				$("#1_T4").val("");
			}
			
			
			$("#1_manyi").val("");
			$("#1_zhongli").val("1");
			$("#1_bumanyi").val("");
			base16Form('pageForm','pageForm1');//加密Form
			$("#pageForm1").submit();
		}
		//不满意跳转
		function jumpingBumanyi(car_name,car_brand,carModels,T1,T2,T3,T4){
			$("#__startTime").val($("#startTime").val());
			$("#__endTime").val($("#endTime").val());
			if(car_name!=null && car_name!=""){
				$("#_car_name11").val(car_name);
			}else{
				$("#_car_name11").val("");
			}
			if(car_brand!=null && car_brand!=""){
				$("#_car_brand11").val(car_brand);
			}else{
				$("#_car_brand11").val("");
			}
			if(carModels!=null && carModels!=""){
				$("#_carModels11").val(carModels);
			}else{
				$("#_carModels11").val("");
			}
			if(T1!=null && T1!=""){
				$("#1_T1").val(T1);
			}else{
				$("#1_T1").val("");
			}
			if(T2!=null && T2!=""){
				$("#1_T2").val(T2);
			}else{
				$("#1_T2").val("");
			}
			if(T3!=null && T3!=""){
				$("#1_T3").val(T3);
			}else{
				$("#1_T3").val("");
			}
			if(T4!=null && T4!=""){
				$("#1_T4").val(T4);
			}else{
				$("#1_T4").val("");
			}
			$("#1_manyi").val("");
			$("#1_zhongli").val("");
			$("#1_bumanyi").val("1");
			base16Form('pageForm','pageForm1');//加密Form
			$("#pageForm1").submit();
		}
		function jumping(carModels){
			$("#__startTime").val($("#startTime").val());
			$("#__endTime").val($("#endTime").val());
			$("#_carModels11").val(carModels);
			$("#1_T1").val("");
			$("#1_T2").val("");
			$("#1_T3").val("");
			$("#1_T4").val("");
			$("#_car_name11").val("");
			$("#_car_brand11").val("");
			$("#1_manyi").val("");
			$("#1_zhongli").val("");
			$("#1_bumanyi").val("");
			base16Form('pageForm','pageForm1');//加密Form
			$("#pageForm1").submit();
		}
		function jumpingPrice(prices){
			$("#__startTime").val($("#startTime").val());
			$("#__endTime").val($("#endTime").val());
			$("#_car_name11").val(prices);
			$("#1_T1").val("");
			$("#1_T2").val("");
			$("#1_T3").val("");
			$("#1_T4").val("");
			$("#_car_brand11").val("");
			$("#_carModels11").val("");
			$("#1_manyi").val("");
			$("#1_zhongli").val("");
			$("#1_bumanyi").val("");
			base16Form('pageForm','pageForm1');//加密Form
			$("#pageForm1").submit();
		}
		function jumpingBrand(brand){
			$("#__startTime").val($("#startTime").val());
			$("#__endTime").val($("#endTime").val());
			$("#1_T1").val("");
			$("#1_T2").val("");
			$("#1_T3").val("");
			$("#1_T4").val("");
			$("#_carModels11").val("");
			$("#_car_name11").val("");
			$("#_car_brand11").val(brand);
			$("#1_manyi").val("");
			$("#1_zhongli").val("");
			$("#1_bumanyi").val("");
			base16Form('pageForm','pageForm1');//加密Form
			$("#pageForm1").submit();
		}
		function setValue(v,id){
			$("#car_name").val(v);
			$("#car_name1").val(id);
		}
		function setBrand(v,id){
			$("#car_brand").val(v);
			$("#car_brand1").val(id);
		}
		function setType(v,id){
			$("#car_type").val(v);
		}
		function op(url){
		  window.open(url,"","top=100,left=100,width=267,height=302");
		}
	</script>
 <script type="text/javascript">
	$(function(){
	$("#detail").click(function(){
		var search="";
		var car_name = $("#car_name").val();
		var car_brand = $("#car_brand").val();
		var car_type = $("#car_type").val();
		var T1 = $("#T1").val();
		var T2 = $("#T2").val();
		var T3 = $("#T3").val();
		var T4 = $("#T4").val();
		var keyword = $("#keyword").val();
		var satisfy = $("#satisfy").val();
		var year = $('#year').val();
		var polymerize = $('#polymerize').val();
		var startime = $("#startTime").val();
		var endtime = $("#endTime").val();
		if(T1=="请选择"){T1="";}
		if(T2=="请选择"){T2="";}
		if(T3=="请选择"){T3="";}
		if(T4=="请选择"){T4="";}
		var polymerize = $('#sortable input[name="polymerize"]:checked ').val();
		var method=2;
		car_name=base16Str(car_name);
		car_brand=base16Str(car_brand);
		car_type=base16Str(car_type);
		T1=base16Str(T1);
		T2=base16Str(T2);
		T3=base16Str(T3);
		T4=base16Str(T4);
		keyword=base16Str(keyword);
		satisfy=base16Str(satisfy);
		startime=base16Str(startime);
		endtime=base16Str(endtime);
		$.ajax({
			type: "post",
			url: "./I_O.jsp",
			data: {method:method,search:search,car_name:car_name,car_brand:car_brand,car_type:car_type,T1:T1,T2:T2,T3:T3,T4:T4,keyword:keyword,satisfy:satisfy,startime:startime,endtime:endtime},
			//data: $("#fomData1").serialize(),
			dataType: "text",
			beforeSend:function(XMLHttpRequest){
				noticeDiv('正在导出数据!请10分钟后去下载管理中下载附件');
				setTimeout(function(){
				 	closeNotice();
				 },1000000);	
			}, 
			success: function(message){
				closeNotice();
				var result = $.trim(message);
				if(result.length>0){
					alert("导出成功请去，下载管理中下载");
				}else if(result=='0'){
					alert("导出失败!");
				}else{
					alert("系统异常,请与管理员联系!");
				}
			}
		}); //ajax结束 
	})
	})
			 //提示页面
			 function noticeDiv(msg){
			 	var html='<div class="dialog publish" style="left:400px;" id="msgDiv"><span class="text">'+msg+'</span><span class="close" onclick="closeMsg()"></span></div>';
			 	$(window.parent.document.body).append(html);
			 }
			 
			  //关闭页面提示
			 function closeNotice(){
			 	$("#msgDiv",window.parent.document).remove();
			 }
			 //打开全屏幕页面
			 function openFullScreen(url){
			 	screenWidth = window.screen.width - 10;
			 	screenHeight = window.screen.height;
			 	window.open(url,'','width=1000px,height=800px,left=0,top=0,titlebar=no,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes');
			 }
			 //提示页面
			 function noticeDiv(msg){
			 	var html='<div class="dialog publish" style="left:700px;" id="msgDiv"><span class="text">'+msg+'</span><span class="close" onclick="closeMsg()"></span></div>';
			 	$(window.parent.document.body).append(html);
			 }
			 //关闭页面提示
			 function closeNotice(){
			 	$("#msgDiv",window.parent.document).remove();
			 }
</script>

<script type="text/javascript">
	function carname(){
		var car_name = $("#car_name").val();
		if(car_name=="请选择"){car_name="";}
		car_name=base16Str(car_name);
		var url="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_ceshi/editData.jsp?carname="+car_name;
	 	op(url);
	}
	
	function clearcar(){
		$("#car_name").val("请选择");
		$("#car_brand").val("请选择");
		$("#car_type").val("请选择");
	}
	
	function searchs(){
		var sousuo = $("#sousuo").val();
		if(sousuo.length>0){
			search2(sousuo);
		}
	}
	
	function search2(value){
		var method=1;
		var name=base16Str(value);
		$.ajax({
			type: "post",
			url: "./ajaxDataS.jsp",
			data: {name:name,method:method},
			dataType: "text",
			success: function(data){
				var obj= $.parseJSON(data);
				var temp="";
		 		$.each(obj, function (key, value) {
		    		temp+='<tr><td><a style="cursor:pointer;display:block;width:188px;" onclick="clickBrand(\''+value.NAME+'\')"  title='+value.NAME+'>'+value.NAME+'</a></td></tr>';
		    	});
		    	 
		    	if(temp.length>0){
					$('#auto').html('<table style="width:188px;">'+temp+'</table>');
					$("#auto").show(); 
				}else{
					$('#auto').html('<table><tr><td>'+$("#ddlProvince").find("option:selected").text()+'没有找到分类！</td></tr></table>');
					$("#auto").show();
				}
			}
		}); //ajax结束
	}
	function clickBrand(tmp){
		$('#sousuo').val(tmp);
		var car_type=$('#car_type').val();
		var car_name=$('#car_name').val();console.log(car_name);
		var car_brand = $("#car_brand").val();
		if(car_type=="请选择"){car_type="";}
		if(car_name=="请选择"){car_name="";}
		if(car_brand=="请选择"){car_brand="";}
		if(car_type.indexOf(tmp+";")==-1){
			$.ajax({
				type: "post",
				url: "./ajaxDataS.jsp",
				data: {name:base16Str(tmp),method:2},
				dataType: "json",
				success: function(data){
					var brand = $.trim(data.BRAND);
					var cartype = $.trim(data.PRICES);
					if(car_name.indexOf(cartype+";")==-1){
						$('#car_name').val(car_name+cartype+";");	
						$('#car_name1').val($('#car_name1').val()+data.PRICESID+";")
					}
					if(car_brand.indexOf(brand+";")==-1){
						$('#car_brand').val(car_brand+brand+";");
						$('#car_brand1').val($('#car_brand1').val()+data.BRANDID+";")	
					}
				}
			}); //ajax结束
			$('#car_type').val(car_type+tmp+";");
		}
		 
		$(this).click(function(e){e.stopProgation;$("#auto").css("display","none");$("#auto").val();})
		$('#auto').hide();
	}
	$(document).click(function(){
	   $("#auto").hide();
	})
</script>
 </head>
<body>
	<div class="content">
		<div class="main">
			<div class="con-zhibiao">
			<form id="formData">
				<ul id="sortable">
					<li class="con-li ui-state-default" ><span>搜索:</span> 
						<input type="text" value="" onkeyup="searchs()"  name="sousuo"  id="sousuo" style="cursor:pointer"  > 
						<div id="auto" class="auto" style="width:200px; width:200px;overflow-x: hidden; overflow-y: auto; height: 260px; position:absolute;" ></div>
					</li>
					<!-- <li class="con-li ui-state-default" ><span>车企</span>  -->
					 <li class="con-li ui-state-default" ><span>品牌:</span>
						<input type="text" value="请选择" onclick="carname();"  readonly="readonly" style="cursor:pointer" name="car_name" id="car_name">
					</li>
					
					<!-- <li class="con-li ui-state-default" ><span>品牌</span>  -->
					<li class="con-li ui-state-default" ><span>车企:</span> 
						<input type="text" value="请选择"  readonly="readonly" style="cursor:pointer" name="car_brand" id="car_brand"> 
					</li>
					<li class="con-li ui-state-default" ><span>车型:</span> 
						<input type="text" value="请选择"  readonly="readonly" style="cursor:pointer;" name="car_type" id="car_type"> 
					</li>
					<li class="con-li ui-state-default" style="height:200px">
					<ul>
					<li class="con-li " >
						<span>一级指标:</span>
							<input name="T1" id="T1" value="请选择" style="cursor:pointer;" readonly="readonly"/>
			               
					</li>
					<li class="con-li" style="cursor:pointer;">
						<span>二级指标:</span>
							<input  name="T2" id="T2"  value="请选择" style="cursor:pointer;" readonly="readonly"/>
			                	 
					</li>
					<li class="con-li" >
						<span>三级指标:</span>
							<input  name="T3" id="T3" style="cursor:pointer;" value="请选择" readonly="readonly"/>
			                  
					</li>
					
					<li class="con-li " >
						<span>四级指标:</span>
							<input  name="T4" id="T4" style="cursor:pointer;" value="请选择"  readonly="readonly"/>
					</li>
					</ul>
					</li>
					<li class="con-li ui-state-default">
						<span>提及率:</span>
						<input type="text" value="请输入主题词" name="keyword" id="keyword" style=""/>
					</li>
					<li class="con-li ui-state-default">
						<span>满意度:</span>
							<select id="satisfy" name="satisfy" onclick="$(this).focus();">
			                 	 <option value="" selected="">请选择</option>  
			                	<option value="1" >满意</option>
			                	<option value="0" >中立</option>
			                	<option value="-1" >不满意</option>
			            	</select>
					</li>
					<li class="con-li ui-state-default">
						<span>年份:</span>

						<!-- <img class="con-biao" src="images/selectbiao.png" style="margin-left:24px"><% long year = CMSUtil.longFormat(new SimpleDateFormat("yyyy").format(new Date()));%><select id="year" name="year" >

			                	 <%for(int i=(int)year;i>2000;i--){ %>
			                	 	<option value="<%=i %>" ><%=i %>年</option>
			                	 <%} %>
			            	</select>	 -->		
			             <input type="text" name="startTime" id="startTime" value="<%=startTime%>" class="Wdate"  onclick="WdatePicker()"
						src="${pageContext.request.contextPath}/cms/js/calendar/skin/datePicker.gif" style="width:144px;cursor:pointer;"/> 到 <input type="text" name="endTime" id="endTime" value="<%=endTime%>" class="Wdate"  onclick="WdatePicker()"
						src="${pageContext.request.contextPath}/cms/js/My97DatePicker/skin/datePicker.gif" style="width:144px;margin-left:0;cursor:pointer;"/>				
					</li>
					<li class="con-li ui-state-default"  >
						<span>聚合:</span>
							<select id="polymerize" name="polymerize" onclick="$(this).focus();">
			                	<option value="" selected="">请选择</option>
			                	<option value="0" >是</option>
			                	<option value="1" >否</option>
			            	</select>
					</li>
	        	</ul>
	        	</form>
                <div class="chakan">
                    <div>
                      <button onclick="search()" style="cursor:pointer;"><i></i><span>查看</span></button>
                      <% if(quanxian==1){%>
                      <button id ="detail" style="color:#fff;font-size:14px;cursor:pointer;">导出</button>
                      <% }%>
                    </div>
                </div>
			</div>
			<div id="kuang" style="display:none;font-size:14px">
				<div class="shaixuan">
					 <!--  <i class="shanchu" id="noshow" onclick="ni()"></i>-->
					<div class="quanxuan" id="quanxuan"><i></i><span>全选</span></div>
					<div class="quxiao" id="quxiao"><i></i><span>取消全选</span></div>
					<input type="button" id="queding" value="确定" name="" style="width:40px;height:29px;color:#000;position:absolute;top:14px;left:192px"/>
				</div>
				<div>
					<ul id="brand">  
               </ul>
				</div>
			</div>
			<table class="table" cellspacing="0" cellpadding="0" style="text-align:center">
				<thead class="biaotou">
					<tr>
						<td class="firsttd" width="18">序</td>
						<td width="70">车企</td>
						<td width="70">品牌</td> 
						<td width="70">车型</td>
						<td width="70">一级指标</td>
						<td width="112">二级指标</td>
						<td width="130">三级指标</td>
						<td width="85">四级指标</td>
						<td width="60" onclick="qieHuan()" id="paiXu" style="cursor:pointer;">提及率↓</td>
						<td width="26">满意</td>
						<td width="26">中立</td>
						<td width="40">不满意</td>
					</tr>
				</thead>
				<tbody id="list_l">
					   
				</tbody>
			</table>
		</div>
	</div>
	<input type="hidden" name="car_name1" id="car_name1"/>
	<input type="hidden" name="car_brand1" id="car_brand1"/>
	<div class="footer-line clearfix"></div>
	<div class="footer clearfix"></div>
    <div class="clearfix footer-nav"></div>
	<input type="hidden" name="T1_" id="T1_" value="">
	<input type="hidden" name="T2_" id="T2_" value="">
	<input type="hidden" name="T3_" id="T3_" value="">
</body>

<form id="fomData" action="./listData.jsp" method="post">
	<input type="hidden" name="_car_name" id="_car_name" value=""/>
	<input type="hidden" name="_car_brand" id="_car_brand" value=""/>
	<input type="hidden" name="_car_type" id="_car_type" value=""/>
	<input type="hidden" name="_T1" id="_T1" value="">
	<input type="hidden" name="_T2" id="_T2" value="">
	<input type="hidden" name="_T3" id="_T3" value="">
	<input type="hidden" name="_T4" id="_T4" value="">
	<input type="hidden" name="_keyword" id="_keyword" value=""/>
	<input type="hidden" name="_satisfy" id="_satisfy" value=""/>
	<input type="hidden" name="method" id="_method" value=""/>
	<input type="hidden" name="year" id="_year" value=""/>
	<input type="hidden" name="order" id="order" value="COUNT"/>
	<input type="hidden" name="asc" id="asc" value="desc"/>
	<input type="hidden" name="level" id="level" value="T1"/>
	<input type="hidden" name="polymerize" id="_polymerize" value="" />
	 <input type="hidden" name="_endTime" id="_endTime" value=""/> 
	
	<input type="hidden" name="_startTime" id="_startTime" value=""/>
</form>
<form id="fomData1" action="./listData.jsp" method="post">
	 
</form>
<form action="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_test/listData.jsp" method="post" id="pageForm1" target="_blank">
</form>
	<form action="${pageContext.request.contextPath}/cms/core/modules/metadata/jmeta_test/listData.jsp" method="post" id="pageForm" target="_blank">
			<input type="hidden" name="pageNo" id="_pageNo"/>
			<input type="hidden" name="pageSize" id="_pageSize"/>
			<input type="hidden" name="bbs_bt" id="_bbs_bt"/>
			<input type="hidden" name="startTime" id="__startTime"/>
			<input type="hidden" name="endTime" id="__endTime"/>
			<input type="hidden" name="keyword" id="_keyword">
			<input type="hidden" name="carModels" id="_carModels11">
			<input type="hidden" name="prices" id="_prices">
			<input type="hidden" name="brand" id="_brand">
			<input type="hidden" name="car_name" id="_car_name11">
			<input type="hidden" name="car_brand" id="_car_brand11">

			<input type="hidden" name="classfiy" id="_classfiy">
			<input type="hidden" name="T1" id="1_T1" value="">
			<input type="hidden" name="T2" id="1_T2" value="">
			<input type="hidden" name="T3" id="1_T3" value="">
			<input type="hidden" name="T4" id="1_T4" value="">
			<input type="hidden" name="manyi" id="1_manyi" value="">
			<input type="hidden" name="zhongli" id="1_zhongli" value="">
			<input type="hidden" name="bumanyi" id="1_bumanyi" value="">
	</form>
<script type="text/javascript">
//隐藏弹出框
	var kuang = document.getElementById('kuang');
	var zhibiao = $("#zhibiao");
	function shoufn(){
		kuang.style.display="block";
	}
	
	function shouzb1(){
		zhibiao.style.display="block";
	}
	function ni(){
		kuang.style.display="none";
	}
//改变排序箭头显示
	var a = true;
    var paiXu = document.getElementById("paiXu");
    function qieHuan(){
    	if (a) {
            paiXu.innerHTML="提及率↑";
            a = false; 
            $("#order").val("COUNT");
            $("#asc").val("asc");   
            sub();
        } else {
        	paiXu.innerHTML="提及率↓";
            a = true;
            $("#order").val("COUNT");
            $("#asc").val("desc");   
            sub();  
        }
    }
    
 //选项框换位   
    $( "#sortable" ).sortable();
  	//$( "#sortable" ).disableSelection();
</script>
</html>