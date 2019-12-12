import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";
import Video from "@/components/Video";
import Photo from "@/components/Photo";
import Upload from "@/components/Upload";
import Landing from "@/components/Landing";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/Video",
      name: "Video",
      component: Video
    },
    {
      path: "/Photo",
      name: "Photo",
      component: Photo
    },
    {
      path: "/Upload",
      name: "Upload",
      component: Upload
    },
    {
      path: "/Landing",
      name: "Landing",
      component: Landing
    }
  ]
});
