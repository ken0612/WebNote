<template>
  <h1>姓名：{{ personName }}</h1>
  <h2>年齡：{{ age }}</h2>
  <button @click="sayHello" >說話</button>
</template>

<script>

export default {
  name: 'App',
  setup(){
    let personName ='ken';
    let age =19;
    function sayHello(){
      alert(`你好，我叫做${personName},今年${age}歲`)
    }
    return {
      personName,
      age,
      sayHello
    }
  }
  
}
</script>