import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    address: "서울시 은평구 진관1로 21-9, 106동 302호",
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count += 1;
    },
  },
  actions: {},
  modules: {},
});
