import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { editExpense } from '../actions/expenses'



const EditExpense = (props) => {

    console.log(props);

    return (
        <div>
            The Expense id is : {props.match.params.id}
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                console.log(expense);
                props.dispatch(editExpense(props.expense.id, expense))
                props.history.push('/');
            }} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return ({
        expense: state.expenses.find(expense => {
            return expense.id === props.match.params.id
        })
    })
}


export default connect(mapStateToProps)(EditExpense);

