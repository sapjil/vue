<template>
  <table>
    <colgroup>
      <col style="width: 25%" />
      <col style="width: 5%" />
      <col style="width: 20%" />
      <col style="width: 50%" />
    </colgroup>
    <thead>
      <tr>
        <th>Attribute</th>
        <th colspan="3">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, name) in options" :key="name">
        <th>{{ name + 1 }}</th>
        <td colspan="3">{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <div>
    <h2>Selected Option: {{ parentSelectedOption }}</h2>
    <DropDown :options="options" v-model="parentSelectedOption" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropDown from "@/components/dropdown/DropDown.vue";

const parentSelectedOption = ref(null);

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
