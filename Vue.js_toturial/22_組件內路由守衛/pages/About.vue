<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About組件即將被破壞");
  },
  //組件內路由守衛
  beforeRouteEnter(to,from,next) {
    if (to.meta.isAuth) {
      //判斷是否需要權限
      if (localStorage.getItem("school") === "ken") {
        next();
      } else {
        alert("沒有權限！");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to,form,next){
    console.log('路由瀟灑地離開了')
    next()
  }
};
</script>

<style>
</style>