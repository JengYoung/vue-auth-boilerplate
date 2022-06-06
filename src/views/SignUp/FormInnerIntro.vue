<template>
  <header class="form-inner__header">
    <h1>5분 안에 간편하게</h1>
    <h3>회원 가입을 완료해볼까요? 🙌</h3>
  </header>

  <FormButton class="form-inner__button" @click.prevent="() => updateStage(true)">시작하기</FormButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormButton from '@/components/Button/FormButton.vue';

export default defineComponent({
  name: 'FormInnerIntro',
  components: {
    FormButton,
  },
  setup(props, { emit }) {
    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerIntro', checked });
    };

    return {
      updateStage,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-inner__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-inner__button {
  margin-top: auto;
}
</style>
