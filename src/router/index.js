import Vue from 'vue'
import Router from 'vue-router'

const A = () => import('components/a')
const B = () => import('components/b')
const BB = () => import('components/bb')
const Home = () => import('components/home/home')

// 关于我们
const About = () => import('components/about/about')
const About1 = () => import('components/about/about1')
const About2 = () => import('components/about/about2')
const About3 = () => import('components/about/about3')
const About4 = () => import('components/about/about4')
const About5 = () => import('components/about/about5')

const Detail = () => import('components/detail/detail')

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
      component: About,
      redirect:'/about/a',
      children: [
        {
          path:'a',
          component: About1
        },
        {
          path:'b',
          component: About2
        },
        {
          path:'c',
          component: About3
        },
        {
          path:'d',
          component: About4,
          children: [
            {
              path:'detail',
              component:Detail
            }
            
          ]
        },
        {
          path:'e',
          component: About5
        }
      ]
    }
    

  ]
})
