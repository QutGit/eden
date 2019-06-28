import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import './registerServiceWorker'
import './permission';

import './styles/index.scss'

Vue.config.productionTip = false


// import '../mock/mock';

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
