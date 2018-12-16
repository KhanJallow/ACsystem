import VueRouter from 'vue-router'

let routes = [
    {
        path:'/',
        component: require('./views/Admins/Dashboard.vue')
    },
    {
        path:'/Events',
        component: require('./views/Admins/Events.vue')
    },
    {
        path:'/Projects',
        component: require('./views/Admins/Projects.vue')
    },
    {
        path:'/Locations',
        component: require('./views/Admins/Location.vue')
    },
    {
        path:'/Interns',
        component: require('./views/Admins/Interns.vue')
    },
    {
        path:'/Time inn records',
        component: require('./views/Admins/Time inn records.vue')
    },
    {
        path:'/Visitor register',
        component: require('./views/Admins/Visitor register.vue')
    },
];

export default new VueRouter({
    // mode: 'history',
    routes,
    linkActiveClass: 'active'
})