import Vue from 'vue';
import Vuex from 'vuex';
import siderMenu from './module/siderMenu'
import sliderCon from './module/sliderCon'


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    siderMenu,
    sliderCon,
  },
  state: {
    openTab: [],//所有打开的路由
    activeIndex: '',//激活状态
    childOpenTab: [], //打开的子路由
    childActiveIndex: '', //激活状态的子路由
  
  },
  getters: {
    openTab(state) {
      return state.openTab;
    },
    
  },
  mutations: {
    //添加tabs
    add_tabs(state, data) {
      this.state.openTab.push(data);
    },
    //删除tabs
    delete_tabs(state, route) {
      let index = 0;
      for (let option of state.openTab) {
        if (option.route === route) {
          break;
        }
        index++;
      }
      this.state.openTab.splice(index, 1);
    },
    //设置当前激活的tab
    set_active_index(state, index) {
      this.state.activeIndex = index;
    },
    //添加childtabs
    add_child_tabs(state, data) {
      this.state.childOpenTab.push(data);
    },
    //删除childtabs
    delete_child_tabs(state, data) {
      let index = 0;
      for (let option of state.childOpenTab) {
        if (option.path === data.targetName) {
          break;
        }
        index++;
      }
      this.state.childOpenTab.splice(index, 1);
    },
    //设置当前激活的childActiveIndex
    set_child_active_index(state, index) {
      this.state.childActiveIndex = index;
    },
    //存各种guid,根据传进来的activeIndex，找到openTab中与之对应的item，那么item.data.push(data.guid)
    setGuid(state, data) {
      let flag = false;
      let _index = '';
      for (let item of state.openTab) {
        if (item.route === data.activeIndex) {
          if (!item.data) {
            return;
          }
          item.data.forEach((ele, index) => {
            console.log(ele.name, '======', data.guidData.name)
            if (ele.name == data.guidData.name && ele.guid) {
              flag = true;
              _index = index;
              console.log('该二级tab中对应的name已经存有guid了')
            }
          })
          if (!flag) {
            item.data.splice(_index, 1, data.guidData)
            console.log('guid存进去了', data.guidData)
          }
        }
      }
    },
    //通过传入的activeIndex去改变各个guid的值
    changeGuid(state, data) {
      let guidList = []
      for (let item of state.openTab) {
        if (item.route === data.activeIndex) {
          guidList = item.data;
          console.log('通过传入的activeIndex获取到的guidList数据：', guidList)
          break;
        }
      }
      if (guidList) {
        for (let ele of guidList) {
          console.log(ele.name, data)
          if (ele.name == 'batchcode') {
            this.state.batchCode.code = ele.guid
            console.log('更改后的batchCode=', this.state.batchCode.code)
          }
        }
      }
    },
    //传入activeIndex进来
    setChildActiveIndex(state, data) {
      for (let item of state.openTab) {
        if (item.route === data.activeIndex) {
          this.state.childActiveIndex = item.childActiveIndex;
        }
      }
    },
    //将childActiveIndex的值也存入到openTab中
    setIndexToOpenTab(state, data) {
      for (let item of state.openTab) {
        if (item.route === data.activeIndex) {
          item.childActiveIndex = data.childActiveIndex;
        }
      }
    },
    //根据传入的activeIndex的值，返回相应的childTabs给到childOpenTab
    changeChildOpenTab(state, data) {
      console.log('返回相应的childTabs给到childOpenTab')
      data.openTab.forEach(item => {
        if (item.route == data.activeIndex) {
          this.state.childOpenTab = item.childTabs;
        }
      })
    },
  },
  actions: {
    //
  }
})
export default store;
