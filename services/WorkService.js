import Axios from "axios";
import { BaseService } from "./BaseService";
import api, { axiosInstance } from './api';

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
    return axiosInstance.get('works');
  }

  getActiveWorks() {
    return axiosInstance.get('works/getActiveWorks');
  }

  get(id) {
    return axiosInstance.get('works/' + id);
  }

  create(data) {
    return axiosInstance.post('works', data);
  }

  update(data) {
    return axiosInstance.put('works/' + data.id, JSON.stringify(data));
  }

  delete(id) {
    return axiosInstance.delete('works/' + id, data);
  }

}