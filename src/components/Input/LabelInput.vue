<template>
  <div class="label-input">
    <label class="label-input__label" :for="uniqueInputId">
      <span class="label-input__name">{{ name }}</span>
      <input type="text" class="label-input__input" :id="uniqueInputId">
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormContainer',
  props: {
    uniqueInputId: String,
    name: String,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>

.label-input {
  &__label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    .label-input__name {
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .label-input__input {
      height: 40px;
      margin-bottom: 1rem;

      border: none;
      border-bottom: 1px solid lightgray;

      outline: none;
      font-size: 1.125rem;

      &:focus {
        border-bottom: 1px solid #fcc6d2;
        transition: all 0.3s;
      }
    }
  }
}

</style>
