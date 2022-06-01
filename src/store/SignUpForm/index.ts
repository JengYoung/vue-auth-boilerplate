import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutation';
import state from './state';
import { RootState, SignUpFormState } from './types';

const SignUpFormModule: Module<SignUpFormState, RootState> = {
  state: () => state,
  mutations,
  actions,
  getters,
};

export default SignUpFormModule;
