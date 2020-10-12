<template>
    <div>
        <div class="container">
            <div class="page-title">
                <span class="goBack" @click="goBack">返回</span>
                <span>文章管理</span>
                <span class="save" @click="save">保存</span>
            </div>

            <ul class="page-tab">
                <li>文章列表</li>
                <li>文章编写</li>
                <li>文章分类</li>
            </ul>

            <ul class="content-box">
            <li>
                <div>作者:</div>
                <input id="auther" type="text">
            </li> 
            <li>
                <div>标题:</div>
                <input id="detailTitle" type="text">
            </li> 
            <li>
                <div>内容:</div>
                <textarea id="remark" name="" cols="30" rows="10"></textarea>
            </li> 
            </ul>

            <ul class="footer">
                <li>
                    <div class="icon"></div>
                    <div>文章管理</div>
                </li>
                <li>
                    <div class="icon"></div>
                    <div>文章管理</div>
                </li>
                <li>
                    <div class="icon"></div>
                    <div>文章管理</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    mounted () {
        console.log('aaaa', this.$route.query)
    },
    methods: {
        goBack () {
            // this.$router.push({path: '/containerList'})

            this.$router.go(-1)
        },
        save () {
            // this.$router.push({path: '/containerList'})

            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: #333333;
}

input {
    outline: none;
}

button {
    outline: none;
}

p {
    margin: 0;
}

.container {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 60px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.container .page-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(100, 108, 252);
    color: #ffffff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 1;
    padding: 0 10px;
    box-sizing: border-box;
}

.container .page-title span.goBack {
    color: #ffffff;
    border: 2px solid #aaa;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
}

.container .page-title span.save {
    color: #ffffff;
    border: 2px solid #aaa;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
}

.content-box {
    padding: 10px;
}

.content-box li {
    display: flex;
    flex-direction: column;
}

.content-box li>div{
    height: 30px;
    line-height: 30px;
    color: #333333;
}

.content-box li input {
    flex: 1;
    height: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.content-box li textarea {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    outline: none;
    /* box-shadow: blue 5px; */
}

.container .page-tab {
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid blue;
    z-index: 1;
}

.container .page-tab li {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
}

.container .page-tab li:nth-child(2) {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.container .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 60px;
    background: rgb(100, 108, 252);
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
}

.container .footer li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.container .footer li .icon {
    width: 25px;
    height: 25px;
    background: #aaaaaa;
    border-radius: 50%;
}

.container .footer li:first-child .icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -867px -5px;
}

.container .footer li:nth-child(2) .icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -939px -5px;
}

.container .footer li:last-child .icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -580.5px -5px;
}
</style>
