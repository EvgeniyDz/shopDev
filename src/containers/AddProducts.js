/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import Item from '../components/Item';
import { addProducts } from '../actions/products';

const mapStateToProps = function (store, ownProps) {
  return {
    // productsCart: store.productsState.productsCart
    alreadyAdded: !!store.productsState.productsCart.find(item => item.title === ownProps.title),
  };
};


const mapDispatchToProps = function (dispatch) {
  return {
    addProductsToList: item => dispatch(addProducts(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
