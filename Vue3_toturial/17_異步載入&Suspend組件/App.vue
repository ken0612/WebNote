<template>
  <div class="App">
    <h1>我是APP組件</h1>
    <Suspense>
      <template v-slot:default>
        <Son></Son>
      </template>
      <template v-slot:fallback> 
        <h1>載入中...請稍候</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import SonVue from './components/SonVue.vue'
import { defineAsyncComponent } from "vue";
const Son = defineAsyncComponent(() => import("./components/SonVue.vue"));
export default {
  name: "App",
  components: { Son },
};
</script>

<style>
.App {
  background-color: gray;
  padding: 10px;
}
</style>