<template>
<div class="theme">
  <el-tabs
    v-model="activeIndex"
    type="border-card"
    closable
    v-if="openTab.length"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
    style="background:#fff;padding-bottom: 10px;"
  >
    <el-tab-pane :key="item.route" v-for="(item) in openTab" :label="item.name" :name="item.route">
      <!-- <router-view></router-view> -->
    </el-tab-pane>
      <router-view></router-view>

  </el-tabs>
</div>
</template>

<script>
// openTab:[{name:'',label:'',childTabs:[{name:'',label:''}]}]
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["getCurrentLevel1Menu"]),
    ...mapGetters([
      'openTab'
    ]),
    // openTab() {
    //   return this.$store.state.openTab;
    // },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
      set(val) {
        this.$store.commit("set_active_index", val);
      }
    },
    childOpenTab() {
      return this.$store.state.childOpenTab;
    },
    childActiveIndex: {
      get() {
        return this.$store.state.childActiveIndex;
      },
      set(val) {
        this.$store.commit("set_child_active_index", val);
      }
    }
  },
  methods: {
    //tab标签点击时切换路由
    tabClick(tab,event) {
      console.log("topClickActiveIndex:", this.activeIndex);
      this.$router.push({ path: this.activeIndex });
      //判断此时的activeIndex对应的type是否为menu
      let flag = false;
      this.openTab.forEach(element => {
        if(this.activeIndex == element.route && element.type == 'isMenu') {
          console.log('我是菜单类型的tab')
          flag = true;
        }
      });
     if(!flag) {
      console.log('我是一般的tab')
      this.$store.commit('changeChildOpenTab',{activeIndex:this.activeIndex,openTab:this.openTab})//返回与一级tab中activeIndex相应的数据给到opentab1
      this.$store.commit('setChildActiveIndex',{activeIndex:this.activeIndex})//设置子级的active
      this.$router.push({ path: this.childActiveIndex });
      this.$store.commit('changeGuid',{activeIndex:this.activeIndex,name:this.childActiveIndex})//---传入一二级tab的activeIndex去更改guid
     }
    },
    //移除tab标签
    tabRemove(targetName) {
      console.log("一级tabRemove:",targetName);
      // 首页不删
      if (targetName == "/") {
        return;
      }
      this.$store.commit("delete_tabs", targetName);
      if (this.activeIndex === targetName) {
        //设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          this.$store.commit("set_active_index",this.openTab[this.openTab.length - 1].route);
          this.$store.commit('changeChildOpenTab',{activeIndex:this.activeIndex,openTab:this.openTab})//^返回与一级tab中activeIndex相应的数据给到opentab1
          this.$store.commit('setChildActiveIndex',{activeIndex:this.activeIndex})//设置子级的active
          this.$router.push({ path: this.activeIndex1 || this.activeIndex });
          console.log('---------------------------------',this.activeIndex1)
          if(this.activeIndex1) {
            this.$store.commit('changeGuid',{activeIndex:this.activeIndex,name:this.activeIndex1})//---传入一二级tab的activeIndex去更改guid
          }
        } else {
          this.$router.push({ path: "/" });
        }
      } else {
        // this.$router.push({ path: this.activeIndex });
        // this.$store.commit('changeChildOpenTab',{activeIndex:this.activeIndex,openTab:this.openTab})//返回与一级tab中activeIndex相应的数据给到opentab1
        // this.$store.commit('setChildActiveIndex',{activeIndex:this.activeIndex})//设置子级的active
        // this.$router.push({ path: this.activeIndex1 });
      }
    }
  },
  mounted() {
    // 刷新时以当前路由做为tab加入tabs
    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    // 当当前路由是首页时，添加首页到store，并设置激活状态
    if (this.$route.path !== "/" && this.$route.path !== "/main") {
      //console.log('1');
      // this.$store.commit('add_tabs',{route:'/main',name:'main'});
      // this.$store.commit('add_tabs',{route:this.$route.path,name:this.$route.name});
      this.$store.commit("set_active_index", this.$route.path);
    } else {
      // console.log('2');
      // this.$store.commit('add_tabs',{route:'/main',name:'main'});
      this.$store.commit("set_active_index", "/main");
      this.$router.push("/");
    }
  },
  
  watch: {
    $route(to, from) {
      //判断路由是否已经打开
      //已经打开的 ，将其置为active
      // console.log('================')
      let flag = false;
      for (let item of this.openTab) {
        // console.log("item.name=",item)
        // console.log("to.name=",to.name)

        if (item.name === to.name) {
          // console.log('to.path===',to.path);
          console.log('这里是tabsTop中的watch');
          this.$store.commit("set_active_index", to.path);//--好像没用,判断条件错了，没有走到这里，但是还是能跳转。应该是item.route
          // console.log('toptab-是已经打开的页面地址')
          flag = true;
          break;
        }
      }
      //未打开的，将其放入队列里
      /*
        if(!flag && to.path !== '/main'){
            console.log(to.path)
            // console.log('to.path',to.path);
            //此处添加了新的tab，注：ywj
            // console.log(to)
            this.$store.commit('add_tabs',{route:to.path,name:to.name});
            this.$store.commit('set_active_index',to.path);
        }
            */
    }
  }
};
</script>

<style lang="scss" scope>
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background: #f5f7fa;
}
.theme{
    .el-tabs__item:focus.is-active.is-focus:not(:active) {
         box-shadow: none;
        //  border-top-left-radius: 20px;
        //  border-top-right-radius: 20px;
	   }
	 }
</style>


