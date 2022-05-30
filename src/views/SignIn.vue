<template>
  <div class="sign-in">
    <Form>
      <h1 class="form__header">로그인</h1>
      <!-- eslint-disable vuejs-accessibility/form-control-has-label  -->

      <LabelInput name="아이디" uniqueInputId="id"></LabelInput>
      <LabelInput name="비밀번호" uniqueInputId="password"></LabelInput>

      <FormButton type="submit" @click.prevent="onSubmit">로그인하기</FormButton>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form__header {
    margin: 0 0 2rem 0;
  }

}
</style>
