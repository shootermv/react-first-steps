import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

let NoItems = ({results, loading}) => {
     if (results.length===0 && !loading) {
       return (<ul className="results">no results yet</ul>)
     } else {
       return (<div/>); 
     }
      
};
export default NoItems;