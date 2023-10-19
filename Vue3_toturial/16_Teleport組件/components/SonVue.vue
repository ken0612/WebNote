<template>
  <div class="Son">
    <h1>我是Son組件</h1>
    <DialogVue></DialogVue>
  </div>
</template>

<script>
import DialogVue from './DialogVue.vue'
export default {
 name:'SonVue',
 components:{ DialogVue }
}
</script>

<style>
  .Son{
    background-color: skyblue;
    padding: 10px;
  }
</style>