export interface UserData {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  image: string;
  token?: string;
}
export interface Login {
  status?: string;
  message?: string;
  data?: UserData | undefined;
  token?: string | null | undefined;
  loading?: boolean;
  error?: string | null | undefined;
  islogin?: boolean;
}
export interface LoginForm {
  username: string;
  password: string;
}
export interface Register {
  loading: boolean;
  message: string;
  error?: string;
  status: string;
  data: RegisterForm | undefined;
}
export interface RegisterForm {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  nickname?: string;
  phoneNumber?: string;
  birth?: string;
}

export interface SocialLogin {
  id?: string;
  email: string;
  name: string;
  provider: string;
  user_img: string;
}
export interface SocialLoginResult {
  data?: any | undefined;
  status?: string;
}
