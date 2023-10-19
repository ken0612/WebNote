<template>
  <div>
  <button @click="isShow= !isShow">點我進行隱藏切換</button>
  <DemoTest v-if="isShow"></DemoTest>

  </div>
</template>

<script>
import { ref } from 'vue'
import DemoTest from './components/DemoTest.vue'
export default {
  name:'App',
  setup(){
    let isShow=ref(true)
    return{isShow}
  },
  components:{DemoTest}
}
</script>

<style>

</style>