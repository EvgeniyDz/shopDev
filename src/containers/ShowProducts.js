import { connect } from 'react-redux';
import ProductsRow from '../components/ProductsRow';

const mapStateToProps = function (store) {
  return {
    products: store.productsState.products,
  };
};


export default connect(mapStateToProps)(ProductsRow);
