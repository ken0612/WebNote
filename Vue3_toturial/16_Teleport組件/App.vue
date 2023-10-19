<template>
  <div class="App">
    <h1>我是APP組件</h1>
    <ChildVue></ChildVue>
  </div>  
</template>

<script>
import ChildVue from './components/ChildVue.vue'
export default {
    name: 'App',
    components: { ChildVue }
}
</script>

<style>
 .App{
  background-color: gray;
  padding: 10px;
 }
</style>