import axiosInstance from '../utils/axiosInstance';

const SERVICE_NAME = 'groups'

export const listGroups = () => axiosInstance.get(`/${SERVICE_NAME}/`).then(res => res.groups);

export const addGroup = (name) => axiosInstance.post(`/${SERVICE_NAME}/`, {name});

export const getGroup = (name) => axiosInstance.get(`/${SERVICE_NAME}/${name}`);

export const updateGroup = (name, data) => axiosInstance.put(`/${SERVICE_NAME}/${name}`, data);
