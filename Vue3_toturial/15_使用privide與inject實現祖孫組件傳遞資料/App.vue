<template>
  <div class="App">
    <h1>我是APP組件</h1>
    <h1>{{ brand }}--- {{ price }}</h1>
    <ChildVue></ChildVue>
  </div>  
</template>

<script>
import { provide, reactive, toRefs } from 'vue'
import ChildVue from './components/ChildVue.vue'
export default {
    name: 'App',
    setup() {
        let car = reactive({ brand: "tesla", price: 100 });
        provide('car', car);
        return { ...toRefs(car) };
    },
    components: { ChildVue }
}
</script>

<style>
 .App{
  background-color: gray;
  padding: 10px;
 }
</style>