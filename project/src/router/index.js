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
                component: ()=>import('@/views/Main.vue'),  //首页
                meta:{title:'首页'}
            },
            {
                name:'Bxsp',
                path:'/bxsp',
                component: ()=>import('@/views/Layout/Content/Bxsp.vue'),  //报销审批
                meta:{title:'报销审批'}
            },
            {
                name:'Bxsq',
                path:'/bxsq',
                component: ()=>import('@/views/Layout/Content/Bxsq.vue'),   //报销申请
                meta:{title:'报销申请'}
            },
            {
                name:'newBxsq',
                path:'/newbxsq',
                component: ()=>import('@/views/Layout/Content/newBxsq.vue'),   //新建报销申请
                meta:{title:'新建报销申请'}
            },
            {
                name:'Clbx',
                path:'/clbx',
                component: ()=>import('@/views/Layout/Content/Clbx.vue'),   //差旅报销
                meta:{title:'差旅报销'}
            },
            {
                name:'Jkbx',
                path:'/jkbx',
                component: ()=>import('@/views/Layout/Content/Jkbx.vue'),   //借款报销
                meta:{title:'借款报销'}
            },
            {
                name:'Wlfk',
                path:'/wlfk',
                component: ()=>import('@/views/Layout/Content/Wlfk.vue'),   //往来付款
                meta:{title:'往来付款'}
            },
            {
                name:'ClbxSp',
                path:'/clbxsp',
                component:()=>import('@/views/Layout/Content/ClbxSp.vue'),    //差旅报销审批
                meta:{title:'差旅报销审批'}
            },
            {
                name:'Fjmk',
                path:'/fjmk',
                component:()=>import('@/views/Layout/Content/Fjmk.vue'),    //附件模块
                meta:{title:'附件模块'}
            },
            {
                name:'Zygl',
                path:'/zygl',
                component:()=>import('@/views/Layout/Content/Zygl.vue')    //差旅报销审批
            },
            {
                name:'Gwbg',
                path:'/gwbg',
                component:()=>import('@/views/Layout/Content/Qxgl/gwbg.vue')    //岗位变更
            },
            {
                name:'Bmgl2',
                path:'/bmgl2',
                component:()=>import('@/views/Layout/Content/Qxgl/bmgl.vue')    //部门管理
            },
            {
                name:'Yhgl',
                path:'/yhgl',
                component:()=>import('@/views/Layout/Content/Qxgl/yhgl.vue')    //用户管理
            },
            {
                name:'Jslb',
                path:'/jslb',
                component:()=>import('@/views/Layout/Content/Qxgl/jslb.vue')    //角色列表
            },
            {
                name:'Jsqx',
                path:'/jsqx',
                component:()=>import('@/views/Layout/Content/Qxgl/jsqx.vue')    //角色权限
            },
            {
                name:'Rylb',
                path:'/rylb',
                component:()=>import('@/views/Layout/Content/Ryda/rylb.vue')    //人员类别
            },
            {
                name:'Bmgl1',
                path:'/bmgl1',
                component:()=>import('@/views/Layout/Content/Ryda/bmgl.vue')    //部门管理
            },
            {
                name:'Rygl',
                path:'/rygl',
                component:()=>import('@/views/Layout/Content/Ryda/rygl.vue')    //人员管理
            },
            {
                name:'Gzzh',
                path:'/gzzh',
                component:()=>import('@/views/Layout/Content/Ryda/gzzh.vue')    //工资账户
            },
            {
                name:'Bxzh',
                path:'/bxzh',
                component:()=>import('@/views/Layout/Content/Ryda/bxzh.vue')    //报销账户
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
