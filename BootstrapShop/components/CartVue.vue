<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl ">
            <div class="modal-content bg-dark bg-gradient w-100 h-100 text-white" >
            <div class="modal-header border-0 mx-auto my-auto ">
                <h5 class="modal-title fs-1 " id="exampleModalLabel">購物車一覽</h5>
            </div>

            <!-- 這是購物車的內容，預計添加卡片 -->
            <div class="modal-body">
                
            <!-- 假卡片資訊，等待真實資訊加入  -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-3">
                    <img class="w-100 h-100" src="https://picsum.photos/300/200?random=10" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body  justify-content-end">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class="text-end">
                                <p>總金額：xxxx</p>
                                <button class="btn btn-danger " >刪除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-3">
                    <img class="w-100 h-100" src="https://picsum.photos/300/200?random=34" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body  justify-content-end">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class="text-end">
                                <p>總金額：xxxx</p>
                                <button class="btn btn-danger " >刪除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-3">
                    <img class="w-100 h-100" src="https://picsum.photos/300/200?random=31" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body  justify-content-end">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class="text-end">
                                <p>總金額：xxxx</p>
                                <button class="btn btn-danger " >刪除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-3">
                    <img class="w-100 h-100" src="https://picsum.photos/300/200?random=32" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body  justify-content-end">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class="text-end">
                                <p>總金額：xxxx</p>
                                <button class="btn btn-danger " >刪除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-3">
                    <img class="w-100 h-100" src="https://picsum.photos/300/200?random=33" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body  justify-content-end">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class="text-end">
                                <p>總金額：xxxx</p>
                                <button class="btn btn-danger " >刪除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <!-- 下方結帳按鈕 -->
            <div class="modal-footer mx-auto border-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">繼續逛逛</button>
                <button type="button" class="btn btn-secondary">前往結賬</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'CartVue'
}
</script>

<style>

</style>