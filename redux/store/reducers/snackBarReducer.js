import { snackBarActionTypes } from "../actions/SnackBarActions"

const INITIALSTATE = {
  openSnackbar: false,
  snackBar: {
    open: false,
    message: null,
    closeButton: false
  }
}

const snackBarReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case snackBarActionTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackBar: action.payload
      }

    case snackBarActionTypes.HIDE_SNACKBAR:
      return {
        ...state,
        snackBar: {
          open: false,
          message: null,
          closeButton: false
        }
      }

    default:
      return state
  }
}
export default snackBarReducer