<template>
  <header class="form-inner__header">
    <h2>사용하실 아이디를 입력해주세요!</h2>
  </header>

  <LabelInput
    name="아이디"
    placeholder="한글, 영어, 숫자 조합 최대 16자로 입력해주세요!"
    v-model="inputValue"
    @update:modelValue="updateInputValue"
  />

  <FormButton
    class="form-inner__button"
    @click.prevent="() => updateStage(true)"
    :disabled="!inputValue"
  >
    시작하기
  </FormButton>
</template>

<script lang="ts">
import yup from 'yup';
import { defineComponent, ref } from 'vue';
import FormButton from '@/components/Button/FormButton.vue';
import LabelInput from '@/components/Input/LabelInput.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'FormInnerID',
  components: {
    FormButton,
    LabelInput,
  },
  emits: ['update:stages'],

  setup(props, { emit }) {
    const inputValue = ref('');
    const store = useStore();

    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerID', checked });
    };

    const updateInputValue = (value: string | number) => {
      store.dispatch('signUp/updateState', { id: value });
    };

    return {
      updateStage,
      inputValue,
      updateInputValue,
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-inner__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-inner__button {
  margin-top: auto;
  transition: all 0.3s;

  &:disabled {
    background-color: #eeeeee;
    color: #aaaaaa;
  }
}
</style>
