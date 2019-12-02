/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import CartBanner from './CartBanner';
import RemoveProducts from '../containers/RemoveProducts';

class Cart extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const Items = this.props.productsCart.map((items, index) => (
      <RemoveProducts
        key={items.id}
        id={items.id}
        index={index}
        title={items.title}
        img={items.img}
        price={items.price}
      />
    ));

    const price = this.props.productsCart.reduce(
      (accumulator, currentItem) => accumulator += currentItem.price,
      0,
    );

    return (
      <div>
        <CartBanner title="Shopping Cart" />
        {
          Items.length === 0
            ? <p className="empty_cart">The cart is empty</p>
            : (
              <section className="cart_area">
                <div className="container">
                  <div className="cart_inner">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th />
                            <th>Price</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {Items}
                          <tr className="bottom_button">
                            <td />
                            <td />
                            <td />
                            <td>
                              <div className="cupon_text d-flex align-items-center">
                                <input type="text" placeholder="Coupon Code" />
                                <a className="primary-btn" href="index.html">Apply</a>
                                <a className="button" href="index.html">Have a Coupon?</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td />
                            <td>
                              <h5>Total</h5>
                            </td>
                            <td>
                              <h5>
                                $
                                {price}
                              </h5>
                            </td>
                          </tr>
                          <tr className="out_button_area">
                            <td className="d-none-l" />
                            <td className="" />
                            <td />
                            <td>
                              <div className="checkout_btn_inner d-flex align-items-center">
                                <a className="gray_btn" href="index.html">Continue Shopping</a>
                                <a className="primary-btn ml-2" href="index.html">Proceed to checkout</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            )
          }
      </div>
    );
  }
}

export default Cart;
