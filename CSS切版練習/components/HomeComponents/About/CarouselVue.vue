<template>
   
  <div class="carousel-contains">
    <div class="carousel-config">
    <button class="btnlt" >&lt;</button>
    <h1 class="carousel">我是輪播欄</h1>
    <button class="btnrt" >></button>
    </div>
  </div>
</template>

<script>
export default {
    name:'CarouselVue'

}
</script>

<style>
 .carousel-contains{
    background-color:pink;
    width:100%;
    height:350px;
    margin-top:5px;
    margin-bottom:5px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
 }

.carousel-config{
    background-color:aliceblue;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
 
.carousel{
    display: flex;
    width:250px;
    text-align:center;
    justify-content: center;
    
    align-items:center;
}

 .btnlt{
    display:flex;
    justify-items: left;
 }
</style>