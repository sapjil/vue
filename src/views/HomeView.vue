<template>
  <div>
    <ul>
      <li><router-link class="menu" to="/book">BookList</router-link></li>
      <li><router-link class="menu" to="/dashboard">dashboard</router-link></li>
      <li><router-link class="menu" to="/dropdown">dropdown</router-link></li>
      <li><router-link class="menu" to="/modal">modal</router-link></li>
      <li><router-link class="menu" to="/api">api</router-link></li>
      <li><router-link class="menu" to="/input">input</router-link></li>
      <li><router-link class="menu" to="/carousel">carousel</router-link></li>
      <li><router-link class="menu" to="/router">router</router-link></li>
      <li><router-link class="menu" to="/tooltip">tooltip</router-link></li>
      <li>
        <router-link class="menu" to="/isprops">isprops(tab)</router-link>
      </li>
      <li><router-link class="menu" to="/databind">databind</router-link></li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss">
.text {
  color: v-bind(color);
}
.menu {
  padding: 0 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  &:hover {
    background: coral;
  }
}
</style>
