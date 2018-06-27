/**
 * File name: router/index.js
 * Description: Vue-router index file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

import Vue from "vue";
import Router from "vue-router";
// 引入routers配置
import {
  navConfig,
  otherConfig
} from "@/config/navConfig"

Vue.use(Router);

// 生成路由
const routes = [];
getRoutes(routes, navConfig, "");
// 生成其他配置项的路由
getRoutes(routes, otherConfig, "");
// 添加404重定向
routes.push({
  path: "*",
  redirect: "/404"
});

/**
 * 递归获取router数组
 * @param {*} routes
 * @param {*} navItems
 * @param {*} previous
 */
function getRoutes(routes, navItems, previous) {
  if (navItems.length === 0) {
    return;
  }
  navItems.map((item) => {
    const path = previous + "/" + item.path;
    if (Array.isArray(item.content)) {
      getRoutes(routes, item.content, path);
    } else {
      routes.push({
        path: path,
        name: item.name,
        component: item.content
      });
    }
  });
}

export default new Router({
  mode: "history",
  routes: routes
});