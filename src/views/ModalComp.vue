<template>
  <table>
    <caption>
      Info Table
    </caption>
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in modalData" :key="idx">
        <th>{{ idx }}</th>
        <td>{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <ul>
    <li>defineProps</li>
    <li>defineEmits</li>
  </ul>

  <br />

  <button ref="openModalHandler" @click="changePopState()">
    modal open
    <font-awesome-icon
      icon="window-restore"
      fixed-width
      style="width: 1rem; height: 1rem"
    />
  </button>
  <br />

  <Teleport to="#modal">
    <transition name="slide-fade" mode="out-in">
      <ModalPop
        v-if="isModal"
        v-bind="modalData"
        @close-from-child="handleEvent"
        @close="changePopState()"
      />
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import ModalPop from "@/components/modal/ModalPop.vue";

const isModal = ref(false);
const openModalHandler = ref("");

const changePopState = () => {
  console.debug("Open Modal");
  isModal.value = !isModal.value;
};

const handleEvent = (data) => {
  console.debug("Handle Event", data);
  changePopState();
  openModalHandler.value.focus();
};

const modalData = {
  name: "test-modal",
  type: "confirm",
  size: "large",
  title: "modal box",
  subtit: "sub title",
  base: "Lorem <b>ipsum</b> dolor sit amet<br /> <span style='color:red'>consectetur</span> adipisicing elit.",
  cancel: "취소",
  submit: "확인",
  close: true,
};
</script>

<style lang="scss" scoped>
.modal-back {
  display: none;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
