<template>
  <div v-show="total">
    <hr>
    <input type="checkbox" v-model="isAll"> 已完成 {{ checkedItems }} / 全部 {{total}}
    <button type="button" @click="clearAll">清除已完成任務</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['allData','todoList','clearDone'],
    data(){
    return{
      msg:'MyFooter'
    }
    },
    computed:{
        // checkedItems(){
        //     let count=0;
        //     this.todoList.forEach((item)=>{
        //         if(item.done===true){
        //             count++;
        //         }
        //     })
        //     return count
            
        // }
        checkedItems(){
            return this.todoList.reduce((pre,todo)=> pre+(todo.done? 1:0),0)
        },
        total(){
            return this.todoList.length
        },
        isAll:{
            get(){
                return this.checkedItems ===this.total && this.total>0
            },
            set(value){
                console.log('setter被調用')
                console.log(value)
                this.$bus.$emit('checkAllTodo',value)
            }
        }
    },
    methods:{
        clearAll(){
            let a=0;
            this.todoList.forEach(ele => {
                if(ele.done===true){
                    a++;
                }
            });
            if(confirm("確定要刪除已完成任務嗎?")){
                if(a===0){
                    alert('沒有任務可以刪除，你這個白癡')
                }else{
                    this.$bus.$emit('clearDone')       
                }
            }
        }
    }
    
}
</script>

<style>

</style>