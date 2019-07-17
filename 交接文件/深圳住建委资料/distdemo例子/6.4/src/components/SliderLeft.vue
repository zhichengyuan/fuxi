<template>
  <el-menu
    :default-active="$route.path"
    class="slider"
    background-color="#fff"
    active-text-color="#409EFF"
    router
    unique-opened
    :collapse="isCollapse"
  >
    <div @click="toggleClick" class="toggle-click">
      <i :class="{'el-icon-arrow-left':!isCollapse,'el-icon-arrow-right':isCollapse}"></i>
    </div>
    <div class="logo" v-show="isShow">
      <!-- <img :src="picSrc" alt> -->
			<h1 style="margin:30px 20px 30px 10px; font-size:20px;color:lightblue;">需求管理</h1>
    </div>
    <template v-for="(item,index) in getsiderMenus">
      <el-menu-item v-if="item.index" :key="item.id" :index="item.index" @click="addTabs(item)">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
      </el-menu-item>
      <el-submenu v-else :key="index" :index="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="child in item.children"
            :key="child.id"
            :index="child.index"
            @click="addTabs(child)"
          >{{child.childtitle}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Slider",
  data() {
    return {
      picSrc: require("../../static/image/1.jpg"),
      isCollapse: false,//是否水平折叠收起菜单
      isShow: true //是否显示logo
    };
  },
  computed: {
    ...mapGetters([
			"getsiderMenus",
			'openTab'
		]),
  },
  methods: {
		//点击的时候，添加一级tab
    addTabs(val) {
      let flag = false;
      for (let item of this.openTab) {
        if (item.route === val.index) {
          this.$store.commit("set_active_index", val.index);
          console.log("左侧菜单栏提示：是已经打开的页面地址");
          flag = true;
          break;
        }
      }
      if (!flag) {
        this.$store.commit("add_tabs", {
          route: val.index,
          name: val.childtitle,
          type: "isMenu"
        });
        this.$store.commit("set_active_index", val.index);
      }
		},
		//触发父组件中的方法，控制aside最大最小宽度
    toggleClick() {
      this.isCollapse = !this.isCollapse;
      this.isShow = !this.isShow;
      this.$emit("childByValue", this.isCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider:not(.el-menu--collapse) {
  width: 200px;
}
.logo {
  width:170px;
  height:139px;
  padding: 20px;
  text-align: center;
  img {
    display: inline-block;
  }
}
.el-menu {
  position: relative;
  .toggle-click {
    width: 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 0 20px 20px 0;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }
}
.el-menu {
  height: 100%;
  margin-right: 20px;
  position: fixed;
  top: 0;
  left: 0;
  border: none;
  box-shadow: 4px 0px 8px #33333321;
}
</style>

