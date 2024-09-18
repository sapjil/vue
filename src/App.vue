<template>
  <nav>
    <router-link class="menu" to="/">home</router-link>
    <router-link class="menu" to="/dashboard">dashboard</router-link>
    <router-link class="menu" to="/dropdown">dropdown</router-link>
    <router-link class="menu" to="/modal">modal</router-link>
    <router-link class="menu" to="/api">api</router-link>
    <router-link class="menu" to="/input">input</router-link>
    <router-link class="menu" to="/carousel">carousel</router-link>
    <router-link class="menu" to="/nestrouter">nestrouter</router-link>
  </nav>
  <div class="box router-box">
    <router-view />
  </div>
</template>

<script setup>
import router from "./router";
console.log(router);
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
.router-box {
  border: 1px solid orchid;
  padding: 1rem;
}
</style>
