import React from 'react';
import ExpenseFrom from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'



const AddExpense = (props) => {
    return (
        <div>
            <h1>
                Add Expense Page
            </h1>
            <ExpenseFrom onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/')
            }} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return ({

    })
}

export default connect()(AddExpense);