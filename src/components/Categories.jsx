import React from 'react';
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {

  return (
    <div className="categories">
      <ul>
        {items.map((item, index) =>
          <li className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)} key={`${index}_${item}`}>
            {item}
          </li>)}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func,
}

Categories.defaultProps = {activeCategory: 0, items: []}

export default Categories;
