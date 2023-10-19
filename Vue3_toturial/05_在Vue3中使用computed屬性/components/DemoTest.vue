<template>
  <h1>helloworld</h1>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName"><br>
  全名:<input type="text" v-model="person.fullName">
</template>

<script>
import { computed, reactive } from 'vue'
export default {
    name:'DemoTest',
    setup(){
      let person = reactive({
        firstName:'aaa',
        lastName:'bbb'
      })
      //在Vue3裡面的計算屬性（簡寫）
      // person.fullName= computed(()=>{
      //   return person.firstName + '-' + person.lastName
      // })
      //在Vue3裡面的計算屬性（完整寫法）
      person.fullName=computed({
        get(){
          return person.firstName + '-' + person.lastName
        },
        set(value){
          let nameArr = value.split('-')
          person.firstName=nameArr[0]
          person.lastName=nameArr[1]
        }

      })


      return{
        person,
      }
    }

}
</script>

<style>

</style>