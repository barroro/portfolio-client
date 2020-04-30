import axios from 'axios';
import AuthService from './AuthService';
const authService = new AuthService();

export default axios.create({
  baseURL: `http://localhost:8000/api/`,
  headers: authService.getHeader()
});