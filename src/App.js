import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from './actions/products';
// components
import Header from './wrappers/Header';
import MainContent from './wrappers/MainContent';
import FooterWrap from './wrappers/FooterWrap';
import CartContainer from './containers/CartContainer';
import OneProduct from './containers/OneProduct';
// css libraryes
import './styles/bootstrap.min.css';
import './styles/owl.carousel.min.css';
import './styles/owl.theme.default.min.css';
import './themify-icons/themify-icons.css';
// custom css
import './styles/style.css';

class App extends Component {
  componentDidMount() {
    this.props.loadProductsToList();
  }

  render() {
    return (
      <Router basename="/shop">
        <Header />
        <Route exact path="/" component={MainContent} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/product/:id" component={OneProduct} />
        <FooterWrap />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadProductsToList: () => dispatch(loadProducts()),
});

export default connect(null, mapDispatchToProps)(App);

// export default App;
