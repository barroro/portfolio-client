import Axios from "axios";
import { BaseService } from "./BaseService";
import api from './api';

//let settings = { headers: { 'content-type': 'multipart/form-data' } }

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

  getActiveWorks() {
    return api.get('works/getActiveWorks');
  }

  get(id) {
    return api.get('works/' + id);
  }

  create(data) {
    return api.post('works', data);
  }

  update(data) {
    return api.put('works/' + data.id, JSON.stringify(data));
  }

  delete(id) {
    return api.delete('works/' + id, data);
  }

}