<template>
  <div class="homeabout">
    <div class="homeconfig">
    <HomeAboutComponent></HomeAboutComponent>
    <HomeAboutComponent></HomeAboutComponent>
    <HomeAboutComponent></HomeAboutComponent>
    <HomeAboutComponent></HomeAboutComponent>
    <HomeAboutComponent></HomeAboutComponent>
    </div>
  </div>
</template>

<script>
import HomeAboutComponent from './HomeAboutComponent.vue';
export default {
  name:'HomeAbout',
  components:{
    HomeAboutComponent
  }

}
</script>

<style>
 .homeabout{
  height:300px;
  margin-top:5px;
  background-color:rgb(54,96,146);
  overflow:visible;
 }
 .homeconfig{
  display:flex;
  justify-content: space-around;
  padding: 30px;
 }
</style>