<template>
  <!-- <div class="carousel-contains">
    <div class="carousel-config">
    <button class="btnlt" >&lt;</button>
    <h1 class="carousel">我是輪播欄</h1>
    <button class="btnrt" >></button>
    </div>
  </div> -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4" style="width:100%;">
        <div
          id="carouselExampleControls  "
          class="carousel slide"
          data-bs-ride="carousel"
          style="width:100%; height:auto;"
        >
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img
                src="../../../../public/premium_photo-1.jpeg"
                class="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../../../public/premium_photo-1.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../../../public/premium_photo-1.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
export default {
  name: "CarouselVue",
};
</script>

<style>


.carousel-contains {
  background-color: pink;
  width: 100%;
  height: 350px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.carousel-config {
  background-color: aliceblue;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.carousel {
  display: flex;
  width: 250px;
  text-align: center;
  justify-content: center;

  align-items: center;
}

.btnlt {
  display: flex;
  justify-items: left;
}
</style>