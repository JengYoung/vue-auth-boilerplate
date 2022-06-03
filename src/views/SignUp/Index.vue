<template>
  <div class="sign-up container">
    <Form class="sign-up__form">
      <component :is="stages[nowStage].stage" @update:stages="updateStages"></component>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Form from '@/components/Form/index.vue';
import FormInnerIntro from '@/views/SignUp/FormInnerIntro.vue';
import FormInnerFinish from '@/views/SignUp/FormInnerFinish.vue';
import FormInnerID from '@/views/SignUp/FormInnerID.vue';
import FormInnerPassword from '@/views/SignUp/FormInnerPassword.vue';

interface StageInterface {
  stage: string;
  checked: boolean;
}

export default defineComponent({
  components: {
    Form,
    FormInnerIntro,
    FormInnerID,
    FormInnerPassword,
    FormInnerFinish,
  },
  emits: ['update:stages'],
  setup() {
    const stages = ref<StageInterface[]>([
      { stage: 'FormInnerIntro', checked: false },
      { stage: 'FormInnerID', checked: false },
      { stage: 'FormInnerPassword', checked: false },
      { stage: 'FormInnerFinish', checked: false },
    ]);

    const nowStage = computed(() => {
      let flag = false;
      let cnt = 0;
      stages.value.forEach(({ checked }, idx) => {
        console.log(checked, cnt, idx);
        if (flag) return;

        if (!checked) {
          flag = true;
          return;
        }

        cnt += 1;
      });

      return cnt;
    });

    const updateStages = (emittedStage: StageInterface) => {
      stages.value = stages.value.map((stage) => (stage.stage === emittedStage.stage ? emittedStage : stage));
    };

    return {
      stages,
      nowStage,
      updateStages,
    };
  },
});
</script>

<style lang="scss" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sign-up__form {
    display: flex;
    flex-direction: column;

    position: relative;

    min-height: 400px;
  }
}
</style>
