<template>
  <h1>監視reactive屬性的資料</h1>
  <h2>{{ person }}</h2>
  姓名：{{ fullName }}
  年齡：{{ age }}
  薪水：{{ job.j1.salary }}
  車：{{ person.car }}
  <br>

  <button @click="fullName+='~'">點我修改姓名</button>
  <button @click=" age++">點我修改年齡</button>
  <button @click=" job.j1.salary++">點我加薪</button>
  <button @click="addCar">點我獲得一台車</button>
  <button @click="changeCar">點我換車</button>
  <button @click="toRawFile">點我將資料移除響應式</button>
  
</template>

<script>
import { markRaw, reactive,toRaw,toRefs } from 'vue'
export default {
    name:'DemoTest',
    setup(){
      let person = reactive({
        fullName:'ken',
        age:18,
        job:{
          j1:{
            salary:100
          }
        }
      })


      //被標記為markRaw的資料，將不會變成響應式，故也無法進行更改。
      function addCar(){
        person.car=markRaw({brand:'tesla',price:100})
      }
      
      function changeCar(){
        person.car.brand='toyota'
      }

      //透過toRaw可以將響應式還原為一般資料，但不常用
      function toRawFile(){
        const p =toRaw(person)
        person=p
        console.log(p)
        console.log(person)
      }

      return{
        person,
        ...toRefs(person),
        addCar,
        changeCar,
        toRawFile
      }
    }

}
</script>

<style>

</style>