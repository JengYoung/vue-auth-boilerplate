<template>
  <header class="form-inner__header">
    <h2>{{store.state.signUp.id}}님 반가워요 👋🏻</h2>
    <h3>사용하실 비밀번호를 입력해주세요!</h3>
  </header>

  <LabelInput
    type="password"
    name="비밀번호"
    placeholder="한글, 영대・소문자, 특수문자 조합으로 8~20자를 입력해주세요!"
    v-model="password"
    @update:model-value="updatePasswordValue"
  />

  <LabelInput
    type="password"
    name="비밀번호 확인"
    placeholder="다시 한 번 위의 문자를 입력해주세요!"
    v-model="passwordConfirm"
  />

  <div class="form-inner__error-text-box">
    <ErrorText
      v-if="password !== passwordConfirm"
      type="error"
      size="12px"
    >
      비밀번호가 달라요! 😅
    </ErrorText>
    <ErrorText
      v-if="password === passwordConfirm && !isValid"
      type="error"
      size="12px"
    >
      비밀번호는 한글, 영대・소문자, 특수문자 조합으로 8~20자를 입력해주세요! {{ password }} {{passwordConfirm}}
    </ErrorText>
    <ErrorText
      v-else-if="password === passwordConfirm && isValid"
      type="success"
      size="12px"
    >
      사용 가능한 비밀번호입니다!
    </ErrorText>
  </div>

  <FormButton
    class="form-inner__button"
    @click.prevent="onSubmit"
    :disabled="!(isValid && password === passwordConfirm)"
  >
    비밀번호 입력을 완료했어요! 👋🏻
  </FormButton>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import FormButton from '@/components/Button/FormButton.vue';
import LabelInput from '@/components/Input/LabelInput.vue';
import { useStore } from 'vuex';
import ErrorText from '@/components/Text/Index.vue';
import SignUpFormSchema from '@/utils/validator';

export default defineComponent({
  name: 'FormInnerPassword',
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

    const isValid = ref(false);

    watch([password], async () => {
      isValid.value = await SignUpFormSchema.isValid({ password: store.state.signUp.password });
    });

    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerPassword', checked });
    };

    const updatePasswordValue = (value: string | number) => {
      store.dispatch('signUp/updateState', { password: value });
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
      updatePasswordValue,
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
