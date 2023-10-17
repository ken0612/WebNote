import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import router  from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)
export default new Vue({
  render: h => h(App),
  router:router
}).$mount('#root')
