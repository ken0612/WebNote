import { createApp } from 'vue'
import App from './App.vue'

const app= createApp(App)
app.config.productionTip = false;
console.log(app)
app.mount('#app')