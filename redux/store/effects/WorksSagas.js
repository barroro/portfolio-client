import { all, takeLatest, put, call } from "redux-saga/effects";
import { WorksActionTypes } from "../actions/WorksActions";
import { worksActions } from "../actions/WorksActions";
import { getWorksApi, WorkService } from "../../../services/WorkService";
import Router from 'next/router';

const workService = new WorkService();

function* getWorks() {
  try {
    const { data } = yield call(workService.getWorksApi);
    yield put(worksActions.worksGetSuccessAction(data));
  } catch (error) {
    yield put(worksActions.worksGetErrorAction(error));
  }
}

function* getActiveWorks() {
  try {
    const { data } = yield call(workService.getActiveWorks);
    yield put(worksActions.getActiveWorksSuccessAction(data));
  } catch (error) {
    yield put(worksActions.getActiveWorksErrorAction(error));
  }
}

function* getWork(action) {
  try {
    const { data } = yield call(workService.get, action.payload);
    yield put(worksActions.getWorkSuccessAction(data));
  } catch (error) {
    yield put(worksActions.getWorkErrorAction(error));
  }
}

function* createWork(action) {
  try {
    const { data } = yield call(workService.create, action.payload);
    yield put(worksActions.createWorkSuccessAction(data.workCreated));
  } catch (error) {
    yield put(worksActions.createWorkErrorAction(error));
  }
}

function* createWorkSuccess(action) {
  yield put(Router.push('/dashboard/works'));
}

function* updateWork(action) {
  try {
    const { data } = yield call(workService.update, action.payload);
    yield put(worksActions.updateWorkSuccessAction(data.workUpdated));
  } catch (error) {
    yield put(worksActions.updateWorkErrorAction(error));
  }
}

function* updateWorkSuccess(action) {
  yield call(Router.push, '/dashboard/works')
}

export default function* worksSagas() {
  yield all([
    takeLatest(WorksActionTypes.GET_WORKS, getWorks),
    takeLatest(WorksActionTypes.GET_ACTIVE_WORKS, getActiveWorks),
    takeLatest(WorksActionTypes.GET_WORK, getWork),
    takeLatest(WorksActionTypes.CREATE_WORK, createWork),
    takeLatest(WorksActionTypes.CREATE_WORK_SUCCESS, createWorkSuccess),
    takeLatest(WorksActionTypes.UPDATE_WORK, updateWork),
    takeLatest(WorksActionTypes.UPDATE_WORK_SUCCESS, updateWorkSuccess),
  ]);
}