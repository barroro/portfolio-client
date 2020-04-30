import Axios from 'axios';
import AuthService from './AuthService';

const authService = new AuthService();

export class BaseService {

  baseUrl = 'http://localhost:8000/api/';

  defaultHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  constructor() {

  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  request() {
    return Axios.create({
      baseURL: this.baseUrl,
      headers: authService.getHeader()
    });
  }

}