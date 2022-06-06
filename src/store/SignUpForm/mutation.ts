import { MutationTree } from 'vuex';
import { SignUpFormState } from './types';

const mutations: MutationTree<SignUpFormState> = {
  mutateState(state, payload) {
    Object.keys(payload).forEach((key) => {
      state[key as keyof SignUpFormState] = payload[key];
    });
  },
};

export default mutations;
