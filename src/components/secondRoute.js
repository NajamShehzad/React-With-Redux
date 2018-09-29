import React, { } from 'react';
import { Link } from 'react-router-dom';



const secondRoute = (props) => {

    console.log(props);
    
    
    return (
        <div>
            Second Route "/"
        <Link to='/' > Go To First Page</Link>

        </div>
    )
}

export default secondRoute;