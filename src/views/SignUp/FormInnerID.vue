<template>
  <header class="form-inner__header">
    <h2>사용하실 아이디를 입력해주세요!</h2>
  </header>

  <LabelInput
    name="아이디"
    placeholder="아이디는 공백 제외 4~16자로 입력해주세요!"
    v-model="inputValue"
    @update:modelValue="updateInputValue"
  />

  <ErrorText
    v-if="inputValue.length && !isValid"
    type="error"
    size="12px"
  >
    아이디는 공백 제외 4~16자로 입력해주세요!
  </ErrorText>
  <ErrorText
    v-else-if="inputValue.length && isValid"
    type="success"
    size="12px"
  >
    사용 가능한 ID입니다!
  </ErrorText>

  <FormButton
    class="form-inner__button"
    @click.prevent="() => updateStage(true)"
    :disabled="!inputValue"
  >
    시작하기
  </FormButton>
</template>

<script lang="ts">
import { watch, defineComponent, ref } from 'vue';
import FormButton from '@/components/Button/FormButton.vue';
import LabelInput from '@/components/Input/LabelInput.vue';
import { useStore } from 'vuex';
import ErrorText from '@/components/Text/Index.vue';
import SignUpFormSchema from '@/utils/validator';

export default defineComponent({
  name: 'FormInnerID',
  components: {
    FormButton,
    LabelInput,
    ErrorText,
  },
  emits: ['update:stages'],

  setup(props, { emit }) {
    const inputValue = ref('');
    const store = useStore();

    const isValid = ref(false);

    watch([inputValue], async () => {
      isValid.value = await SignUpFormSchema.isValid({ id: store.state.signUp.id });
    });

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
      isValid,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-inner__header {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;
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
