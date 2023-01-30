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
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login.vue"),
    },
    {
        path: "/success",
        name: "success",
        component: () => import("../views/success.vue"),
    },
    {
        path: "/error",
        name: "error",
        component: () => import("../views/error.vue"),
    },
    {
        path: "/vueLab",
        name: "VueLab",
        component: () => import("../views/VueLab"),

    },
    {
        path: "/draft",
        name: "draft",
        component: () => import("../views/draft"),
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;