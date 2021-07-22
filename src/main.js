import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
import { BootstrapVue } from 'bootstrap-vue'
import router from './components/router'
Vue.use(VueRouter)
Vue.use(BootstrapVue)



new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
