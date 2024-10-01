<template>
  <div>
    <div
      class="tooltip"
      ref="tooltipRef"
      @mouseover="tooltip"
      @mouseleave="tooltipLeave"
    >
      tooltip
      <div class="inwrap" v-if="show">
        {{ tooltiparea }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tooltipRef = ref(null);
const tooltiparea = ref(null);
const show = ref(false);

console.log(tooltipRef.value);

const tooltip = () => {
  tooltiparea.value = "tooltip 1";
  show.value = true;
};

const tooltipLeave = () => {
  tooltiparea.value = null;
  show.value = false;
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  .inwrap {
    position: absolute;
    background: #000;
    color: bisque;
    border-radius: 0.5rem;
    padding: 1rem;
    left: 0;
    top: 1rem;
  }
}
</style>
