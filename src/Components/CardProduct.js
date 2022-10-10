import React from 'react';
import { getDetailProducts } from '../services/api';

class CardProduct extends React.Component {
  getProductById = async () => {
    const productById = await getDetailProducts();
  };

  render() {
    return (
      <div>
        <p data-testid="product-detail-name" />
        <img src="" alt="" data-testid="product-detail-image" />
        <p data-testid="product-detail-price" />
        <button
          data-testid="shopping-cart-button"
          type="button"
        >
          Carrinho de Compras
        </button>
      </div>
    );
  }
}

export default CardProduct;
