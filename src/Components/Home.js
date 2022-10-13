import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Category from './Category';

class Home extends React.Component {
  state = {
    categories: [],
    pesquisa: '',
    arrayProdutos: [],
  };

  componentDidMount() {
    this.getListCategories();
  }

  getListCategories = async () => {
    const list = await getCategories();
    this.setState({ categories: list });
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      pesquisa: value,
    });
  };

  clicar = async () => {
    const { pesquisa } = this.state;
    const products = await getProductsFromCategoryAndQuery('', pesquisa);
    const listaDeProdutos = products.results;
    this.setState({
      arrayProdutos: listaDeProdutos,
    });
  };

  getCategory = async (categoryId) => {
    const products = await getProductsFromCategoryAndQuery(categoryId, '');
    const listaDeProdutos = products.results;
    this.setState({
      arrayProdutos: listaDeProdutos,
    });
  };

  // Fizemos essas funcções das linhas 48, 50 e 52 para tentar salvar os procutos no localStorage, mas ela  ta salvando null.

  chargeShoppingCart = () => JSON.parse(localStorage.getItem('produtos'));

  saveShoppingCart = (item) => localStorage.setItem('produtos', JSON.stringify(item));

  addCar = () => {
    const { productOnScrean } = this.state;
    const storageLocal = this.chargeShoppingCart();
    if (storageLocal) {
      return this.saveShoppingCart([...storageLocal, productOnScrean]);
    }
    return this.saveShoppingCart([productOnScrean]);
  };

  render() {
    const { categories, pesquisa, arrayProdutos } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <label htmlFor="input_inicial">
          <input
            type="text"
            data-testid="query-input"
            id="input_inicial"
            value={ pesquisa }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.clicar }
        >
          Pesquisar
        </button>
        <div>
          {arrayProdutos.length === 0 && <span>Nenhum produto foi encontrado</span>}
          {
            arrayProdutos.map((item) => (
              <div
                key={ item.id }
                data-testid="product"
              >
                <Link
                  to={ `/cardproduct/${item.id}` }
                  id={ item.id }
                  data-testid="product-detail-link"
                >
                  <p>{item.title}</p>
                  <img src={ item.thumbnail } alt={ item.name } />
                  <p>{item.price}</p>
                </Link>
                {/* Esse botão seria para realizar as funções acimas */}
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => this.addCar() }
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))
          }
        </div>
        <Category categories={ categories } getCategory={ this.getCategory } />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

export default Home;
