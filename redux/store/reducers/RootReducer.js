
import { combineReducers } from 'redux'
import worksReducer from './WorksReducer';
import imageReducer from './ImageReducer';
import categoryReducer from './categoryReducer';
import socialNetworkReducer from './socialNetworkReducer';
import snackBarReducer from './snackBarReducer';

const rootReducer = combineReducers({
  worksReducer,
  imageReducer,
  categoryReducer,
  socialNetworkReducer,
  snackBarReducer
})

export default rootReducer