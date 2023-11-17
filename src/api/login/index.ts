import { api } from 'boot/axios';
import { IUserLoginResponse } from './login.interfaces';

export const getLoginFn = async () => {
  const response = await api.get<IUserLoginResponse>('/login');
  return response;
};
