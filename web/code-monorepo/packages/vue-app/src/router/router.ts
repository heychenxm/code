import {createRouter, createWebHashHistory,RouteRecordRaw} from 'vue-router'

const routes :Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: import('../views/Home.vue')
    },
    {
        path: '/',
        name: 'Init',
        redirect: '/home',
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
export {
    routes
}