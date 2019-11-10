/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');
import VueRouter from 'vue-router'
import Post from './Views/Post'
import Login from './Views/Login'
import Signup from './Views/SignUp'
import PostView from './Views/PostView'
import PostCreate from './Views/PostCreate'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.component('app', require('./components/core/App.vue').default);

const routes = [
    {
        path: '/login', name: 'login', component: Login, beforeEnter: (to, from, next) => {
            if (!store.getters['user/isLoggedIn']) {
                next();
            }
        }
    },
    {
        path: '/signup', name: 'signup', component: Signup, beforeEnter: (to, from, next) => {
            if (!store.getters['user/isLoggedIn']) {
                next();
            }
        }
    },
    {
        path: '/', name: 'home', component: Post, beforeEnter: (to, from, next) => {
            store.dispatch('user/getUser')
            next();
        }
    },
    {path: '/post/:postId', name: 'postview', component: PostView},
    {path: '/post/create', name: 'postCreate', component: PostCreate}
];


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

window.router = router;
window.store = store;
const app = new Vue({
    router: window.router, store: window.store
}).$mount('#app');

window.app = app;

