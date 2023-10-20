<template>
  <div class="container-sm">
    <div>
      <NaviBar></NaviBar>
      <CarouselVue></CarouselVue>
      <HomeAbout></HomeAbout>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
    </div>
  </div>
  <FooterVue></FooterVue>
</template>

<script>
import NaviBar from "./components/NaviBar.vue";
import CarouselVue from "./components/CarouselVue.vue"
import HomeAbout from "./components/About/HomeAbout.vue"
import FooterVue from "./components/FooterVue.vue"
import PromotionVue from "./components/PromotionVue.vue";
export default {
  name: "App",
  components: { NaviBar,CarouselVue,HomeAbout,FooterVue,PromotionVue },
};
</script>

<style>
 *{
    border: 0.5px solid;
 }
</style>