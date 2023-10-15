<template>
  <div>
    <button @click="isShow =!isShow">點我啊耖</button>
    <transition 
    :appear="true"
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__rotateOutDownLeft"
    >
        <h1 v-show="isShow"  >HelloWorld</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data(){
        return {
            isShow:true
        }
    }

}
</script>

<style scoped>
    h1{
        background-color: #c9b082 ;
    }
    
</style>