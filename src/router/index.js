import { createRouter, createWebHashHistory } from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import HomeView from "../views/HomeView.vue";
import ApiComp from "../views/ApiComp.vue";
import ModalComp from "../views/ModalComp.vue";
import DropDownComp from "../views/DropDownComp.vue";
import InputComp from "../views/InputComp.vue";
import Carousel from "../views/CarouselComp.vue";
import RouterComp from "../views/RouterComp.vue";
import RouterSample1Comp from "../views/RouterSample1Comp.vue";
import RouterSample2Comp from "../views/RouterSample2Comp.vue";
import BookList from "../views/BookList.vue";
import BookDetail from "@/components/Book/BookDetail.vue";
import NotFound from "../views/NotFound.vue";
import DataBind from "../views/DataBind.vue";

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
    path: "/router",
    component: RouterComp,
    children: [
      {
        path: "/profile",
        name: "profile",
        component: RouterSample1Comp,
      },
      { path: "/info", name: "info", component: RouterSample2Comp },
    ],
  },
  {
    path: "/carousel",
    name: "carousel",
    component: Carousel,
  },
  {
    path: "/databind",
    name: "databind",
    component: DataBind,
  },
  {
    path: "/book",
    name: "BookList",
    component: BookList,
  },
  {
    path: "/book/:id",
    name: "book",
    component: BookDetail,
    props: (route) => ({
      id: route.params.id,
      title: route.params.title,
      content: route.params.content,
    }),
  },
  {
    path: "/:notFound(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
