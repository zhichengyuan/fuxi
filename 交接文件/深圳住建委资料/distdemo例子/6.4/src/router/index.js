import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home'),
      children: [
        {//公租轮候册-index
          path: 'publicRental',
          name: 'publicRental',
          component: () => import ('@/views/waitingList/publicList/PublicRental')
        },
        {//公租轮候册
          path: 'publicWaitList', //公租轮候册--查看家庭
          name: 'publicWaitList',
          redirect: '/publicWaitList/publicFamily',
          component: () => import ('@/views/waitingList/publicList/PublicCom'),
          children: [
            {
              path: 'publicFamily',//公租轮候册-查看家庭
              name: 'publicFamily',
              component: () => import ('@/views/waitingList/publicList/PublicFamily'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/publicList/PublicFamily')              
                }
              ]
            },
            {
              path: 'publicLog',//公租轮候册-业务日志
              name: 'publicLog',
              component: () => import ('@/views/waitingList/publicList/PublicLog'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/publicList/PublicLog')
                }
              ]
            },
            {
              path: 'publicMaterial',//公租轮候册-材料
              name: 'publicMaterial',
              component: () => import ('@/views/waitingList/publicList/PublicMaterial'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/publicList/PublicMaterial')
                }
              ]
            },
            {
              path: '*',
              component: () => import ('@/views/waitingList/publicList/PublicFamily')
            }
          ]
        },
        {//安居轮候册-index
          path: 'settleDown',
          name: 'settleDown',
          component: () => import ('@/views/waitingList/settleDownList/SettleDown')
        },
        {//安居轮候册
          path: 'settleDownList', //安居轮候册--查看家庭
          name: 'settleDownList',
          redirect: '/settleDownList/publicFamily',
          component: () => import ('@/views/waitingList/settleDownList/SettleDownCom'),
          children: [
            {
              path: 'settleDownFamily',//安居轮候册-查看家庭
              name: 'settleDownFamily',
              component: () => import ('@/views/waitingList/settleDownList/SettleDownFamily'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/settleDownList/SettleDownFamily')              
                }
              ]
            },
            {
              path: 'settleDownLog',//安居轮候册-业务日志
              name: 'settleDownLog',
              component: () => import ('@/views/waitingList/settleDownList/SettleDownLog'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/settleDownList/SettleDownLog')
                }
              ]
            },
            {
              path: 'settleDownMaterial',//安居轮候册-材料
              name: 'settleDownMaterial',
              component: () => import ('@/views/waitingList/settleDownList/SettleDownMaterial'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/settleDownList/SettleDownMaterial')
                }
              ]
            },
            {
              path: '*',
              component: () => import ('@/views/waitingList/settleDownList/SettleDownFamily')
            }
          ]
        },
        {//周转轮候册-index
          path: 'turnover',
          name: 'turnover',
          component: () => import ('@/views/waitingList/turnOverList/TurnOver')
        },
        {//周转轮候册
          path: 'turnOverList', //周转轮候册--查看家庭
          name: 'turnOverList',
          redirect: '/turnoverList/turnOverFamily',
          component: () => import ('@/views/waitingList/turnOverList/TurnOverCom'),
          children: [
            {
              path: 'turnOverFamily',//周转轮候册-查看家庭
              name: 'turnOverFamily',
              component: () => import ('@/views/waitingList/turnOverList/TurnOverFamily'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/turnOverList/TurnOverFamily')              
                }
              ]
            },
            {
              path: 'turnOverLog',//周转轮候册-业务日志
              name: 'turnOverLog',
              component: () => import ('@/views/waitingList/turnOverList/TurnOverLog'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/turnOverList/TurnOverLog')
                }
              ]
            },
            {
              path: 'turnOverMaterial',//周转轮候册-材料
              name: 'turnOverMaterial',
              component: () => import ('@/views/waitingList/turnOverList/TurnOverMaterial'),
              children: [
                {
                  path: '*',
                  component: () => import ('@/views/waitingList/turnOverList/TurnOverMaterial')
                }
              ]
            },
            {
              path: '*',
              component: () => import ('@/views/waitingList/turnOverList/TurnOverFamily')
            }
          ]
        },
        //保障对象
        {
          path: 'securityObj',
          name: 'securityObj',
          component: () => import ('@/views/securityList/securityObj')
        },
        //人员/单位库
        {
          path: 'staffLibrary',//人员库
          name: 'staffLibrary',
          component: () => import ('@/views/staffUnitList/staffLibrary')
        },
        {
          path: 'unitLibrary',//单位库
          name: 'unitLibrary',
          component: () => import ('@/views/staffUnitList/unitLibrary')
        },
      ]
    }
  ]
})
