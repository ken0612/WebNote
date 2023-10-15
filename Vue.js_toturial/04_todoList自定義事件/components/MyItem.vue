<template>
  <div>
    <li class="itemBox">
    <input type="checkbox" :checked="todoObj.done" @click="checkTodo(todoObj.id)">{{todoObj.todo}}
    <button type="button"    :todoId="todoObj.id" @click="todoDelete(todoObj.id)">刪除</button>
    </li>
  </div>
</template>

<script>
export default {
    name:'MyItem',
    props:['todoObj','checkTodo','deleteTodo'],
    data(){
    return{
      msg:'MyItem'
    }
    },
    methods:{
        todoDelete(id){
            if(confirm("確定要刪除嗎?")){
                this.deleteTodo(id)
            }
        }
    }
      
}
</script>

<style>
    .itemBox{
        list-style: none;
        width: 20%;
        
    }
    li:hover{
        background-color:white;
    }
    li:hover button{
        display:block;
        float: right;
        
    }

    li button{
        display:none
    }
    
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        
    }
</style>