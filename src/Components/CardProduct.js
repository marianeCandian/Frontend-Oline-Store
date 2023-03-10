import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDetailProducts } from '../services/api';

class CardProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      productOnScrean: [],
    };
  }

  componentDidMount() {
    const { id: { match: { params } } } = this.props;
    this.getProductById(params.id);
  }

  getProductById = async (PRODUCT_ID) => {
    const response = await getDetailProducts(PRODUCT_ID);
    this.setState({
      productOnScrean: response,
    });
  };

  chargeShoppingCart = () => JSON.parse(localStorage.getItem('produtos'));

  saveShoppingCart = (item) => localStorage.setItem('produtos', JSON.stringify(item));

  addCart = () => {
    const { productOnScrean } = this.state;
    const storageLocal = this.chargeShoppingCart();
    if (storageLocal) {
      return this.saveShoppingCart([...storageLocal, productOnScrean]);
    }
    return this.saveShoppingCart([productOnScrean]);
  };

  render() {
    const { productOnScrean } = this.state;

    return (
      <div>
        <p data-testid="product-detail-name">
          {productOnScrean.title}
        </p>
        <img
          src={ productOnScrean.thumbnail }
          alt={ productOnScrean.title }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{productOnScrean.price}</p>
        <Link to="/shoppingcart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
        </Link>
        <button
          type="button"
          value={ productOnScrean.id }
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addCart() }
        >
          Adicionar ao Carrinho
        </button>

      </div>
    );
  }
}

CardProduct.propTypes = {
  id: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default CardProduct;
