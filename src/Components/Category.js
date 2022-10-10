import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  render() {
    const { categories, getCategory } = this.props;
    return (
      <form>
        { categories.map((category) => (
          <div data-testid="category">
            <button
              key={ category.id }
              id="button"
              data-testid="product-detail-link"
              type="button"
              onClick={ () => getCategory(category.id) }
            >
              { category.name }
            </button>
            <Link  key={${...category.id}} to={`/cardproduct/${category.id}`}  />
          </div>
        ))}
      </form>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf,
}.isRequired;

export default Category;
