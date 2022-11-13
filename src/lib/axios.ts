import Axios from 'axios';

const API_URL = 'http://localhost:3000';

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    const token = localStorage.getItem('token');

    if (newConfig.headers) {
      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }

      newConfig.headers['Content-Type'] = 'application/json';
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);
