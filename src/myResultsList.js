    //Search Bar
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import List from './List'
import Loading from './Loading'
import NoItems from './NoItems'
let ResultsList = ({results, loading}) => {
        
      return (<div>
        <Loading loading={loading}/>
        <List results={results}/>
        <NoItems results={results} loading={loading}/>
      </div>);
             
}

function mapStateToProps(state, ownProps) {
  return {
    results: state.results,
    loading: state.loading
  };
}

export default connect(mapStateToProps, {})(ResultsList);
