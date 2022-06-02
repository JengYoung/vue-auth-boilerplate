<template>
  <div class="sign-up">
    <Form>
      <component :is="stages[nowStage].stage" @update:stages="updateStages"></component>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Form from '@/components/Form/index.vue';
import FormInnerIntro from '@/views/SignUp/FormInnerIntro.vue';
import FormInnerFinish from '@/views/SignUp/FormInnerFinish.vue';

interface StageInterface {
  stage: string;
  checked: boolean;
}

export default defineComponent({
  components: {
    Form,
    FormInnerIntro,
    FormInnerFinish,
  },
  emits: ['update:stages'],
  setup() {
    const stages = ref<StageInterface[]>([
      { stage: 'FormInnerIntro', checked: false },
      { stage: 'FormInnerFinish', checked: false },
    ]);

    const nowStage = computed(() => {
      let flag = false;
      let cnt = 0;
      stages.value.forEach(({ checked }) => {
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

<style scoped>

</style>
