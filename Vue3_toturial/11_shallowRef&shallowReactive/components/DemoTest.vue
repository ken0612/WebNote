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
import { reactive, shallowReactive, shallowRef, toRefs } from 'vue'
export default {
    name:'DemoTest',
    setup(){
      //let person=shallowReactive({}) 只會將物件第一層轉換為響應式
      let person = reactive({
        fullName:'ken',
        age:18,
        job:{
          j1:{
            salary:100
          }
        }
      })
      
      //如果只是單純數據跟ref沒有差別，但如果是物件的話，只有第一層的資料會變成響應式
      const a  =shallowRef({
        x:0,
        y:0
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