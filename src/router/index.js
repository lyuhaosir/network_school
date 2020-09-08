import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login";
import layout from "@/components/layout.vue"

import user from './user'

import teach from './teach'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:'/',
    name:'layout',
    component:layout,
    redirect:'/user',
    children:[
      ...user,
      ...teach
    ]
  }
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  routes
});

export default router;
