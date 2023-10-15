<template>
  <div>
    <h1>HelloWorld</h1>
    <button @click="sendRequest">點我發送請求</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Test',
    methods:{
        sendRequest(){
            axios.get('http://localhost:8080/ken/sayHello').then(
                response =>{
                    console.log('請求成功了',response.data)
                },
                error =>{
                    console.log('請求失敗了',error.message)
                }

            )
        }
    }

}
</script>

<style>

</style>