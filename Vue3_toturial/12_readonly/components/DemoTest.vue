<template>
  <h1>監視reactive屬性的資料</h1>
  <h2>{{ person }}</h2>
  姓名：{{ fullName }}
  年齡：{{ age }}
  薪水：{{ job.j1.salary }}
  <br>

  <button @click="fullName+='~'">點我修改姓名</button>
  <button @click=" age++">點我修改年齡</button>
  <button @click=" job.j1.salary++">點我加薪</button>
  
</template>

<script>
import { readonly,toRefs } from 'vue'
export default {
    name:'DemoTest',
    setup(){
      //readonly函數可以讓數據受到保護，若外部傳來的資訊是不希望被更改的，可以將該數據丟進函數加工後保護
      let person = readonly({
        fullName:'ken',
        age:18,
        job:{
          j1:{
            salary:100
          }
        }
      })
      
      return{
        person,
        //使用toRefs將數據單獨作為響應式提交，可以減少模板反覆的語法
        ...toRefs(person)
      }
    }

}
</script>

<style>

</style>