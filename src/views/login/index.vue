<template>
  <div class="login_container">
    <div class="login_form">
      <img
        src="http://120.53.31.103:84/uploads/image/2020-05-27/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg"
        alt
      />
      <p>欢迎使用后台管理系统</p>
      <el-form ref="ruleForm" :rules="rules" :model="ruleForm">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" placeholder="请输入账号" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApi from "../../api/test";
export default {
  name: "",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          loginApi
            .userLogin(this.ruleForm.username, this.ruleForm.password)
            .then(res => {
              // console.log(res);
              if(res.data.code==200){
                // console.log(res)
                const req = res.data.data

                const name = req.username;
                const pass = req.password;
                if(this.ruleForm.username == name && this.ruleForm.password == pass ){
                  
                  // console.log(res.data.data.token)
                  localStorage.setItem('netword_token',res.data.data.token)

                  loginApi.userInfo().then(res=>{
                    if(res.data.code==200){
                      console.log(res.data.data)
                      localStorage.setItem('netword_info',res.data.data)
                      this.$router.push('/')
                    }else{
                      this.$message.warning('登录失败')
                    }

                  })
                }else{
                  console.log(2)
                  this.$message.warning('账号或密码错误，请重新输入')
                }

              }else{
                this.$message.warning('登录失败')
              }
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // console.log(this.$refs[formName])
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.login_container {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background: url(http://120.53.31.103:84/adminstyle/img/login_bg.1de8de0c.png);
  background-size: 100% 100%;
  padding-top: 50px;
  box-sizing: border-box;
  .login_form {
    width: 368px;
    margin: 0 auto;
    text-align: center;
    img {
      align-items: center;
      width: 220px;
    }
    p {
      margin-bottom: 20px;
      font-size: 20px;
      color: #2d8cf0;
    }
  }
}
</style>
