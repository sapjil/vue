import { createRouter, createWebHashHistory } from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ModalComp from "../views/ModalComp.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashBoard,
  },
  {
    path: "/modal",
    name: "modal",
    component: ModalComp,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
