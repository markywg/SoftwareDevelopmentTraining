import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Error from "../views/Error.vue"
import Home from "../views/Home.vue"
import QueryStu from "../views/QueryStu.vue"
import QueryHp from "../views/QueryHp.vue"
import Login from "../views/Login.vue"
import ManageStu from "../views/ManageStu.vue"
import ManageHp from "../views/ManageHp.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [      
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/querystu',
    name: 'querystu',
    component: QueryStu
  },
  {
    path: '/queryhp',
    name: 'queryhp',
    component: QueryHp
  },
  {
    path: '/managestu',
    name: 'managestu',
    component: ManageStu
  },
  {
    path: '/managehp',
    name: 'managehp',
    component: ManageHp
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  },
  {
    path: '*',
    redirect: '/error'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
