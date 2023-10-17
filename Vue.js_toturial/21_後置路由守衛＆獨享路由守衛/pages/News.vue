<template>
  <div>
    <h1 :style="{opacity}">helloworld</h1>
    
    <input type="text">
    <input type="text">
    <input type="text">
  </div>
</template>

<script>
export default {
    name:'news',
    data(){
      return{
        opacity:1,
      }
    },
    activated(){
      console.log('News組件被激活')
      this.timer=setInterval(()=>{ 
        console.log('@')
        this.opacity-=0.01
        if(this.opacity<=0){
          this.opacity=1;
        }
      },16)
    },
    deactivated(){
      console.log('News組件失活')
      clearInterval(this.timer);
    }
}
</script>

<style>

</style>