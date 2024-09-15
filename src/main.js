import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import mixins from "./mixins";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faWindowRestore,
  faChevronUp,
  faSquareCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faXmark,
  faWindowRestore,
  faChevronUp,
  faSquareCheck,
  faCircleCheck
);

import "@/assets/style.scss";

createApp(App)
  .use(store)
  .use(router)
  .mixin(mixins)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
