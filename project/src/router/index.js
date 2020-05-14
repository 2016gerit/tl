import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Vip from '@/components/Vip'
import Find from '@/components/Find'
import Purchase from '@/components/Purchase'
import News from '@/components/news/News'
import Newsdetail from '@/components/news/Newsdetail'
import goodsList from '@/components/goods/goodsList'
import goodsDetails from '@/components/goods/goodsDetails'
import Picture from '@/components/pictures/Picture'
import kkl from '@/components/kkk/kkl'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/news/Newsdetail/:id',
      name: 'Newsdetail',
      component: Newsdetail
    },
    {
      path: '/goods/goodsList/:page',
      name: 'goodsList',
      component: goodsList
    },
    {
      path: '/goods/goodsDetails/:goods_id',
      name: 'goodsDetails',
      component: goodsDetails
    },
    {
      path: '/pictures/Picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/kkk/kkl',
      name: 'kkl',
      component: kkl
    }
  ]
})
