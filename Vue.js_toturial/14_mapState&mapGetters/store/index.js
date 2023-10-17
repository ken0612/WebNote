import Vuex from 'vuex'
import Vue from 'vue'
const actions={
    'plus':function(context,value){
        context.commit('PLUS',value)
    },
    'minus':function(context,value){
        context.commit('MINUS',value)
    },
    'plusOdd':function(context,value){
        context.commit('PLUSODD',value)
    },
    'plusWait':function(context,value){
        context.commit('PLUSWAIT',value)
    }
}
const mutations={
    'PLUS':function(state,value){
        state.sum+=value
    },
    'MINUS':function(state,value){
        state.sum-=value
    },
    'PLUSODD':function(state,value){
        state.sum+=value
    },
    'PLUSWAIT':function(state,value){
        state.sum+=value
    }
}
const getters={
    bigSum(state){
        return state.sum*10
        
    }
}
const state={
    sum:0,
    studentName:'ken',
    studentAge:27

}
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})