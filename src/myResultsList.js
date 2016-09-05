    //Search Bar
import React, { Component, PropTypes } from 'react'
import { Link} from 'react-router'
export default class ResultsList extends Component {
      constructor(props) {
          super(props)
      }
      render() {
        
          var createItem = function(repo, idx) {
            return <li key={idx}><Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link></li>;
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
}