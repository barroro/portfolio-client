import Axios from "axios";
import { BaseService } from "./BaseService";
import api from './api';

export async function getWorksApi() {
  // const result = Axios.request({
  //   method: 'get',
  //   url: 'http://localhost:8000/api/works',
  // });
  // return result;
  return await api.get('works');
};

export class WorkService extends BaseService {

  constructor() {
    super();
  }

  getWorksApi() {
    return api.get('works');
  }

  getWork(id) {
    return api.get('works/' + id);
  }
}