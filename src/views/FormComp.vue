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
      <tr v-for="(item, name) in inputOptions" :key="name">
        <th>{{ name }}</th>
        <td>{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <div class="form-div">
    <label for="username">id:</label>
    <input type="text" name="" id="username" v-model="username" />
    <button type="submit" @:click="submitForm">submit</button>
  </div>
  <div style="padding: 1rem 0">{{ dadada }}</div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const dadada = ref("");

const submitForm = () => {
  console.log(username.value);
  dadada.value = username.value;
  username.value = "";
};
</script>

<style lang="scss" scoped>
.form-div {
  display: flex;
  gap: 1rem;
  .btn {
    flex: 1;
    display: grid;
  }
}
fieldset {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
label {
  align-self: center;
}
input {
  appearance: none;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  flex: 1;
}
</style>
