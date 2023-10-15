<template>
    <div>
        <School ref="sch"></School>
        <button ref="btn" @click="showDetail">點我獲取學校詳細資訊</button>
        <Student studentName="ken" :age="27"></Student>
        <Student studentName="shifumi" :age="27"></Student>
    </div>
</template>


<script>
import School from './components/School.vue';
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        School,
        Student
    },
    methods:{
        showDetail(){
            console.log(this.$refs)
        }
    }


}
</script>

<style>

</style>