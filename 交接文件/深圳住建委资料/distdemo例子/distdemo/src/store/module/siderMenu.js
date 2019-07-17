let siderMenus = [
  // {
  //   id: "00",
  //   title: '轮候审核',
  //   childtitle: '轮候审核',
  //   icon: 'el-icon-edit-outline',
  //   children: [
  //     {
  //       index: '/houseapproval',
  //       childtitle: '入册受理',
  //     },
  //     {
  //       index: '/housetransfer',
  //       childtitle: '入册审核',
  //     },
  //     {
  //       index: '/correct',
  //       childtitle: '入册退件',
  //     },
  //     {
  //       index: '/correct',
  //       childtitle: '变更受理',
  //     },
  //     {
  //       index: '/correct',
  //       childtitle: '变更审核',
  //     },
  //     {
  //       index: '/correct',
  //       childtitle: '变更退件',
  //     },
  //     {
  //       index: '/correct',
  //       childtitle: '出册管理',
  //     },
  //   ]
  // },
  {
    id: "01",
    title: '轮候册',
    childtitle: '轮候册',
    icon: 'el-icon-tickets',
    // index:'/housemanagement'
    children: [
      {
        index: '/publicRental',
        childtitle: '公租轮候册',
      },
      {
        index: '/settleDown',
        childtitle: '安居轮候册',
      },
      {
        index: '/turnover',
        childtitle: '周转轮候册',
      },
    ]
  },
  {
    id: "02",
    title: '保障对象库',
    icon: 'el-icon-date',
    children: [
      {
        index: '/securityObj',
        childtitle: '已保障对象',
      }
    ]
  },
  {
    id: "03",
    title: '人员/单位库',
    icon: 'el-icon-search',
    children: [
      {
        index: '/staffLibrary',
        childtitle: '人员库',
      },
      {
        index: '/unitLibrary',
        childtitle: '单位库',
      }
    ]
  },
]

// 当前一级菜单的路由
let CurrentLevel1Menu = ''
const state = {
  siderMenus,
  CurrentLevel1Menu
}
const getters = {
  getsiderMenus: state => {
    return state.siderMenus
  },
  getCurrentLevel1Menu: (state) => {
    return state.CurrentLevel1Menu
  }
}
const mutations = {
  changeSiderMenu(state, data) {
    [...state.siderMenus] = data;
  },
  setCurrentLevel1Menu(state, data) {
    state.CurrentLevel1Menu = data;
  }
}
export default {
  state,
  getters,
  mutations
}