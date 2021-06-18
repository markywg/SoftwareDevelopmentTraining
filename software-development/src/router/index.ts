import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import select from "@/components/Select.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: select
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
