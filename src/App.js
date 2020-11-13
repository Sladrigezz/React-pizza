import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'

import {setPizzas} from './redux/actions/pizzas'
import {Header} from './components';
import {Home, Cart} from './pages';

function App() {
  const dispatch = useDispatch();
  const {items} = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items,
    }
  });

  React.useEffect(() => {
    axios.get(`http://localhost:3000/db.json`)
      .then(({data}) => {
        dispatch(setPizzas(data.pizzas))
      });
  }, []);

  return (
    <div className="wrapper">

      <Header></Header>

      <div className="content">

        <Route path='/' exact render={() => <Home items={items}></Home>}></Route>
        <Route path='/cart' exact component={Cart}></Route>

      </div>
    </div>
  );
}

export default App