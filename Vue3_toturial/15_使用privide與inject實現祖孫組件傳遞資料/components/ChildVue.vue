<template>
    <div class="Child">
        <h1>我是Child組件</h1>
        <SonVue></SonVue>
    </div>
</template>

<script>
import SonVue from './SonVue.vue';

export default {
    name: 'ChildVue',
    components: { SonVue }
}
</script>

<style>
 .Child{
    background-color: orange;
    padding: 10px;
 }
</style>