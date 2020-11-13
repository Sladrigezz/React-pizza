import React from 'react';

const Categories = React.memo(function Categories({items, onClickItem}) {
  const [activeItem, setActiveItem] = React.useState(0)

  const onSelectItem = (index) => {
    setActiveItem(index)
    onClickItem(index)
  }

  return (
    <div className="categories">
      <ul>
        {items.map((item, index) =>
          <li className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)} key={`${index}_${item}`}>
            {item}
          </li>)}
      </ul>
    </div>
  )
})

export default Categories;
