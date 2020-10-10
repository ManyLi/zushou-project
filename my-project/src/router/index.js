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
    }
  ]
})
