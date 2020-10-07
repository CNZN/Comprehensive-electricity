import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goods:[]
    },
    getters: {}
    ,
    mutations: {
        goods(state,pro){
            state = JSON.parse(localStorage.getItem('goods'))
            // if(pro.id==){}
            state.goods.push(pro)
            localStorage.setItem('goods',JSON.stringify(state))
        }
    },
    actions: {
        
    }
})

export default store