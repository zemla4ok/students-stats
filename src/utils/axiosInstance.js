import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://arcane-retreat-16467.herokuapp.com/'//'http://0.0.0.0:8080/'
});

axiosInstance.interceptors
.response
.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error.response);
});

export default axiosInstance;