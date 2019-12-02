import { connect } from 'react-redux';
import CartLink from '../components/CartLink';

const mapStateToProps = function (store) {
  return {
    productsCart: store.productsState.productsCart,
  };
};


export default connect(mapStateToProps)(CartLink);
