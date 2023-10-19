<template>
  <h1>當前的總和為{{ sum }}</h1>
  <button @click="sum++">點我</button>
  <hr>
  <h1>{{ msg }}</h1>
  <button @click="msg+='!'">點我啊！</button>
  
</template>

<script>
import { ref, watch } from 'vue'
export default {
    name:'DemoTest',
    setup(){
      let sum =ref(0)
      let msg=ref('你好啊')
      watch(sum,()=>{
        console.log('sum的value變化了')
      },{immediate:true})

      watch(msg,(oldValue,newValue)=>{
        console.log('msg被修改了')
        console.log(oldValue,newValue)
      })

      return{
        sum,
        msg

      }
    }

}
</script>

<style>

</style>