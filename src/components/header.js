import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';


const Header = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
    </p>
        <NavLink to='/' > Go To First Page</NavLink><br />
        <NavLink to='/second/:id' > Go To Second Page</NavLink>

    </div>
)

export default Header