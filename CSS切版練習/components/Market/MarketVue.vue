<template>
  <div>
  <h1>{{ greeting }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'MarketVue',
    setup(){
      let greeting=ref('helloworld!!')

      //呼叫外部api用
      // onBeforeMount(() => {
      //   axios.get('/hello').then(
      //           response =>{
      //               console.log('請求成功了',response.data)
      //               greeting.value=response.data;
      //           },
      //           error =>{
      //               console.log('請求失敗了',error.message)
      //           }

      //       )
      // })
      
      
      
      return{greeting}
    }
}
</script>

<style>

</style>