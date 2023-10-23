import {createStore} from 'vuex'
const store =createStore({
    namespaced:true,
    actions:{
        // 'plus':function(context,value){
        //     context.commit('PLUS',value)
        // },
        // 'minus':function(context,value){
        //     context.commit('MINUS',value)
        // },
        // 'plusOdd':function(context,value){
        //     context.commit('PLUSODD',value)
        // },
        // 'plusWait':function(context,value){
        //         context.commit('PLUSWAIT',value)
        // }
        'switchbtn':function (context){
            context.commit('SWITCHBTN')
        }

    },
    mutations:{

        'SWITCHBTN':function(state){
            state.btntrigger=!state.btntrigger
        }
        // 'PLUS':function(state,value){
        //     state.sum+=value
        // },
        // 'MINUS':function(state,value){
        //     state.sum-=value
        // },
        // 'PLUSODD':function(state,value){
        //     if(state.sum %2){
        //         state.sum+=value
        //     }
        // },
        // 'PLUSWAIT':function(state,value){
        //     setTimeout(()=>{
        //         state.sum+=value
        //     },500)
            
        // }
    },
    getters:{

    },
    state:{
        btntrigger:false
    }
})

// const personConfig={
//     namespaced:true,
//     actions:{

//     },
//     mutations:{
        
//     },
//     getters:{

//     },
//     state:{
//         personList:[
//             {id:"001",name:'ken',age:18},
//             {id:"002",name:'neil',age:18},
//             {id:"003",name:'joseph',age:18},
//             {id:"004",name:'terry',age:18},
//         ] 
//     }
// }

export default store