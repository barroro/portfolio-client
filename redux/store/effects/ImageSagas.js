import { all, takeLatest, put, call } from "redux-saga/effects";
import { imageActions } from "../actions/ImageActions";
import { ImagesActionTypes } from "../actions/ImageActions";
import { ImageService } from "../../../services/ImageService";

const imageService = new ImageService();

function* getImages() {
  try {
    const { data } = yield call(imageService.getImages);
    yield put(imageActions.imagesGetSuccessAction(data));
  } catch (error) {
    yield put(imageActions.imagesGetErrorAction(error));
  }
}

function* getImage(action) {
  try {
    const { data } = yield call(imageService.getImage, action.payload);
    yield put(imageActions.getImageSuccessAction(data));
  } catch (error) {
    console.log(error);
    yield put(imageActions.getImageErrorAction(error));
  }
}

function* uploadImage(action) {
  try {
    const { data } = yield call(imageService.uploadImage, action.payload);
    yield put(imageActions.uploadImageSuccessAction(data.image));
  } catch (error) {
    yield put(imageActions.uploadImageErrorAction(error));
  }
}

export default function* imageSagas() {
  yield all([
    takeLatest(ImagesActionTypes.GET_IMAGES, getImages),
    takeLatest(ImagesActionTypes.GET_IMAGE, getImage),
    takeLatest(ImagesActionTypes.UPLOAD_IMAGE, uploadImage),
  ]);
}