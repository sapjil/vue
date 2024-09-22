<template>
  <h2>Router Sample</h2>
  <div class="link-wrap">
    <router-link class="menu" to="/profile">nest router 1</router-link>
    <router-link class="menu" to="/info">nest router 2</router-link>
  </div>
  <div class="inner-router">
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.inner-router {
  border: 1px solid green;
  padding: 1rem;
}
.link-wrap {
  padding: 1rem 0;
}
</style>
