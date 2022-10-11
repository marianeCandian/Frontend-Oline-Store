import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { categories, getCategory } = this.props;
    return (
      <form>
        { categories.map((category) => (
          <button
            key={ category.id }
            id="button"
            data-testid="category"
            type="button"
            onClick={ () => getCategory(category.id) }
          >
            { category.name }
          </button>
        ))}
      </form>
    );
  }
}
// voltei ao que estava antes e alterei o map dentro do componente HOME.

Category.propTypes = {
  categories: PropTypes.arrayOf,
}.isRequired;

export default Category;
