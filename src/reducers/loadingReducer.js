import initialState from './initialState';

export default function searchReducer(state = initialState.loading, action) {
  switch (action.type) {
    case 'LOADING_STARTED':
      return action.loading;
    case 'LOADING_FINISHED':
      return action.loading;    
    default:
      return state;
  }
}