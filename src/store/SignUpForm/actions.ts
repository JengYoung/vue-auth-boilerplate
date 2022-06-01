import { ActionTree } from 'vuex';
import { RootState, SignUpFormState } from './types';

const actions: ActionTree<SignUpFormState, RootState> = {
  updateState({ commit }, payload: keyof SignUpFormState) {
    commit('updateMutate', payload);
  },
};

export default actions;
