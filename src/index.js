import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import getVisibleExpenses from './selector/expenses';


const store = configureStore();
store.dispatch(addExpense({description:"Study Redux"}));
store.dispatch(addExpense({description:"Chat App"}));
store.dispatch(setTextFilter('App'))

console.log(store.getState());

const state  = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
