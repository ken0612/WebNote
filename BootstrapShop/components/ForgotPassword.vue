<template>
  <!-- 忘記密碼填寫用欄位 -->
  <div class="container-sm" style="width:1100px ;height:700px;">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12 m-5 " style="width:700px;">
            <h3 class="mb-4">忘記密碼</h3>
            <div class="mb-3 row ">
                <label for="Email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10 border-bottom">
                <input type="email" class="form-control border-0  " id="Email" required>
                </div>
            </div>
            <!-- 發送重設密碼按鈕 -->
            <div class="d-flex justify-content-center">
                <button class="btn btn-secondary">重設密碼</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'ForgotPassword'
}
</script>

<style>

</style>