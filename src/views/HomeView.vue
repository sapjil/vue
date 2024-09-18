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
    </ul>
  </div>
  <p class="text">{{ count }}</p>
  <button @click="count++">count</button>
  <button @click="childFunc" ref="btn">childFunc</button>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const color = ref("red");

const childFunc = () => {
  console.log("부모에서 자식으로 이벤트");
};
</script>

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
