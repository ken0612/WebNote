<template>
  <!-- 輪播欄 -->
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://picsum.photos/1300/500?random=10" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1300/500?random=11" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1300/500?random=12" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
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
export default {

}
</script>

<style>

</style>