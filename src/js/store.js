import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

window.Vuex  = Vuex;

export const store = new Vuex.Store({
    state: {
        user: '',
        title: '',
    },
    mutations: {
        fillUserPostLogin (state, data) {
            // mutate state
            state.user = data.user
        },
        clearUserPostLogout (state, data) {
            // mutate state
            state.user = data
        },
        setTitle (state, data) {
            // mutate state
            state.title = data

        },
    }
});