<template>
  <div class="form-div">
    <label for="username"><b>INFO</b></label>
    <input type="text" name="" id="username" v-model="username" />
    <button type="submit" @click="submitForm">submit</button>
  </div>
  <div style="padding: 1rem 0">{{ dadada }}</div>

  <br />

  <div class="form-div">
    <label for="check01"><b>INFO</b></label>
    <div class="input-wrap">
      <font-awesome-icon icon="square-check" fixed-width size="lg" />
      <input type="checkbox" name="" id="check01" v-model="checkbox" />
    </div>
  </div>

  <br />

  <span class="icon icon-solid icon-xmark"></span> Login

  <br />

  <div class="form-div">
    <label for="check02"><b>INFO</b></label>
    <input type="radio" name="radiogroup" id="check02" v-model="radio" />
    <input type="radio" name="radiogroup" id="check03" v-model="radio" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const checkbox = ref("");
const radio = ref("");
const dadada = ref("");

const submitForm = () => {
  console.log(username.value);
  dadada.value = username.value;
  username.value = "";
};
</script>

<style lang="scss" scoped>
.form-div {
  max-width: $mobile;
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
.input-wrap {
  position: relative;
  input {
    position: absolute;
    left: 0;
    opacity: 0;
  }
}
input {
  appearance: none;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  flex: 1;
  &[type="text"] {
    width: 100%;
  }
  &[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    flex: 0 0 auto;
    padding: 0;
    border-radius: 0.25rem;
    &:checked {
      background: #ccc;
    }
  }
  &[type="radio"] {
    width: 1rem;
    height: 1rem;
    flex: 0 0 auto;
    border-radius: 10rem;
    padding: 0;
    &:checked {
      background: #ccc;
    }
  }
}
</style>
