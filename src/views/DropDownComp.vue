<template>
  <table>
    <caption>
      Info Table
    </caption>
    <colgroup>
      <col style="width: 10%" />
      <col style="width: 90%" />
    </colgroup>
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, name) in options" :key="name">
        <th>{{ name + 1 }}</th>
        <td>{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <ul>
    <li>computed</li>
    <li>defineProps</li>
    <li>defineEmits</li>
    <li>onBeforeUnmount</li>
    <li>onMounted</li>
    <li>ref</li>
    <li>scss: module</li>
  </ul>

  <br />

  <div>
    <h2>Selected Option: {{ parentSelectedOption }}</h2>
    <DropDown :options="options" v-model="parentSelectedOption" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropDown from "@/components/dropdown/DropDown.vue";

const parentSelectedOption = ref(false);
console.log("sss: ", parentSelectedOption.value.name);

const options = ref([
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
  { name: "sample" },
]);
</script>

<style lang="scss" scoped></style>
