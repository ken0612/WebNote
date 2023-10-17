<template>
  <div>
    <h1>當前總和是:{{ sum }}</h1>
    <h2>放大十倍的和是:{{ bigSum }}</h2>
    <h3>我叫做{{ studentName }} ，今年{{ studentAge }}</h3>
    <select v-model.number="count">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <button @click="plusOdd">當總和為奇數才加</button>
    <button @click="plusWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name:'Test',
    data(){
        return{
            count:1,
        }
    },
    methods:{
        plus(){
            this.$store.dispatch("plus",this.count)
        },
        minus(){
            this.$store.dispatch("minus",this.count)
        },
        plusOdd(){
            console.log(this.$store.state.sum % 2)
            if(this.$store.state.sum  % 2){
                console.log('plusOdd方法被調用了')
                this.$store.dispatch("plusOdd",this.count)
            }
        },
        plusWait(){
            console.log('plusWait方法被調用了')
            setTimeout(()=>{
                this.$store.dispatch("plusWait",this.count)
            },500)
        },
    },
    computed:{
        ...mapState(['sum','studentName','studentAge']),
        ...mapGetters(['bigSum'])
    }
}
</script>

<style>
 button{
    margin-left:10px
 }

</style>