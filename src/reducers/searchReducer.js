import initialState from './initialState';

export default function searchReducer(state = initialState.results, action) {
  switch (action.type) {
    case 'LOAD_RESULTS_SUCCESS':
      return action.results;

    default:
      return state;
  }
}