import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/pages/top'
import Member from '../components/pages/member'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path :'/',
      name: 'top',
      component: Top
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    }
  ]
})