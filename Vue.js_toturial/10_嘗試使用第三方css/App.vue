<template>
  <div id="root">
    <div class="cstyle">
    <MyHeader @addTodo="addTodo"/>
    <MyList :todoList="todoList" />
    <MyFooter :allData="todoList.length" :todoList="todoList" />
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
                console.log('im checkTodo i has been trigger')
            })
        },
        deleteTodo(id){
            console.log('im deleteTodo, i has been trigger')
            this.todoList=this.todoList.filter((item) =>{
                
                return item.id !== id;
            })
        },
        checkAllTodo(value){
            console.log('checkAllTodo被觸發')
            this.todoList.forEach((todo)=>{
                todo.done=value;
            });
        },
        clearDone(){
            
            this.todoList=this.todoList.filter((todo)=>{
                return !todo.done
            })
        },
        updateTodo(id,title){
            this.todoList.forEach((todo)=>{
                if(todo.id===id) todo.todo = title
            })
        }
    },
    mounted(){
        this.$bus.$on('checkTodo',this.checkTodo);
        this.$bus.$on('deleteTodo',this.deleteTodo);
        this.$bus.$on('updateTodo',this.updateTodo);
        this.$bus.$on('checkAllTodo',this.checkAllTodo);
        this.$bus.$on('clearDone',this.clearDone);
    },
    beforeDestroy(){
        this.$bus.$off('checkTodo');
        this.$bus.$off('deleteTodo');
        this.$bus.$off('updateTodo');
        this.$bus.$off('checkAllTodo');
        this.$bus.$off('clearDone');
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