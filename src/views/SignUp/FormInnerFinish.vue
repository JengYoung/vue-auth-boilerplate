<template>
  <h1>
    회원가입이 완료되었어요! 🎉
  </h1>
  <FormButton @click.prevent="moveLoginPage">로그인으로 이동하기</FormButton>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import FormButton from '@/components/Button/FormButton.vue';

export default defineComponent({
  components: {
    FormButton,
  },
  setup() {
    const $router = useRouter();
    const moveLoginPage = () => {
      $router.push('/sign-in');
    };
    return {
      moveLoginPage,
    };
  },
});
</script>

<style scoped>

</style>
