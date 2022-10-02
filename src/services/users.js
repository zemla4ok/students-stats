import axiosInstance from '../utils/axiosInstance';

const SERVICE_NAME = 'users';

export const activate = (data) => axiosInstance.put(`/${SERVICE_NAME}/activate`, data);
