import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Project from '@/views/project'
import Doc from '@/views/doc'
import Code from '@/views/code'

import Layout from '@/views/layout'

// 参考 https://www.easy-mock.com/

Vue.use(Router)
// 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Layout,
      redirect: '/project',
      children: [
        {
          path: '/project',
          name: 'Project',
          component: Project
        },
        {
          path: '/doc/:block?',
          name: 'Doc',
          component: Doc
        },
        {
          path: '/code',
          name: 'Code',
          component: Code
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
