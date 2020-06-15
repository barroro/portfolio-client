
import { combineReducers } from 'redux'
import worksReducer from './WorksReducer';
import imageReducer from './ImageReducer';
import categoryReducer from './categoryReducer';
import socialNetworkReducer from './socialNetworkReducer';
import snackBarReducer from './snackBarReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  worksReducer,
  imageReducer,
  categoryReducer,
  socialNetworkReducer,
  snackBarReducer,
  messageReducer
})

export default rootReducer