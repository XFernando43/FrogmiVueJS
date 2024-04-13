import { createRouter, createWebHashHistory } from "vue-router";
import SismologicalPage from "../pages/SismologicalPage.vue";

const routes = [
    {
        path: '',
        // name: 'reports',
        component: SismologicalPage
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router;