import api from './api';

export class ImageService {

  constructor() {
  }

  getImages() {
    return api.get('images');
  }

  getImage(id) {
    return api.get('images/' + id);
  }

  uploadImage(data) {
    return api.post('images', data, { headers: { 'content-type': 'multipart/form-data' } });
  }
}