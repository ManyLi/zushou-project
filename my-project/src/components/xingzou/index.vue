<template>
    <div class="container">
        <div class="header">
            <div class="logo-text">行走书店管理系统</div>
            <div class="user-head-photo">
                <img src="../../assets/images/main/u18.jpg" alt="">
                <span>管理员</span>
            </div>
        </div>

        <div class="main">
            <ul class="aside">
                <li :class="{active: item.path === currentRoute}" v-for="(item, index) in menuList" :key="index">{{item.menuName}}</li>
            </ul>

            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menuList: [
                {menuName: '用户管理', path: '/userManage'},
                {menuName: '菜单管理', path: '/menuManage'},
                {menuName: '商品管理', path: '/'},
                {menuName: '首页轮播图管理', path: '/'},
                {menuName: '商品分类管理', path: '/'},
                {menuName: '客户管理', path: '/'},
                {menuName: '订单管理', path: '/'},
                {menuName: '热门位商品管理', path: '/'},
                {menuName: '门店信息管理', path: '/'}
            ]
        }
    },
    computed: {
        currentRoute () {
            return this.$route.path
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.header {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #aaa;
    background: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}

.logo-text {
    color: #60a3fe;
    font-size: 30px;
}

.user-head-photo {
    width: 150px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.main {
    display: flex;
    flex: 1;
    width: 100%;
    overflow: hidden;
}

.aside {
    overflow: auto;
    width: 200px;
    height: 100%;
    border-right: 1px solid #ddd;
}

.aside li {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
}

.aside li.active {
    color: #409eff;
    background: #e9f3fb;
}

.aside li:hover {
    background: #e9f3fb;
}

.content {
    flex: 1;
    height: 100%;
}
</style>
