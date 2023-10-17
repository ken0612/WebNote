<template>
  <div id="root">
    <Test ></Test>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
import Test from './components/Test.vue';
import Person from './components/Person.vue';
export default {
  name: "App",
  components:{Test,Person}
  
  
};
</script>

<style>
</style>