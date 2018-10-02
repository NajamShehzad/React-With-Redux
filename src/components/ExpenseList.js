import React from 'react';
import { connect } from 'react-redux';

const ExpensesList = (props) => (
    <div>
        <h1>
            Expense List<br />
            {props.filters.text} 
            {props.expenses.length}
        </h1>
    </div>
);


const mapStateToProps = state => {
    return {
        expenses: state.expenses,
        filters:state.filters
    }
};

export default connect(mapStateToProps)(ExpensesList);
