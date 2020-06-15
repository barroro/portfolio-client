import { ImagesActionTypes } from "../actions/ImageActions"

const INITIALSTATE = {
  images: [],
  image: null,
  imagesLoading: false,
  imageLoading: false,
  imageUploading: false,
  modal: {
    open: false,
    data: null
  }
}

export const getNewState = (state, newState) => {
  return Object.assign({}, state, newState)
}

const imageReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ImagesActionTypes.GET_IMAGES:
      return {
        ...state,
        imagesLoading: true
      }

    case ImagesActionTypes.IMAGES_GET_SUCCESS:
      return {
        ...state,
        images: action.payload,
        imagesLoading: false
      }

    case ImagesActionTypes.GET_IMAGE:
      return {
        ...state,
        imageLoading: true
      }

    case ImagesActionTypes.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: true
        }
      }

    case ImagesActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: false
        }
      }

    case ImagesActionTypes.GET_IMAGE_SUCCESS:
      return {
        ...state,
        image: action.payload,
        imageLoading: false,
        modal: {
          ...state.modal,
          open: false
        }
      }

    case ImagesActionTypes.GET_IMAGE_ERROR:
      return {
        ...state,
        image: action.payload,
        imageLoading: false,
        modal: {
          ...state.modal,
          open: false
        }
      }

    case ImagesActionTypes.UPLOAD_IMAGE:
      return {
        ...state,
        imageUploading: true
      }

    case ImagesActionTypes.UPLOAD_IMAGE_SUCCESS:
      var newArrayImages = state.images.concat(action.payload);
      return {
        ...state,
        images: newArrayImages,
        imageUploading: false,
        modal: {
          ...state.modal,
          open: false
        }
      }

    case ImagesActionTypes.UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        imageUploading: false
      }

    default:
      return state
  }
}
export default imageReducer