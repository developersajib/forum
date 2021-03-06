
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

import User from './Helpers/User'
import AppStroage from './Helpers/AppStorage'
window.User = User
window.AppStroage = AppStroage
console.log(User.id())

Vue.component('AppHome', require('./components/AppHome.vue'));
import router from './Router/router.js'



const app = new Vue({
    el: '#app',
    router
});
