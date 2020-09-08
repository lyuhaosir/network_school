<template>
  <div>
    <el-form :inline="true" :model="formList" ref="formList" class="demo-form-inline">
      <el-form-item label="学员状态" prop="select">
        <el-select size="small" v-model="formList.select" placeholder="请选择">
          <el-option label="禁用" value="禁用"></el-option>
          <el-option label="启用" value="启用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学生名称" prop="username">
        <el-input size="small" v-model="formList.username" placeholder="请输入学生关键字"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop='phone'>
        <el-input size="small" v-model="formList.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-button-group>
        <el-button icon="el-icon-search" size="small">搜索</el-button>
        <el-button icon="el-icon-refresh" @click="resetForm('formList')" size="small">重置</el-button>
      </el-button-group>
    </el-form>

    <el-button type="primary" size="small">新增学员</el-button>
    <el-button type="primary" size="small">批量导入</el-button>
    <el-button type="primary" size="small">批量导出</el-button>
    <el-button type="primary" size="small">查看报表</el-button>

    <el-table :data="list" stripe border style="width: 100%;font-size:12px">
      <el-table-column type="selection" width="61" align="center"></el-table-column>
      <el-table-column prop="nickname" label="学生名称" width="345" align="center"></el-table-column>
      <el-table-column prop="mobile" label="手机号" width="296" align="center"></el-table-column>
      <el-table-column prop label="状态" width="246" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status | statusType }}</span>
        </template>
      </el-table-column>
      <el-table-column prop label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.created_at}}</span>
        </template>
      </el-table-column>
      <el-table-column prop label="操作" align="center">
        <template slot-scope="scope">
          <p style="color:#2D8CF0">
            <span>详情</span>-
            <span>编辑</span>-
            <span>禁用</span>-
            <span>删除</span>-
            <span>重置密码</span>
          </p>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50]"
        :page-size="limits"
        layout="total,  prev, pager, next,sizes, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import UserApi from "@/api/user";
export default {
  name: "",
  data() {
    return {
      formList: {
        select: "",
        username: "",
        phone: ""
      },
      list: [],
      currentPage: 0,
      page: 0,
      limits: 10,
      total: 0
    };
  },
  filters: {
    timeUpdated(data) {
      // console.log(data);
      let val = new Date(Number(data) * 1000);
      // console.log(val);
      let y = val.getFullYear();
      // console.log(y);
      var year = val.getFullYear(); //年
      var month =
        val.getMonth() + 1 < 10
          ? "0" + (val.getMonth() + 1)
          : val.getMonth() + 1; //月(0-29所以要+1)     如果小于10自动补零
      var day = val.getDate() < 10 ? "0" + val.getDate() : val.getDate(); //日     如果小于10自动补零
      var hours = val.getHours() < 10 ? "0" + val.getHours() : val.getHours(); //时     如果小于10自动补零
      var minutes =
        val.getMinutes() < 10 ? "0" + val.getMinutes() : val.getMinutes(); //分     如果小于10自动补零
      var seconds =
        val.getSeconds() < 10 ? "0" + val.getSeconds() : val.getSeconds(); //秒     如果小于10自动补零
      return (
        year +
        "/" +
        month +
        "/" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    statusType(type) {
      if (type == 1) {
        return "启用";
      } else if (type == 2) {
        return "禁用";
      }
    }
  },
  methods: {
    //重置表单
    resetForm(formList){
      this.$refs[formList].resetFields();
    }
    ,
    handleCurrentChange(data) {
      if (data != undefined) {
        this.page = (data - 1) * this.limits;
        this.getStudent();
      }
    },
    handleSizeChange(page) {
      if (page != undefined) {
        this.limits = page;
        // console.log(page);
        // console.log(this.limits);
        this.getStudent();
      }
    },
    //请求数据
    getStudent() {
      UserApi.getStudent(this.page, this.limits).then(res => {
        // console.log(res);
        // console.log(this.page);
        // console.log(this.limits);
        this.list = res.data;
        this.total = res.total;
      });
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // console.log(this.page);
    this.handleSizeChange(), this.handleCurrentChange(), this.getStudent();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.demo-form-inline {
  .el-form-item {
    margin-left: 12px;
    font-size: 12px !important;
  }
  .el-button {
    margin-top: 3px;
    margin-right: 10px !important;
  }
}
.el-table {
  margin-top: 10px;
}
.block {
  text-align: right;
}
</style>
