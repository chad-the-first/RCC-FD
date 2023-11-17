export interface IUserLoginInput {
  username: string;
  email: string;
}

export interface IUserModel{
  id: number;
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token: string
}

export interface IUserLoginResponse {
  status: string;
  access_token: string;
  role: string;
  language_locale: string;
}
