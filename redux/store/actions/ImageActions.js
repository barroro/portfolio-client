


export const ImagesActionTypes = {
  GET_IMAGES: '[Images] Get images',
  IMAGES_GET_SUCCESS: '[Images] Images get success',
  IMAGES_GET_ERROR: '[Images] Images get error',
  UPLOAD_IMAGE: '[Images] Upload image',
  UPLOAD_IMAGE_SUCCESS: '[Images] Upload image success',
  UPLOAD_IMAGE_ERROR: '[Images] Upload image error',
  GET_IMAGE: '[Images] Get image',
  GET_IMAGE_SUCCESS: '[Images] Get image success',
  GET_IMAGE_ERROR: '[Images] Get image error',
  OPEN_MODAL: '[Images] Open modal',
  CLOSE_MODAL: '[Images] Close modal'
};

export const imageActions = {
  getImagesAction: (payload) => ({
    type: ImagesActionTypes.GET_IMAGES,
    payload
  }),
  imagesGetSuccessAction: (payload) => ({
    type: ImagesActionTypes.IMAGES_GET_SUCCESS,
    payload
  }),
  imagesGetErrorAction: (payload) => ({
    type: ImagesActionTypes.IMAGES_GET_ERROR,
    payload
  }),
  uploadImageAction: (payload) => ({
    type: ImagesActionTypes.UPLOAD_IMAGE,
    payload
  }),
  uploadImageSuccessAction: (payload) => ({
    type: ImagesActionTypes.UPLOAD_IMAGE_SUCCESS,
    payload
  }),
  uploadImageErrorAction: (payload) => ({
    type: ImagesActionTypes.UPLOAD_IMAGE_ERROR,
    payload
  }),
  getImageAction: (payload) => ({
    type: ImagesActionTypes.GET_IMAGE,
    payload
  }),
  getImageSuccessAction: (payload) => ({
    type: ImagesActionTypes.GET_IMAGE_SUCCESS,
    payload
  }),
  getImageErrorAction: (payload) => ({
    type: ImagesActionTypes.GET_IMAGE_ERROR,
    payload
  }),
  openModalAction: () => ({
    type: ImagesActionTypes.OPEN_MODAL
  }),
  closeModalAction: () => ({
    type: ImagesActionTypes.CLOSE_MODAL,
  }),
}