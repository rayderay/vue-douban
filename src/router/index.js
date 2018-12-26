import Vue from "vue";
import Router from "vue-router";

import PageView from "../views/PageView";
import HomeView from "../views/HomeView";
import MovieView from "../views/MovieView";
import BookView from "../views/BookView";
import BroadcastView from "../views/BroadcastView";

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
        },
        { path: "movie", name: "MovieView", component: MovieView },
        { path: "book", name: "BookView", component: BookView },
        { path: "broadcast", name: "BroadcastView", component: BroadcastView }
      ]
    }
  ]
});
