import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {Categories, SortPopup, PizzaBlock, LoadingPizzaBlock} from '../components';

import {fetchPizzas} from '../redux/actions/pizzas'
import {setCategory, setSortBy} from '../redux/actions/filters'

const categoryName = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    // пофиксить чтоб не обновлялось при переходе в корзину и обратно
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <div className="container">
      <div className="content__top">

        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryName}>
        </Categories>

        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}></SortPopup>

      </div>
      <h2 className="content__title"></h2>
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
