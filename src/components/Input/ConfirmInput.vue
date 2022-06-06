<template>
  <div class="confirm-input-box">
    <LabelInput
      class="confirm-input-box__input"
      :type="type"
      :modelValue="modelValue"
      :uniqueInputId="uniqueInputId"
      :name="name"
      :placeholder="placeholder"
      @update:modelValue="updateInputValue"
    />

    <div
      v-if="isLoading"
      class="confirm-input-box__loading"
    >
      로딩 중...
    </div>
    <button
      v-else
      class="confirm-input-box__button"
      @click="onSubmit"
      :disabled="disabled"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LabelInput from './LabelInput.vue';

export default defineComponent({
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
    buttonText: String,
    disabled: Boolean,
    isLoading: Boolean,
  },

  components: {
    LabelInput,
  },

  emits: ['update:submit', 'update:inputValue'],

  setup(props, { emit }) {
    const onSubmit = () => {
      emit('update:submit');
    };

    const updateInputValue = (value: string) => {
      emit('update:inputValue', value);
    };

    return {
      onSubmit,
      updateInputValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.confirm-input-box {
  display: flex;
  align-items: flex-end;
  margin-bottom: 0;
  .confirm-input-box__input {
    &::v-deep(.label-input__input),
    &::v-deep(.label-input__label) {
      margin: 0;
    }

    flex: 1;
    margin-right: 1rem;
  }

  .confirm-input-box__loading {
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 7.5rem;
    height: 2.5rem;

    border-radius: 10px;
    border: 1px solid $primary500;

    background-color: $primary500;

    color: #fff;
    font-size: 0.875rem;

    transition: all 0.3s;
  }

  .confirm-input-box__button {
    cursor: pointer;

    width: 7.5rem;
    height: 2.5rem;

    border-radius: 10px;
    border: 1px solid $primary600;

    background-color: #fff;

    color: $primary600;
    font-size: 0.875rem;

    transition: all 0.3s;

    &:hover {
      border: 1px solid $primary500;

      background-color: $primary500;

      color: #fff;
    }

    &:disabled {
      cursor: auto;

      background: #dddddd;

      color: #aaaaaa;

      border: 1px solid #fff;
    }
  }
}
</style>
