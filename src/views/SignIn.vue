<template>
  <div class="sign-in">
    <Form>
      <h1>로그인</h1>
      <!-- eslint-disable vuejs-accessibility/form-control-has-label  -->
      <label class="form__label" for="id">
        <span>아이디</span>
        <input type="text" class="form__input" id="id">
      </label>
      <label class="form__label" for="id">
        <span>비밀번호</span>
        <input type="text" class="form__input" id="password">
      </label>

      <button type="submit">로그인하기</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '@/components/Form/index.vue';

export default defineComponent({
  components: {
    Form,
  },
});
</script>
<style lang="scss" scoped>

.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;

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
