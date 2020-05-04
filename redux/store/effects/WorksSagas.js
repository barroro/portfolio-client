import { all, takeLatest, put, call } from "redux-saga/effects";
import { WorksActionTypes } from "../actions/WorksActions";
import { worksActions } from "../actions/WorksActions";
import { getWorksApi, WorkService } from "../../../services/WorkService";

const workService = new WorkService();

function* getWorks() {
  try {
    const { data } = yield call(workService.getWorksApi);
    yield put(worksActions.worksGetSuccessAction(data));
  } catch (error) {
    yield put(worksActions.worksGetErrorAction(error));
  }
}

function* getWork(action) {
  try {
    const { data } = yield call(workService.get, action.payload);
    yield put(worksActions.getWorkSuccessAction(data));
  } catch (error) {
    console.log(error);
    yield put(worksActions.getWorkErrorAction(error));
  }
}

export default function* worksSagas() {
  yield all([
    takeLatest(WorksActionTypes.GET_WORKS, getWorks),
    takeLatest(WorksActionTypes.GET_WORK, getWork),
  ]);
}