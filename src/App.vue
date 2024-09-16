<template>
  <nav>
    <router-link
      class="menu"
      v-for="item in routeslist"
      :key="item"
      :to="item.path"
      >{{ item.name }}</router-link
    >
  </nav>
  <div class="box">
    <router-view />
  </div>
</template>

<script setup>
import router from "./router";
const routeslist = router.options.routes;
</script>

<style lang="scss">
.box {
  margin: 1rem 0;
}
.menu {
  padding: 0 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  &:hover {
    border-top: 2px solid orange;
  }
}
</style>
