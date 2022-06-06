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
          <FormButton class="modal__confirm-btn">확인</FormButton>
          <FormButton class="modal__cancel-btn">취소</FormButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormButton from '../Button/FormButton.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: { FormButton },
});
</script>

<style lang="scss" scoped>
.modal__bg {
  display: flex;
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
        margin-top: 1rem;
        &::v-deep(.button) {
          margin: 0.5rem;
          &.modal__confirm-btn {
            background-color: $c-cuccess;
            opacity: 0.8;

            &:hover {
              opacity: 1;
            }
          }

          &.modal__cancel-btn {
            background-color: #fff;
            color: $primary500;
            border: 1px solid $primary500;

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
