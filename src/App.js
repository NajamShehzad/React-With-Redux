import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import FirstRoute from './components/firstRoute';
import SecondRoute from './components/secondRoute';

const Error404 = () => (
  <div>
    404-<NavLink to="/" > Go Home </NavLink>
  </div>
);

const Header = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
  </p>
    <NavLink to='/' > Go To First Page</NavLink><br/>
    <NavLink to='/second' > Go To Second Page</NavLink>

  </div>
)


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={FirstRoute} exact />
              <Route path="/second" component={SecondRoute} />
              <Route path="/second" component={SecondRoute} />
              <Route component={Error404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
