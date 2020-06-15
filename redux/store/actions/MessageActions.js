
export const messageActionTypes = {
  GET_MESSAGES: 'GET_MESSAGES',
  GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
  GET_MESSAGES_ERROR: 'GET_MESSAGES_ERROR',
  CREATE_MESSAGE: 'CREATE_MESSAGE',
  CREATE_MESSAGE_SUCCESS: 'CREATE_MESSAGE_SUCCESS',
  CREATE_MESSAGE_ERROR: 'CREATE_MESSAGE_ERROR',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
  UPDATE_MESSAGE_SUCCESS: 'UPDATE_MESSAGE_SUCCESS',
  UPDATE_MESSAGE_ERROR: 'UPDATE_MESSAGE_ERROR',
  DELETE_MESSAGE: 'DELETE_MESSAGE',
  DELETE_MESSAGE_SUCCESS: 'DELETE_MESSAGE_SUCCESS',
  DELETE_MESSAGE_ERROR: 'DELETE_MESSAGE_ERROR',
  GET_MESSAGE: 'GET_MESSAGE',
  GET_MESSAGE_SUCCESS: 'GET_MESSAGE_SUCCESS',
  GET_MESSAGE_ERROR: 'GET_MESSAGE_ERROR',
  OPEN_MESSAGE_MODAL: 'OPEN_MESSAGE_MODAL',
  CLOSE_MESSAGE_MODAL: 'CLOSE_MESSAGE_MODAL'
};

export const messageActions = {
  getMessagesAction: (payload) => ({
    type: messageActionTypes.GET_MESSAGES,
    payload
  }),
  getMessagesSuccessAction: (payload) => ({
    type: messageActionTypes.GET_MESSAGES_SUCCESS,
    payload
  }),
  getMessagesErrorAction: (payload) => ({
    type: messageActionTypes.GET_MESSAGES_ERROR,
    payload
  }),
  createMessageAction: (payload) => ({
    type: messageActionTypes.CREATE_MESSAGE,
    payload
  }),
  createMessageSuccessAction: (payload) => ({
    type: messageActionTypes.CREATE_MESSAGE_SUCCESS,
    payload
  }),
  createMessageErrorAction: (payload) => ({
    type: messageActionTypes.CREATE_MESSAGE_ERROR,
    payload
  }),
  updateMessageAction: (payload) => ({
    type: messageActionTypes.UPDATE_MESSAGE,
    payload
  }),
  updateMessageSuccessAction: (payload) => ({
    type: messageActionTypes.UPDATE_MESSAGE_SUCCESS,
    payload
  }),
  updateMessageErrorAction: (payload) => ({
    type: messageActionTypes.UPDATE_MESSAGE_ERROR,
    payload
  }),
  deleteMessageAction: (payload) => ({
    type: messageActionTypes.DELETE_MESSAGE,
    payload
  }),
  deleteMessageSuccessAction: (payload) => ({
    type: messageActionTypes.DELETE_MESSAGE_SUCCESS,
    payload
  }),
  deleteMessageErrorAction: (payload) => ({
    type: messageActionTypes.DELETE_MESSAGE_ERROR,
    payload
  }),
  getMessageAction: (payload) => ({
    type: messageActionTypes.GET_MESSAGE,
    payload
  }),
  getMessageSuccessAction: (payload) => ({
    type: messageActionTypes.GET_MESSAGE_SUCCESS,
    payload
  }),
  getMessageErrorAction: (payload) => ({
    type: messageActionTypes.GET_MESSAGE_ERROR,
    payload
  }),
  openMessageModalAction: (payload) => ({
    type: messageActionTypes.OPEN_MESSAGE_MODAL,
    payload
  }),
  closeMessageModalAction: (payload) => ({
    type: messageActionTypes.CLOSE_MESSAGE_MODAL,
    payload
  }),
}