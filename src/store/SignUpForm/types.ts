export interface SignUpFormState {
  id: string;
  password: string;
  email: string;
  phoneNumber: string;
  birthday: string;
}

export interface RootState {
  SignUpFormModule: SignUpFormState
}
