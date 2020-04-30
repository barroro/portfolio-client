
import { combineReducers } from 'redux'
import worksReducer from './WorksReducer';
import imageReducer from './ImageReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  worksReducer,
  imageReducer,
  categoryReducer
})

export default rootReducer