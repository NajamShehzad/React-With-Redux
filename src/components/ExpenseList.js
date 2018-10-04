import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectExpenses from '../selector/expenses';

const ExpensesList = (props) => (
    <div>
        <h1>
            Expense List<br />
            {props.expenses.map(expense => {
                return <ExpensesListItem key={expense.id} {...expense} />
            })}
        </h1>
    </div>
);


const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
};

export default connect(mapStateToProps)(ExpensesList);
