import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import searchReducer from './Search/searchReducer';

const store = createStore(searchReducer, applyMiddleware(logger))

export default store;