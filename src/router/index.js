import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome";

const routes = [
    {
        path: "/",
        redirect: "/welcome",
    },
    {
        path: "/welcome",
        name: "Welcome",
        // 落地页同步加载
        component: Welcome,
        meta: {title: '欢迎'},
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login.vue"),
        meta: {title: '登录'},
    },
    {
        path: "/success",
        name: "success",
        component: () => import("../views/success.vue"),
        meta: {title: '登录成功'},
    },
    {
        path: "/error",
        name: "error",
        component: () => import("../views/error.vue"),
        meta: {title: '出错了'},
    },
    {
        path: "/vueLab",
        name: "VueLab",
        component: () => import("../views/VueLab"),
        meta: {title: 'vue相关知识'},
        children:[
            {
                path: "luyou",
                name: "luyou",
                component: () => import("../views/luyou"),
                meta: {title: 'vue相关知识（含路由）'},
            },
        ]
    },
    {
        path: "/exp",
        name: "exp",
        component: () => import("../views/experiment.vue"),
        meta: {title: '实验重地'},
    },
    {
        path: "/vue3",
        name: "vue3",
        component: () => import("../views/Vue3.vue"),
        meta: {title: 'Vue3特性'},
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//路由守卫
router.beforeEach((to,from,next)=>{
    if(to.path === '/exp'){
        if(localStorage.getItem('master') === 'zyq'){
            next()
        }else{
            alert('实验室重地，外人不得进入！')
        }
    }else{
        next()
    }
})

router.afterEach((to)=>{
    document.title = to.meta.title || '无名'
})

export default router;