<template>
  <div :class="$style.dropdown" ref="dropDown">
    <button
      @click="isDropDownVisible = true"
      :class="[{ [$style.active]: isDropDownVisible }, $style.dropdown_btn]"
    >
      <span :class="$style.dropdown_selected">
        {{ meppedSelectedOption }}
      </span>
      <font-awesome-icon icon="chevron-up" fixed-width />
    </button>
    <transition name="slide-fade">
      <div v-if="isDropDownVisible" :class="$style.list_wrap">
        <div :class="$style.list_scroll">
          <button
            :class="$style.option"
            v-for="(option, index) in props.options"
            :key="index"
            @click="toggleOptionSelect(option)"
          >
            {{ option.name || option }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {
  computed,
  defineProps,
  defineEmits,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";

const dropDown = ref(null);

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedOption = ref(false);

const isDropDownVisible = ref(false);

const meppedSelectedOption = computed(() => {
  return (
    selectedOption.value?.name ||
    selectedOption.value ||
    "Please select something"
  );
});

const toggleOptionSelect = (option) => {
  selectedOption.value = option;
  emit("update:modelValue", option);
  isDropDownVisible.value = false;
  // setTimeout(() => {
  //   isDropDownVisible.value = false;
  // }, 1000);
};

const closeDropDown = (element) => {
  if (!dropDown.value?.contains(element.target)) {
    isDropDownVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropDown);
});

onBeforeUnmount(() => {
  window.addEventListener("click", closeDropDown);
});
</script>

<style lang="scss" module>
.dropdown {
  position: relative;
  max-width: 240px;
}
.dropdown_btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  [role="img"] {
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;
  }
  &.active {
    transition: all 0.3s;
    [role="img"] {
      transform: rotate(0deg);
    }
  }
}
.list_wrap {
  position: absolute;
  width: 100%;
  background: #eee;
  padding: 0.25rem;
  border-radius: 0.5rem;
  margin-top: 2px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
  .list_scroll {
    max-height: 150px;
    overflow: auto;
    padding: 0.5rem;
    &::-webkit-scrollbar {
      width: 0.25rem;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 0.25rem;
    }
  }
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
li {
}
.option {
  width: 100%;
  justify-content: flex-start;
}
</style>
