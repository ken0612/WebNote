import LoginPage from '../components/LoginPage.vue'
import HomeVue from '../components/HomeComponents/HomeVue.vue'
import RegistVue from '../components/RegistVue.vue'
import MarketVue from '../components/Market/MarketVue.vue'
import CompanyAbout from '../components/HomeComponents/About/CompanyAbout.vue'
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
        },
        {
            path:'/market',
            component:MarketVue
        },
        {
            path:'/company',
            component:CompanyAbout
        }
        

    ]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;