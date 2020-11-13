import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {Categories, SortPopup, PizzaBlock} from '../components';

import {setCategory} from '../redux/actions/filters'

const categoryName = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'}]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])

  return (
    <div className="container">
      <div className="content__top">

        <Categories
          onClickItem={onSelectCategory}
          items={categoryName}>
        </Categories>

        <SortPopup items={sortItems}></SortPopup>

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {items && items.map((item) =>
          (<PizzaBlock
            key={item.id}
            {...item}
          ></PizzaBlock>))}

      </div>
    </div >
  )
}

export default Home
