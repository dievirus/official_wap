import Vue from 'vue'
import Router from 'vue-router'

const A = () => import('components/a')
const B = () => import('components/b')
const BB = () => import('components/bb')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/a'
    },
    {
      path: '/a',
      component: A
    },
    {
      path: '/b',
      component: B,
      children: [
        {
          path: ':id',
          component: BB
        }
      ]
    }

  ]
})
