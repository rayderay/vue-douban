import Vue from "vue";
import Router from "vue-router";

import PageView from "../views/PageView";
import HomeView from "../views/HomeView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/pages/"
    },
    {
      path: "/pages",
      component: PageView,
      children: [
        {
          path: "/",
          redirect: "/pages/home"
        },
        {
          path: "home",
          name: "HomeView",
          component: HomeView
        }
      ]
    }
  ]
});
