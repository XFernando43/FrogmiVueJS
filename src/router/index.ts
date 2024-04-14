import { createRouter, createWebHistory } from "vue-router";
import ReportsPage from "../views/ReportsPage.vue";
import FeatureInfo from "../views/FeatureInfo.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/home',
            name: 'home',
            component: ReportsPage
        },
        {
            path: '/report/:id',
            name: 'report',
            component: FeatureInfo
        },
    ]
})

export default router;