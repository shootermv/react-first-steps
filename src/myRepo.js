   
import React, { Component, PropTypes } from 'react'

export default class myRepo extends Component {
    constructor(props) {
        super(props);
    }    
    render() {
        return (
            <ul>
                <li><strong>owner</strong>:{this.props.params.owner}</li>
                <li><strong>repo</strong>:{this.props.params.repo}</li>
                <a href="#/">back</a>
            </ul>
        );
    }
}
