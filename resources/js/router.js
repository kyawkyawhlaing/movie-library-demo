window.Vue = require("vue");
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(
                /* webpackChunkName: "homeComponent" */
                "./views/Home.vue"
            )
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import(
                /* webpackChunkName: "contactComponent" */
                "./views/Contact.vue"
            )
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(
                /* webpackChunkName: "login" */
                "./views/Login.vue"
            )
    },
    {
        path: '/movieDetails/:id',
        name: 'MovieDetails',
        component: () =>
        import(
            /* webpackChunkname: "123" */
            "./views/MovieDetails.vue"
        )
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
            import(
                /* webpackChunkName: "Dashboard" */
                "./views/Admin/Dashboard.vue"
            ),
        children: [
            {
                path: "/insertmovie",
                name: "InsertMovie",
                component: () =>
                    import(
                        /*webpackChunkname: "InsertMovie" */
                        "./views/Admin/InsertMovie.vue"
                    ),
                meta: { requiresAuth: true }
            }
        ],
        meta: { requiresAuth: true }
    },
    {
        path: "/404",
        alias: "*",
        name: "NotFound",
        component: () =>
            import(
                /* webpackChunkName: "404error" */
                "./views/NotFound.vue"
            )
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.email) {
            console.log(localStorage.email);
            next({
                name: "Login"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
