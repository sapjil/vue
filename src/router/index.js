import { createRouter, createWebHashHistory } from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import HomeView from "../views/HomeView.vue";
import ApiComp from "../views/ApiComp.vue";
import ModalComp from "../views/ModalComp.vue";
import DropDownComp from "../views/DropDownComp.vue";
import InputComp from "../views/InputComp.vue";
import Carousel from "../views/CarouselComp.vue";

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
  {
    path: "/input",
    name: "input",
    component: InputComp,
  },
  {
    path: "/carousel",
    name: "carousel",
    component: Carousel,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
