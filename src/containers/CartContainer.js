import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = function (store) {
  return {
    productsCart: store.productsState.productsCart,
  };
};


export default connect(mapStateToProps)(Cart);
