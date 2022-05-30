<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormContainer',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;

  max-width: 500px;
  width: 100%;

  padding: 50px;

  border: 1px solid lightgray;
  border-radius: 20px;

  box-sizing: border-box;
}
</style>
