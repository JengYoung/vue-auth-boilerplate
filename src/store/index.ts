import { createStore } from 'vuex';
import SignUpFormModule from './SignUpForm';
import { RootState } from './SignUpForm/types';

export default createStore<RootState>({
  modules: {
    signUp: SignUpFormModule,
  },
});
