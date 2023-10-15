<template>
    <div class="student">
        <h1>{{studentName}}</h1>
        <input type="text" placeholder="請輸入要傳送的資料" v-model="inputText">
        <button @click="gogo">點我</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
        return{
            studentName:'ken',
            inputText:'',
            showData:''
        }
    },
    methods:{
        gogo(){
            pubsub.publish('hello',666)
        }
    },
    mounted(){
        // this.$bus.$on('getData',(data)=>{
        //     console.log('我是Student，我收到了數據是：'+data)
        //     this.showData=data;
        // })
    }

}
</script>

<style scoped>
    .student{
        background-color: orange;
    }
</style>