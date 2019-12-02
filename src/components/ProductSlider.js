/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Title from './Title';
import AddProducts from '../containers/AddProducts';
// import 'react-owl-carousel2/style.css';

class ProductSlider extends Component {
  render() {
    const options = {
      loop: true,
      margin: 30,
      nav: true,
      navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1130: {
          items: 4,
        },
      },
    };
    const Items = this.props.products.map(items => (
      <AddProducts
        key={items.id}
        id={items.id}
        title={items.title}
        img={items.images}
        price={items.price}
        type={items.type}
      />
    ));


    return (
      <section className="section-margin calc-60px">
        <div className="container">
          <Title subTitle="Popular Item in the market" title1="Best" title2="Sellers" />
          {
            Items.length === 0
              ? null
              : (
                <OwlCarousel className="owl-carousel owl-theme" id="bestSellerCarousel" options={options}>
                  {Items}
                </OwlCarousel>
              )
        }
        </div>
      </section>


    );
  }
}

export default ProductSlider;
