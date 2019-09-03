import Vue from 'vue'
import Router from 'vue-router'
import Promise from "promise-polyfill";
import MainScreen from '@/components/MainScreen'

Vue.use(Router)

if(!window.Promise){
    window.Promise = Promise;
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    }
  ]
})
