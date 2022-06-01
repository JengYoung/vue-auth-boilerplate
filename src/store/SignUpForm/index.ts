import actions from './actions';
import getters from './getters';
import mutations from './mutation';
import state from './state';

const SignUpFormModule = {
  state: () => state,
  mutations,
  actions,
  getters,
};

export default SignUpFormModule;
