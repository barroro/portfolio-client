
import { combineReducers } from 'redux'
import worksReducer from './WorksReducer';
import imageReducer from './ImageReducer';
import categoryReducer from './categoryReducer';
import socialNetworkReducer from './socialNetworkReducer';

const rootReducer = combineReducers({
  worksReducer,
  imageReducer,
  categoryReducer,
  socialNetworkReducer
})

export default rootReducer