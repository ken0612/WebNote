<template>
  <div class="loginMain">
    <div class="loginConfig">
      <span>
      帳號：<input type="text" /> 
      </span>
      <span>
      密碼：<input type="password" />
      </span>
      <span>
      <router-link to="/regist">
      註冊
      </router-link>
      </span>
      <span>
      忘記密碼
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style>
.loginMain{
  background-color:gray;
  height:850px;
  margin-top:5px;
  display:flex;
  justify-content: center;
}
.loginConfig {
  background-color:orange;
  margin-top:10px;
  display: flex;
  width: 350px;
  height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>