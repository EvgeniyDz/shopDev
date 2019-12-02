/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Title from './Title';
import AddProducts from '../containers/AddProducts';

class ProductRow extends Component {
  render() {
    if (!this.props.products) {
      return <p>Loading... </p>;
    }
    // iterated array items
    const Items = this.props.products.map(items => (
      <div className="col-md-6 col-lg-4 col-xl-3" key={items.id}>
        <AddProducts
          key={items.id}
          id={items.id}
          title={items.title}
          img={items.images}
          price={items.price}
          type={items.type}
        />
      </div>
    ));

    return (
      <section className="section-margin calc-60px">
        <div className="container">
          <Title subTitle="Popular Item in the market" title1="Trending" title2="Product" />
          <div className="row">
            {Items}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductRow;
