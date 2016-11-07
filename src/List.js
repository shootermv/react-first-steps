import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

let List = ({results}) => {
      let createItem = function(repo, idx) {
        return <li key={idx}><Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link></li>;
      };

      return <ul className="results">{results.map(createItem)}</ul>
};
export default List;