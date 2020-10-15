<template>
    <div class="container">
        <div class="form-box">
            <div class="form-title">请登录</div>
            <el-form :model="formData" :rules="formRules" ref="form">
                <el-form-item prop="userName">
                    <el-input v-on:keyup.native.enter="login" placeholder="请输入用户名" v-model="formData.userName"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-on:keyup.native.enter="login" placeholder="请输入密码" type="password" v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :loading="loginLoading" @click="login" type="primary" style="width: 120px;">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    data () {
        return {
            loginLoading: false,
            formData: {
                userName: '',
                password: ''
            },
            formRules: {
                userName: [
                    { required: true, trigger: 'change', message: '请输入用户名' }
                ],
                password: [
                    { required: true, trigger: 'change', message: '请输入密码' }
                ]
            }
        }
    },
    mounted () {
        console.log($)
    },
    methods: {
        login () {
            this.$refs.form.validate(valid => {
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../../assets/images/login/u0.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.form-box {
    width: 350px;
    height: 300px;

    background: rgba(00, 00, 00, 0.3);
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translate(0, -60%);
    padding: 0 20px;
}

.el-form-item {
    text-align: center;
}

.form-box .el-form-item__content {
    text-align: center !important;
}

.form-title {
    font-size: 20px;
    font-weight: bold;
    color: #aaa;
    text-align: center;
    margin: 20px 0;
}
</style>
