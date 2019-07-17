let publicWaitList = [
  {
    id:10,
    name:'家庭信息',
    path:'/publicWaitList/publicFamily',
    info:false
  },
  {
    id:11,
    name:'业务日志',
    path:'/publicWaitList/publicLog',
    info:false
  },
  {
    id:12,
    name:'材料',
    path:'/publicWaitList/publicMaterial',
    info:false
  },
]
let settleDownList = [
  {
    id:20,
    name:'家庭信息',
    path:'/settleDownList/settleDownFamily',
    info:false
  },
  {
    id:21,
    name:'业务日志',
    path:'/settleDownList/settleDownLog',
    info:false
  },
  {
    id:22,
    name:'材料',
    path:'/settleDownList/settleDownMaterial',
    info:false
  },
]
let turnOverList = [
  {
    id:30,
    name:'家庭信息',
    path:'/turnOverList/turnOverFamily',
    info:false
  },
  {
    id:31,
    name:'业务日志',
    path:'/turnOverList/turnOverLog',
    info:false
  },
  {
    id:32,
    name:'材料',
    path:'/turnOverList/turnOverMaterial',
    info:false
  },
]
const state = {
  publicWaitList,
  settleDownList,
  turnOverList
}
const mutations = {
  //公租轮候册
  publicWaitList(state,item) {
    if(item.path.indexOf('publicWaitList') >= 0) {
      this.state.sliderCon.sliderMenu = this.state.sliderCon.publicWaitList
      console.log(item.openTab)
      let childOpenTab = item.openTab;
      if(item.openTab=='undefined'||!childOpenTab[0]){
        let _path = this.state.sliderCon.sliderMenu[0].path+'/'+new Date().getTime()
        childOpenTab.push({name:this.state.sliderCon.sliderMenu[0].name,path:_path});
        this.state.childActiveIndex = _path;
      }
      console.log(this.state.childActiveIndex)
    }
  },
  //安居轮候册
  settleDownList(state,item) {
    if(item.path.indexOf('settleDownList') >= 0) {
      this.state.sliderCon.sliderMenu = this.state.sliderCon.settleDownList
      console.log(item.openTab)
      let childOpenTab = item.openTab;
      if(item.openTab=='undefined'||!childOpenTab[0]){
        let _path = this.state.sliderCon.sliderMenu[0].path+'/'+new Date().getTime()
        childOpenTab.push({name:this.state.sliderCon.sliderMenu[0].name,path:_path});
        this.state.childActiveIndex = _path;
      }
      console.log(this.state.childActiveIndex)
    }
  },
  //周转轮候册
  turnOverList(state,item) {
    if(item.path.indexOf('turnOverList') >= 0) {
      this.state.sliderCon.sliderMenu = this.state.sliderCon.turnOverList
      console.log(item.openTab)
      let childOpenTab = item.openTab;
      if(item.openTab=='undefined'||!childOpenTab[0]){
        let _path = this.state.sliderCon.sliderMenu[0].path+'/'+new Date().getTime()
        childOpenTab.push({name:this.state.sliderCon.sliderMenu[0].name,path:_path});
        this.state.childActiveIndex = _path;
      }
      console.log(this.state.childActiveIndex)
    }
  },
}
export default{
state,
mutations,
}
