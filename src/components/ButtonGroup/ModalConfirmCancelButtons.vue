<template>
  <div class="modal__btn-box">
    <FormButton class="modal__confirm-btn" @click.prevent="onConfirm">확인</FormButton>
    <FormButton class="modal__cancel-btn" @click.prevent="onCancel">취소</FormButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormButton from '../Button/FormButton.vue';

export default defineComponent({
  name: 'ModalConfirmCancelButtons',
  components: { FormButton },
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

<style lang="scss" scoped>
.modal__btn-box {
  display: flex;
  align-items: flex-end;

  margin-top: 1rem;

  &::v-deep(.button) {
    margin: 0 0.5rem;

    &.modal__confirm-btn {
      background-color: $c-cuccess;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    &.modal__cancel-btn {
      border: 1px solid $primary500;

      background-color: #fff;

      color: $primary500;

      &:hover {
        background-color: $primary500;

        color: #fff;
      }
    }
  }
}
</style>
