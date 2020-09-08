<template>
  <el-breadcrumb separator="/" class="line">
    <el-breadcrumb-item class="lineText" :to="{ path: $route.path }">
      <span>
        {{
        $route.meta.title
        }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
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
.line {
  width: 100%;
  height: 32px;
  line-height: 32px;
  padding: 0px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.lineText {
  span {
    color: #515a6e;
    font-weight: bolder;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
