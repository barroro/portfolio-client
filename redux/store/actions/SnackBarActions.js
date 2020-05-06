

export const snackBarActionTypes = {
  SHOW_SNACKBAR: 'SHOW_SNACKBAR',
  HIDE_SNACKBAR: 'HIDE_SNACKBAR',
};

export const snackBarActions = {
  showSnackBarAction: (payload) => ({
    type: snackBarActionTypes.SHOW_SNACKBAR,
    payload
  }),
  hideSnackBarAction: (payload) => ({
    type: snackBarActionTypes.HIDE_SNACKBAR,
    payload
  }),
}