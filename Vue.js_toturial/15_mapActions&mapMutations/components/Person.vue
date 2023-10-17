<template>
  <div>
    <h1>人員列表</h1>
    <h2 style="color:red"> 上方組件的總和為{{ sum }}</h2>
    <input type="text" v-model="name">
    <button type="button" @click="add" >點我添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}},{{ p.age }}</li>    
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return{
            name:''
        }
    },
    computed:{
        ...mapState(['personList','sum'])
    },
    methods:{
        add(){
            const person = {id:nanoid(),name:this.name,age:20}
            this.personList.unshift(person)
            this.name=''
        }
    }
}
</script>

<style>

</style>