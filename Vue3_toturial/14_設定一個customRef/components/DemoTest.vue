<template>
  <br>
  <input type="text" v-model="keyWord">
  <h1>{{ keyWord }}</h1>
</template>

<script>
import { customRef } from 'vue'
export default {
    name:'DemoTest',
    setup(){
      let timer;
      function myRef(value){
        return customRef((track,trigger)=>{
          return{
            get(){
              console.log(`有人從myRef這個容器中讀取數據了，數據為：${value}`)
              track()
              return value
            },
            set(newValue){
              console.log(`新的數據為${newValue},舊數據為${value}`)
              clearTimeout(timer)
              value=newValue
              timer = setTimeout(()=>{
                trigger()
              },500)
              
            }
          }
        })
      }

      const keyWord=myRef('hello')
      return{
      keyWord 
      }
    }

}
</script>

<style>

</style>