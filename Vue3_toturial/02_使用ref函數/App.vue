<template>
  <h1>姓名：{{ personName }}</h1>
  <h2>年齡：{{ age }}</h2>
  <h3>工作：{{ job.type }}</h3>
  <h3>薪水：{{ job.salary }}</h3>
  <button @click="sayHello" >說話</button>
  <button @click="changeInfo">點我更新學生訊息</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup(){
    let personName =ref('ken')
    let age =ref(19);
    let job =ref({
      type:'frontend',
      salary:100000
    })
    function sayHello(){
      alert(`你好，我叫做${personName},今年${age}歲`)
    }
    function changeInfo(){
      personName.value='shifumi';
      age.value=18;
      job.value.type='後端工程師'
      job.value.salary=150000
    } 
    return {
      personName,
      age,
      job,
      sayHello,
      changeInfo
    }
  }
  
}
</script>