import React, { Component } from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import FirstRoute from './components/firstRoute';
import SecondRoute from './components/secondRoute';
import AddExpense from './components/CreateExpense';
import EditExpense from './components/edit';

const Error404 = () => (
  <div>
    404-<NavLink to="/" > Go Home </NavLink>
  </div>
);




class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={FirstRoute} exact />
              <Route path="/second/:id" component={SecondRoute} />
              <Route path="/second" component={SecondRoute} />
              <Route path="/addExpense" component={AddExpense} />
              <Route path="/edit/:id" component={EditExpense} />
              <Route path="/edit" component={EditExpense} />
              <Route component={Error404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
