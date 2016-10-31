//Search Page
import React, { Component, PropTypes } from 'react'
import SearchBar from './mySearchBar';
import ResultsList from './myResultsList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from './actions/actionSearch';

class SearchPage extends Component {
      constructor(props) {
        super(props)
      }

      render() {
        const {results, loading} = this.props;
       
        return (
          <div>
            <SearchBar onChange={this.props.loadResults}/>
            <ResultsList results={results} loading={loading}/>
          </div>
        );
      }
};
    

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