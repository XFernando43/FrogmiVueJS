import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../pages/HomePage.vue";
import SismologicalPage from "../pages/SismologicalPage.vue";
import ReportsPage from "../pages/ReportsPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/home',
            name: 'home',
            component: ReportsPage
        },
        {
            path: '/report',
            name: 'report',
            component: SismologicalPage
        },
    ]
})

export default router;