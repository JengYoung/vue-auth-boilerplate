<template>
  <header class="form-inner__header">
    <h2>사용하실 이메일을 입력해주세요!</h2>
  </header>

  <!-- <LabelInput
    type="email"
    name="이메일"
    placeholder="이메일을 입력해줴요!"
    v-model="inputValue"
    @update:modelValue="updateInputValue"
  /> -->

  <form ref="form" @submit.prevent="sendEmail">
    <LabelInput
      type="email"
      name="이메일"
      v-model="inputValue"
      @update:modelValue="updateInputValue"
    />

    <Text
      v-if="inputValue.length && isValid"
      type="success"
      size="12px"
    >
      사용 가능한 이메일입니다!
    </Text>

    <button type="submit">이메일 인증 번호 받기</button>
  </form>

  <form v-if="authCodeInput.isActive">
    <template v-if="!isAuth">
      <LabelInput
        name="인증번호"
        v-model="authCodeInput.value"
      />
      <button @click="onAuthCodeSubmit">확인</button>
    </template>

    <template v-else>
      <Text type="success" size="12px">인증이 완료되었어요! 🎉</Text>
    </template>
  </form>

  <FormButton
    class="form-inner__button"
    @click.prevent="onClickNextStageButton"
    :disabled="!inputValue"
  >
    인증 완료하기
  </FormButton>
</template>

<script lang="ts">
import {
  watch, defineComponent, ref,
} from 'vue';
import FormButton from '@/components/Button/FormButton.vue';
import { useStore } from 'vuex';
import Text from '@/components/Text/Index.vue';
import SignUpFormSchema from '@/utils/validator';
import emailjs from '@emailjs/browser';
import LabelInput from '@/components/Input/LabelInput.vue';

export default defineComponent({
  name: 'FormInnerEmail',
  components: {
    FormButton,
    Text,
    LabelInput,
  },
  emits: ['update:stages'],

  setup(props, { emit }) {
    emailjs.init(process.env.VUE_APP_PUBLIC_KEY);

    const store = useStore();

    const form = ref<HTMLFormElement | null>(null);

    const inputValue = ref('');
    const authCodeInput = ref({
      isActive: false,
      value: '',
    });

    const formValues = ref({
      name: store.state.signUp.id,
      email: inputValue,
      auth_code: new Date().getTime(),
    });

    const isValid = ref(false);
    const authCode = ref('');
    const isAuth = ref(false);

    watch([inputValue], async () => {
      isValid.value = await SignUpFormSchema.isValid({ email: store.state.signUp.email });
    });

    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerEmail', checked });
    };

    const updateInputValue = (value: string | number) => {
      store.dispatch('signUp/updateState', { email: value });
    };

    const sendEmail = () => {
      if (form.value === null) return;

      emailjs.send(
        process.env.VUE_APP_SERVICE_ID,
        process.env.VUE_APP_TEMPLATE_ID,
        formValues.value,
      ).then((response) => {
        authCodeInput.value.isActive = true;
        authCode.value = formValues.value.auth_code.toString();

        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
    };

    const onAuthCodeSubmit = () => {
      if (authCodeInput.value.value !== authCode.value) return;

      isAuth.value = true;
    };

    const onClickNextStageButton = () => {
      if (!isAuth.value) return;
      updateStage(true);
    };

    return {
      form,
      store,
      inputValue,
      authCodeInput,
      isValid,
      isAuth,
      updateInputValue,
      updateStage,
      sendEmail,
      onAuthCodeSubmit,
      onClickNextStageButton,
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
