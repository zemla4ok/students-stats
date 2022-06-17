import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN
});

axiosInstance.interceptors
.response
.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error.response);
});

export default axiosInstance;