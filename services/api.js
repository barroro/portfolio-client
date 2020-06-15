import axios from 'axios';
import AuthService from './AuthService';
import Router from "next/router"

const authService = new AuthService();


export default axios.create({
  baseURL: `http://localhost:8000/api/`,
  headers: authService.getHeader()
});

export const axiosInstance = axios.create({
  baseURL: `http://localhost:8000/api/`,
  headers: authService.getHeader()
});

axiosInstance.interceptors.request.use(function (config) {
  console.log(config);
  config.headers = authService.getHeader();
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    Router.push('/signin')
  }
  if (error.response && error.response.data) {
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});