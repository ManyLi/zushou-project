<template>
    <div class="container">
        <div class="form-box">
            <div class="form-title">请登录</div>
            <el-form ref="formData" :model="formData" :rules="rules">
                <el-form-item prop="userName">
                    <el-input placeholder="请输入用户名" type="text" v-model="formData.userName"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" type="password" v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :loading="loginLoading" type="primary" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
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
        loginLoading: false,
        formData: {
          userName: '',
          password: ''
        },
        rules: {
            userName:[
                { required: true, trigger: 'change', message: '请填写用户名'}
            ],
            password:[
                { required: true, trigger: 'change', message: '请填写密码'}
            ]
        }
      }
    },
    methods: {
        login () {
            this.$refs.formData.validate(valid => {
                if (valid) {
                    this.loginLoading = true

                    $.ajax({
                        url: 'http://192.168.3.77:3000/api/demo/login',
                        method: 'post',
                        data: this.formData,
                        dataType: 'json',
                        success: (data) => {
                            setTimeout(() => {
                                this.loginLoading = false

                                console.log('data', data)
                                if (data.status === 200) {
                                    this.$message({
                                        type: 'success',
                                        message: data.message
                                    })

                                    this.$router.push({path: '/userManage'})
                                } else {
                                    this.$message({
                                        type: 'error',
                                        message: data.message
                                    })
                                }
                            }, 500)
                        }
                    })
                    console.log('发请求')
                } else {
                    return false
                }
            })
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
