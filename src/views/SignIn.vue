<template>
  <div class="sign-in container">
    <Form>
      <h1 class="form__header">로그인</h1>
      <!-- eslint-disable vuejs-accessibility/form-control-has-label  -->

      <LabelInput name="아이디" uniqueInputId="id"></LabelInput>
      <LabelInput name="비밀번호" uniqueInputId="password"></LabelInput>

      <FormButton type="submit" @click.prevent="onSubmit">로그인하기</FormButton>
      <router-link class="form__register-page-link" to="sign-up">
        회원가입
      </router-link>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '@/components/Form/index.vue';
import FormButton from '@/components/Button/FormButton.vue';
import LabelInput from '@/components/Input/LabelInput.vue';

export default defineComponent({
  components: {
    Form,
    FormButton,
    LabelInput,
  },
  setup() {
    const onSubmit = () => {
      // eslint-disable-next-line
      alert('submit');
    };

    return {
      onSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>

.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $primary100;
  .form__header {
    margin: 0 0 2rem 0;
  }
  .form__register-page-link {
    margin-top: 1rem;

    text-decoration: none;
    text-align: center;

    color: #999999;

    &:hover {
      transition: all 0.3s;
      color: $primary500;
    }
  }

}
</style>
