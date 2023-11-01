<template>
  <div class="container-sm" style="width:1100px ;height:700px;">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12 m-5 " style="width:700px;">
            <h3 class="mb-4">註冊會員</h3>
                <div class="mb-3 row ">
                    <p for="Account" class="col-sm-2 col-form-a my-auto">帳號</p>
                    <div class="col-sm-10 border-bottom">
                        <input v-model="account" @blur="accVali" type="text" class="form-control border-0  " id="Account" required>
                    </div>
                    <small v-if="accountVali"  class="text-danger text-center">{{accounterrmsg}}</small>
                </div>
                <div class="mb-3 row">
                    <p for="inputPassword" class="col-sm-2 col-form-a my-auto">Password</p>
                    <div class="col-sm-10 border-bottom">
                    <input v-model="password" @blur="passVali" type="password" class="form-control border-0" id="inputPassword" required>
                    </div>
                    <small v-if="passwordVali"  class="text-danger text-center">密碼長度必須為6~30位，且至少須包含一個大小及小寫字母</small>
                </div>
                <div class="mb-3 row">
                    <p for="inputEmail " class="col-sm-2 col-form-a my-auto">Email</p>
                    <div class="col-sm-10 border-bottom">
                        <input v-model="email" @blur="emailVali" type="email" class="form-control border-0" id="inputEmail" required>
                    </div>
                    <small v-if="emailValidate"  class="text-danger text-center">{{ emailerrmsg }}</small>
                </div>
                <div class="mb-3 row ">
                    <div class="form-check  text-center d-flex justify-content-center ">
                        <input  class="form-check-input "  type="checkbox" v-model="userTerms" id="flexCheckDefault">
                        <p class="form-check-a  " for="flexCheckDefault">
                            我已閱讀使用者條款
                        </p>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                <button class="btn btn-secondary" @click="goToRegist">註冊</button>
                </div>  
        </div>
    </div>
  </div>

    <!-- 使用者協議 Modal -->
    <div class="modal fade" id="userTermsAlert" tabindex="-1" aria-aledby="userTermsAlert" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered ">
            <div class="modal-content ">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="userTermsAlert">無法送出註冊</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-a="Close"></button>
                </div>
                <div class="modal-body border-0">
                    請勾選使用者協議！
                </div>
                <div class="modal-footer border-0 justify-content-center ">
                    <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">確定</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 登入成功Modal -->
    <div class="modal fade" id="LoginAccessAlert" tabindex="-1" aria-aledby="LoginAccessAlert" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered ">
            <div class="modal-content ">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="LoginAccessAlert">註冊成功</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-a="Close"></button>
                </div>
                <div class="modal-body border-0">
                    註冊成功！3秒後將進行跳轉...
                </div>
                <div class="modal-footer border-0 justify-content-center ">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import {reactive,toRefs} from 'vue'
export default {
 name:'RegistVue',
 setup(){
    let validation =reactive({
        account:'',
        password:'',
        email:'',
        accounterrmsg:'帳號長度必須為6~12位',
        emailerrmsg:'請輸入正確的Email格式',
        accountVali:false,
        passwordVali:false,
        emailValidate:false,
        userTerms:false
    })
    //驗證帳號規則
    function accVali(){
        if(validation.account===''){
            validation.accountVali=false
        }else if(validation.account.match(/^[a-zA-Z0-9]{6,12}$/) === null ){
            validation.accountVali=true
            return true
        }else {
            validation.accountVali=false
        }
    }
    //驗證密碼規則
    function passVali(){
        if(validation.password ===''){
            validation.passwordVali=false
        }else if(validation.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/)===null){
            validation.passwordVali=true
            return true
        }else{
            validation.passwordVali=false
        }
    }
    //驗證Email規則
    function emailVali(){
        if(validation.email === ''){
            validation.emailValidate=false
        }else if(validation.email.match(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)===null){
            validation.emailValidate=true
            return true
        }else{
            validation.emailValidate=false
        }
    }
    //驗證使否勾選使用者條款
    function checkUserTerms(){
        
    }
    
    //向後端發送請求嘗試註冊！
    function goToRegist(){
        //驗證
        const modal= new bootstrap.Modal(document.getElementById('userTermsAlert'))
        const loginModal= new bootstrap.Modal(document.getElementById('LoginAccessAlert'))
        if(validation.userTerms===false){
            modal.show()
            return
        }

        if(accVali() || passVali() || emailVali()){
            return
        }

        if(validation.account==='' || validation.password==='' || validation.email==='' ){
            
            return
        }

        const dataSource={
        'account':validation.account,
        'password':validation.password,
        'email':validation.email
        }
        axios.post('/regist',dataSource,{ headers: { 'Content-Type': 'application/json' } }).then(
            response =>{
                console.log('請求發送成功！',response.data)
                loginModal.show()
                window.localStorage.setItem('isLogin',response.data.isLogin)
                setTimeout(() => {
                    window.location.replace('/')
                }, 3000);

            }).catch(
            error =>{
                if(error.response.status === 409){
                    validation.accounterrmsg=error.response.data.account
                    validation.accountVali=true
                    validation.emailerrmsg=error.response.data.email
                    validation.emailValidate=true
                    console.log(error.response.data)
                }
            }
            );
    }
    

    return{
        ...toRefs(validation),
        accVali,
        passVali,
        emailVali,
        checkUserTerms,
        goToRegist,
        
    }

    
    
 }
}
</script>

<style>
input.form-control:focus {
    outline: none;
    box-shadow: none;
  }
</style>