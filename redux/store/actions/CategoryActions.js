
export const categoryActionTypes = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',
  CREATE_CATEGORY: 'CREATE_CATEGORY',
  CREATE_CATEGORY_SUCCESS: 'CREATE_CATEGORY_SUCCESS',
  CREATE_CATEGORY_ERROR: 'CREATE_CATEGORY_ERROR',
  GET_CATEGORY: 'GET_CATEGORY',
  GET_CATEGORY_SUCCESS: 'GET_CATEGORY_SUCCESS',
  GET_CATEGORY_ERROR: 'GET_CATEGORY_ERROR'
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
  getCategoryAction: (payload) => ({
    type: categoryActionTypes.GET_CATEGORY,
    payload
  }),
  getCategorySuccessAction: (payload) => ({
    type: CategoriesActionTypes.GET_CATEGORY_SUCCESS,
    payload
  }),
  getCategoryErrorAction: (payload) => ({
    type: CategoriesActionTypes.GET_CATEGORY_ERROR,
    payload
  }),
}