<template>
  <div>
    <MyItem class="itemStyle" v-for="todoObj in todoList" :key="todoObj.id" :todoObj="todoObj" ></MyItem>
  </div>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name:'MyList',
    components:{MyItem},
    props:['todoList'],
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