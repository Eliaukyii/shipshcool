import Vue from "vue"
import VueRouter from "vue-router"
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Main,
        name: 'Main',
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: Home
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
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