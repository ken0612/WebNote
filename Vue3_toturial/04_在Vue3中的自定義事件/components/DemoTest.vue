<template>
  <h1>helloworld</h1>
  <button @click="trigger">點我觸發自定義事件</button>
</template>

<script>
export default {
    name:'DemoTest',
    //在Vue3裡面，如果要觸發自定義事件，需要設置一個emits選項，否則會出現警告（能用）
    emits:['hello'],
    props:['haha'],
    //setup函數裡面會自動傳入兩個參數，分別為Props與Context，兩者會自動接收外部傳進來的參數
    //但如果外部有傳入參數，還是需要寫一個Props配置選項。
    setup(props,context){
      console.log('@@@@',props,context)
      function trigger(){
        //要觸發自定義事件，可以透過setup預設傳入的參數context中的emit來觸發
        context.emit('hello',666)
      }
      return{
        trigger
      }
    },

}
</script>

<style>

</style>