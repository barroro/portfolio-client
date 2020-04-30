import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagasConfig';
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);

export default store;
