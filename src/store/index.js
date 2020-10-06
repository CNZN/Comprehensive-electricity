import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: '', 
    },
    getters: {}
    ,
    mutations: {

        name(state, pro){
            state.username = pro
        }
    },
    actions: {
        
    }
})

export default store