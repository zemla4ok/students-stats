import axiosInstance from '../utils/axiosInstance';

const SERVICE_NAME = 'auth';

export const loginUser = (data) => axiosInstance.post(`/${SERVICE_NAME}/login`, data);
