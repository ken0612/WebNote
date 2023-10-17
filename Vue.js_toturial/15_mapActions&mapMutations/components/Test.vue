<template>
  <div>
    <h1>當前總和是:{{ sum }}</h1>
    <h2 >放大十倍的和是:{{ bigSum }}</h2>
    <h3>我叫做{{ studentName }} ，今年{{ studentAge }}</h3>
    <h4 style="color:red">下方人員列表的總人數是{{personList.length }}</h4>
    <select v-model.number="count">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="plus(count)">+</button>
    <button @click="minus(count)">-</button>
    <button @click="plusOdd(count)">當總和為奇數才加</button>
    <button @click="plusWait(count)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState ,mapMutations,mapActions } from 'vuex'
export default {
    name:'Test',
    data(){
        return{
            count:1,
        }
    },
    methods:{
        ...mapMutations({plus:'PLUS',minus:'MINUS'}),
        ...mapActions(['plusOdd','plusWait'])
        // plus(){
        //     this.$store.dispatch("plus",this.count)
        // },
        // minus(){
        //     this.$store.dispatch("minus",this.count)
        // },
        // plusOdd(){
        //     console.log(this.$store.state.sum % 2)
        //     if(this.$store.state.sum  % 2){
        //         console.log('plusOdd方法被調用了')
        //         this.$store.dispatch("plusOdd",this.count)
        //     }
        // },
        // plusWait(){
        //     console.log('plusWait方法被調用了')
        //     setTimeout(()=>{
        //         this.$store.dispatch("plusWait",this.count)
        //     },500)
        // },
    },
    computed:{
        ...mapState(['sum','studentName','studentAge','personList']),
        ...mapGetters(['bigSum'])
    }
}
</script>

<style>
 button{
    margin-left:10px
 }

</style>