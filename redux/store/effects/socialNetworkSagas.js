import { all, takeLatest, put, call } from "redux-saga/effects";
import { socialNetworkActions, socialNetworkActionTypes } from '../actions/socialNetworkActions';
import { SocialNetworkService } from "../../../services/SocialNetworkService";

const socialNetworkService = new SocialNetworkService();

function* getSocialNetworks() {
  try {
    const { data } = yield call(socialNetworkService.getAll);
    yield put(socialNetworkActions.getSocialNetworksSuccessAction(data));
  } catch (error) {
    yield put(socialNetworkActions.getSocialNetworksErrorAction(error));
  }
}

function* getSocialNetwork(action) {
  try {
    const { data } = yield call(socialNetworkService.get, action.payload);
    yield put(socialNetworkActions.getSocialNetworkSuccessAction(data));
  } catch (error) {
    yield put(socialNetworkActions.getSocialNetworkErrorAction(error));
  }
}

function* createSocialNetwork(action) {
  try {
    const { data } = yield call(socialNetworkService.create, action.payload);
    yield put(socialNetworkActions.createSocialNetworkSuccessAction(data));
  } catch (error) {
    yield put(socialNetworkActions.createSocialNetworkErrorAction(error));
  }
}

function* updateSocialNetwork(action) {
  try {
    const { data } = yield call(socialNetworkService.update, action.payload);
    yield put(socialNetworkActions.updateSocialNetworkSuccessAction(data.socialNetworkUpdated));
  } catch (error) {
    yield put(socialNetworkActions.updateSocialNetworkErrorAction(error));
  }
}

function* deleteSocialNetwork(action) {
  try {
    const { data } = yield call(socialNetworkService.delete, action.payload);
    yield put(socialNetworkActions.createSocialNetworkSuccessAction(data));
  } catch (error) {
    yield put(socialNetworkActions.createSocialNetworkErrorAction(error));
  }
}

export default function* socialNetworkSagas() {
  yield all([
    takeLatest(socialNetworkActionTypes.GET_SOCIAL_NETWORKS, getSocialNetworks),
    takeLatest(socialNetworkActionTypes.GET_SOCIAL_NETWORK, getSocialNetwork),
    takeLatest(socialNetworkActionTypes.CREATE_SOCIAL_NETWORK, createSocialNetwork),
    takeLatest(socialNetworkActionTypes.UPDATE_SOCIAL_NETWORK, updateSocialNetwork),
    takeLatest(socialNetworkActionTypes.DELETE_SOCIAL_NETWORK, deleteSocialNetwork),
  ]);
}