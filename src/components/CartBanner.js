/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class CartBanner extends Component {
  render() {
    return (

      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
      </section>


    );
  }
}

export default CartBanner;
