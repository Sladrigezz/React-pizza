import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios'

import {Header} from './components';
import {Home, Cart} from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get(`http://localhost:3000/db.json`)
      .then(({data}) => {setPizzas(data.pizzas)})
  }, [])

  return (
    <div className="wrapper">

      <Header></Header>

      <div className="content">

        <Route path='/' exact render={() => <Home items={pizzas}></Home>}></Route>
        <Route path='/cart' exact component={Cart}></Route>

      </div>
    </div>
  );
}

export default App;
