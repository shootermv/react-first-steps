//Search Page
import React, { Component, PropTypes } from 'react'
import SearchBar from './mySearchBar';
import ResultsList from './myResultsList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from './actions/actionSearch';


let SearchPage = ({results, loading, loadResults}) => {  
  return (
    <div>
      <SearchBar onChange={loadResults}/>
      <ResultsList />
    </div>
  );
}

    

function mapStateToProps(state, ownProps) {
  return {
    results: state.results,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadResults: bindActionCreators(searchActions.loadResults, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);    