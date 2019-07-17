<template>
  <div style="height:auto;">
     <iframe :src="bdTokenUrl" frameborder="0" style="width:100%; height:100%;" scrolling="no" id="bdIframe"></iframe>
  </div>
</template>

<script>
export default {
  name: 'settledownfamily',
  data() {
    return{
      bdTokenUrl : ''
    }
  },
  created(){

  },
  mounted(){
    // iframe-宽高自适应显示
    const oIframe = document.getElementById('bdIframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = (Number(deviceWidth)-220) + 'px'; //数字是页面布局宽度差值
    oIframe.style.height = (Number(deviceHeight)-120) + 'px';//数字是页面布局高度差
  }
}
</script>

<style>

</style>
