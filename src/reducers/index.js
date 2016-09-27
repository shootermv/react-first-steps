import {combineReducers} from 'redux';
import searchResults from './searchReducer';
import loading from './loadingReducer';

const rootReducer = combineReducers({
  results: searchResults,
  loading
});

export default rootReducer;