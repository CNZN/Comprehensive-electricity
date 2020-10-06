import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            redirect:"/index/select",
        },
        {
            path:'/index',
            name:'Index',
            component:()=>import('../view/index/Index'),
            children:[
                {path:'select',component:()=>import('../view/index/tapbar/bars/Select')},
                {path:'happy',component:()=>import('../view/index/tapbar/bars/Happy')},
                {path:'shopping',component:()=>import('../view/index/tapbar/bars/Shopping')},
                {path:'electric',component:()=>import('../view/index/tapbar/bars/Electric')},
                {path:'life',component:()=>import('../view/index/tapbar/bars/Life')},
                {path:'makeup',component:()=>import('../view/index/tapbar/bars/Makeup')},
            ]
        },
        {
            path:'/classify',
            name:'Classify',
            component:()=>import('../view/classify/Classify')
        },
        {
            path:'/find',
            name:'Find',
            component:()=>import('../view/find/Find')
        },
        {
            path:'/car',
            name:'Car',
            component:()=>import('../view/car/Car')
        },
        {
            path:'/mine',
            name:'Mine',
            component:()=>import('../view/mine/Mine')
        },
        {
            path:"/detail/:id",
            name:'Detail',
            component:()=>import('../components/Detail')
        }
    ],
    linkActiveClass:'active'
})


export default  router