<template>
  <div class="container-sm" style="width:1100px ;height:700px;">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12 m-5 " style="width:700px;">
            <h3 class="mb-4">會員登入</h3>
            <div class="mb-3 row ">
                <p  class="col-sm-2 col-form-a my-auto">帳號</p>
                <div class="col-sm-10 border-bottom">
                <input type="text" class="form-control border-0 " v-model="account" id="Account">
                </div>
            </div>
            <div class="mb-3 row">
                <p  class="col-sm-2 col-form-a my-auto">Password</p>
                <div class="col-sm-10 border-bottom">
                <input type="password" class="form-control border-0" v-model="password" id="inputPassword">
                </div>
                <small v-if="errmsg"  class="text-danger text-center mt-1">{{errmsg}}</small>
            </div>
            <router-link to="/forgotpassword">
                <div class="mb-3 row text-center my-auto">
                    <p href="#">忘記密碼</p>
                </div>
            </router-link>

            <div class="d-flex justify-content-center">
            <button @click="goToLogin"  class="btn btn-secondary">登入</button>
            </div>
            <div class="text-center mt-3">
                <router-link to="/registpage">
                    <p href="#">還不是會員？點此註冊</p>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import axios from 'axios'
export default {
 name:'LoginVue',
 setup(){

    let loginInfomation=reactive({
        account:'',
        password:'',
        errmsg:''
    })

    function goToLogin(){

        const loginInfo={
            'account':loginInfomation.account,
            'password':loginInfomation.password
        }

        axios.post('/loginvali',loginInfo,{ headers: { 'Content-Type': 'application/json' } }).then(
            response =>{
                console.log("request send successfully!!!")
                window.localStorage.setItem('isLogin',response.data.isLogin)
                window.location.replace('/')
            }
        ).catch(
            error =>{
                console.log('request send failure')
                console.log(error.message)
                loginInfomation.errmsg='帳號或密碼錯誤'
            }
        )

        // 假登入按鈕，此為測試用
        // window.localStorage.setItem('isLogin',true)
        // this.$router.push('/').then(()=>{
        //     window.location.reload();
        // })
        }
    return{
      ...toRefs(loginInfomation),  
      goToLogin
    }
 },
 methods:{
    
 }
}
</script>

<style>
    input.form-control:focus {
    outline: none;
    box-shadow: none;
  }
</style>