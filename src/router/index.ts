import { createRouter, createWebHistory } from "vue-router";
import ReportsPage from "../views/ReportsPage.vue";
// import FeatureInfo from "../views/FeatureInfo.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: ReportsPage
        },
        {
            path: '/feature/:id',
            name: 'feature',
            component: ()=> import('../views/FeatureInfo.vue')
        },
    ]
})

export default router;