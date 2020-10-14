<template>
    <div class="container">
        <div class="form-box">
            <div class="form-title">请登录</div>
            <el-form :model="formData" :rules="rules">
                <el-form-item prop="userName">
                    <el-input placeholder="请输入用户名" type="text" v-model="formData.userName"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" type="password" v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    data() {
      return {
        formData: {
          userName: '',
          password: ''
        },
        rules: {
            userName:[
                { required: true, message: '请填写用户名', trigger: 'blur' }
            ],
            password:[
                { required: true, message: '请填写密码', trigger: 'blur' }
            ]
        }
      }
    },
    methods: {
        submit () {
            console.log('success')
        }
    }
}
</script>

<style scoped>
    .container {
        position: absolute;
        top: 0%;
        left: 0;
        bottom: 0;
        right: 0;
        background: url("../../assets/images/login/u0.jpg") no-repeat;
        background-size:100% 100%;
    }
    .form-box {
        width: 350px;
        height: 300px;
        background:rgba(255, 255, 255, 0.3);
        position: absolute;
        top: 50px;
        right: 50px;
        transform: translate(0, 40%);
        text-align: center;
    }
    .form-title {
        font-size: 20px;
        font-weight: bold;
        color: #aaa;
        text-align: center;
        margin: 20px 0;
    }
    .el-form-item {
        width: 90%;
        margin-left: 5%;
    }
    .el-button{
        width: 200px;
    }
</style>
