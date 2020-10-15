<template>
    <div class="user-container">
        <div class="search-box">
            <el-form ref="form" :model="searchFormData" inline label-width="80px">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="searchFormData.userName" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="用户账号" prop="userAccount">
                    <el-input v-model="searchFormData.userAccount" placeholder="请输入用户账号"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role">
                    <el-select v-model="searchFormData.role">
                        <el-option label="管理员" value="1"></el-option>
                        <el-option label="店长" value="2"></el-option>
                        <el-option label="司机" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary" @click="seset">重置</el-button>
                </el-form-item>

                <div class="btn-group">
                    <el-button>新增</el-button>
                    <el-button>修改</el-button>
                    <el-button>删除</el-button>
                </div>

                <el-table :data="tableData">
                    <el-table-column prop="account" label="账号"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="role" label="角色"></el-table-column>
                    <el-table-column prop="gender" label="性别"></el-table-column>
                    <el-table-column prop="phone" label="手机"></el-table-column>
                    <el-table-column prop="email" label="邮箱"></el-table-column>
                    <el-table-column prop="idCard" label="身份证"></el-table-column>
                </el-table>

                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </el-form>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    data () {
        return {
            searchFormData: {
                userName: '',
                userAccount: '',
                role: ''
            },
            currentPage: 1,
            tableData: []
        }
    },
    mounted () {
        console.log($)
    },
    methods: {
        seset () {
            this.$refs.form.resetFields()
        },
        handleSizeChange (value) {
            console.log('111', value)
        },
        handleCurrentChange (value) {
            console.log('222', value)
        }
    }
}
</script>

<style scoped>
.user-container {
    padding: 10px;
    box-sizing: border-box;
}
</style>
