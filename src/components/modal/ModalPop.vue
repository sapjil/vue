<template>
  <article
    role="dialog"
    class="modal-wrap"
    :id="name ? name : ''"
    :class="size ? size : ''"
    :aria-label="props.title"
    :aria-describedby="props.title"
  >
    <header class="modal-header">
      <h2 class="modal-title">
        <div v-if="props?.title">
          {{ props?.title ? props?.title : "NO TITLE" }}
        </div>
        <slot v-else name="header">{{
          props?.title ? props?.title : "NO TITLE"
        }}</slot>
      </h2>
      <p v-if="props?.subtit">
        {{ props?.subtit ? props?.subtit : "NO DESC" }}
      </p>
    </header>
    <main class="modal-content">
      <div v-if="props?.base" v-html="props?.base" />
      <slot v-else></slot>
    </main>
    <!-- MODAL FOOTER TYPE : CONFIRM | ALERT | NULL -->
    <footer class="modal-btns" v-if="props.type === 'confirm'">
      <button type="reset" @click="closeThisModal()">
        {{ props.cancel ? props.cancel : "CANCEL" }}
      </button>
      <button
        class="btn-primary"
        type="submit"
        autofocus
        @click="this.$emit('close', false)"
      >
        {{ props.submit ? props.submit : "OK" }}
      </button>
    </footer>

    <footer class="modal-btns" v-else-if="props.type === 'alert'">
      <button
        class="btn-primary"
        type="button"
        autofocus
        @click="this.$emit('close', false)"
      >
        {{ props.submit ? props.submit : "OK" }}
      </button>
    </footer>

    <footer class="modal-btns" v-show="false" v-else></footer>

    <button
      type="submit"
      class="modal-close"
      v-if="props.close"
      @click="closeThisModal()"
    >
      <font-awesome-icon icon="xmark" style="width: 1.5rem; height: 1.5rem" />
    </button>
  </article>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps([
  "name", // 모달애 별도 스타일 지정이 필요한 경우 ID 적용
  "title", // 모달 타이틀 : props 또는 slot 사용
  "subtit", // 모달 서브 타이틀
  "base", // 모달 본문 : props 또는 slot 사용
  "size", // 모달 사이즈 : default | small | large
  "type", // 모달 타입 : confirm | alert | null
  "cancel", // 모달 cancel 버튼 텍스트 지정시
  "submit", // 모달 submit 버튼 텍스트 지정시
  "close", // 모달 닫기 버튼
]);

// 자식 컴포넌트로부터 함수 끌어올림
const emits = defineEmits(["closeFromChild"]);

// 함수 선언식으로 사용해야 @click 이벤트를 다중으로 설정 가능
// 팝업 닫을때 오픈 버튼으로 focus 이동
function closeThisModal() {
  emits("closeFromChild", false);
  console.debug("Close Pop");
}
</script>

<style lang="scss" scoped>
.modal-wrap {
  background: #fff;
  color: #222;
  padding: 1rem;
  position: fixed;
  width: 28.75rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 0 0 3px #fff, 0 7px 14px rgba(0, 0, 0, 0.5);
  .modal-content {
    max-height: 300px;
    overflow-y: auto;
  }
  &.small {
    width: 320px;
  }
  &.big {
    width: 100%;
  }
}
.modal-header {
  display: flex;
  flex-direction: column;
  gap: calc(1rem / 2);
}
.modal-title {
  line-height: 1;
}
.modal-close {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  color: inherit;
  width: 2rem;
  height: 2rem;
  background: transparent;
}
.modal-btns {
  display: flex;
  gap: 0.5rem;
  button {
    height: 3rem;
    font-size: 1rem;
    font-weight: 700;
  }
}
.btn-primary {
  background: #222;
  color: #fff;
}
</style>
