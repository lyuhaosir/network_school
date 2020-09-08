<template>
  <div class="layout">
    <app-header></app-header>
    <!-- <AppBox /> -->
    <!-- <app-nav-bar></app-nav-bar> -->
    <router-view></router-view>
    <!-- <app-main></app-main> -->
  </div>
</template>

<script>
import AppHeader from './AppHeader'
export default {
name:"",
components:{AppHeader},
data() {
return {

}
},
methods:{

},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style>
/* @import url(); 引入css类 */
.AppHeader{
  height: 65px;
  color: white;
  line-height: 65px;
  background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
  position: absolute;
  top:0;
  left: 0;
  right: 0;
}
.AppNavBar{
  width: 170px;
  position: absolute;
  top: 65px;
  bottom: 0;
  /* height: 100%; */
  left: 0;
  /* background: blueviolet; */
  border-right:red
}
.AppMain{
  position: absolute;
  left: 170px;
  right: 0;
  top: 65px;
  bottom: 0;
  /* background: rebeccapurple */
}
</style>