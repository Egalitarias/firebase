import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Post from "./views/Post";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "", component: Landing },
    { path: "/", component: Landing },
    { path: "/profile", component: Profile },
    { path: "/post", component: Post }
  ]
});
