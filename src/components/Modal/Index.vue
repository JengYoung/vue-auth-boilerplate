<template>
  <div class="modal__bg">
    <div class="modal__container">
      <div class="modal__inner">
        <header class="modal__header">
          <slot name="header"></slot>
        </header>

        <div class="modal__body">
          <slot name="body"></slot>
        </div>

        <div class="modal__btn-box">
          <FormButton class="modal__confirm-btn" @click.prevent="onConfirm">확인</FormButton>
          <FormButton class="modal__cancel-btn" @click.prevent="onCancel">취소</FormButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import FormButton from '../Button/FormButton.vue';

export default defineComponent({
  name: 'Modal',
  components: { FormButton },

  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  emits: ['update:confirm', 'update:cancel'],

  setup(props, { emit }) {
    const propsVisible = computed(() => props.visible);
    const modalStyle = computed(() => ({
      display: propsVisible.value ? 'flex' : 'none',
    }));

    const onConfirm = () => {
      emit('update:confirm');
    };

    const onCancel = () => {
      emit('update:cancel');
    };

    return {
      modalStyle,
      onConfirm,
      onCancel,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal__bg {
  display: v-bind('modalStyle.display');
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 50%);

  .modal__container {
    width: 300px;
    min-height: 160px;

    border-radius: 20px;

    background-color: #fff;
    padding: 1.5rem;

    .modal__inner {
      margin: 0 auto;

      .modal__header {
        text-align: center;
        margin-bottom: 2rem;
      }
      .modal__body {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

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
    }
  }
}
</style>
