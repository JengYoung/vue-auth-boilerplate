<template>
  <component :is="tag" class="text">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'default',
    },
    tag: {
      type: String,
      default: 'tag',
    },
    size: {
      type: [String, Number],
      default: '1rem',
    },
    align: {
      type: String,
      default: 'center',
    },
  },
  setup(props) {
    const textColor = computed(() => {
      if (props.type === 'error') {
        return '#fa8aa3';
      }
      if (props.type === 'success') {
        return '#3ABBFC';
      }
      return '#aaaaaa';
    });
    return {
      textColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.text {
  font-size: v-bind(size);
  color: v-bind(textColor);
  text-align: v-bind(align);
}
</style>
