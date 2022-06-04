import SignUpFormSchema from '@/utils/validator';
import { GetterTree } from 'vuex';
import { RootState, SignUpFormState } from './types';

const getters: GetterTree<SignUpFormState, RootState> = {
  async isValidId(state) {
    console.log('state: id: ', state.id);
    const schema = SignUpFormSchema;
    schema.isValid({ id: state.id }).then((a) => console.log(a));

    const res = await schema.isValid({ id: state.id });

    return res;
  },
};

export default getters;
