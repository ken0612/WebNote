import Vuex from 'vuex'
import Vue from 'vue'

const testConfig={
    namespaced:true,
    actions:{
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
    },
    mutations:{
        'PLUS':function(state,value){
            state.sum+=value
        },
        'MINUS':function(state,value){
            state.sum-=value
        },
        'PLUSODD':function(state,value){
            if(state.sum %2){
                state.sum+=value
            }
        },
        'PLUSWAIT':function(state,value){
            setTimeout(()=>{
                state.sum+=value
            },500)
            
        }
    },
    getters:{
        bigSum(state){
            return state.sum*10
            
        }

    },
    state:{
        sum:0,
        studentName:'ken',
        studentAge:27,
    }
}

const personConfig={
    namespaced:true,
    actions:{

    },
    mutations:{
        
    },
    getters:{

    },
    state:{
        personList:[
            {id:"001",name:'ken',age:18},
            {id:"002",name:'neil',age:18},
            {id:"003",name:'joseph',age:18},
            {id:"004",name:'terry',age:18},
        ] 
    }
}


Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        testAbout:testConfig,
        personAbout:personConfig
    }

    // actions,
    // mutations,
    // state,
    // getters
})