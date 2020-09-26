window.Vue = require('vue');
import Axios from 'axios';
import VueRouter from 'vue-router';

Vue.use( VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(
            /* webpackChunkName: "homeComponent" */
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
        path: '/login',
        name: 'Login',
        component: () => import(
            /* webpackChunkName: "login" */
            './views/Login.vue'
        )
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(
            /* webpackChunkName: "Dashboard" */
            './views/Admin/Dashboard.vue'
        ),
        beforeEnter: function (to, from, next) {
            axios.get('/api/authenticated')
                .then(() => next())
                .catch(() => {return next({ name: "Home" });})
        }
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