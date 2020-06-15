import api, { axiosInstance } from './api';
import axios from 'axios';
import AuthService from './AuthService';

const authService = new AuthService();

//axios.defaults.baseURL = 'http://localhost:8000/api/';

// const axiosInstance = axios.create({
//   baseURL: `http://localhost:8000/api/`,
//   headers: authService.getHeader()
// });

// axiosInstance.interceptors.response.use((response) => {
//   console.log('interceptor:', response);
//   if (response.status === 401) {
//     alert("You are not authorized");
//   }
//   return response;
// }, (error) => {
//   console.log('interceptor:', error);
//   if (error.response && error.response.data) {
//     return Promise.reject(error.response.data);
//   }
//   return Promise.reject(error.message);
// });

export class CategoryService {

  constructor() {
  }

  getAll() {
    return axiosInstance.get('categories').then(authService._checkStatus)
  }

  get(id) {
    return axiosInstance.get('categories/' + id).then(authService._checkStatus)
  }

  create(data) {
    return axiosInstance.post('categories', data).then(authService._checkStatus)
  }

  update(data) {
    return axiosInstance.put('categories/' + data.id, data)
  }

  delete(id) {
    return axiosInstance.delete('categories/' + id, data).then(authService._checkStatus)
  }

}