<template>
  <header class="form-inner__header">
    <h1>{{store.state.signUp.id}}님!</h1>
    <h2>생년월일은 어떻게 되시나요?</h2>
  </header>

  <LabelInput
    type="date"
    name="생년월일"
    v-model="inputValue"
    @update:modelValue="updateInputValue"
  />

  <ErrorText
    v-if="inputValue.length && !isValid"
    type="error"
    size="12px"
  >
    생년월일을 선택해주세요! 🙇‍♀️
  </ErrorText>
  <ErrorText
    v-else-if="inputValue.length && isValid"
    type="success"
    size="12px"
  >
    생년월일을 확인했어요 🙆🏻
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
import {
  watch, defineComponent, ref, computed,
} from 'vue';
import FormButton from '@/components/Button/FormButton.vue';
import LabelInput from '@/components/Input/LabelInput.vue';
import { useStore } from 'vuex';
import ErrorText from '@/components/Text/Index.vue';
import SignUpFormSchema from '@/utils/validator';

export default defineComponent({
  name: 'FormInnerBirthday',
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
    const birthday = computed(() => inputValue.value.replaceAll('-', ''));

    watch([inputValue], async () => {
      isValid.value = await SignUpFormSchema.isValid({ birthday: store.state.signUp.birthday });
    });

    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerBirthday', checked });
    };

    const updateInputValue = () => {
      store.dispatch('signUp/updateState', { birthday });
    };

    return {
      updateStage,
      inputValue,
      birthday,
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
