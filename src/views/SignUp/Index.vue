<template>
  <div class="sign-up container">
    <Form class="sign-up__form">
      <KeepAlive>
        <Transition name="stage" mode="out-in">
          <component :is="stages[nowStage].stage" @update:stages="updateStages"></component>
        </Transition>
      </KeepAlive>
    </Form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed, onMounted, onUnmounted,
} from 'vue';
import Form from '@/components/Form/index.vue';
import FormInnerIntro from '@/views/SignUp/FormInnerIntro.vue';
import FormInnerFinish from '@/views/SignUp/FormInnerFinish.vue';
import FormInnerID from '@/views/SignUp/FormInnerID.vue';
import FormInnerPassword from '@/views/SignUp/FormInnerPassword.vue';
import FormInnerBirthday from '@/views/SignUp/FormInnerBirthday.vue';
import FormInnerEmail from '@/views/SignUp/FormInnerEmail.vue';

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
    FormInnerBirthday,
    FormInnerEmail,
    FormInnerFinish,
  },
  emits: ['update:stages'],
  setup() {
    const onBeforeUnloadCallback = (e: Event) => {
      e.preventDefault();
      e.returnValue = false;

      return '';
    };

    onMounted(() => {
      window.addEventListener('beforeunload', onBeforeUnloadCallback);
    });

    onUnmounted(() => {
      window.removeEventListener('beforeunload', onBeforeUnloadCallback);
    });

    const stages = ref<StageInterface[]>([
      { stage: 'FormInnerIntro', checked: false },
      { stage: 'FormInnerID', checked: false },
      { stage: 'FormInnerPassword', checked: false },
      { stage: 'FormInnerBirthday', checked: false },
      { stage: 'FormInnerEmail', checked: false },
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

<style lang="scss" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sign-up__form {
    overflow: hidden;
    display: flex;
    flex-direction: column;

    position: relative;

    min-height: 400px;

    .stage-enter-active {
      position: relative;
      transition: all 0.25s ease-in;
    }

    .stage-enter-from {
      opacity: 0;
      transform: translate3d(200px, 0px, 0px);
    }

    .stage-enter-to {
      opacity: 1;
    }

    .stage-leave-active {
      transition: all 0.25s ease-in;
    }

    .stage-leave-to {
      transform: translate3d(-200px, 0px);
      opacity: 0;
    }
  }
}
</style>
