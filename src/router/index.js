import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home/index",
  },
  {
    path: "/home/index",
    name: "home",
    component: () => import("@/views/login"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/home/detail",
    name: "home",
    component: () => import("@/views/detail"),
    meta: {
      title: "详情",
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
