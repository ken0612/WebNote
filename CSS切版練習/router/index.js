import LoginPage from '../components/LoginPage.vue'
import HomeVue from '../components/HomeComponents/HomeVue.vue'
import RegistVue from '../components/RegistVue.vue'
import { createRouter,createWebHistory } from 'vue-router'


const  routes=[
        {
            path:'/login',
            component:LoginPage
        },
        {
            path:'/home',
            component:HomeVue
        },
        {
            path:'/',
            component:HomeVue
        },
        {
            path:'/regist',
            component:RegistVue
        }

    ]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;