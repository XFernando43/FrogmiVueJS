import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../pages/HomePage.vue";
import SismologicalPage from "../pages/SismologicalPage.vue";
import ReportsPage from "../pages/ReportsPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/Etrade',
            name: '',
            component: SismologicalPage
        },
        {
            path: '/home',
            name: 'home',
            component: ReportsPage
        },
    ]
})

export default router;