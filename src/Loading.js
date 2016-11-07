import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

let Loading = ({loading}) => {
     if(loading) {
       return (<ul className="results">loading...</ul>)
     } else {
       return (<div/>); 
     }     
};
export default Loading;