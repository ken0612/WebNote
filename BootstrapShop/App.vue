<template>
  <HeaderVue></HeaderVue>
  <router-view></router-view>
  <!-- Footer -->
  <div class="container-fluid bg-dark" style="height:300px;">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 col-md-6 align-items-center  mt-5">
          <h2 class="text-white text-center mb-4  align-items-cetner justify-content-center ">顧客服務</h2>
          <h5 class="text-white text-center mb-4  align-items-cetner justify-content-center ">常見問題</h5>
          <h5 class="text-white text-center mb-4  align-items-cetner justify-content-center ">運送服務方式</h5>
          <h5 class="text-white text-center mb-4  align-items-cetner justify-content-center ">退換貨政策</h5>
        </div>
        <div class="col-6 col-md-6 mt-4">
          <h5 class="text-white text-center mb-4  align-items-center justify-content-center">聯絡我們</h5>
          <h5 class="text-white text-center mb-4  align-items-center justify-content-center">服務時間(週一至週五09:00~18:00)</h5>
        </div>
      </div>

    </div>
  </div>






      
   
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue"

export default  {
  name:'App',
  components:{ HeaderVue}
}

</script>

<style>
/* * {
  border: 1px solid;
} */


</style>