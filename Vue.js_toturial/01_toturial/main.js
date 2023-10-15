import Vue from 'vue'
import App from './App.vue';
import {a} from './mixin';
Vue.config.productionTip = false
Vue.mixin(a)
new Vue({
  
  render: h => h(App),
}).$mount('#root')
