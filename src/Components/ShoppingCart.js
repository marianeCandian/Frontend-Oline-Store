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
                    ${listaProdutos.filter((counter) => counter.id === item.id).length}`}
                  </p>
                </div>
              ))}
            </div>
          )}

      </div>
    );
  }
}

export default ShoppingCart;
