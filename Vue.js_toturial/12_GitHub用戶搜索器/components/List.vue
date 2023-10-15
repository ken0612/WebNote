<template>
  <div>
    <div
      class="contain"
      v-show="info.users.length"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img class="haha" :src="user.avatar_url" />
      </a>
      <p>{{ user.login }}</p>
    </div>

    <div v-show="info.isLoading">資料讀取中...請稍候</div>

    <div v-show="info.isFirst">
      <h1>歡迎使用GitHub用戶搜索工具</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (items) => {
      this.info = {...this.info,...items};
    });
  },
};
</script>

<style>
.haha {
  width: 20%;
  height: 20%;
}
</style>