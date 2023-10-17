<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    beforeDestroy() {
      console.log('About組件即將被破壞')
    },
    
}
</script>

<style>

</style>