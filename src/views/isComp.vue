<template>
  <div>
    <div class="btn-group">
      <button
        @click="current = tab"
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['btn', { active: current === tab }]"
      >
        toggle
      </button>
    </div>
    <div class="is-wrap">
      <component :is="tabs[current]"></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import CompOne from "@/components/isParts/CompOne.vue";
import CompTwo from "@/components/isParts/CompTwo.vue";

const current = ref("CompOne");

const tabs = {
  CompOne,
  CompTwo,
};
</script>

<style lang="scss" scoped>
.btn-group {
  display: flex;
  padding-bottom: 1rem;
  gap: 0.5rem;
  button {
    flex: 0 0 auto;
  }
}
.is-wrap {
  border: 1px solid sandybrown;
  padding: 1rem;
}
</style>
