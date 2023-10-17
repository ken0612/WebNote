<template>
  <div>
    <h1>this is Message page</h1>
    <ul>
        <li v-for="m in messageList" :key="m.id">
            <!--攜帶參數的跳轉路由寫法-->
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
            <!--正規寫法-->
            <router-link :to="{
                path:'/home/message/detail',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{ m.title }}
            </router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'message',
    data(){
        return{
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
                {id:'004',title:'消息004'} 
            ]
        }
    }
}
</script>

<style>

</style>