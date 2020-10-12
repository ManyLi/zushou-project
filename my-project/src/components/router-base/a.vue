<template>
    <div>
        <div>在组件中操作路由跳转</div>
        <div>这是a组件</div>
        <router-link to="/b">跳转到b组件</router-link><br>
        <router-link to="/c">跳转到不存在的组件</router-link><br>
        <button @click="toBcom">query跳转到b组件</button><br>
        <button @click="toBN">name跳转到b组件</button>

        <a-child :toChild="test" @child-parent-func="getChildFunc"></a-child>
    </div>
</template>

<script>
import AChild from './a-child'

export default {
    components: {
        AChild
    },
    data () {
        return {
            test: '传入组件内的参数'
        }
    },
    mounted () {
        console.log(this.$store.state)
    },
    methods: {
        getChildFunc (data) {
            console.log(data)
        },
        toBcom () {
            console.log(this.$router)
            //通过path&query跳转
            this.$router.push({path: '/b', query: {name: 'tom', age: '10', id: '123', height: '128'}})
        },
        toBN () {
            //通过name跳转
            this.$router.push({name: 'b', params: {NewName: 'bob', age: '10'}})
        }
    }
}
</script>