import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: ()=>import('../views/Main.vue'),
        name: 'Main',
        redirect: '/login',
        children: [{
            path: 'home',
            name: 'home',
            component: ()=>import('../views/Home.vue'),
        },
        // 申报管理
        {
            name: 'Bxsq',
            path: '/CustomApprovlsheet_List',
            component: () => import('@/views/Layout/Content/Bxsq.vue'), //日常报销申请
        },
        {
            name: 'Clbx',
            path: '/ApprovalTravel_List',
            component: () => import('@/views/Layout/Content/Clbx.vue'), //差旅报销申请
        },
        {
            name: 'Jkbx',
            path: '/CustomAnysingle_List',
            component: () => import('@/views/Layout/Content/Jkbx.vue'), //个人借支申请
        },
        {
            name: 'Wlfk',
            path: '/184727cc-1b9f-4788-a452-bc16987e10ad',
            component: () => import('@/views/Layout/Content/Wlfk.vue'), //往来付款申请
        },

        //审批管理
        {
            name: 'Bxsp',
            path: '/CustomApprovlsheet_SP',
            component: () => import('@/views/Layout/Content/Bxsp.vue'), //日常报销审批
        },
        {
            name: 'ClbxSp',
            path: '/ApprovalTravel_SP',
            component: () => import('@/views/Layout/Content/ClbxSp.vue'), //差旅报销审批
        },

        {
            name: 'newBxsq',
            path: '/newbxsq',
            component: () => import('@/views/Layout/Content/newBxsq.vue'), //新建报销申请
        },
        {
            name: 'Fjmk',
            path: '/fjmk',
            component: () => import('@/views/Layout/Content/Fjmk.vue'), //附件模块
        },
        {
            name: 'Zygl',
            path: '/zygl',
            component: () => import('@/views/Layout/Content/Zygl.vue') //摘要管理
        },
        {
            name: 'Gwbg',
            path: '/gwbg',
            component: () => import('@/views/Layout/Content/Qxgl/gwbg.vue') //岗位变更
        },
        {
            name: 'Bmgl2',
            path: '/bmgl2',
            component: () => import('@/views/Layout/Content/Qxgl/bmgl.vue') //部门管理
        },
        {
            name: 'Yhgl',
            path: '/yhgl',
            component: () => import('@/views/Layout/Content/Qxgl/yhgl.vue') //用户管理
        },
        {
            name: 'Jslb',
            path: '/jslb',
            component: () => import('@/views/Layout/Content/Qxgl/jslb.vue') //角色列表
        },
        {
            name: 'Jsqx',
            path: '/jsqx',
            component: () => import('@/views/Layout/Content/Qxgl/jsqx.vue') //角色权限
        },
        {
            name: 'Rylb',
            path: '/rylb',
            component: () => import('@/views/Layout/Content/Ryda/rylb.vue') //人员类别
        },
        {
            name: 'Bmgl1',
            path: '/bmgl1',
            component: () => import('@/views/Layout/Content/Ryda/bmgl.vue') //部门管理
        },
        {
            name: 'Rygl',
            path: '/rygl',
            component: () => import('@/views/Layout/Content/Ryda/rygl.vue') //人员管理
        },
        {
            name: 'Gzzh',
            path: '/gzzh',
            component: () => import('@/views/Layout/Content/Ryda/gzzh.vue') //工资账户
        },
        {
            name: 'Bxzh',
            path: '/bxzh',
            component: () => import('@/views/Layout/Content/Ryda/bxzh.vue') //报销账户
        }
    ]
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../views/Login.vue'),
    }

]

const router = new VueRouter({
    mode: 'hash',
    routes
})

// // 添加全局前置导航守卫
// router.beforeEach((to, from, next) => {
//     console.log(to,from);
//     let Token = window.sessionStorage.getItem('Token')

//     console.log(Token);
//     next()

//     // if (to.path === '/login') {
//     //     next()
//     // } else {
//     //     let Token = localStorage.getItem('Token');
//     //     if (Token === null || Token === '') {
//     //         next({
//     //             path: '/'
//     //         });
//     //     } else {
//     //         next()
//     //     }
//     // }
// })

export default router