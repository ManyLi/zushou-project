<template>
    <div>
        <button @click="goBack">返回上一级页面</button>
        <h1>404</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>