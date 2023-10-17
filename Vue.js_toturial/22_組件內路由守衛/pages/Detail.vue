<template>
  <ul>
    <li>消息編號：{{id}}</li>
    <hr>
    <li>消息標題：{{title}}</li>
  </ul>
</template>

<script>
export default {
 name:'detail',
// 將Message傳送過來的參數接收，前提是必須在router配置裡面先配置好props
 props:['id','title'],

 mounted(){
    console.log(this.$route)
 }

}
</script>

<style>

</style>