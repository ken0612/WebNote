<template>

  <!-- 輪播欄，使用Suspense來製作讀取中畫面 -->
  <Suspense>
    <template v-slot:default>
        <CarouselVue></CarouselVue>
    </template>
    <template v-slot:fallback>
        <div class="d-flex justify-content-center align-items-center" style="width: 1300px; height: 600px;">
            <div class="spinner-border" role="status">
                <span class="visually-hidden mx-auto my-auto">Loading...</span>
            </div>
        </div>
    </template>
  </Suspense>
  
  <!-- 簡易網頁介紹 -->
  <div class="container-fluid mt-3">
    <div class="row my-auto">
      <div class="col-12 col-md-4">
        <div class="card border-0 text-center">
          <div class="card-body ">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-secondary ">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-secondary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-secondary ">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lineup商品！ 可以放新品推廣-->
  <div class="container my-3 ">
    <div class="row">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item  active">
            <div class="col-12 col-md-12 d-flex justify-content-center align-items-center ">
              <!-- 這個card大小設定為強制w-100跟h-100 -->
              <div class="card mb-12 w-100 h-100">
                  <div class="row g-0">
                    <div class="col-md-4"> 
                      <img src="https://picsum.photos/300/200?random=23" class="img-fluid rounded-start w-100 h-100 " style="height: 200px; width:300px;"  alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">這裡可以放一些宣傳文</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="col-12 col-md-12 d-flex justify-content-center align-items-center">
              <div class="card mb-12">
                  <div class="row g-0">
                    <div class="col-md-4"> 
                      <img src="https://picsum.photos/300/200?random=22" class="img-fluid rounded-start w-100 h-100 " style="height: 200px; width:300px;"  alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="col-12 col-md-12 d-flex justify-content-center align-items-center">
              <div class="card mb-12">
                  <div class="row g-0">
                    <div class="col-md-4"> 
                      <img src="https://picsum.photos/300/200?random=21" class="img-fluid rounded-start w-100 h-100 " style="height: 200px; width:300px;"  alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import CarouselVue from './CarouselVue.vue';
const CarouselVue =defineAsyncComponent(()=>import('./CarouselVue.vue'))
export default {
 name:"HomeVue",
 components:{CarouselVue}
}
</script>

<style>

</style>