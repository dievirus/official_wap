import Vue from 'vue'
import Router from 'vue-router'

const A = () => import('components/a')
const B = () => import('components/b')

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
      component: B
    }
  ]
})
