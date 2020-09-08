import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//element-ui引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//引入全局样式
import './assets/reset/normalize.css'

//页面校验
import './permission'

Vue.config.productionTip = process.env.NODE_ENV == "production"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
