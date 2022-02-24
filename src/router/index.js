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
      title: "人海茫茫",
    },
  },
  {
    path: "/home/search",
    name: "search",
    component: () => import("@/views/search"),
    meta: {
      title: "搜索",
    },
  },
  {
    path: "/home/detail",
    name: "detail",
    component: () => import("@/views/detail"),
    meta: {
      title: "后来遇见她",
    },
  },
  {
    path: "/home/openVip",
    name: "openVip",
    component: () => import("@/views/openVip"),
    meta: {
      title: "后来遇见她",
    },
  },
  {
    path: "/home/mine",
    name: "mine",
    component: () => import("@/views/mine"),
    meta: {
      title: "我的",
    },
  },
  {
    path: "/home/collection",
    name: "mine",
    component: () => import("@/views/collection"),
    meta: {
      title: "我的收藏",
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
