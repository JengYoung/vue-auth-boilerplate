<template>
  <button class="button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  width: 100%;
  height: 2.5rem;

  border: none;
  border-radius: 5px;

  background: $primary500;

  font-size: 0.875rem;
  font-weight: 500;
  color: white;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }
}
</style>
