import { createRouter, createWebHistory } from "vue-router";
import FeaturePage from '../views/FeaturesPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: FeaturePage
        },
        {
            path: '/feature/:id',
            name: 'feature',
            component: ()=> import('../views/FeatureInfoPage.vue')
        },
    ]
})

export default router;