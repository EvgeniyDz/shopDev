/* eslint-disable no-undef */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BtnHeader from '../components/BtnHeader';
import CartLength from '../containers/CartLength';
import url from '../img/logo.png';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY >= 100) {
      this.setState({
        transform: true,
      });
    } else {
      this.setState({
        transform: false,
      });
    }
  }

  render() {
    return (
      <header className={this.state.transform ? 'header_area fixed' : 'header_area'} ref={this.headerRef}>
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <NavLink className="navbar-brand logo_h" activeClassName="active" to="/" exact><img src={url} alt="" /></NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/" exact>Home</NavLink>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Shop Category</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Product Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Product Checkout</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Confirmation</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Shopping Cart</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="login.html">Login</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="register.html">Register</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="tracking-order.html">Tracking</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>

                <ul className="nav-shop">
                  <li className="nav-item">
                    <CartLength />
                  </li>
                  <li className="nav-item">
                    <BtnHeader />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
