<template>
  <component :is="tag" class="text">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'tag',
    },
    size: {
      type: [String, Number],
      default: '1rem',
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.text {
  font-size: v-bind(size);
  color: red;
}
</style>
