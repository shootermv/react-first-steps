   
import React, { Component, PropTypes } from 'react'

let myRepo = ({params:{owner}, params:{repo}}) => {
 return (
    <ul>
        <li><strong>owner</strong>:{owner}</li>
        <li><strong>repo</strong>:{repo}</li>
        <a href="#/">back</a>
    </ul>
   );
};

export default myRepo;      

