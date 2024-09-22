<template>
  <div class="form-div">
    <div style="width: 360px; display: flex" ref="btnGroup">
      <button
        type="button"
        :class="{ active: isSelected === 'AAA' }"
        @click="btnHandler('AAA')"
      >
        AAA
      </button>
      <button
        type="button"
        :class="{ active: isSelected === 'BBB' }"
        @click="btnHandler('BBB')"
      >
        BBB
      </button>
      <button
        type="button"
        :class="{ active: isSelected === 'CCC' }"
        @click="btnHandler('CCC')"
      >
        CCC
      </button>
    </div>
  </div>
  <div style="" v-if="answerBox">
    <p style="padding: 1rem 0; flex: 1 0 auto">
      {{ message || "Not Selected" }}
    </p>
    <button type="button" class="btn close" @click="closeAnswer">
      <font-awesome-icon icon="xmark" />
    </button>
  </div>

  <br />

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

  <br />
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const checkbox = ref("");
const radio = ref("");
const dadada = ref("");
const isSelected = ref(true);
const btnGroup = ref("");
const message = ref("");
const answerBox = ref(false);

const submitForm = () => {
  console.log(username.value);
  dadada.value = username.value;
  username.value = "";
};

const closeAnswer = () => {
  answerBox.value = false;
};

const btnHandler = (item) => {
  answerBox.value = true;
  switch (item) {
    case "AAA":
      isSelected.value = item;
      message.value = "AAA";
      break;
    case "BBB":
      isSelected.value = item;
      message.value = "BBB";
      break;
    case "CCC":
      isSelected.value = item;
      message.value = "CCC";
      break;
  }
};
</script>

<style lang="scss" scoped>
button {
  &.active {
    background: #444;
    color: #eee;
  }
}
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
