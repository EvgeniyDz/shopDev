import React from 'react';
import BtnBlue from './BtnBlue';

function MainBanner() {
  return (
    <section className="offer" id="parallax-1" data-anchor-target="#parallax-1" data-300-top="background-position: 20px 30px" data-top-bottom="background-position: 0 20px">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="offer__content text-center">
              <h3>Up To 50% Off</h3>
              <h4>Winter Sale</h4>
              <p>Him she'd let them sixth saw light</p>
              <BtnBlue classes="button button--active mt-3 mt-xl-4" txt="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
