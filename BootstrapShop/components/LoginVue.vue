<template>
  <div class="container-sm" style="width:1100px ;height:700px;">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12 m-5 " style="width:700px;">
            <h3 class="mb-4">註冊會員</h3>
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
            <div class="mb-3 row">
                <label for="inputEmail " class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10 border-bottom">
                <input type="email" class="form-control border-0" id="inputEmail">
                </div>
            </div>
            <div class="mb-3 row ">
                <div class="form-check  text-center d-flex justify-content-center ">
                    <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label  " for="flexCheckDefault">
                        我已閱讀使用者條款
                    </label>
                </div>
            </div>

            <div class="d-flex justify-content-center">
            <button class="btn btn-secondary">註冊</button>
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
.form-control:focus {
    outline: none;
    box-shadow: none;
  }
</style>