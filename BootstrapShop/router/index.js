import { createRouter,createWebHistory } from 'vue-router'
import HomeVue from '../components/HomeVue'
import RegistVue from '../components/RegistVue'
import LoginVue from '../components/LoginVue'
import ForgotPassword from '../components/ForgotPassword'
import CartVue from '../components/CartVue'
import ProductsVue from '../components/Products/ProductsVue'
import ProductsShow from '../components/Products/Category/ProductsShow'
const  routes=[
        {
            path:'/',
            component:HomeVue
        },
        {
            path:'/regist',
            component:RegistVue
        },
        {
            path:'/login',
            component:LoginVue
        },
        {
            path:'/forgotpassword',
            component:ForgotPassword
        },
        {
            path:'/cart',
            component:CartVue
        },
        {
            path:'/products',
            component:ProductsVue,
            children:[
                {
                    path:'category/:cid',
                    component:ProductsShow
                }

            ]
        },
        {
            path:'/memberpage',
            component:()=> import('../components/MemberPage/MemberPage.vue'),
            children:[
                {
                    path:'info',
                    component:()=>import('../components/MemberPage/MemberHome.vue')
                },
                {
                    path:'orders',
                    component:()=>import('../components/MemberPage/HistoryOrders.vue')
                }
            ]
        }
    ]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;