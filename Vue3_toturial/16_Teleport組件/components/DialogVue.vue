<template>
  <div>
    <button @click="isShow = true">點我開啟彈窗</button> 
    <teleport to="body">
      <div  v-if="isShow" class="mask">
        <div  class="dialog">
          <p>xxxx</p>
          <p>xxxx</p>
          <p>xxxx</p>
          <button @click="isShow = false">點我關閉彈窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DialogVue",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask{
    position: absolute;
    top:0;bottom:0;left:0;right:0;
    background-color: rgba(0,0,0,0.5 );
}
.dialog {
  position: absolute;
  top:50%;left:50%;
  transform: translate(-50%,-50%);
  text-align: center;
  width:300px;
  height:300px;
  background-color: lightgreen;
  padding: 10px;
  position: absolute;
}
</style>