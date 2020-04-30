import { all, takeLatest, put, call } from "redux-saga/effects";
import { categoryActions, categoryActionTypes } from '../actions/CategoryActions';
import { CategoryService } from "../../../services/CategoryService";

const categoryService = new CategoryService();

function* getCategories() {
  try {
    const { data } = yield call(categoryService.getAll);
    yield put(categoryActions.getCategoriesSuccessAction(data));
  } catch (error) {
    yield put(categoryActions.getCategoriesErrorAction(error));
  }
}

function* getCategory(action) {
  try {
    const { data } = yield call(categoryService.get, action.payload);
    yield put(categoryActions.getCategorySuccessAction(data));
  } catch (error) {
    yield put(categoryActions.getCategoryErrorAction(error));
  }
}

function* createCategory(action) {
  try {
    const { data } = yield call(categoryService.create, action.payload);
    yield put(categoryActions.createCategorySuccessAction(data));
  } catch (error) {
    console.log(error);
    yield put(categoryActions.createCategoryErrorAction(error));
  }
}

export default function* categorySagas() {
  yield all([
    takeLatest(categoryActionTypes.GET_CATEGORIES, getCategories),
    takeLatest(categoryActionTypes.GET_CATEGORY, getCategory),
    takeLatest(categoryActionTypes.CREATE_CATEGORY, createCategory),
  ]);
}