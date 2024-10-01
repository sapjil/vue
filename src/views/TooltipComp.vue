<template>
  <div>
    <p>vue에서 onMounted 전에는 dom에 접근할 수 없다.</p>
    <div
      class="tooltip"
      ref="tooltipRef"
      @mouseover="tooltip"
      @mouseleave="tooltipLeave"
    >
      {{ message }}
      <div class="inwrap" ref="innerbox" v-show="show">
        {{ tooltiparea }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";

const tooltipRef = ref(null);
const tooltiparea = ref(null);
const innerbox = ref(null);
const show = ref(false);
const message = ref("tooltip");

onMounted(() => {
  tooltipRef.value;
  innerbox.value;
  // console.log("onMounted: ", tooltipRef.value);
  // console.log("onMounted: ", tooltipRef.value.clientHeight);
});

onUpdated(() => {
  // console.log("onUpdated: ", (tooltipRef.value = message.value));
  tooltipRef.value = message.value;
  tooltiparea.value = "tooltiparea sample message";
});

onUnmounted(() => {
  console.log("onUnmounted");
});

const tooltip = () => {
  tooltiparea.value = "tooltip 1";
  show.value = true;

  innerbox.value.style.top = tooltipRef.value.clientHeight + 5 + "px";
  innerbox.value.style.left = tooltipRef.value.clientWidth / 3 + "px";
};

const tooltipLeave = () => {
  tooltiparea.value = null;
  show.value = false;

  innerbox.value.style.top = tooltipRef.value.clientHeight;
  innerbox.value.style.left = tooltipRef.value.clientWidth;
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid salmon;
  display: inline-block;
  .inwrap {
    position: absolute;
    background: #000;
    color: bisque;
    border-radius: 0.5rem;
    padding: 1rem;
    left: 0;
    top: 0;
    display: block;
    min-width: 200px;
  }
}
</style>
