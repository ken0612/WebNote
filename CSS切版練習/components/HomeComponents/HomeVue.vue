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
    </div>
</template>

<script>
import CarouselVue from "./About/CarouselVue.vue"
import HomeAbout from "./About/HomeAbout.vue"
import PromotionVue from './About/PromotionVue.vue'
export default {
    components: { CarouselVue,HomeAbout,PromotionVue },
}
</script>

<style>

</style>