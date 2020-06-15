import api, { axiosInstance } from './api';
import axios from 'axios';
import AuthService from './AuthService';

const authService = new AuthService();

export class MessageService {

  constructor() {
  }

  getAll() {
    return axiosInstance.get('messages').then(authService._checkStatus)
  }

  get(id) {
    return axiosInstance.get('messages/' + id).then(authService._checkStatus)
  }

  create(data) {
    return axiosInstance.post('messages', data).then(authService._checkStatus)
  }

  update(data) {
    return axiosInstance.put('messages/' + data.id, data)
  }

  delete(id) {
    return axiosInstance.delete('messages/' + id, data).then(authService._checkStatus)
  }

}