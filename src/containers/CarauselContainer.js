import { connect } from 'react-redux';
import ProductSlider from '../components/ProductSlider';

const mapStateToProps = function (store) {
  return {
    products: store.productsState.products,
  };
};

export default connect(mapStateToProps)(ProductSlider);
