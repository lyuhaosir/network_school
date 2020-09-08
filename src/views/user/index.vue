<template>
  <div>
    <div class="AppNavBar">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#fff"
        active-text-color="#2D8CF0"
        :router="true"
      >
        <el-menu-item index="/user/student">
          <span slot="title">学员管理</span>
        </el-menu-item>

        <el-menu-item index="/user/lecturer">
          <span slot="title">讲师管理</span>
        </el-menu-item>

        <el-menu-item index="/user/teaching">
          <span slot="title">助教管理</span>
        </el-menu-item>
      </el-menu>
    </div>

    <AppMain />
  </div>
</template>

<script>
import AppMain from "@/components/AppMain";
export default {
  components:{AppMain},
  name: "",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.el-menu-vertical-demo {
  border: 1;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  .el-menu-item {
    opacity: 1;
  }
}
</style>