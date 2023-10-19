<template>
  <h1>當前的總和為{{ sum }}</h1>
  <button @click="sum++">點我</button>
  <hr>
  <h1>{{ msg }}</h1>
  <button @click="msg+='!'">點我啊！</button>
  <hr>
  <h1>監視reactive屬性的資料</h1>
  姓名：{{ person.fullName }}
  年齡：{{ person.age }}
  薪水：{{ person.job.j1.salary }}
  <button @click="person.fullName+='~'">點我修改姓名</button>
  <button @click="person.age++">點我修改年齡</button>
  <button @click="person.job.j1.salary++">點我加薪</button>
  
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
    name:'DemoTest',
    setup(){
      let sum =ref(0)
      let msg=ref('你好啊')
      let person = reactive({
        fullName:'ken',
        age:18,
        job:{
          j1:{
            salary:100
          }
        }
      })
      //使用watch函數監視一個ref屬性的資料
      watch(sum,()=>{
        console.log('sum的value變化了')
      },{immediate:true})

      watch(msg,(newValue,oldValue)=>{
        console.log('msg被修改了')
        console.log(newValue,oldValue)
      })
      //使用watch函數監視一個reactive屬性的資料
      //watch函數預設開啟深度監視(deep:true)
      //Api問題導致使用watch函數去監視一個物件時，無法正確獲得newValue & oldValue
      watch(person,(newValue,oldValue)=>{
        console.log('person被修改了')
        console.log(newValue,oldValue)
      })
      //如果要監視一個物件底下的特定數值，無法使用下列方式監視
      // watch(person.age,(newValue,oldValue)=>{
      //   console.log(newValue,oldValue)
      // })
      //使用watch函數監視一個物件底下的某個數值，可以使用下列方式進行監視
      // watch(()=>person.age,()=>{
      //   console.log('person底下的age被修改了')
      // })
      //使用watch函數監視一個物件底下的某些數值，可以使用下列方式進行監視
      watch([()=>person.age,()=>person.fullName],()=>{
        console.log('person底下的age或是fullName被修改了')
      })
      //特殊情況，如果監視的屬性為某個物件底下的物件，則需要手動開啟深度監視
      watch(()=>person.job,()=>{
        console.log('person底下的job被修改了') 
      },{deep:true})


      return{
        sum,
        msg,
        person

      }
    }

}
</script>

<style>

</style>