<template>
  <table>
    <caption>
      Info Table
    </caption>
    <colgroup>
      <col style="width: 10%" />
      <col style="width: 90%" />
    </colgroup>
    <!-- <thead>
      <tr>
        <th>Attribute</th>
        <th>Value</th>
      </tr>
    </thead> -->
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

const parentSelectedOption = ref(null);
console.log(parentSelectedOption);

const options = ref([
  { name: "서울" },
  { name: "대전" },
  { name: "부산" },
  { name: "대구" },
  { name: "수원" },
  { name: "인천" },
  { name: "광주" },
  { name: "전주" },
  { name: "진주" },
  { name: "제주" },
]);
</script>

<style lang="scss" scoped>
table {
  max-width: 560px;
}
</style>
