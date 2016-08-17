var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");

//Search Bar
var SearchBar = React.createClass({
  
  onChange: function(e) { 
    // console.log(e.target.value)
    this.props.onTextChange(e.target.value);
  }, 
  render: function() {
    return (
      <div><input placeholder="type search term" onChange={this.onChange}/></div>
    );
  }
});   
// Results List
var ResultsList = React.createClass({

  render: function() {
    
      var createItem = function(item, idx) {
        return <li key={idx}>{item.text}</li>;
      };
      var list;
      if(this.props.results && this.props.results.length && !this.props.loading) {
        list = this.props.results.map(createItem);
      } else if(this.props.results.length==0  && !this.props.loading){
        list = 'no items yet';
      } else if(this.props.loading) {
        list = <div className="loader">Loading...</div>;
      }
      return <ul className="results">{list}</ul>;
    
  }
});
//Search Page
var SearchPage = React.createClass({
  getInitialState: function() {
    return {results: [],loading:false};
  }, 
  loadResults: function(query){
    this.setState({loading:true});
    
    var url = "https://api.github.com/search/repositories?q="+query+"+language:typescript&sort=stars&order=desc";
    $.get(url)
    .then(function (result) {
      
      if(result.items.length!==0){ 
        var results = result.items.map(item => { 
          return   {text: item.name}
        }).slice(0,5);
        
      }
      this.setState({loading: false, results:results});
    }.bind(this));//<-- important to bind this for use "setState"
    
  },
  handleSearchTextChange: function(txt){

    this.loadResults(txt)
    
  },
  render: function() {
    return (
      <div>
        <SearchBar onTextChange={this.handleSearchTextChange}/>
        <ResultsList results={this.state.results}  loading={this.state.loading}/>
      </div>
    );
  }
});
    
ReactDOM.render(
    <SearchPage />,
    document.getElementById('example')
);
module.exports = SearchPage;