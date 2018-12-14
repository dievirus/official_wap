import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('components/home/home')
const Detail = () => import('components/detail/detail')

// 关于我们
const About = () => import('components/about/about')
const About1 = () => import('components/about/about1')
const About2 = () => import('components/about/about2')
const About3 = () => import('components/about/about3')
const About4 = () => import('components/about/about4')
const About5 = () => import('components/about/about5')

// 公司业绩
const Achievement = () => import('components/achievement/achievement')
const Achievement1 = () => import('components/achievement/achievement1')
const Achievement2 = () => import('components/achievement/achievement2')
const Achievement3 = () => import('components/achievement/achievement3')
const Achievement4 = () => import('components/achievement/achievement4')

// 投资合作
const Cooperation = () => import('components/cooperation/cooperation')
const Cooperation1 = () => import('components/cooperation/cooperation1')
const Cooperation2 = () => import('components/cooperation/cooperation2')

// 公司资讯
const information = () => import('components/information/information')
const information1 = () => import('components/information/information1')
const information2 = () => import('components/information/information2')
const information3 = () => import('components/information/information3')

// 爱心捐赠
const donate = () => import('components/donate/donate')
const donate1 = () => import('components/donate/donate1')

// 党建工作
const construction = () => import('components/construction/construction')
const construction1 = () => import('components/construction/construction1')
const construction2 = () => import('components/construction/construction2')
const construction3 = () => import('components/construction/construction3')
const construction4 = () => import('components/construction/construction4')


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
          meta: { 
            url:'/about/d/detail/',
            type: 14
          },
          children: [
            {
              path:'detail/:id',
              component:Detail,
            }
          ]
        },
        {
          path:'e',
          component: About5
        }
      ]
    },
    {
      path:'/achievement',
      component: Achievement,
      redirect:'/achievement/d',
      children: [
        {
          path:'a',
          component: Achievement1,
          meta: { 
            url:'/achievement/a/detail/',
            type:1
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'b',
          component: Achievement2,
          meta: { 
            url:'/achievement/b/detail/',
            type:2
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'c',
          component: Achievement3,
          meta: { 
            url:'/achievement/c/detail/',
            type:3
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'d',
          component: Achievement4,
          meta: { 
            url:'/achievement/d/detail/',
            type:15
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
      ]
    },
    {
      path:'/cooperation',
      component: Cooperation,
      redirect:'/cooperation/a',
      children: [
        {
          path:'a',
          component: Cooperation1,
          meta: { 
            url:'/cooperation/a/detail/',
            type:4
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'b',
          component: Cooperation2
        }
      ]
    },
    {
      path:'/information',
      component: information,
      redirect:'/information/a',
      children: [
        {
          path:'a',
          component: information1,
          meta: { 
            url:'/information/a/detail/',
            type:6
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'b',
          component: information2,
          meta: { 
            url:'/information/b/detail/',
            type:7
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'c',
          component: information3,
          meta: { 
            url:'/information/c/detail/',
            type:8
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        
      ]
    },
    {
      path:'/donate',
      component: donate,
      redirect:'/donate/a',
      children: [
        {
          path:'a',
          component: donate1,
          meta: { 
            url:'/donate/a/detail/',
            type:9
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
      ]
    },
    {
      path:'/construction',
      component: construction,
      redirect:'/construction/a',
      children: [
        {
          path:'a',
          component: construction1,
          meta: { 
            url:'/construction/a/detail/',
            type:10
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'b',
          component: construction2,
          meta: { 
            url:'/construction/b/detail/',
            type:11
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'c',
          component: construction3,
          meta: { 
            url:'/construction/c/detail/',
            type:12
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'d',
          component: construction4,
          meta: { 
            url:'/construction/d/detail/',
            type:13
          },
          children: [
            {
              path:'detail/:id',
              component:Detail
            }
          ]
        },
      ]
    },
  ]
})
