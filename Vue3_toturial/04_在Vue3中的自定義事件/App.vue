<template>
  <DemoTest @hello="sayHello" haha="這是一個測試數據" ></DemoTest>
</template>

<script>
import DemoTest from './components/DemoTest.vue'
export default {
  name:'App',
  setup(){
    function sayHello(value){
      console.log(`我是App，我收到了參數:${value}`)
    }
    return{
      sayHello
    }
  },

  components:{DemoTest}
}
</script>

<style>

</style>