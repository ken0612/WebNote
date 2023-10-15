<template>
    <div>
        <h1>{{studentName}}</h1>
        {{ myAge }} <button ref="btn1" @click="editAge"> 點我修改年齡</button>
    </div>
</template>

<script>
// import {a} from '../mixin'
export default {
    name:'StudentView',
    data(){
        return{
            msg:"helloWorld",
            myAge:this.age
        }
    },
    methods:{
        editAge(){
            this.myAge++
        }
    },
    props:['studentName','age'],
    // mixins:[a]

}
</script>

<style>

</style>