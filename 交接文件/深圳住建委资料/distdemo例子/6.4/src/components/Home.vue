<template>
  <div class="home">
    <div class="home-con">
      <el-scrollbar style="height:100%;">
        <el-container style="height:100%;display:flex;justify-content:space-between">
          <el-aside :style="{width:menuWidth + 'px'}">
            <slider-left @childByValue="childByValue"></slider-left>
          </el-aside>
          <el-main>
            <tabs-top></tabs-top>
          </el-main>
        </el-container>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import SliderLeft from '@/components/SliderLeft'
import TabsTop from '@/components/TabsTop'
export default {
  name: 'Home',
  components: {
    SliderLeft,
    TabsTop,
  },
  data () {
    return {
      // menuState:'',
      menuWidth:200
    }
  },
  methods:{
    //控制aside宽度
    childByValue:function(childValue){
      // this.menuState = childValue
      if(childValue == false){
        this.menuWidth = 200
      }else{
        setTimeout(()=>{
          this.menuWidth = 64
        },200)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  .home-con{
    width: 100%;
    border-radius: 5px;
    position: absolute;
    background: #fff;
    top:0;
    bottom: 0;
  }
  & /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  & /deep/ .el-scrollbar__view{
    height: 100%;
  }

}
.el-main{
  margin-left: 20px;
}
.el-main::-webkit-scrollbar{ //去除滚动条
  display: none;
}
.el-tabs--border-card{
  background: #fff !important;//背景色
}
</style>