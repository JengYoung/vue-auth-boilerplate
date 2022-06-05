import { string, object } from 'yup';

const SignUpFormSchema = object({
  id: string().min(4).max(16).matches(/^[0-9가-힣a-zA-Z]+$/),
  password: string().min(4).max(20).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/),
  name: string(),
  birthday: string().matches(/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/),
  email: string().matches(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/),
  phoneNumber: string().matches(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/),
});

export default SignUpFormSchema;
