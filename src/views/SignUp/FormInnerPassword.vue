<template>
  <header class="form-inner__header">
    <h2>사용하실 비밀번호를 입력해주세요!</h2>
  </header>

  <LabelInput
    type="password"
    name="비밀번호"
    placeholder="한글, 영대・소문자, 특수문자 조합으로 8~20자를 입력해주세요!"
    v-model="password"
  />

  <LabelInput
    type="password"
    name="비밀번호 확인"
    placeholder="다시 한 번 위의 문자를 입력해주세요!"
    v-model="passwordConfirm"
  />

  <div class="form-inner__error-text-box">
    <ErrorText v-if="password !== passwordConfirm">
      비밀번호가 달라요! 😂
    </ErrorText>
  </div>

  <FormButton
    class="form-inner__button"
    @click.prevent="onSubmit"
    :disabled="!(isValid(password) && password === passwordConfirm)"
  >
    비밀번호 입력을 완료했어요! 👋🏻
  </FormButton>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FormButton from '@/components/Button/FormButton.vue';
import LabelInput from '@/components/Input/LabelInput.vue';
import { useStore } from 'vuex';
import ErrorText from '@/components/Text/ErrorText.vue';

export default defineComponent({
  name: 'FormInnerID',
  components: {
    FormButton,
    LabelInput,
    ErrorText,
  },
  emits: ['update:stages'],

  setup(props, { emit }) {
    const password = ref('');
    const passwordConfirm = ref('');
    const store = useStore();

    const isValid = (value: string) => value.length >= 8;

    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerPassword', checked });
    };

    const updateInputValue = (value: string | number) => {
      store.dispatch('signUp/updateState', { id: value });
    };

    const onSubmit = () => {
      if (password.value !== passwordConfirm.value) {
        return;
      }

      store.dispatch('signUp/updateState', { password: password.value });
      updateStage(true);
    };

    return {
      updateStage,
      password,
      passwordConfirm,
      updateInputValue,
      store,
      onSubmit,
      isValid,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-inner__header {
  display: flex;
  flex-direction: column;
  // margin-bottom: 2rem;
  height: 240px;
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
.form-inner__error-text-box {
  display: flex;
  justify-content: center;
  // align-items: center;

  height: 3rem;
  .form-inner__error {
    text-align: center;
  }
}
</style>
