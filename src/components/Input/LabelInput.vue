<template>
  <div class="label-input">
    <label class="label-input__label" :for="uniqueInputId">
      <span class="label-input__name">{{ name }}</span>
      <input
        :type="type"
        class="label-input__input"
        :id="uniqueInputId"
        :placeholder="placeholder"
        @input="(e) => updateModelValue(e)"
      >
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormContainer',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    uniqueInputId: String,
    name: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const updateModelValue = (e: Event) => {
      if (!e.target) return;
      emit('update:modelValue', (e.target as HTMLInputElement).value);
    };

    return {
      updateModelValue,
    };
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
