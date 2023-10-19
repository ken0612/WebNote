<template>
  <h1 v-show="person.name">姓名：{{ person.name }}</h1>
  <h2>年齡：{{ person.age }}</h2>
  <h2 v-show="person.sex">性別：{{ person.sex }}</h2>
  <h3>工作：{{ person.job.type }}</h3>
  <h3>薪水：{{ person.job.salary }}</h3>
  <button @click="sayHello" >說話</button>
  <button @click="changeInfo">點我更新學生訊息</button>
  <button @click="addsex">點我新增性別</button>
  <button @click="deleteName">點我刪除姓名</button>
</template>

<script>
import {reactive } from 'vue';
export default {
  name: 'App',
  setup(){
    let person =reactive({
        name:'ken',
        age:18,
        job:{
          type:'frontend',
          salary:100000
        }

    })

    function sayHello(){
      alert(`你好，我叫做${person.name},今年${person.age}歲`)
    }
    function changeInfo(){
      person.name='shifumi';
      person.age=18;
      person.job.type='後端工程師'
      person.job.salary=150000
    }
    function addsex(){
      person.sex='女'
    }
    function deleteName(){
      delete person.name
    }
    return {
      person,
      sayHello,
      changeInfo,
      addsex,
      deleteName
    }
  }
  
}
</script>