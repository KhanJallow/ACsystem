

import router from './routes';


import PageContent from './components/PageContent.vue';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

import LoginBox from './components/LoginBox.vue';

import 'es6-promise/auto'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {store} from './store.js';

import setTitle from './utilities/setTitle.js';

import PouchDB from 'pouchdb'

window.PouchDB = PouchDB;
// window.axios = axios;
window.Vuex  = Vuex;
// window.notify  = notify;
window.setTitle  = setTitle;


// START MODELS
import * as User from './database/models/User.js';
window.User = User;

window.parentVue = new Vue({
    el: '#app',
    components: { PageContent, NavBar, SideBar, LoginBox },
    router,
    store,
    data: {
        message: 'Hello Vue.js!',
        loginPath: '',
        notification: store.state.title,
    },
    methods: {

    },
    computed: {
        user () {
            return store.state.user
        }
    },
    filters: {

    }
});