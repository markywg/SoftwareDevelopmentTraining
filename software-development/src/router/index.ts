import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Error from "../views/Error.vue"
import QueryStu from "../views/admin/QueryStu.vue"
import QueryHp from "../views/admin/QueryHp.vue"
import Login from "../views/Login.vue"
import ManageStu from "../views/admin/ManageStu.vue"
import ManageHp from "../views/admin/ManageHp.vue"
import Admin from "../views/Admin.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [      
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
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
