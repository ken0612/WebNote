<template>
  <div>
    <input type="text" placeholder="請輸入todo" v-model="title"  @keyup.enter="add">
    
  </div>
</template>

<script>
export default {
  name:'MyHeader',
  data(){
    return{
      msg:'MyHeader',
      title:''
    }
  },
  methods:{
    add(e){
      if(!this.title) return alert("todo不能是空的")
      const todoObj={id:Date(),todo:e.target.value,done:false}
      e.target.value=''
      this.$emit('addTodo',todoObj)
    }
  }

}
</script>

<style>

</style>