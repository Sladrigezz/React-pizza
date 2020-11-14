import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {Categories, SortPopup, PizzaBlock, LoadingPizzaBlock} from '../components';

import {fetchPizzas} from '../redux/actions/pizzas'
import {setCategory} from '../redux/actions/filters'

const categoryName = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'}]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    // пофиксить чтоб не обновлялось при переходе в корзину и обратно
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">

        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryName}>
        </Categories>

        <SortPopup items={sortItems}></SortPopup>

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {isLoaded ? items.map((item) =>
          (<PizzaBlock
            key={item.id}
            isLoading={true}
            {...item}
          ></PizzaBlock>)) : Array(12)
            .fill(0)
            .map((_, index) => <LoadingPizzaBlock key={index}></LoadingPizzaBlock>)}

      </div>
    </div >
  )
}

export default Home
