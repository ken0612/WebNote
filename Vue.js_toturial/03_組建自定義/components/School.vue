<template>
    <div>
        <h1>{{msg}}</h1>
        <button @click="trigger"></button>
    </div>
</template>


<script>
export default {
    name:'School',
    data(){
        return{
           msg:"HelloWorld" 
        }
    },
    methods:{
        trigger(){
            this.$emit('hahaha',1,2,3,4)
        }
    }
}
</script>

<style>

</style>