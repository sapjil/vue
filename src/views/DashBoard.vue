<template>
  <div class="wrap">
    <header class="header">header</header>
    <div class="main-container">
      <nav class="lnb">nav</nav>
      <main class="main">
        <h2 class="main-title">main</h2>
        <GridLayout />
        <footer class="footer">footer</footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import GridLayout from "./GridLayout.vue";
</script>

<style lang="scss" scoped>
.home {
  display: block;
  padding: 1rem;
}
.wrap {
  display: flex;
  flex-direction: column;
}
.header {
  background: #ccc;
  padding: 1rem;
}
.main-container {
  display: flex;
  position: relative;
}
.lnb {
  width: 10rem;
  padding: 1rem;
  background: #ddd;
}
.main {
  background: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 20rem);
}
.main-title {
  padding: 1rem;
}
.footer {
  background: #ccc;
  padding: 1rem;
}
</style>
