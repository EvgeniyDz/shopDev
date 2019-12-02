/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import { removeProducts } from '../actions/products';

const mapStateToProps = function (store) {
  return {
    productsCart: store.productsState.productsCart,
  };
};


const mapDispatchToProps = function (dispatch) {
  return {
    removeProductsToList: item => dispatch(removeProducts(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
