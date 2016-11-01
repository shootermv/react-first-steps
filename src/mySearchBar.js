//Search Bar
import React, { Component, PropTypes } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  handleKeyUp (e) {
    this.props.onChange(e.target.value);
  }
  render () {
    return (
      <div><input placeholder="type search term" onChange={this.handleKeyUp}/></div>
    );
  }
};
    