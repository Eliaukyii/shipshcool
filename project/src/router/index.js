import Vue from "vue"
import VueRouter from "vue-router"
import store from '@/store'
Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect: '/login',
        component: ()=>import('@/views/Login/index.vue')  //登录页
    },
    {
        name:'Home',
        path:'/home',
        component: ()=>import('@/views/Layout/index.vue'),
        children:[
            {
                name:'Main',
                path:'/home',
                component: ()=>import('@/views/Main.vue')  //首页
            },
            {
                name:'Bxsp',
                path:'/bxsp',
                component: ()=>import('@/views/Layout/Content/Bxsp.vue')  //报销审批
            },
            {
                name:'Bxsq',
                path:'/bxsq',
                component: ()=>import('@/views/Layout/Content/Bxsq.vue')   //报销申请
                
            },
            {
                name:'newBxsq',
                path:'/newbxsq',
                component: ()=>import('@/views/Layout/Content/newBxsq.vue')   //报销申请
                
            },
            {
                name:'Clbx',
                path:'/clbx',
                component: ()=>import('@/views/Layout/Content/Clbx.vue')   //差旅报销
                
            },
            {
                name:'Jkbx',
                path:'/jkbx',
                component: ()=>import('@/views/Layout/Content/Jkbx.vue')   //借款报销
                
            },
            {
                name:'Wlfk',
                path:'/wlfk',
                component: ()=>import('@/views/Layout/Content/Wlfk.vue')   //往来付款
                
            },
            {
                name:'ClbxSp',
                path:'/clbxsp',
                component:()=>import('@/views/Layout/Content/ClbxSp.vue')    //差旅报销审批
            },
            {
                name:'Fjmk',
                path:'/fjmk',
                component:()=>import('@/views/Layout/Content/Fjmk.vue')    //差旅报销审批
            },
            {
                name:'Zygl',
                path:'/zygl',
                component:()=>import('@/views/Layout/Content/Zygl.vue')    //差旅报销审批
            }
        ]

    },
    {
        name:'Login',
        path:'/login', 
        component: ()=>import('@/views/Login/index.vue')  //登录页
    }
]

const router=new VueRouter({
    mode:'hash',
    store,
    routes
})

// // 添加全局前置导航守卫
// router.beforeEach((to, from, next) => {

//     if(to.path === '/'){
//      next()
//     }else{
//       let token = localStorage.getItem('token');
//       if(token === null || token === ''){
//         next({path:'/'});
//       }else{
//         next()
//       }
//     }
//    })
  
export default router
