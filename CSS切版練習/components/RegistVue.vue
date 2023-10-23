<template>
  <div class="registConfig">
    <span class="regititle">
    <h1>註冊會員</h1>
    </span>
    <form action="submit_registration.php" method="post">
      <label for="username">帳號：</label>
      <input v-model="userName" @blur="valiaccount" type="text" id="username" name="username" required />
      <br /><br />
      <p  v-if="erraccount!=''">{{ erraccount }}</p>
      <label for="password">密碼：</label>
      <input
        v-model="password"
        type="password"
        id="password"
        name="password"
        required
      /><br /><br />

      <label for="email">電子信箱：</label>
      <input v-model="email" type="email" id="email" name="email" required /><br /><br />

      <label for="fullname">全名：</label>
      <input v-model="fullName" type="text" id="fullname" name="fullname" required /><br /><br />

      <label for="gender">性别：</label>
      <input v-model="sex" type="radio" id="male" name="gender" value="male" />
      <label for="male">男性</label>
      <input v-model="sex" type="radio" id="female" name="gender" value="female" />
      <label for="female">女性</label><br /><br />

      <label for="birthdate">出生日期：</label>
      <input v-model="birth" type="date" id="birthdate" name="birthdate" required /><br /><br />

      <label for="phone">手機號碼：</label>
      <input v-model="phone" type="tel" id="phone" name="phone" /><br /><br />

      <label for="address">地址：</label>
      <input v-model="address" type="text"><br /><br />

      <label for="country">國家：</label>
      <select v-model="country"  id="country" name="country">
        <option value="usa">台灣</option>
        <option value="canada">加拿大</option>
        <option value="uk">英国</option>
        <!-- 添加更多选项 --></select
      ><br /><br />

      <button @click="submitRegist">註冊</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs, } from 'vue';
export default {
  name: "RegistVue",
  setup(){
    const errmsg=reactive({
        erraccount:'',
    })
    const data= reactive({
        userName:'',
        password:'',
        email:'',
        fullName:'',
        sex:'',
        birth:'',
        phone:'',
        address:'',
        country:'',
    })

    function submitRegist(){
        console.log(data.userName)
        
    }
    function valiaccount(){
        if(data.userName.length>12){
            errmsg.erraccount='帳號長度必須小於12位'
            console.log(errmsg.erraccount)
        }else{
            errmsg.erraccount=''
            
        }
    }
    
    return {
        ...toRefs(data),
        ...toRefs(errmsg),
        submitRegist,
        valiaccount,
        
    }
    
  },
  

};
</script>

<style>
.registConfig {
  background-color:pink;
  width: 100%;
  height: 800px;
}
.regititle{
    display:flex;
    justify-content: center;
    margin-bottom:5px;
}
</style>