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
            component:About,
            meta:{isAuth:true,title:'關於'}
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'主頁'},
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新聞'},
                    //獨享路由守衛，寫法同beforeEach
                    // beforeEnter:(to,from,next)=>{
                    //     if(to.meta.isAuth){ //判斷是否需要權限
                    //         if(localStorage.getItem('school')==='ken'){
                    //             next()
                    //         }else{
                    //             alert('沒有權限！')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {   
                            name:'detail',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true,title:'詳細'},
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
//全局前置路由守衛，在路由器切換之前被調用
// router.beforeEach((to,from,next) => {
//     // to and from are both route objects. must call `next`.
//     console.log(to,from)
//     if(to.meta.isAuth){ //判斷是否需要權限
//         if(localStorage.getItem('school')==='ken'){
//             next()
//         }else{
//             alert('沒有權限！')
//         }
//     }else{
//         next()
//     }
    
// }) 
//後置路由守衛，在每次路由切換完成後被調用
//可用於更改網頁標題。
router.afterEach((to,from)=>{
    document.title= to.meta.title
})
export default router