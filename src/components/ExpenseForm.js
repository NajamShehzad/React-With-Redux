import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const now = moment();

console.log(now.format('MMM Do YYYY'));



class ExpenseFrom extends Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calanderFocused: false
    };
    upDateAmount(amount) {
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount })
        } else {
            console.log("Not A Number");
        }
    }
    onDateChange = (createdAt) => {
        console.log(createdAt);
        if (createdAt) {
            this.setState({ createdAt })
        }

    }
    onFocusChange = ({ focused }) => {
        this.setState({ calanderFocused: focused })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            createdAt: this.state.createdAt.valueOf(),
            amount: this.state.amount,
            note: this.state.note
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        required
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={(e) => this.upDateAmount(e.target.value)}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calanderFocused}
                        onFocusChange={this.onFocusChange}

                    />
                    <textarea
                        value={this.state.note}
                        onChange={(e) => this.setState({ note: e.target.value })}
                        placeholder="Add a Note for Your Expense (Optional)">
                    </textarea>
                    <button>
                        Add Expense
                    </button>
                </form>
            </div>
        )
    }
}


export default ExpenseFrom;