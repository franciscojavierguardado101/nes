/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import Post from './Views/Post'
import PostView from './Views/PostView'

Vue.use(VueRouter)

Vue.component('app', require('./components/core/App.vue').default);


const routes = [
    {path: '/', component: Post},
    {path: '/post/:postId', name: 'postview', component: PostView}
];


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router: router,
}).$mount('#app');
