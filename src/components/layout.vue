<template>
  <div class="layout">
      <el-button type="primary" @click="login_out()">退出登录</el-button>
  </div>
</template>

<script>
export default {
name:"",
data() {
return {

}
},
methods:{
  login_out(){
    localStorage.removeItem('netword_token')
    localStorage.removeItem('netword_info')
    this.$router.push('/login')
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>