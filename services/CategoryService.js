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

  update(data) {
    return api.put('categories/' + data.id, data);
  }

  delete(id) {
    return api.delete('categories/' + id, data);
  }

}