<template>
  <nav>
    <router-link class="menu" to="/">home</router-link>
  </nav>
  <div class="box router-box">
    <router-view />
  </div>
</template>

<script setup>
// import router from "./router";
// console.log(router);
</script>

<style lang="scss">
.box {
  margin: 1rem 0;
}
.router-box {
  border: 1px solid orchid;
  padding: 1rem;
}
</style>
