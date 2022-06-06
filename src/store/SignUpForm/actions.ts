import { ActionTree } from 'vuex';
import { RootState, SignUpFormState } from './types';

const actions: ActionTree<SignUpFormState, RootState> = {
  updateState({ commit }, payload: keyof SignUpFormState) {
    commit('mutateState', payload);
  },
};

export default actions;
