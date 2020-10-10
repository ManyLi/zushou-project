<template>
    <div>
        <div>在组件中操作路由跳转</div>
        <div>这是b组件</div>
        <router-link to="/a">跳转到a组件</router-link><br>
        <router-link to="/c">跳转到不存在的组件</router-link><br>
        <button @click="toAcom">跳转到a组件</button><br>
        <button @click="getQuery">getQuery</button><br>
        <button @click="getParams">getParams</button>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        toAcom () {
            console.log(this.$router)
            //通过path&query跳转
            this.$router.push({path: '/a'})
        },
        getQuery () {
            //通过$route拿到query
            console.log(this.$route.query)
        },
        getParams () {
            console.log(this.$route.params)
        }
    }
}
</script>