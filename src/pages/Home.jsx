import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components';

function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">

        <Categories items={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
        }></Categories>

        <SortPopup items={['популярности', 'цене', 'алфавиту']}></SortPopup>

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {items.map((item) =>
          (<PizzaBlock
            key={item.id}
            {...item}
          ></PizzaBlock>))}

      </div>
    </div >
  )
}

export default Home
