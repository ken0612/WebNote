<template>
  <!-- 全館廣播 -->
  <div class="container-fluid bg-dark bg-gradient">
    <div class="row ">
      <div class="text-center text-light ">
        <h3 class="mt-2 align-items-center">這裡可以放置全館廣播 📣</h3>
      </div>
    </div>
  </div>


  <div class="container-fluid sticky-top">
  <!-- 導覽列 -->
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height: 110px;">
        <div class="container-fluid">
          <router-link to="/">
              <p class="navbar-brand fs-1" >商店名稱</p>
          </router-link>  
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <template v-if="!isLogin">
                  <li class="nav-item">
                    <router-link to="/login">
                    <p class="nav-link text-dark  headerlink  fs-5 mr-1 " aria-current="page" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        會員登入
                    </p>
                    </router-link>
                  </li>
                  <li class="nav-item ">
                          <router-link to="/registpage">
                            <p class="nav-link text-dark headerlink fs-5 mr-1 " >註冊</p>
                          </router-link>        
                  </li>
                </template>

                <template v-if="isLogin">
                  <li class="nav-item">
                    <p class="nav-link text-dark  headerlink  fs-5 mr-1 " aria-current="page" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        歡迎！User!
                    </p>
                  </li>
                  <li class="nav-item ">
                          <router-link to="/memberpage/info">
                            <p class="nav-link text-dark headerlink fs-5 mr-1 " >會員中心</p>
                          </router-link>        
                  </li>

                  <li class="nav-item ">
                          <router-link to="/">
                            <div data-bs-toggle="modal" data-bs-target="#logoutConfirm">
                              <p class="nav-link text-dark headerlink fs-5 mr-1 " >登出</p>
                            </div>
                          </router-link>        
                  </li>
                </template>



                <li class="nav-item ">
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <p class="nav-link text-dark headerlink fs-5 mr-1 " >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart mb-1" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                      購物車(0)
                    </p>
                  </div>
                </li>

              </ul>  
            <form class="d-flex ">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn bg-dark bg-gradient text-white" style="width:100px" type="submit">找商品</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  
  <!-- 商品分類 -->
    <div class="row" >
      <ul class="nav justify-content-center bg-secondary bg-gradient " style="height:50px;">
        <li class="nav-item mx-5 fs-5 ">
          <router-link to="/products/category/全部商品">
            <p class="nav-link text-light" >永生花系列</p>
          </router-link>
        </li>
        <li class="nav-item mx-5 fs-5 ">
          <p class="nav-link text-light " >阿咪好物團購</p>
        </li>
        <li class="nav-item mx-5 fs-5">
          <p class="nav-link text-light " aria-current="page" >阿咪的部落格</p>
        </li>
        <li class="nav-item mx-5 fs-5 ">
          <p class="nav-link text-light">關於我們</p>
        </li>
      </ul>
    </div>
 
  </div>

  <!-- 購物車（隱式) -->
  <CartVue></CartVue>

  <!-- 登出確認按鈕 -->
  <div class="modal fade" id="logoutConfirm" tabindex="-1" aria-aledby="logoutConfirm" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered ">
            <div class="modal-content ">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="logoutConfirm">警告</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-a="Close"></button>
                </div>
                <div class="modal-body border-0">
                    確定要登出嗎？
                </div>
                <div class="modal-footer border-0 justify-content-center ">
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">再逛一下</button>
                    <button type="button" class="btn btn-primary" @click="logout">確定</button>
                  </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import {ref} from 'vue'
import CartVue from './CartVue.vue'
export default {
  name:'HeaderVue',
  setup(){
    let isLogin=ref(window.localStorage.getItem('isLogin'))
    return{
      isLogin
    }
  },
  methods:{
    logout(){
      window.localStorage.removeItem('isLogin')
      this.$router.push('/').then(()=>{
        window.location.reload()
      })
    }
  },
  components:{CartVue}
}
</script>

<style scoped>
    a {
  text-decoration-line: none;
  
}
.navbar-nav li.nav-item{
  align-items: center;
  justify-content: center;
  margin-top: 18px;
}

</style>