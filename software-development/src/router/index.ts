import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [      
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'adminHome',
    component: () => import('@/views/Admin.vue'),
    meta: '系统管理员首页',
    children: [
      {
        path: '/admin/queryhp',
        name: 'queryHp',
        component: () => import('@/views/admin/QueryHp.vue'),
        meta: '查询宿管信息'
      },
      {
        path: '/admin/querystu',
        name: 'queryStu',
        component: () => import('@/views/admin/QueryStu.vue'),
        meta: '查询学生信息'
      },
      {
        path: '/admin/managehp',
        name: 'manageHp',
        component: () => import('@/views/admin/ManageHp.vue'),
        meta: '管理宿管信息'
      },
      {
        path: '/admin/managestu',
        name: 'manageStu',
        component: () => import('@/views/admin/ManageStu.vue'),
        meta: '管理学生信息'
      }
    ]
  },
  {
    path: '/hphome',
    name: 'hpHome',
    component: () => import('@/views/Houseparent.vue'),
    meta: '宿管首页',
    children: [
      {
        path: '/hp/queryself',
        name: 'hpQuerySelf',
        component: () => import('@/views/hp/query/HpQuerySelf.vue'),
        meta: '查询个人信息'
      },
      {
        path: '/hp/querystu',
        name: 'hpQueryStu',
        component: () => import('@/views/hp/query/HpQueryStu.vue'),
        meta: '查询学生信息'
      },
      {
        path: '/hp/querynews',
        name: 'hpQueryStu',
        component: () => import('@/views/hp/query/HpQueryNews.vue'),
        meta: '查看公告'
      },  
      {
        path: '/hp/managein',
        name: 'queryAtd',
        component: () => import('@/views/hp/manage/ManageCheckIn.vue'),
        meta: '处理入住申请'
      },
      {
        path: '/hp/manageout',
        name: 'queryAtd',
        component: () => import('@/views/hp/manage/ManageLeave.vue'),
        meta: '处理离校申请'
      },
      {
        path: '/hp/managerepairs',
        name: 'queryAtd',
        component: () => import('@/views/hp/manage/ManageRepairs.vue'),
        meta: '处理报修申请'
      },
      {
        path: '/hp/manageatd',
        name: 'manageAtd',
        component: () => import('@/views/hp/manage/ManageAtd.vue'),
        meta: '考勤'
      },
      {
        path: '/hp/postnews',
        name: 'queryAtd',
        component: () => import('@/views/hp/manage/PostNews.vue'),
        meta: '发布公告'
      }
    ]
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/Error.vue')
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
