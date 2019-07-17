$(function() {
	    // 年月日tab切换
	    $('.time_tab').on('click','span',function() {
	    	$(this).addClass('active').siblings().removeClass('active');
	    	var text = $(this).text();
	    	if(text == '年') {
	    	option.series[0].data=data[0];
			option.series[1].data=data[1];
			console.log(data);
            myChart.setOption(option);
	    	}
	    	if(text == '季') {
	    	option.series[0].data=data1[0];
            option.series[1].data=data1[1];
			myChart.setOption(option);
			console.log(data1)
	    	}
	    	if(text == '月') {
	    	option.series[0].data=data2[0];
            option.series[1].data=data2[1];
			myChart.setOption(option);
			console.log(data2);
			
	    	}
	    })
});