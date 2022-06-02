export interface SignUpFormState {
  id: string;
  password: string;
  name: string;
  birthday: string;
  email: string;
  phoneNumber: string;
}

export interface RootState {
  SignUpFormModule: SignUpFormState
}
