import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/router-base/a'
import B from '@/components/router-base/b'
import NotPage from '@/components/404'
import Home from '@/components/home'

import Container from '@/components/jineng/container.vue'
import ContainerList from '@/components/jineng/container-list.vue'
import Detail from '@/components/jineng/detail.vue'

import Comm1 from '@/components/vuex&store/comm1.vue'
import Comm2 from '@/components/vuex&store/comm2.vue'
import ShopingCar from '@/components/vuex&store/shoping-car.vue'

import Other from '@/components/element/other.vue'
import Login from '@/components/xingzou/login.vue'
import UserManage from '@/components/xingzou/user-manage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '*',
      component: NotPage
    },
    {
      path: '/',
      name: 'HelloWorld',
      //重定向
      // redirect: '/a',
      component: HelloWorld
    },
    {
      path: '/404',
      name: '404',
      component: NotPage
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/a',
          //别名
          // alias: '/aca',
          name: 'a',
          component: A
        },
        {
          path: '/b',
          name: 'b',
          component: B
        }
      ]
    },
    {
      path: '/container',
      name: 'container',
      component: Container,
      children: [
        {
          path: '/containerList',
          name: 'containerList',
          component: ContainerList
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/comm1',
      name: 'comm1',
      component: Comm1,
    },
    {
      path: '/comm2',
      name: 'comm2',
      component: Comm2,
    },
    {
      path: '/shoping-car',
      name: 'shoping-car',
      component: ShopingCar,
    },
    {
      path: '/other',
      name: 'other',
      component: Other,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: UserManage
    }
  ]
})
