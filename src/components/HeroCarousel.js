import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';

function HeroCarousel() {
  const options = {
    items: 3,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      810: {
        items: 3,
      },
    },
  };

  return (
    <section className="section-margin mt-0">
      <OwlCarousel className="owl-carousel owl-theme hero-carousel" options={options}>
        <div className="hero-carousel__slide">
          <img src="img/home/hero-slide1.png" alt="" className="img-fluid" />
          <a href="index.html" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="img/home/hero-slide2.png" alt="" className="img-fluid" />
          <a href="index.html" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="img/home/hero-slide3.png" alt="" className="img-fluid" />
          <a href="index.html" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
      </OwlCarousel>

    </section>
  );
}

export default HeroCarousel;
