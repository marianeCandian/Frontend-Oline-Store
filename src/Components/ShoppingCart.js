import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      listaProdutos: [],
      tamanho: false,
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => {
    if (localStorage.getItem('produtos')) {
      const local = localStorage.getItem('produtos');
      const lista = JSON.parse(local);
      this.setState({
        listaProdutos: lista,
        tamanho: true,
      });
    }
  };

  removeCart = (cart) => {
    const { listaProdutos } = this.state;
    const novoObjeto = listaProdutos.filter((item) => item.id !== cart.target.id);
    localStorage.clear();
    localStorage.setItem('produtos', JSON.stringify(novoObjeto));
    this.setState({ listaProdutos: novoObjeto });
  };

  increaseCart = ({ target }) => {
    const { listaProdutos } = this.state;
    listaProdutos.map((cart) => {
      if (cart.id === target.id) {
        cart.quantity += 1;
        return cart;
      }
      return cart;
    });
    this.setState({
      listaProdutos,
    });
    localStorage.clear();
    localStorage.setItem('produtos', JSON.stringify(listaProdutos));
  };

  decreaseCart = ({ target }) => {
    const { listaProdutos } = this.state;
    listaProdutos.map((cart) => {
      if (cart.id === target.id) {
        cart.quantity -= 1;
        return cart;
      }
      return cart;
    });
    this.setState({
      listaProdutos,
    });
    localStorage.clear();
    localStorage.setItem('produtos', JSON.stringify(listaProdutos));
  };

  render() {
    const { listaProdutos, tamanho } = this.state;
    return (
      <div>
        {tamanho === false
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          ) : (
            <div>
              {listaProdutos.map((item) => (
                <div key={ item.id }>
                  <p data-testid="shopping-cart-product-name">{item.title }</p>
                  <img src={ item.thumbnail } alt={ item.title } />
                  <p>{item.price}</p>
                  <p
                    data-testid="shopping-cart-product-quantity"
                  >
                    {`Quantidade: 
                    ${item.quantity > 1 ? item.quantity : 1}`}
                  </p>
                  <button
                    type="button"
                    id={ item.id }
                    onClick={ this.decreaseCart }
                    data-testid="product-decrease-quantity"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    id={ item.id }
                    onClick={ this.increaseCart }
                    data-testid="product-increase-quantity"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    id={ item.id }
                    onClick={ this.removeCart }
                    data-testid="remove-product"
                  >
                    Remover item
                  </button>
                </div>
              ))}
            </div>
          )}

      </div>
    );
  }
}

export default ShoppingCart;
