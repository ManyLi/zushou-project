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
                    <el-button type="primary" @click="fetch">查询</el-button>
                    <el-button type="primary" @click="seset">重置</el-button>
                </el-form-item>

                <div class="btn-group">
                    <el-button>新增</el-button>
                    <el-button>修改</el-button>
                    <el-button @click="deleteRows">删除</el-button>
                </div>

                <el-table :data="tableData" @selection-change="selectionChange">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="account" label="账号"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="role" label="角色">
                        <template slot-scope="scope">
                            <span>{{ scope.row.role === '1' ? '管理员' : scope.row.role === '2' ? '店长' : '司机'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="gender" label="性别"></el-table-column>
                    <el-table-column prop="phone" label="手机"></el-table-column>
                    <el-table-column prop="email" label="邮箱"></el-table-column>
                    <el-table-column prop="idCard" label="身份证"></el-table-column>
                </el-table>

                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageInfo.pageIndex"
                    :page-sizes="[3, 5, 7]"
                    :page-size="pageInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageInfo.total">
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
            tableData: [],
            pageInfo: {
                pageIndex: 1,
                pageSize: 3,
                total: 0
            },
            tableCheckedRows: []
        }
    },
    mounted () {
        // console.log($)
        this.fetch()
    },
    methods: {
        selectionChange (rows) {
            console.log(rows)
            this.tableCheckedRows = rows
        },
        deleteRows () {
            if (!this.tableCheckedRows.length) {
                this.$message({
                    type: 'info',
                    message: '请勾选要删除的数据'
                })

                return
            }

            let ids = this.tableCheckedRows.map(item => {
                return item.id
            }).toString()

            $.ajax({
                url: 'http://192.168.3.77:3000/api/demo/delete',
                method: 'get',
                data: {ids: ids},
                dataType: 'json',
                success: (res) => {
                    console.log(res)

                    if (res.data) {
                        this.$message({
                            type: 'success',
                            message: res.message
                        })

                        this.fetch()
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.message
                        })
                    }
                }
            })
        },
        fetch () {
            this.pageInfo.pageIndex = 1
            this.pageInfo.pageSize = 3

            this.search()
        },
        search () {
            $.ajax({
                url: 'http://192.168.3.77:3000/api/demo/searchList',
                method: 'get',
                data: Object.assign({}, this.pageInfo, this.searchFormData),
                dataType: 'json',
                success: (res) => {
                    console.log(res)
                    this.tableData = res.data

                    this.pageInfo.total = res.total
                }
            })
        },
        seset () {
            this.$refs.form.resetFields()

            this.fetch()
        },
        handleSizeChange (value) {
            console.log('111', value)
            this.pageInfo.pageSize = value

            this.search()
        },
        handleCurrentChange (value) {
            this.pageInfo.pageIndex = value

            this.search()
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
