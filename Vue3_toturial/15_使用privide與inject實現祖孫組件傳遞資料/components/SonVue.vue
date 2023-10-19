<template>
  <div class="Son">
    <h1>我是Son組件</h1>
    {{ car.brand }}---{{ car.price }}
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
 name:'SonVue',
 setup(){
    let car = inject('car')
    return{
        car
    }
 }

}
</script>

<style>
  .Son{
    background-color: skyblue;
    padding: 10px;
  }
</style>