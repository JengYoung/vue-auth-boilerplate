<template>
  <header class="form-inner__header">
    <h2>사용하실 아이디를 입력해주세요!</h2>
  </header>
  <LabelInput name="아이디" placeholder="한글, 영어, 숫자 조합 최대 16자로 입력해주세요!"></LabelInput>
  <FormButton class="form-inner__button" @click.prevent="() => updateStage(true)">시작하기</FormButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormButton from '@/components/Button/FormButton.vue';
import LabelInput from '@/components/Input/LabelInput.vue';

export default defineComponent({
  name: 'FormInnerID',
  components: {
    FormButton,
    LabelInput,
  },
  setup(props, { emit }) {
    const updateStage = (checked: boolean) => {
      emit('update:stages', { stage: 'FormInnerID', checked });
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
  // margin-bottom: 2rem;
  height: 240px;
  justify-content: center;
}
.form-inner__button {
  margin-top: auto;
}
</style>
