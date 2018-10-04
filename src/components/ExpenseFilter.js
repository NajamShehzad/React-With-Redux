import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filter';



const ExpenseFilter = (props) => {

    const sort = (e) => {
        console.log(e);
        if (e === "amount") {
            props.dispatch(sortByAmount());
        } else {
            props.dispatch(sortByDate())
        }

    }
    return (
        <div>
            <input value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />
            <select value={props.filters.sortBy} onChange={(e) => sort(e.target.value)}>
                <option value="data">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseFilter);