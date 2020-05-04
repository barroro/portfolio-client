
export const categoryActionTypes = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',
  CREATE_CATEGORY: 'CREATE_CATEGORY',
  CREATE_CATEGORY_SUCCESS: 'CREATE_CATEGORY_SUCCESS',
  CREATE_CATEGORY_ERROR: 'CREATE_CATEGORY_ERROR',
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
  UPDATE_CATEGORY_SUCCESS: 'UPDATE_CATEGORY_SUCCESS',
  UPDATE_CATEGORY_ERROR: 'UPDATE_CATEGORY_ERROR',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
  DELETE_CATEGORY_ERROR: 'DELETE_CATEGORY_ERROR',
  GET_CATEGORY: 'GET_CATEGORY',
  GET_CATEGORY_SUCCESS: 'GET_CATEGORY_SUCCESS',
  GET_CATEGORY_ERROR: 'GET_CATEGORY_ERROR',
  OPEN_CATEGORY_MODAL: 'OPEN_CATEGORY_MODAL',
  CLOSE_CATEGORY_MODAL: 'CLOSE_CATEGORY_MODAL'
};

export const categoryActions = {
  getCategoriesAction: (payload) => ({
    type: categoryActionTypes.GET_CATEGORIES,
    payload
  }),
  getCategoriesSuccessAction: (payload) => ({
    type: categoryActionTypes.GET_CATEGORIES_SUCCESS,
    payload
  }),
  getCategoriesErrorAction: (payload) => ({
    type: categoryActionTypes.GET_CATEGORIES_ERROR,
    payload
  }),
  createCategoryAction: (payload) => ({
    type: categoryActionTypes.CREATE_CATEGORY,
    payload
  }),
  createCategorySuccessAction: (payload) => ({
    type: categoryActionTypes.CREATE_CATEGORY_SUCCESS,
    payload
  }),
  createCategoryErrorAction: (payload) => ({
    type: categoryActionTypes.CREATE_CATEGORY_ERROR,
    payload
  }),
  updateCategoryAction: (payload) => ({
    type: categoryActionTypes.UPDATE_CATEGORY,
    payload
  }),
  updateCategorySuccessAction: (payload) => ({
    type: categoryActionTypes.UPDATE_CATEGORY_SUCCESS,
    payload
  }),
  updateCategoryErrorAction: (payload) => ({
    type: categoryActionTypes.UPDATE_CATEGORY_ERROR,
    payload
  }),
  deleteCategoryAction: (payload) => ({
    type: categoryActionTypes.DELETE_CATEGORY,
    payload
  }),
  deleteCategorySuccessAction: (payload) => ({
    type: categoryActionTypes.DELETE_CATEGORY_SUCCESS,
    payload
  }),
  deleteCategoryErrorAction: (payload) => ({
    type: categoryActionTypes.DELETE_CATEGORY_ERROR,
    payload
  }),
  getCategoryAction: (payload) => ({
    type: categoryActionTypes.GET_CATEGORY,
    payload
  }),
  getCategorySuccessAction: (payload) => ({
    type: categoryActionTypes.GET_CATEGORY_SUCCESS,
    payload
  }),
  getCategoryErrorAction: (payload) => ({
    type: categoryActionTypes.GET_CATEGORY_ERROR,
    payload
  }),
  openCategoryModalAction: (payload) => ({
    type: categoryActionTypes.OPEN_CATEGORY_MODAL,
    payload
  }),
  closeCategoryModalAction: (payload) => ({
    type: categoryActionTypes.CLOSE_CATEGORY_MODAL,
    payload
  }),
}