<template>
  <div class="slider-con">
    <el-aside>
      <el-menu :default-active="defaultActive" router v-show="menuShow">
        <el-header>
          <span>导航</span>
          <!-- <span @click="hiddenMenu" class="pack-up">收起</span> -->
        </el-header>
        <el-menu-item
          :index="menu.path"
          v-for="(menu, index) in menuList"
          :key="index"
          @click="commitInfo(menu)"
        >
          <!-- <i :class="menu.info"></i> -->
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
      </el-menu>
      <div class="menu-hidden" v-show="!menuShow" @click="hiddenMenu">
        <i class="el-icon-arrow-left"></i>
      </div>
    </el-aside>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      defaultActive: this.$store.state.sliderCon.sliderMenu[0].path,
      menuList: this.$store.state.sliderCon.sliderMenu,
      menuShow: true //是否显示菜单
    };
  },
  computed: {
    ...mapGetters([
      'openTab'
    ]),
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
    },
  },
  methods: {
    //点击右侧导航时
    commitInfo(val) {
			console.log('导航中获取当前的一级Tab的activeIndex:',this.activeIndex)
      let flag = false;
      for (let item of this.childOpenTab) {
        console.log(item.path,val.path)
        if ( item.path.indexOf(val.path)>=0 ) {
          this.$store.commit("set_child_active_index", item.path);
          this.$store.commit('setIndexToOpenTab',{activeIndex:this.activeIndex,childActiveIndex:this.childActiveIndex})//将childActiveIndex存入openTab中相应的childActiveIndex中
          flag = true;
          break;
        }
      }
      if (!flag) {
        let _path = val.path+'/'+new Date().getTime()
        this.$store.commit("add_child_tabs", { path: _path, name: val.name });
        this.$store.commit("set_child_active_index", _path);
        this.$router.push({path:_path})
        this.$store.commit('setIndexToOpenTab',{activeIndex:this.activeIndex,childActiveIndex:this.childActiveIndex})//将childActiveIndex存入openTab中相应的childActiveIndex中        
      }
    },
    hiddenMenu() {
      //收起按钮
      this.menuShow = !this.menuShow;
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-con {
  // position: fixed;
  // top:50%;
  // right: 0;
  // transform: translateY(-50%);
  // z-index: 2002;
  .el-aside {
    width: 220px !important;
    .el-menu {
      width: 218px;
      min-height: 400px;
      border: 1px solid #d9e2f8;
      .el-header {
        height: 40px !important;
        background: #409eff;
        line-height: 40px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        .pack-up {
          cursor: pointer;
        }
      }
      .el-menu-item {
        height: 40px;
        line-height: 40px;
      }
      .el-menu-item.is-active {
        border-bottom: 1px solid #409eff;
      }
    }
    .menu-hidden {
      float: right;
      width: 40px;
      height: 40px;
      text-align: center;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 40px;
      line-height: 40px;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
