<template>
  <div class="container-fluid ">
    <h4 class="text-start mt-4">會員名稱：</h4>
      <p class="my-3 text-start mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        編輯會員資料：
      </p>
      <div class="row">
        <!-- 切版各半 -->
        <div class="col-6 col-md-6">
          <div class="mb-3 row mb-4">
            <label for="fullname" class="col-sm-3 col-form-label text-start"
              >姓名：</label
            >
            <div class="col-sm-5 me-auto">
              <input type="text" class="form-control" id="memfullname" v-model="account" />
            </div>
          </div>
          <div class="mb-3 row mb-4">
            <label for="email" class="col-sm-3 col-form-label text-start"
              >電子信箱：</label
            >
            <div class="col-sm-5 me-auto">
              <input type="text" class="form-control" id="mememail" />
            </div>
          </div>
          <div class="mb-3 row mb-4">
            <label for="phone" class="col-sm-3 col-form-label text-start "
              >手機號碼：</label
            >
            <div class="col-sm-5 me-auto">
              <input type="text" class="form-control" id="memphone" />
            </div>
          </div>
          <div class="mb-3 row mb-4">
            <label for="password" class="col-sm-3 col-form-label text-start "
              >密碼：</label
            >
            <div class="col-5  ">
              <a href="" class="d-flex mt-2">設定新密碼</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 text-center">
          <button class="btn btn-secondary ">儲存變更</button>
        </div>
      </div> 

  </div>
  
  
  
  

</template>

<script>
import { toRefs,reactive } from 'vue';

export default {
  name:'MemberHome',
  setup(){
    let memberInfo=reactive({
      fullName:'',
      email:'',
      phoneNumber:'',
      birth:'',
      address:''
    })
    
    //頁面掛載完成之前，先向後端索取用戶資訊
    


    return{
      ...toRefs(memberInfo)
    }
  }



};
</script>

<style>
</style>