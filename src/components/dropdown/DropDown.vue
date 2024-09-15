<template>
  <div class="drop-down">
    <button
      @click="dropDownHandler()"
      class="drop-down-btn"
      :class="{ active: isOpen }"
    >
      <div class="drop-down-selected">
        <!-- {{ props?.default || "Please select option" }} -->
        {{ mappingSelectedOption }}
      </div>
      <font-awesome-icon icon="chevron-up" fixed-width />
    </button>
    <transition name="slide-fade">
      <div v-if="isDropDown" class="drop-down-list-wrap">
        <div class="drop-down-list-scroll">
          <button
            v-for="(option, index) in options"
            :key="index"
            @click="toggleOption(option)"
          >
            {{ option.name || option }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";

const isDropDown = ref(false);
const isOpen = ref(false);

const dropDownHandler = () => {
  isDropDown.value = !isDropDown.value;
  isOpen.value = !isOpen.value;
};

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
console.log(props);

const selectedOption = ref(null);
const toggleOption = (option) => {
  selectedOption.value = option;
  emit("update:modelValue", option);
  isDropDown.value = false;
};

const mappingSelectedOption = computed(() => {
  return (
    selectedOption.value?.name ||
    selectedOption.value ||
    "Please select something"
  );
});
</script>

<style lang="scss" scoped>
.drop-down {
  position: relative;
  max-width: 240px;
}
.drop-down-btn {
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
.drop-down-list-wrap {
  background: #eee;
  padding: 0.25rem;
  border-radius: 0.5rem;
  margin-top: 2px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  .drop-down-list-scroll {
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
</style>
