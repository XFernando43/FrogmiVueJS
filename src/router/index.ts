import { createRouter, createWebHistory } from "vue-router";
import ReportsPage from "../views/ReportsPage.vue";
import SismologicalPage from "../views/SismologicalPage.vue";

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