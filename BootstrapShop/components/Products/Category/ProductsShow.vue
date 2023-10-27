<template>
  <h1>這是預計展示{{categoryName}}商品的區塊</h1>
</template>

<script>
import { ref,watch } from 'vue'
import { useRoute} from 'vue-router'

export default {
  name:'ProductSpring',
  setup(){
  let route= useRoute();
  
  let categoryName=ref(route.params.cid);
  
  //透過watch屬性監聽路由參數變動，太神啦！！
  watch(()=>route.params.cid,(newValue)=>{
    categoryName.value=newValue
  })

  return{
    categoryName
  }
  },
  
}
</script>

<style>
 a {
  text-decoration-line: none;
  
}

</style>