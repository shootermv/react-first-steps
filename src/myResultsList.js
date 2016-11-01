    //Search Bar
import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

let ResultsList = ({results, loading}) => {
        
      let createItem = function(repo, idx) {
        return <li key={idx}><Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link></li>;
      };
      let list;
      if(results && !loading) {
        list = results.length==0  ? 'no items yet' : results.map(createItem);
      } else {
        list = <div className="loader">Loading...</div>;
      }
      return <ul className="results">{list}</ul>;
             
}
export default ResultsList;