import { all, takeLatest, put, call } from "redux-saga/effects";
import { messageActions, messageActionTypes } from '../actions/MessageActions';
import { MessageService } from "../../../services/MessageService";

const messageService = new MessageService();

function* getMessages() {
  try {
    const { data } = yield call(messageService.getAll);
    yield put(messageActions.getMessagesSuccessAction(data));
  } catch (error) {
    yield put(messageActions.getMessagesErrorAction(error));
  }
}

function* getMessage(action) {
  try {
    const { data } = yield call(messageService.get, action.payload);
    yield put(messageActions.getMessageSuccessAction(data));
  } catch (error) {
    yield put(messageActions.getMessageErrorAction(error));
  }
}

function* createMessage(action) {
  try {
    const { data } = yield call(messageService.create, action.payload);
    yield put(messageActions.createMessageSuccessAction(data));
  } catch (error) {
    yield put(messageActions.createMessageErrorAction(error));
  }
}

function* updateMessage(action) {
  try {
    const { data } = yield call(messageService.update, action.payload);
    yield put(messageActions.updateMessageSuccessAction(data));
  } catch (error) {
    yield put(messageActions.updateMessageErrorAction(error));
  }
}

function* deleteMessage(action) {
  try {
    const { data } = yield call(messageService.delete, action.payload);
    yield put(messageActions.createMessageSuccessAction(data));
  } catch (error) {
    yield put(messageActions.createMessageErrorAction(error));
  }
}

export default function* messageSagas() {
  yield all([
    takeLatest(messageActionTypes.GET_MESSAGES, getMessages),
    takeLatest(messageActionTypes.GET_MESSAGE, getMessage),
    takeLatest(messageActionTypes.CREATE_MESSAGE, createMessage),
    takeLatest(messageActionTypes.UPDATE_MESSAGE, updateMessage),
    takeLatest(messageActionTypes.DELETE_MESSAGE, deleteMessage),
  ]);
}