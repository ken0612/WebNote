<template>
  <div class="container-fluid bg-lightdark" style="height:1000px;">
      <div class="row h-100">
        <div class="col-12 col-md-2 bg-primary">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
              The current link item
            </a>
            <router-link to="/products/spring">
              <a href="#" class="list-group-item list-group-item-action">春天系列</a>
            </router-link>
            <a href="#" class="list-group-item list-group-item-action">A third link item</a>
            <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
            <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
          </div>
        </div>
        <div class="col-12 col-md-10 bg-secondary ">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
 name:'ProductVue'
}
</script>

<style>
.bg-lightdark {
  background-color: antiquewhite ;
  opacity: 0.6;
}
</style>