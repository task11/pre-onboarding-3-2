import Axios from 'axios';
import { QueryClient } from 'react-query';
import { UserResponseProps } from '../types/user';
import { queryKeys } from '../utils/constants/queryKeys';

const queryClient = new QueryClient();
const API_URL = 'http://localhost:3000';

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    const data = queryClient.getQueryData<UserResponseProps>(queryKeys.user);

    if (newConfig.headers) {
      if (data?.accessToken) {
        newConfig.headers.Authorization = `Bearer ${data?.accessToken}`;
      }

      newConfig.headers['Content-Type'] = 'application/json';
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);
