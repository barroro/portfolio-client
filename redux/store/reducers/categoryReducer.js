import { categoryActionTypes } from "../actions/CategoryActions"

const INITIALSTATE = {
  categories: [],
  category: null,
  categoriesLoading: false,
  categoryLoading: false,
  categorySaving: false
}

const categoryReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case categoryActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categoriesLoading: true
      }

    case categoryActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        categoriesLoading: false
      }

    case categoryActionTypes.GET_CATEGORY:
      return {
        ...state,
        categoryLoading: true
      }

    case categoryActionTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        categoryLoading: false
      }

    case categoryActionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      }

    default:
      return state
  }
}
export default categoryReducer