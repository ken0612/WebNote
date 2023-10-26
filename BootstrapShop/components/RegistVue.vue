<template>
  <div class="container-sm" style="width:1100px ;height:700px;">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12 m-5 " style="width:700px;">
            <h3 class="mb-4">註冊會員</h3>
            <div class="mb-3 row ">
                <label for="Account" class="col-sm-2 col-form-label">帳號</label>
                <div class="col-sm-10 border-bottom">
                    <input v-model="account" @blur="accVali" type="text" class="form-control border-0  " id="Account">
                </div>
                <small v-if="accountVali"  class="text-danger text-center">帳號長度必須為6~12位</small>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10 border-bottom">
                <input v-model="password" @blur="passVali" type="password" class="form-control border-0" id="inputPassword">
                </div>
                <small v-if="passwordVali"  class="text-danger text-center">密碼長度必須為6~30位，且至少須包含一個大小及小寫字母</small>
            </div>
            <div class="mb-3 row">
                <label for="inputEmail " class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10 border-bottom">
                    <input v-model="email" @blur="emailVali" type="email" class="form-control border-0" id="inputEmail">
                </div>
                <small v-if="emailValidate"  class="text-danger text-center">請輸入正確的Email格式</small>
            </div>
            <div class="mb-3 row ">
                <div class="form-check  text-center d-flex justify-content-center ">
                    <input  class="form-check-input "  type="checkbox" v-model="userTerms" id="flexCheckDefault">
                    <label class="form-check-label  " for="flexCheckDefault">
                        我已閱讀使用者條款
                    </label>
                </div>
            </div>

            <div class="d-flex justify-content-center">
            <button class="btn btn-secondary" @click="checkUserTerms">註冊</button>
            </div>
        </div>
    </div>
  </div>

    <!-- Modal -->
    <div class="modal fade" id="userTermsAlert" tabindex="-1" aria-labelledby="userTermsAlert" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered ">
            <div class="modal-content ">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="exampleModalLabel">無法送出註冊</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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

</template>

<script>
import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.js'
import {reactive,toRefs} from 'vue'
export default {
 name:'RegistVue',
 setup(){
    let validation =reactive({
        account:'',
        password:'',
        email:'',
        accountVali:false,
        passwordVali:false,
        emailValidate:false,
        userTerms:false
    })
    
    function accVali(){
        if(validation.account===''){
            validation.accountVali=false
        }else if(validation.account.match(/^[a-zA-Z0-9]{6,12}$/) === null ){
            validation.accountVali=true
        }else {
            validation.accountVali=false
        }
    }

    function passVali(){
        if(validation.password ===''){
            validation.passwordVali=false
        }else if(validation.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/)===null){
            validation.passwordVali=true
        }else{
            validation.passwordVali=false
        }
    }

    function emailVali(){
        if(validation.email === ''){
            validation.emailValidate=false
        }else if(validation.email.match(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)===null){
            validation.emailValidate=true
        }else{
            validation.emailValidate=false
        }
    }

    function checkUserTerms(){
        const modal= new bootstrap.Modal(document.getElementById('userTermsAlert'))
        if(validation.userTerms===false){
            modal.show()
        }
    }

    return{
        ...toRefs(validation),
        accVali,
        passVali,
        emailVali,
        checkUserTerms
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