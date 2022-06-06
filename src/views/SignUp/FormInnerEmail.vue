<template>
  <header class="form-inner__header">
    <h2>사용하실 이메일을 입력해주세요!</h2>
  </header>

  <form ref="form">
    <ConfirmInput
      type="email"
      name="이메일"
      v-model="inputValue"
      placeholder="이메일을 입력해주세요!"
      buttonText="인증번호 받기 🚪"
      :disabled="isAuth"
      :isLoading = "isLoading"
      @update:submit="onSubmitEmail"
      @update:inputValue="(value) => inputValue = value"
    />

    <Text
      v-if="inputValue.length && isValid"
      type="success"
      size="12px"
    >
      사용 가능한 이메일입니다!
    </Text>

  </form>

  <form class="auth-code-form" v-if="authCodeInput.isActive" @submit.prevent="">
    <template v-if="!isAuth">
      <ConfirmInput
        type="text"
        name="인증번호"
        v-model="authCodeInput.value"
        placeholder="인증번호를 입력해주세요!"
        buttonText="인증번호 확인 🔑"
        @update:submit="onAuthCodeSubmit"
        @update:inputValue="(value) => authCodeInput.value = value"
      />
    </template>

    <template v-else>
      <Text class="auth-code-form--success" type="success" size="12px" tag="div" align="center">인증이 완료되었어요! 🎉</Text>
    </template>
  </form>

  <FormButton
    class="form-inner__button"
    @click.prevent="onClickNextStageButton"
    :disabled="!inputValue"
  >
    인증 완료하기
  </FormButton>

  <Teleport to="body">
    <Modal
      :visible="modalVisible"
      @update:confirm="onModalConfirm"
      @update:cancel="onModalCancel"
    >
      <template #header>
        <h2>잠깐! 입력 정보 확인할게요 👋🏻</h2>
      </template>
      <template #body>
        <div><strong>ID: </strong>{{store.state.signUp.id}}</div>
        <div><strong>생년월일: </strong>{{store.state.signUp.birthday}}</div>
        <div><strong>이메일: </strong>{{store.state.signUp.email}}</div>
      </template>
    </Modal>
  </Teleport>
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
import ConfirmInput from '@/components/Input/ConfirmInput.vue';
import Modal from '@/components/Modal/Index.vue';

export default defineComponent({
  name: 'FormInnerEmail',
  components: {
    FormButton,
    Text,
    ConfirmInput,
    Modal,
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
    const authCode = ref('');

    const formValues = ref({
      name: store.state.signUp.id,
      email: inputValue,
      auth_code: new Date().getTime(),
    });

    const isValid = ref(false);
    const isAuth = ref(false);
    const isLoading = ref(false);

    const modalVisible = ref(false);

    watch([inputValue], async () => {
      isValid.value = await SignUpFormSchema.isValid({ email: store.state.signUp.email });
    });

    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerEmail', checked });
    };

    const sendEmail = () => {
      if (form.value === null) return;
      isLoading.value = true;

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
      }).finally(() => {
        isLoading.value = false;
      });
    };

    const onSubmitEmail = (value: string | number) => {
      store.dispatch('signUp/updateState', { email: value });
      sendEmail();
    };

    const onAuthCodeSubmit = () => {
      if (authCodeInput.value.value !== authCode.value) return;

      isAuth.value = true;
    };

    const onClickNextStageButton = () => {
      if (!isAuth.value) return;

      modalVisible.value = true;
    };

    const onModalConfirm = () => {
      modalVisible.value = false;
      updateStage(true);
    };
    const onModalCancel = () => {
      modalVisible.value = false;
    };

    return {
      form,

      store,

      inputValue,
      authCodeInput,

      isValid,
      isAuth,
      isLoading,
      modalVisible,

      formValues,
      authCode,

      onSubmitEmail,
      sendEmail,
      onAuthCodeSubmit,

      updateStage,
      onClickNextStageButton,

      onModalConfirm,
      onModalCancel,
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

.auth-code-form {

  margin: 1.5rem 0;
  .auth-code-form__text--success {
    text-align: center;
  }
}
</style>
