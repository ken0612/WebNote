<template>
  <div id="root">
    <div class="cstyle">
    <MyHeader @addTodo="addTodo"/>
    <MyList :todoList="todoList" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
    <MyFooter :allData="todoList.length" :todoList="todoList" @checkAllTodo="checkAllTodo" @clearDone="clearDone" />
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    name:'App',
    data(){
        return{
            todoList:[
                {id:"001",todo:"原神啟動",done:false},
                {id:"002",todo:"星鐵啟動",done:false},
                {id:"003",todo:"那我也要睡啦",done:false}
            ]
        }
    },
    methods:{
        addTodo(todoObj){
            this.todoList.unshift(todoObj)
        },
        checkTodo(id){
            this.todoList.forEach((item)=>{
                if(item.id === id) item.done=!item.done
            })
        },
        deleteTodo(id){
            this.todoList=this.todoList.filter((item) =>{
                return item.id !== id;
            })
        },
        checkAllTodo(done){
            this.todoList.forEach((todo)=>{
                todo.done=done;
            });
        },
        clearDone(){
            this.todoList=this.todoList.filter((todo)=>{
                return !todo.done
            })
        }
    },
    components:{MyHeader,MyList,MyFooter}
}
</script>

<style >
 .cstyle{
    border:5px solid;
    background-color:lightblue;
 }
</style>