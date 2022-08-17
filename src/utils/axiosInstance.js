import axios from 'axios';
import {RESPONSE_STATUSES} from '../constants';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN
});

axiosInstance
.interceptors
.response
.use((response) => {
  return response.data;
}, (error) => {
  if(error?.response?.status === RESPONSE_STATUSES.UNAUTHORIZED) {
    //removeActiveUser();
    //removeActiveToken();
    // if(window.location.pathname !== APP_PATH.LOGIN) {
    //   window.location.href = APP_PATH.LOGIN;
    // }
  }
  return Promise.reject(error.response);
});

export default axiosInstance;