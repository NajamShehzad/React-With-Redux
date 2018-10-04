import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpensesListItem = ({ dispatch, description, id, amount, createdAt }) => (
    <div>
        <h4>
            {description}
        </h4>
        <h5>
            {id}
        </h5>
        Amount : {amount}
        <br />
        Date : {createdAt}
        <br />
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
);


export default connect()(ExpensesListItem);