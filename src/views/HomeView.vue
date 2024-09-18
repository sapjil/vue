<template>
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
</style>
