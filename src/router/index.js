import Vue from 'vue'
import Router from 'vue-router'
 
const index = ()=>import("@/views/index/index")

const product = ()=>import("@/views/product/product")
const blockChain = ()=>import("@/views/product/blockChain")
const fintech = ()=>import("@/views/product/fintech")
const hash = ()=>import("@/views/product/hash")
const supercompute = ()=>import("@/views/product/supercompute")

const news = ()=>import("@/views/news/list")
const new01 = ()=>import("@/views/news/new01")
const new02 = ()=>import("@/views/news/new02")
const new03 = ()=>import("@/views/news/new03")
const new04 = ()=>import("@/views/news/new04")
const new05 = ()=>import("@/views/news/new05")
const new06 = ()=>import("@/views/news/new06")
const service = ()=>import("@/views/service/service")
const about = ()=>import("@/views/about/about")


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/index', name: 'index', component: index },
    { path: '/product', name: 'product', component: product,
      children:[
        { path:'/product/super', name: 'super', component: supercompute,},
        { path:'/product/hash', name: 'hash', component: hash,},
        { path:'/product/fintech', name: 'fintech', component: fintech,},
        { path:'/product/blockChain', name: 'blockChain', component: blockChain,},
      ]
    },
    { path: '/news', name: 'news', component: news },
    { path: '/new01', name: 'new01', component: new01 },
    { path: '/new02', name: 'new02', component: new02 },
    { path: '/new03', name: 'new03', component: new03 },
    { path: '/new04', name: 'new04', component: new04 },
    { path: '/new05', name: 'new05', component: new05 },
    { path: '/new06', name: 'new06', component: new06 },
    { path: '/service', name: 'service', component: service },
    { path: '/about', name: 'about', component: about },
    { path: '*', redirect:'/index' }
  ],
})
