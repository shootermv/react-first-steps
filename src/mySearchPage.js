//Search Page
import React, { Component, PropTypes } from 'react'
import SearchBar from './mySearchBar';
import ResultsList from './myResultsList';

export default class SearchPage extends Component {
      constructor(props) {
        super(props)
        this.state = {results: [],loading:false};
      }

      loadResults(query){
        if(query==''){
          this.setState({
            loading: false, 
            results:[]
          });
          return;
          
        }
        
        this.setState({loading:true});
        var results = [];
        
        var url = "https://api.github.com/search/repositories?q="+query+"+language:typescript&sort=stars&order=desc";
        fetch(url)
        .then(function(response) { 
	        // Convert to JSON
	        return response.json();
        })
        .then(function (result) {
            if(result.items.length!==0){ 
               results =result.items.slice(0,5);
            }else{
               results = []
            }
            this.setState({loading: false, results:results});
        }.bind(this));//<-- important to bind this for use "setState"
        
      }

      handleSearchTextChange(txt) {

        this.loadResults(txt)
       
      }

      render() {
        return (
          <div>
            <SearchBar onChange={this.handleSearchTextChange.bind(this)}/>
            <ResultsList results={this.state.results}  loading={this.state.loading}/>
          </div>
        );
      }
};
    