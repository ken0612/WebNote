<template>
  <div class="container-sm">
    <NaviBar></NaviBar>
    <router-view></router-view>
  </div>
  
</template>

<script>
import NaviBar from './components/HomeComponents/About/NaviBar.vue'
export default {
  name: "App",
  components: { NaviBar },
  setup(){
    


    return{

    }
  }
};
</script>

<style>
 *{
    border: 0.5px solid;
 }
</style>