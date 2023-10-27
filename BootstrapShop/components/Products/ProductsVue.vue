<template>
  <div class="container-fluid bg-lightdark" style="height:1000px;">
      <div class="row h-100">
        <div class="col-12 col-md-2 ">
          <div class="list-group mt-2 border-0 " >
              <p @click="goToCategory" class="list-group-item list-group-item-action text-dark fs-5 text-start" >
                全部商品
              </p>
            
              <p @click="goToCategory" class="list-group-item list-group-item-action text-dark fs-5 text-start">
                春天系列
              </p>
              <p @click="goToCategory" class="list-group-item list-group-item-action text-dark fs-5 text-start" >
                夏天系列
              </p>
              
              <p @click="goToCategory" class="list-group-item list-group-item-action text-dark fs-5 text-start">
                秋天系列
              </p>
              <p @click="goToCategory" class="list-group-item list-group-item-action text-dark fs-5 text-start">
                冬天系列
              </p>
              
          </div>
        </div>
        <div class="col-12 col-md-10 bg-secondary ">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name:'ProductVue',
  
  methods:{
    goToCategory(event){
    this.$router.push(`/products/category/${event.target.innerText}`)
  }
  }
  
}
</script>

<style scoped>
.bg-lightdark {
  background-color: antiquewhite ;
  opacity: 0.6;
}

.list-group-item  {
  background-color:transparent;
  border:0px;
}

a {
  text-decoration-line: none;
  
}


</style>