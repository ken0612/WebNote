<template>
  <div>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
      <keep-alive >
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style>

</style>