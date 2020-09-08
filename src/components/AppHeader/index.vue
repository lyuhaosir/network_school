<template>
  <div class="AppHeader">
    <div class="left">
      <img
        src="http://120.53.31.103:84/uploads/image/2020-05-27/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg"
        alt
      />
    </div>
    <div class="center">
      <!-- <ul>
        <li><i class="el-icon-user"></i> 用户</li>
        <li><i class="el-icon-user"></i> 教学</li>
        <li><i class="el-icon-user"></i> 题库</li>
        <li><i class="el-icon-user"></i> 营销</li>
        <li><i class="el-icon-user"></i> 商品</li>
        <li><i class="el-icon-user"></i> 财务</li>
        <li><i class="el-icon-user"></i> 统计</li>
        <li><i class="el-icon-user"></i> 系统</li>
      </ul>-->
      <ul>
        <li
          @click="activeNav(i)"
          :class="activeIndex == i?'active':''"
          v-for="(item,i) in list"
          :key="i"
        >
          <i :class="item.icon" />
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="right">
      <el-dropdown trigger="click" @command="login_out">
        <span class="el-dropdown-link">
          <img src="@/assets/img/11.jpg" alt />
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu style="margin:0;padding:0" slot="dropdown">
          <div style="height:63px;clear:both;border-bottom:1px solid rgba(23,35,61,.1)">
            <div style=" float:left;width:68px;height:63px;line-height:57px;text-align:center;">
              <img
                style="width:32px;border-radius: 16px;vertical-align: middle;"
                src="@/assets/img/11.jpg"
                alt
              />
            </div>

            <div style="float:left;width:172px;height:63px;line-height:63px;">
              <span style="color:#2185F0">{{info.type}}</span>
            </div>
          </div>

          <el-dropdown-item
            style="height:48px;line-height:48px;cursor: pointer;"
            icon="el-icon-s-tools"
            command="a"
          >
            <span style="padding:0 24px ">账号设置</span>
          </el-dropdown-item>
          <el-dropdown-item
            style="height:48px;line-height:48px;cursor: pointer;"
            icon="el-icon-s-unfold"
            command="b"
          >
            <span style="padding:0 24px ">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      activeIndex: 0,
      list: [
        { name: "用户", icon: "el-icon-user" },
        { name: "教学", icon: "el-icon-user" },
        { name: "运营", icon: "el-icon-user" },
        { name: "题库", icon: "el-icon-user" },
        { name: "营销", icon: "el-icon-user" },
        { name: "商品", icon: "el-icon-user" },
        { name: "财务", icon: "el-icon-user" },
        { name: "统计", icon: "el-icon-user" },
        { name: "系统", icon: "el-icon-user" }
      ],
      goUrl: ["user", "teach"],
      info: ""
    };
  },
  methods: {
    activeNav(i) {
      // console.log(i)
      this.activeIndex = i;
      this.$router.push("/" + this.goUrl[i]);
      // console.log('/'+this.goUrl[i])
    },
    login_out(command) {
      switch (command) {
        case "a":
          this.$message.warning("账号设置未开发");

          break;

        case "b":
          localStorage.removeItem("netword_token");
          localStorage.removeItem("netword_info");
          this.$router.push("/login");

          break;

        default:
          break;
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.info = JSON.parse(localStorage.getItem("netword_info"));
    // console.log(localStorage.getItem('netword_info'));
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.$route.path);
    // document.querySelector("ul").addEventListener("click", e => {
    //   // console.log(e.target.dataset.id);
    //  :data-id="i"
    //   this.activeIndex = e.target.dataset.id;
    //   console.log(this.activeIndex)
    // });
    let str = this.$route.path
    // console.log(str);
    
    let arr = str.split('/')
    // console.log(arr);
    
    let i = this.goUrl.indexOf(arr[1])

    // console.log(i);
    this.activeIndex = i
    

  }
};
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.left {
  width: 170px;
  height: 65px;
  text-align: center;
  float: left;
  img {
    height: 40px;
    vertical-align: middle;
  }
}
.center {
  padding: 0 20px;
  float: left;
  ul {
    display: flex;
    li {
      font-size: 14px;
      margin-right: 37px;
      float: left;
      opacity: 0.69;
      cursor: pointer;
      i {
        margin-right: 7px;
      }
    }
    .active {
      color: white;
      opacity: 1;
      height: 61px;
      border-bottom: 3px skyblue solid;
    }
    li:hover {
      color: #fff;
      opacity: 1;
    }
  }
}
.right {
  float: right;
  line-height: 64px;
  .el-dropdown {
    .el-dropdown-link {
      img {
        width: 32px;
        border-radius: 16px;
        vertical-align: middle;
        margin-right: 5px;
      }
      font-size: 23px;
      color: white;
      padding: 0 13px;
    }
  }
}
</style>