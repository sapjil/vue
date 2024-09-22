<template>
  <button type="button" @click="emit('update-count', count + 10)">
    Child to Parent(emit)
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  count: Number,
});
const emit = defineEmits(["update-count"]);
console.log(props);
</script>
