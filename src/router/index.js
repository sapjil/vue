import { createRouter, createWebHashHistory } from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import HomeView from "../views/HomeView.vue";
import ApiComp from "../views/ApiComp.vue";
import ModalComp from "../views/ModalComp.vue";
import DropDownComp from "../views/DropDownComp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
  },
  {
    path: "/dropdown",
    name: "dropdown",
    component: DropDownComp,
  },
  {
    path: "/modal",
    name: "modal",
    component: ModalComp,
  },
  {
    path: "/api",
    name: "api",
    component: ApiComp,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
