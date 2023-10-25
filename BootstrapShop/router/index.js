import { createRouter,createWebHistory } from 'vue-router'
import HomeVue from '../components/HomeVue'
import LoginVue from '../components/LoginVue'
const  routes=[
        {
            path:'/',
            component:HomeVue
        },
        {
            path:'/login',
            component:LoginVue
        }
        

    ]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;