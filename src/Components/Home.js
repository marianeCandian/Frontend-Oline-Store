import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Category from './Category';

class Home extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getListCategories();
  }

  getListCategories = async () => {
    const list = await getCategories();
    this.setState({ categories: list });
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category categories={ categories } />
        <Link to="/shoppingcart" data-testid="shopping-cart-button" />
      </div>
    );
  }
}

export default Home;
