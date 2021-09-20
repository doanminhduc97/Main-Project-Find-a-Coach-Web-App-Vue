import { createRouter, createWebHistory } from 'vue-router';
import Coaches from './pages/Coaches.vue'
import Request from './pages/Request.vue'
// import TeamMembers from './components/teams/TeamMembers.vue'
import NotFount from './pages/NotFount.vue'
// import TeamFooter from './pages/TeamFooter.vue'
// import UserFooter from './pages/UserFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            // meta: { needsAuth: true },
            name: 'coaches',
            path: '/coaches',
            // components: { default: TeamsList, footer: TeamFooter },
            component: Coaches
            // alias: '/',
            // children: [
            //     {
            //         name: 'team-members',
            //         path: ':teamId',
            //         component: TeamMembers,
            //         props: true
            //     },
            // ]
        },
        {
            name: 'requests',
            path: '/requests',
            component: Request
            // components: { default: UsersList, footer: UserFooter },
            // beforeEnter(to, from, next) {
            //     console.log('vao children beforeEnter')
            //     console.log(to, from)
            //     next()
            // }
        },
        {
            path: '/:notFount(.*)',
            component: NotFount
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 }
    }
});

// router.beforeEach(function(to, from, next) {
//     console.log('Global beforeEach')
//     if (to.meta.needsAuth) {
//         console.log('Needs Auth!')
//         next()
//     } else {
//         next()
//     }
    // console.log('to', to)
    // console.log('from', from)
    // if (to.name === 'teams') {
    //     next({ name: 'users' })
    // }
    // next()
// });

// router.afterEach(function(to, from) {
//     // sending analytics data
//     console.log('Global afterEach')
//     console.log(to, from)
// });

export default router;