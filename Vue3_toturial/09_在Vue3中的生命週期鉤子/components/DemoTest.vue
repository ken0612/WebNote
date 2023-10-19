<template>
  <h1 >加總：{{ sum }}</h1>
  <button @click="sum++">點我+1</button>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, } from 'vue'
export default {
  name:'DemoTest',
  setup(){
    let sum = ref(0)
    //透過setup設定生命週期鉤子，這種方式會比用配置項寫生命鉤子執行時機還要早一些
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })
    onMounted(()=>{
      console.log('onMounted')
    })
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('onUpdated')
    })
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')
    })
    onUnmounted(()=>{
      console.log('onUnmounted')
    })


    return {
      sum
    }
  },

  //透過配置項設定生命週期鉤子
  // beforeCreate() {
  //     console.log('beforeCreate')
  //   },
  //   created() {
  //     console.log('created')
  //   },
  //   beforeMount() {
  //     console.log('beforeMount')
  //   },
  //   mounted() {
  //     console.log('mounted')
  //   },
  //   beforeUpdate(){
  //     console.log('beforeUpdate')
  //   },
  //   updated(){
  //     console.log('updated')
  //   },
  //   beforeUnmount(){
  //     console.log('beforeUnmount')
  //   },
  //   unmounted(){
  //     console.log('unmounted')
  //   }
}
</script>

<style>

</style>