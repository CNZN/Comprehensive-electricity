import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goods: []
    },
    getters: {}
    ,
    mutations: {
        goods(state, pro) {
            if (JSON.parse(localStorage.getItem('goods'))) {
                state = JSON.parse(localStorage.getItem('goods'))
                if (state.goods) {
                    for (let i = 0; i < state.goods.length; i++) {
                        if (pro.id == state.goods[i].id) {
                            state.goods[i].num = +state.goods[i].num + +pro.num
                            localStorage.setItem('goods', JSON.stringify(state))
                        }
                    }
                }
                var count = 0
                if (state.goods) {
                    for (let i = 0; i < state.goods.length; i++) {
                        if (pro.id != state.goods[i].id) {
                            count++
                            if (count == state.goods.length) {
                                state.goods.push(pro)
                                localStorage.setItem('goods', JSON.stringify(state))
                            }
                        }
                    }
                }
            } else {
                state.goods.push(pro)
                localStorage.setItem('goods', JSON.stringify(state))
            }
        }
    },
    actions: {

    }
})

export default store