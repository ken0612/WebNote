import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router= new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {   
                            name:'detail',
                            path:'detail',
                            component:Detail,
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]


})
//全局前置路由守衛
router.beforeEach((to,from,next) => {
    // to and from are both route objects. must call `next`.
    console.log(to,from)
    if(to.path === '/home/news' || to.path === '/home/message'){
        if(localStorage.getItem('school')==='ken'){
            next()
        }
    }else{
        next()
    }
    
}) 
export default router