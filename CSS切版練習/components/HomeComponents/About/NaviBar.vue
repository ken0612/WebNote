<template>
  <div class="naviConfig">
    <div class="navi">
      <router-link to="/home"><h2>回首頁</h2></router-link>
    </div>
    <div class="navi-inner">
      <router-link to="/home"><p>首頁</p></router-link>
      <router-link to="/company"><p>關於</p></router-link>
      <router-link to="/market"><p>賣場</p></router-link>
      <span style="margin-right: 30px;"></span>
      <button  id="navibutton" type="button" class="btn btn-primary" @click="switchCart">購物車</button>
      <button  id="navibutton" type="button" class="btn btn-primary" @click="navitologin">登入</button>
      <button  id="navibutton" type="button" class="btn btn-primary" @click="navitoregist">註冊</button>
    </div>

    <teleport to="body">
      <div v-if="cartSwitcher" class="mask">
        <div class="cartConfig">
          
          
            <button @click="switchCart">點我關閉遮罩</button>  
        </div>
        
      </div>
    </teleport>
  </div>
  
</template>

<script>
import { ref } from 'vue';
import {useRouter} from 'vue-router'

export default {
  name:'NaviBar',
  setup(){
    const router =useRouter();

    var cartSwitcher =ref(false)
    function navitologin(){
      console.log(router)
      router.push('/login');
    }
    function navitoregist(){
      router.push('/regist');
    }
    function switchCart(){
      cartSwitcher.value=!cartSwitcher.value
      
    }
    return{
      router,
      navitologin,
      navitoregist,
      cartSwitcher,
      switchCart
    }
  },
};
</script>

<style>
 p{
    margin-left:3px;
 }
.navi {
  height: 100px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content:center;
  margin-bottom: 5px;
}
.navi-inner {
  background-image:url(../../../../public/photo2.jpeg);
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
#navibutton{
  margin-left: 5px;
  margin-right:10px;
}

.mask {
    position: fixed;
    top:0;bottom:0;left:0;right:0;
    background-color: rgba(0,0,0,0.5 );
    height:100%;
 }

 .cartConfig{
  background-color: antiquewhite;
  position: absolute;
  top:50%;left:50%;
  transform: translate(-50%,-50%);
  text-align: center;
  width:300px;
  height:300px;
 }
 

</style>

