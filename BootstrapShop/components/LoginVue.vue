<template>
  <div class="container-sm" style="width:1100px ;height:700px;">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12 m-5 " style="width:700px;">
            <h3 class="mb-4">會員登入</h3>
            <div class="mb-3 row ">
                <label for="Account" class="col-sm-2 col-form-label">帳號</label>
                <div class="col-sm-10 border-bottom">
                <input type="text" class="form-control border-0  " id="Account">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10 border-bottom">
                <input type="password" class="form-control border-0" id="inputPassword">
                </div>
            </div>
            <router-link to="/forgotpassword">
                <div class="mb-3 row text-center">
                    <a href="#">忘記密碼</a>
                </div>
            </router-link>

            <div class="d-flex justify-content-center">
            <button class="btn btn-secondary">註冊</button>
            </div>
            <div class="text-center mt-3">
                <router-link to="/regist">
                    <a href="#">還不是會員？點此註冊</a>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    input.form-control:focus {
    outline: none;
    box-shadow: none;
  }
</style>