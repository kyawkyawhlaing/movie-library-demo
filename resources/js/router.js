window.Vue = require('vue');
import VueRouter from 'vue-router';

Vue.use( VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(
            /* webpackChunkName: "exampleComponent" */
            './views/Home.vue'
        )
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(
            /* webpackChunkName: "contactComponent" */
            './views/Contact.vue'
        )
    },
    {
        path: '/404',
        alias: '*',
        name: 'NotFound',
        component: () => import(
        /* webpackChunkName: "404error" */
            './views/NotFound.vue'
        )
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router