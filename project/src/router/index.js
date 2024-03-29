import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () => import('../views/Main.vue'),
        name: '首页',
        redirect: '/login',
        children: [{
                path: 'home',
                name: 'Home',
                component: () => import('../views/Home.vue'),
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
            {
                name: '日常报销单详情',
                path: '/rcDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/component/Details.vue'),
            },
            {
                name: '差旅报销单详情',
                path: '/clDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/TravelApply/component/Detail.vue'),
            },
            {
                name: '借支报销单详情',
                path: '/jzDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/DebitApply/component/Detail.vue'),
            },
            {
                name: '往来报销单详情',
                path: '/wlDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/PaymentApply/component/Detail.vue'),
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
                name: '日常报销单审批',
                path: '/rcbxsp',
                component: () => import('@/views/Layout/Content/ApprovalManage/DailySP/dailySp.vue'),
            },
            {
                name: '差旅报销单审批',
                path: '/clbxsp',
                component: () => import('@/views/Layout/Content/ApprovalManage/TravelSP/travelSp.vue'),
            },



            {
                name: 'StepPage',
                path: '/StepPage',
                component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/StepPage.vue'), //步骤条
            },
            {
                name: 'Zygl',
                path: '/zygl',
                component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/component/Zygl.vue') //摘要管理
            },


    //系统管理
            {
                name: '岗位变更',
                path: '/201803100911003438',
                component: () => import('@/views/Layout/Content/Qxgl/gwbg.vue') //岗位变更
            },
            {
                name: '部门管理',
                path: '/201602142242543567',
                component: () => import('@/views/Layout/Content/Qxgl/bmgl.vue') //部门管理
            },
            {
                name: '用户管理',
                path: '/201602142242462112',
                component: () => import('@/views/Layout/Content/Qxgl/yhgl.vue') //用户管理
            },
            {
                name: '角色列表',
                path: '/201602142244437712',
                component: () => import('@/views/Layout/Content/Qxgl/jslb.vue') //角色列表
            },
            {
                name: '角色权限',
                path: '/201602142244583243',
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
            },
            {
                name: '菜单栏目',
                path: '/201602142238155549',
                component: () => import('@/views/Layout/Content/SystemSet/cdlm.vue') //报销账户
            },

            
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    }

]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router