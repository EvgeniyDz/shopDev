/* eslint-disable max-len */
import React from 'react';
import Title from './Title';

function News() {
  return (
    <section className="blog">
      <div className="container">
        <Title subTitle="Popular Item in the market" title1="Latest" title2="News" />

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img className="card-img rounded-0" src="img/blog/blog1.png" alt="" />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li><a href="index.html">By Admin</a></li>
                  <li>
                    <a href="index.html">
                      <i className="ti-comments-smiley" />
                      2 Comments
                    </a>
                  </li>
                </ul>
                <h4 className="card-blog__title"><a href="single-blog.html">The Richland Center Shooping News and weekly shooper</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a className="card-blog__link" href="index.html">
                  Read More
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img className="card-img rounded-0" src="img/blog/blog2.png" alt="" />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li><a href="index.html">By Admin</a></li>
                  <li>
                    <a href="index.html">
                      <i className="ti-comments-smiley" />
                    2 Comments
                    </a>
                  </li>
                </ul>
                <h4 className="card-blog__title"><a href="single-blog.html">The Shopping News also offers top-quality printing services</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a className="card-blog__link" href="index.html">
                    Read More
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img className="card-img rounded-0" src="img/blog/blog3.png" alt="" />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li><a href="index.html">By Admin</a></li>
                  <li>
                    <a href="index.html">
                      <i className="ti-comments-smiley" />
                    2 Comments
                    </a>
                  </li>
                </ul>
                <h4 className="card-blog__title"><a href="single-blog.html">Professional design staff and efficient equipment you’ll find we offer</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a className="card-blog__link" href="index.html">
                        Read More
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
