/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class BtnBlue extends Component {
  render() {
    return (
      <a className={this.props.classes} href="index1.html">{this.props.txt}</a>
    );
  }
}

export default BtnBlue;
