<template>
   <div>
    <h3>Search Github Users</h3>
    <input type="text" placeholder="enter the name you search" v-model="keyWord">
    <button @click="searchUsers">點我進行搜尋</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return{
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response =>{
                    console.log('請求成功了',response.data.items);
                    this.$bus.$emit('getUsers',{isLoading:false,users:response.data.items})
                },
                error =>{
                    console.log('請求失敗了', error.message);
                    this.$bus.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})
                }
            ) 

        }
    }

}
</script>

<style>

</style>