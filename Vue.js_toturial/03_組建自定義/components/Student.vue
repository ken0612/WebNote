<template>
    <div>
        <h1>{{studentName}}</h1>
        <button @click="gogo">點我</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            studentName:'ken'
        }
    },
    methods:{
        gogo(){
            this.$emit('helloWorld')
        }
    }

}
</script>

<style>

</style>