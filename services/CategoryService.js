import api from './api';

export class CategoryService {

  constructor() {
  }

  getAll() {
    return api.get('categories');
  }

  get(id) {
    return api.get('categories/' + id);
  }

  create(data) {
    return api.post('categories', data);
  }

  update(data, id) {
    return api.put('categories/' + id, data);
  }

  delete(id) {
    return api.delete('categories/' + id, data);
  }

}