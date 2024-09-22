<template>
  <div>
    <div style="width: 300px; display: flex">
      <DataBindChild :count="count" @update-count="updateCount" />
      <button type="button" @click="reset">Parent to Child(props)</button>
    </div>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataBindChild from "./DataBindChild.vue";

const count = ref(0);

const updateCount = (newCount) => {
  count.value = newCount;
};

const reset = () => {
  count.value = 0;
};
</script>

<style lang="scss" scoped></style>
