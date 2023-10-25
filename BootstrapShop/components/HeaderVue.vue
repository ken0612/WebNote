<template>
  <!-- 全館廣播 -->
  <div class="container-fluid bg-dark bg-gradient">
    <div class="row ">
      <div class="text-center text-light ">
        <h3 class="mt-2 align-items-center">helloworld</h3>
      </div>
    </div>
  </div>

  <!-- 導覽列 -->
  <div class="container-fluid" >
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height: 150px;">
        <div class="container-fluid">
        <router-link to="/">
            <a class="navbar-brand fs-1" href="#">商店名稱</a>
        </router-link>  
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/login">
                <a class="nav-link text-dark  fs-5 " aria-current="page" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    會員登入
                </a>
                </router-link>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-dark fs-5 " href="#">註冊</a>
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> -->
            </ul>
            <form class="d-flex ">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" style="width:100px" type="submit">找商品</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <!-- 商品分類 -->
  <div class="container-fluid">
      <div class="row">
        <ul class="nav justify-content-center bg-secondary bg-gradient">
          <li class="nav-item mx-5">
            <a class="nav-link text-light fs-5" aria-current="page" href="#">本月上架</a>
          </li>
          <li class="nav-item mx-5 fs-5">
            <a class="nav-link text-light" href="#">永生花系列</a>
          </li>
          <li class="nav-item mx-5 fs-5">
            <a class="nav-link text-light" href="#">阿咪好物團購</a>
          </li>
          <li class="nav-item mx-5 fs-5">
            <a class="nav-link text-light">關於我們</a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
a {
  text-decoration: none;
}
</style>