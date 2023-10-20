<template>
  <div class="naviConfig">
    <div class="navi">
      <router-link to="/home"><h2>回首頁</h2></router-link>
    </div>
    <div class="navi-inner">
      <a href="https://www.google.com"><p>首頁</p></a>
      <p>關於</p>
      <p>賣場</p>
      <p>購物車</p>
      <button class="navibutton" @click="navitologin">登入</button>
      <button class="navibutton" @click="navitoregist">註冊</button>
    </div>
  </div>
  
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name:'NaviBar',
  setup(){
    const router =useRouter();
    function navitologin(){
      console.log(router)
      router.push('/login');
    }
    function navitoregist(){
      router.push('/regist');
    }
    return{
      router,
      navitologin,
      navitoregist

    }
  }



};
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
.navibutton{
  margin-left: 5px;
}

</style>

