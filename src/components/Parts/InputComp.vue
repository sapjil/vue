<template>
  <input
    :type="props?.Type"
    :name="props?.Name"
    :maxlength="props?.Maxlength"
    :placeholder="props?.Placeholder"
    :class="$style.input"
  />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  Type: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Placeholder: {
    type: String,
  },
  Maxlength: {
    type: [Number, null],
    required: true,
    default: 10,
  },
});
</script>

<style lang="scss" module>
.input {
  appearance: none;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
}
</style>
