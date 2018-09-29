import React, { } from 'react';
import { Link } from 'react-router-dom';



const firstRoute = (props) => {
    console.log(props);
    
    return (
        <div>
            First Route "/"
        <Link to='/second/45824' > Go To Second Page</Link>
        </div>
    )
}

export default firstRoute;
