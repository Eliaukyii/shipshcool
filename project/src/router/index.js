import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: ()=>import('../views/Main.vue'),
        name: '首页',
        redirect: '/login',
        children: [{
            path: 'home',
            name: 'home',
            component: ()=>import('../views/Home.vue'),
        },
        // 申报管理
        {
            name: '日常报销申请',
            path: '/CustomApprovlsheet_List',
            component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/component/Rcbx.vue'),
        },
        {
            name: '差旅报销申请',
            path: '/ApprovalTravel_List',
            component: () => import('@/views/Layout/Content/DeclareManage/TravelApply/component/Clbx.vue'),
        },
        {
            name: '个人借支申请',
            path: '/CustomAnysingle_List',
            component: () => import('@/views/Layout/Content/DeclareManage/DebitApply/component/Jkbx.vue'),
        },
        {
            name: '往来付款申请',
            path: '/184727cc-1b9f-4788-a452-bc16987e10ad',
            component: () => import('@/views/Layout/Content/DeclareManage/PaymentApply/component/Wlfk.vue'),
        },

        //审批管理
        {
            name: '日常报销审批',
            path: '/CustomApprovlsheet_SP',
            component: () => import('@/views/Layout/Content/ApprovalManage/DailySP/index.vue'),
        },
        {
            name: '差旅报销审批',
            path: '/ApprovalTravel_SP',
            component: () => import('@/views/Layout/Content/ApprovalManage/TravelSP/index.vue'),
        },
        {
            name: '个人借支审批',
            path: '/CustomAnysingle_SP',
            component: () => import('@/views/Layout/Content/ApprovalManage/DebitSP/index.vue'),
        },
        {
            name: '往来付款审批',
            path: '/8cca0fea-84fc-4427-ac34-ba47154d5c80',
            component: () => import('@/views/Layout/Content/ApprovalManage/PaymentSP/index.vue'),
        },




        {
            name: 'StepPage',
            path: '/StepPage',
            component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/StepPage.vue'), //步骤条
        },
        {
            name: 'Fjmk',
            path: '/fjmk',
            component: () => import('@/views/Layout/Content/Fjmk.vue'), //附件模块
        },
        {
            name: 'Zygl',
            path: '/zygl',
            component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/component/Zygl.vue') //摘要管理
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