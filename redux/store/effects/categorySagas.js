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

function* updateCategory(action) {
  try {
    console.log('Update saga: ', action.payload)
    const { data } = yield call(categoryService.update, action.payload);
    yield put(categoryActions.updateCategorySuccessAction(data));
  } catch (error) {
    console.log(error);
    yield put(categoryActions.updateCategoryErrorAction(error));
  }
}

function* deleteCategory(action) {
  try {
    const { data } = yield call(categoryService.delete, action.payload);
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
    takeLatest(categoryActionTypes.UPDATE_CATEGORY, updateCategory),
    takeLatest(categoryActionTypes.DELETE_CATEGORY, deleteCategory),
  ]);
}