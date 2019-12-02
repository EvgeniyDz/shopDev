/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { addProducts } from '../actions/products';

const mapStateToProps = function (store, ownProps) {
  return {
    product: store.productsState.products.find(item => item.id === (+ownProps.match.params.id)),
    alreadyAdded: !!store.productsState.productsCart.find(item => item.id === (+ownProps.match.params.id)),
  };
};


const mapDispatchToProps = function (dispatch) {
  return {
    addProductsToList: item => dispatch(addProducts(item)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductItem));
