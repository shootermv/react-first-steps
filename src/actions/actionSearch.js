import {loadingFinished, loadingStarted} from './actionLoading'
export function loadResultsSuccess(results) {
  return { type: 'LOAD_RESULTS_SUCCESS', results};
}

export function loadResults(query) {
  return function(dispatch) {
     let url = "https://api.github.com/search/repositories?q="+query+"+language:typescript&sort=stars&order=desc";
     dispatch(loadingStarted());
     return  fetch(url)
        .then(function(response) {
	        return response.json();
        })
        .then((result) => {
            dispatch(loadingFinished());
            let results;
            if (result.items.length !== 0) { 
               results = result.items.slice(0,5);
            } else {
               results = [];
            }
            //DISPATCH RESULTS
            dispatch(loadResultsSuccess(results));
        });
  };
}