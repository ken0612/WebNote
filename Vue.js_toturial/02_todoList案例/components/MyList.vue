<template>
  <div>
    <MyItem class="itemStyle" v-for="todoObj in todoList" :key="todoObj.id" :todoObj="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyItem>
  </div>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name:'MyList',
    components:{MyItem},
    props:['todoList','checkTodo','deleteTodo'],
    data(){
    return{
      msg:'MyList'
    }
  }
}
</script>

<style scoped>
  .itemStyle{
    margin: 5px;
  }
</style>