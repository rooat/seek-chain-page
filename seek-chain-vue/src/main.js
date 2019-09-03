// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible'
import App from './App'
import router from './router'
import i18n from './common/language/index'
//import web3 from  './common/utils/getWeb3'
import toastRegistry from './common/utils/toastr'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import trans from './common/utils/trans'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import 'es6-promise/auto'


require('es6-promise').polyfill()
Es6Promise.polyfill()

Vue.prototype.$axios = axios

//Vue.prototype.$mobile= navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

Vue.use(toastRegistry)
//Vue.use(web3)
//Vue.use(Initial)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
