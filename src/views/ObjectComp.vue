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
        <th>{{ name }}</th>
        <td colspan="3">{{ item }}</td>
      </tr>
      <tr v-for="(item, name) in options?.option" :key="name">
        <th>option-{{ name + 1 }}</th>
        <td v-for="(items, name) in options?.option[name]" :key="name">
          {{ items }}
        </td>
      </tr>
    </tbody>
  </table>

  <br />

  <div>
    <h1>Selected Option: {{ parentSelectedOption }}</h1>
    <DropDown :options="options" v-model="parentSelectedOption" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropDown from "@/components/dropdown/DropDown.vue";

const parentSelectedOption = ref(null);
const options = ref([
  { value: 1, name: "sample1", link: "http://google.com" },
  { value: 2, name: "sample2", link: "http://google.com" },
  { value: 3, name: "sample3", link: "http://google.com" },
  { value: 4, name: "sample4", link: "http://google.com" },
]);
</script>

<style lang="scss" scoped></style>
