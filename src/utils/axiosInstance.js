import axios from 'axios';
import {RESPONSE_STATUSES} from '../constants';
import {TOKEN_STORAGE_KEY} from "./auth";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN
});

axiosInstance
.interceptors
.request
.use(
  config => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error)
  });


axiosInstance
.interceptors
.response
.use((response) => {
  return response.data;
}, (error) => {
  if (error?.response?.status === RESPONSE_STATUSES.UNAUTHORIZED) {
    //removeActiveUser();
    //removeActiveToken();
    // if(window.location.pathname !== APP_PATH.LOGIN) {
    //   window.location.href = APP_PATH.LOGIN;
    // }
  }
  return Promise.reject(error.response);
});

export default axiosInstance;