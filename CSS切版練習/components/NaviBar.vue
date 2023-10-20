<template>
  <div class="naviConfig">
    <div class="navi">
      <h2>我是導覽列</h2>
    </div>
    <div class="navi-inner">
      <a href="https://www.google.com"><p>首頁</p></a>
      <p>關於</p>
      <p>賣場</p>
      <p>購物車</p>
      <p>登入</p>
    </div>
  </div>
  
</template>

<script>
export default {};
</script>

<style>
 p{
    margin-left:3px;
 }
.navi {
  background-color: lightblue;
  height: 100px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content:center;
  margin-bottom: 5px;
}
.navi-inner {
  background-color:darkgrey;
  flex:1;
  display: flex;
  margin-left:auto;
  justify-content: right;
  align-items: center;

  
}
.naviConfig {
  background-color:orange;
  display: flex;
  flex-direction: row;
}
</style>

