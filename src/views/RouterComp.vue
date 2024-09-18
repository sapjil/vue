<template>
  <h2>Router Sample</h2>
  <router-link class="menu" to="/nestrouter/profile">profile</router-link>
  <router-link class="menu" to="/nestrouter/info">info</router-link>
  <div class="inner-router">
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.inner-router {
  border: 1px solid green;
  padding: 1rem;
}
</style>
