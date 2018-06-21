import Vue from 'vue'
import Router from 'vue-router'

const A = () => import('components/a')
const B = () => import('components/b')
const BB = () => import('components/bb')
const Home = () => import('components/home/home')
const About = () => import('components/about/about')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
    

  ]
})
