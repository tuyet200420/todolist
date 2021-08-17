import { useState } from 'react';
import { Form, Input, Button, Card,Space } from 'antd';
import { Router, Route, Switch } from "react-router-dom";
import history from './history';
// import Item from './Item';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { addToCartAction  } from './redux/actions'
import TodoDetail from './TodoDetail';
import TodoList from './TodoList';

function App() {
  
  
  return (
    <>
    
    <Router history={history}>
    <Switch>
    
      <Route exact path="/detail/:id" component={TodoDetail}>
      </Route>
      <Route exact path="/">
          <TodoList/>
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
