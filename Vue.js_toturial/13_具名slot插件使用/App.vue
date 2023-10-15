<template>
  <div id="root">
    <Test >
        <template v-slot:testSlot>
           <h1>haha world!!!</h1> 
        </template>
        <template  v-slot:testSlot2>
            <h2>wahaha world</h2>
        </template>
    </Test>
  </div>
</template>

<script>
import Test from './components/Test.vue'
export default {
  name: "App",
  components:{Test}
  
  
};
</script>

<style>
</style>