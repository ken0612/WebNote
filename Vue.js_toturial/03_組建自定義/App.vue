<template>
    <div id="root">
        <School v-on:hahaha="wtf"></School>
        <Student ref="student"></Student>
    </div>
</template>


<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        School,
        Student
    },
    methods:{
        haha(){
            console.log("helloWorld")
        },
        wtf(param){
            console.log(param)
        }

    },  
    mounted(){
        this.$refs.student.$on('helloWorld',this.haha)
    }
}
</script>

<style>

</style>