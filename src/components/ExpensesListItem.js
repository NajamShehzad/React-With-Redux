import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import {Link} from 'react-router-dom';

const ExpensesListItem = ({ dispatch, history, description, id, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>
            {description}
        </h3>
        </Link>
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
        <br />
        <button onClick={() => {
            history.push(`/edit${id}`)
        }}>Edit</button>
    </div>
);


export default connect()(ExpensesListItem);