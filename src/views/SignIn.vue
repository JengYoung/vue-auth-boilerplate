<template>
  <div class="sign-in">
    <Form>
      <h1 class="form__header">로그인</h1>
      <!-- eslint-disable vuejs-accessibility/form-control-has-label  -->
      <label class="form__label" for="id">
        <span>아이디</span>
        <input type="text" class="form__input" id="id">
      </label>
      <label class="form__label" for="id">
        <span>비밀번호</span>
        <input type="text" class="form__input" id="password">
      </label>

      <FormButton type="submit" @click.prevent="onSubmit">로그인하기</FormButton>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '@/components/Form/index.vue';
import FormButton from '@/components/Button/FormButton.vue';

export default defineComponent({
  components: {
    Form,
    FormButton,
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
    margin-bottom: 2rem;
  }

  .form__label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    span {
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .form__input {
      height: 40px;
      margin-bottom: 1rem;

      border: none;
      border-bottom: 1px solid lightgray;

      outline: none;
      font-size: 1.125rem;

      &:focus {
        border-bottom: 1px solid #fcc6d2;
        transition: all 0.3s;
      }
    }
  }
}
</style>
