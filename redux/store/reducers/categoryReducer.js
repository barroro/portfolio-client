import { categoryActionTypes } from "../actions/CategoryActions"

const INITIALSTATE = {
  categories: [],
  category: null,
  categoriesLoading: false,
  categoryLoading: false,
  categorySaving: false,
  editing: false,
  modal: {
    open: false,
    data: null,
    editing: false
  }
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

    case categoryActionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.map(c => {
          if (c.id == action.payload.id) {
            c = action.payload;
            return c;
          }
          return c;
        }),
        modal: {
          open: false,
          editing: false,
          data: null
        }
      }

    case categoryActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter(c => c.id !== action.payload),
      }

    case categoryActionTypes.OPEN_CATEGORY_MODAL:
      return {
        ...state,
        modal: action.payload
      }

    case categoryActionTypes.CLOSE_CATEGORY_MODAL:
      return {
        ...state,
        modal: action.payload
      }

    default:
      return state
  }
}
export default categoryReducer