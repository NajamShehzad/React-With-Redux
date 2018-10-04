import React, { } from 'react';
import { Link } from 'react-router-dom';
import Expenses from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';



const firstRoute = (props) => {

    return (
        <div>
            First Route "/"
            <Link to='/second/45824' > Go To Second Page</Link>
            <ExpenseFilter />
            <Expenses />
        </div>
    )
}

export default firstRoute;
