import { messageActionTypes } from "../actions/MessageActions"

const INITIALSTATE = {
  messages: [],
  message: null,
  messagesLoading: false,
  messageLoading: false,
  messageSaving: false,
  editing: false,
  modal: {
    open: false,
    data: null,
    editing: false
  }
}

const messageReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case messageActionTypes.GET_MESSAGES:
      return {
        ...state,
        messagesLoading: true
      }

    case messageActionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        messagesLoading: false
      }

    case messageActionTypes.GET_MESSAGES_ERROR:
      return {
        ...state,
        messageLoading: true
      }

    case messageActionTypes.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        messageLoading: false
      }

    case messageActionTypes.CREATE_MESSAGE:
      return {
        ...state,
        messageSaving: true
      }

    case messageActionTypes.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        modal: {
          open: false,
          editing: false,
          data: null
        },
        messageSaving: false
      }

    case messageActionTypes.UPDATE_MESSAGE:
      return {
        ...state,
        messageSaving: true
      }

    case messageActionTypes.UPDATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: state.messages.map(c => {
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
        },
        messageSaving: false
      }

    case messageActionTypes.DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: state.messages.filter(c => c.id !== action.payload),
      }

    case messageActionTypes.OPEN_MESSAGE_MODAL:
      return {
        ...state,
        modal: action.payload
      }

    case messageActionTypes.CLOSE_MESSAGE_MODAL:
      return {
        ...state,
        modal: action.payload
      }

    default:
      return state
  }
}
export default messageReducer