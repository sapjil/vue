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
        <th>{{ name }}</th>
        <td>{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <form action="">
    <fieldset>
      <div class="form-div">
        <InputComp v-bind="options" />
        <button class="btn" type="button">btn</button>
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import InputComp from "@/components/Parts/InputComp.vue";

const options = {
  Type: "text",
  Name: "text_1",
  Maxlength: 20,
  Placeholder: "please insert text",
};
</script>

<style lang="scss" scoped>
.form-div {
  display: flex;
  gap: 1rem;
  input {
    flex: 1;
  }
  .btn {
    flex: 1;
  }
}
fieldset {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
