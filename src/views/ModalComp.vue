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
        <td>{{ item || "-" }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <ul>
    <li>Modal은 props보다 slot을 사용하는 것이 좀더 대응의 폭이 넓다.</li>
    <li>
      단순한 System Alert이라면 props가, 넓은 대응폭이 필요한 경우는 slot이
      유용할 것 같다.
    </li>
    <li>props: profile card, carousels, tables ...</li>
    <li>slots: modals, cards, toast notifcations ...</li>
    <li>defineProps</li>
    <li>defineEmits</li>
  </ul>

  <br />

  <button ref="openModalHandler" @click="openModal('modal1')">
    modal open
  </button>

  <br />

  <Teleport to="#modal">
    <ModalPop
      id="modal1"
      :show="isModal"
      v-bind="modalData"
      @close-from-child="handleEvent"
      @close="changePopState(id)"
    />
  </Teleport>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ModalPop from "@/components/Parts/ModalPop.vue";

onMounted(() => {
  console.debug(document.querySelectorAll(".modal-wrap"));
});

// MODAL 1
const isModal = ref(false);

const openModal = () => {
  isModal.value = true;
  document.documentElement.style.overflow = "hidden";
};

const changePopState = () => {
  isModal.value = !isModal.value;
  document.documentElement.style.overflow = "hidden";
};

const handleEvent = (data) => {
  changePopState(data);
  document.documentElement.style.overflow = "auto";
};

const modalData = {
  name: "test-modal",
  type: "confirm",
  size: "small",
  title: "modal box",
  subtit: "sub title",
  base: "Lorem <b>ipsum</b> dolor sit amet<br /> <span style='color:red'>consectetur</span> adipisicing elit.",
  cancel: "취소",
  submit: "확인",
  footer: true,
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
  // z-index: 1;
}
</style>
