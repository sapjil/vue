<template>
  <dialog
    class="modal-wrap"
    :id="name ? name : ''"
    :class="size ? size : ''"
    :aria-label="props?.title"
    :aria-describedby="props?.title"
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
        {{ props?.subtit ? props?.subtit : "NO DESCRIPTION" }}
      </p>
    </header>

    <main class="modal-content">
      <div v-if="props?.base" v-html="props?.base" />
      <slot v-else></slot>
    </main>

    <footer class="modal-btns" v-if="props?.type === 'confirm'">
      <button type="reset" @click="closeThisModal()">
        {{ props?.cancel ? props?.cancel : "CANCEL" }}
      </button>
      <button
        class="btn-primary"
        type="submit"
        autofocus
        @click="this.$emit('close', false)"
      >
        {{ props?.submit ? props?.submit : "OK" }}
      </button>
    </footer>

    <footer class="modal-btns" v-else-if="props?.type === 'alert'">
      <button
        class="btn-primary"
        type="button"
        autofocus
        @click="this.$emit('close', false)"
      >
        {{ props?.submit ? props?.submit : "OK" }}
      </button>
    </footer>

    <footer class="modal-btns" v-show="false" v-else></footer>

    <button
      type="submit"
      class="modal-close"
      v-if="props?.close"
      @click="closeThisModal()"
    >
      <fa icon="xmark" style="width: 1.5rem; height: 1.5rem" />
    </button>
  </dialog>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  // 모달에 고유 ID 적용
  name: {
    type: String,
    required: true,
  },
  // 모달 타이틀 : props 또는 slot 사용
  title: {
    type: String,
    required: true,
  },
  // 모달 서브 타이틀
  subtit: {
    type: String,
    required: false,
  },
  // 모달 본문 : props 또는 slot 사용
  base: {
    type: String,
    required: true,
  },
  // 모달 사이즈 : default(null) | small | large
  size: {
    type: [String, null],
    validator(value) {
      return ["small", "large", "default", null].includes(value);
    },
    required: true,
  },
  // 모달 타입 : confirm | alert | null
  type: {
    type: String,
    validator(value) {
      return ["confirm", "alert", null].includes(value);
    },
    required: true,
  },
  // 모달 cancel 버튼 텍스트 지정시
  cancel: {
    type: String,
    required: false,
  },
  // 모달 submit 버튼 텍스트 지정시
  submit: {
    type: String,
    required: false,
  },
  // 모달 닫기 버튼
  close: {
    type: [Boolean, null],
    required: true,
  },
});

// 자식 컴포넌트로부터 함수 끌어올림
const emits = defineEmits(["closeFromChild"]);

// 함수 선언식으로 사용해야 @click 이벤트를 다중으로 설정 가능
// 팝업 닫을때 오픈 버튼으로 focus 이동
const closeThisModal = () => {
  emits("closeFromChild");
  console.debug("Close Pop");
};
</script>

<style lang="scss" scoped>
dialog {
  box-shadow: 0px 20px 36px 0px rgba(0, 0, 0, 0.6);
  &::backdrop {
    backdrop-filter: blur(8px);
  }
}
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
  // box-shadow: 0 0 0 3px #fff, 0 7px 14px rgba(0, 0, 0, 0.5);
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
