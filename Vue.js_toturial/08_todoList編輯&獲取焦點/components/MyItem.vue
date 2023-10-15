<template>
  <div>
    <li class="itemBox">
    <input type="checkbox" :checked="todoObj.done" @click="checkTodo(todoObj.id)">
    <span v-show="!todoObj.isEdit">{{todoObj.todo}}</span>
    <input 
    v-show="todoObj.isEdit" 
    type="text" 
    :value="todoObj.todo" 
    @blur="handleBlur(todoObj,$event)"
    ref="inputTitle"
    >
    <button type="button"    :todoId="todoObj.id" @click="todoDelete(todoObj.id)">刪除</button>
    <button type="button"  @click="handleEdit(todoObj)">編輯</button>
    </li>
  </div>
</template>

<script>
export default {
    name:'MyItem',
    props:['todoObj'],
    data(){
    return{
      msg:'MyItem'
    }
    },
    methods:{
        todoDelete(id){
            if(confirm("確定要刪除嗎?")){
                this.$bus.$emit('deleteTodo',id)
                
            }
        },
        checkTodo(data){
            this.$bus.$emit('checkTodo',data)
        },
        handleEdit(todoObj){
            if(todoObj.hasOwnProperty('isEdit')){
                todoObj.isEdit=true;
            }else{
                console.log('@')
                this.$set(todoObj,'isEdit',true);
            }
            // setTimeout(()=>{
            //     this.$refs.inputTitle.focus()    
            // },100)
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()    
            })
            
        },
        handleBlur(todoObj,e){
            todoObj.isEdit=false;
            if(!e.target.value.trim()) return alert('輸入不能為空')
            this.$bus.$emit('updateTodo',todoObj.id,e.target.value)
        }

    }
      
}
</script>

<style>
    .itemBox{
        list-style: none;
        width: 50%;
        
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