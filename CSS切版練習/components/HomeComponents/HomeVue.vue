<template>
  <div>
      <CarouselVue></CarouselVue>
      <HomeAbout></HomeAbout>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <PromotionVue></PromotionVue>
      <FooterVue></FooterVue>
    </div>
</template>

<script>
import CarouselVue from "./About/CarouselVue.vue"
import HomeAbout from "./About/HomeAbout.vue"
import FooterVue from "./About/FooterVue.vue"
import PromotionVue from './About/PromotionVue.vue'
export default {
    components: { CarouselVue,HomeAbout,FooterVue,PromotionVue },
}
</script>

<style>

</style>