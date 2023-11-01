<template>

    <!-- 歷史訂單區域，未來將使用v-for動態產生歷史訂單 -->
    <div class="container-fluid w-100 mt-3">
        <!-- 表格 -->
        <table class="table table-hover">
        <!-- 表頭 -->
        <thead>
            <tr>
            <th scope="col">訂單號碼</th>
            <th scope="col">訂單日期</th>
            <th scope="col">合計</th>
            <th scope="col">訂單狀態</th>
            <th scope="col">  </th>
            </tr>
        </thead>
        <!-- 表格本體 -->
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><button class="btn btn-secondary"> 查閱</button></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><button class="btn btn-secondary"> 查閱</button></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><button class="btn btn-secondary"> 查閱</button></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><button class="btn btn-secondary"> 查閱</button></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><button class="btn btn-secondary"> 查閱</button></td>
            </tr>
        </tbody>
        </table>      
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>