import api from './api';

export class SocialNetworkService {

  constructor() {
  }

  getAll() {
    return api.get('socialNetworks');
  }

  get(id) {
    return api.get('socialNetworks/' + id);
  }

  create(data) {
    return api.post('socialNetworks', data);
  }

  update(data) {
    return api.put('socialNetworks/' + data.id, data);
  }

  delete(id) {
    return api.delete('socialNetworks/' + id, data);
  }

}