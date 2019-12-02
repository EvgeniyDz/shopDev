/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="section-intro pb-60px">
        <p>{this.props.subTitle}</p>
        <h2>{this.props.title1} <span className="section-intro__style">{this.props.title2}</span></h2>
      </div>
    );
  }
}

export default Title;
