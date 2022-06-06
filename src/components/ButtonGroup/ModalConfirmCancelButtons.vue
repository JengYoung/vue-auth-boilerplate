<template>
  <div class="modal__btn-box">
    <FormButton class="modal__confirm-btn" @click.prevent="onConfirm">확인</FormButton>
    <FormButton class="modal__cancel-btn" @click.prevent="onCancel">취소</FormButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['update:confirm', 'update:cancel'],

  setup(props, { emit }) {
    const onConfirm = () => {
      emit('update:confirm');
    };

    const onCancel = () => {
      emit('update:cancel');
    };
    return {
      onConfirm,
      onCancel,
    };
  },
});
</script>

<style scoped>

</style>
