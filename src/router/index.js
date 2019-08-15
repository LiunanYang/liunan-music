import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/views/Rank'
import Recommend from '@/views/Recommend'
import Search from '@/views/Search'
import Singer from '@/views/Singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component:Singer
    }
  ]
})
