/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class CartLink extends Component {
  render() {
    return (
      <NavLink activeClassName="active" className="cart_link" to="/cart">
        <i className="ti-shopping-cart" />
        {
          this.props.productsCart.length === 0
            ? null
            : (
              <span className="nav-shop__circle">
                {this.props.productsCart.length}
              </span>
            )
        }
      </NavLink>
    );
  }
}

export default CartLink;
