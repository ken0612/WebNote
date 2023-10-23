<template>
  <div class="container-sm">
    <NaviBar></NaviBar>
    <router-view></router-view>
  </div>
  <FooterVue></FooterVue>
</template>

<script>
import NaviBar from './components/HomeComponents/About/NaviBar.vue'
import FooterVue from './components/HomeComponents/About/FooterVue.vue';
export default {
  name: "App",
  components: { NaviBar,FooterVue},
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

 .bodyConfig {
  background-color: antiquewhite;
 }
</style>