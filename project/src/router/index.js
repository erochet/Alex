import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import profile from '@/components/profile'
import loggedin from '@/components/loggedin'
import carting from '@/components/carting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/profile',
      name:'profile',
      component:profile
    },
    {
      path:'/loggedin',
      name:'loggedin',
      component:loggedin
    },
    {
      path:'/carting',
      name:'carting',
      component:carting
    }
  ]
})
