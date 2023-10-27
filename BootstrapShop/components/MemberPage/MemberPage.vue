<template>
  <!-- 會員中心組件 -->
  <div class="container">
    <div class="row m-5 justify-content-center">
        <div class="card text-center border-1" style="width:1000px;" >
            <ul class="nav nav-tabs mt-3 " id="myTab" role="tablist">
                <router-link to="/memberpage/info">
                    <li class="nav-item " role="presentation">
                            <button class="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">個人資訊</button>
                    </li>
                </router-link>
                <router-link to="/memberpage/orders">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">訂單</button>
                    </li>
                </router-link>
            </ul>
            <div class="tab-content border-1 " id="myTabContent">
                <div class="tab-pane fade show active w-100" id="home" role="tabpanel" aria-labelledby="home-tab">
                   <router-view></router-view>
                </div>
                <div class="tab-pane fade w-100" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                   <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name:'MemberPage',
  methods:{
      
      
  },
}
</script>

<style>
 .nav-item:not(.active) .nav-link {
    color: gray;
}
.tab-pane{
    width:700px;
    height:500px;
}

a{
    text-decoration:none;
}
</style>