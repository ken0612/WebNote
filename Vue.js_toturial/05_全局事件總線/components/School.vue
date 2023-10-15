<template>
    <div class="school">
        <h1>{{msg}} 這是我收到的數據是 {{ aData }}</h1>
        <button @click="sendData">點我啊</button>
    </div>
</template>


<script>
export default {
    name:'School',
    data(){
        return{
           msg:"HelloWorld",
           aData:''
        }
    },
    methods:{
        sendData(){
            this.$bus.$emit('getData','aaaaa')
        }
    },
    mounted(){
        this.$bus.$on('haha',(data)=>{
                console.log("我是School組件，我收到了數據："+data)
                this.aData=data;
        })
    },
    beforeDestroy() {
        this.$bus.$off('haha');
    },
}
</script>

<style scoped>
    .school{
        background-color: pink;
    }
</style>