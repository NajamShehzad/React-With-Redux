import React, {  } from 'react';
import {Link} from 'react-router-dom';



const firstRoute = () => (
    <div>
        First Route "/"
        <Link to='/second' > Go To Second Page</Link>
    </div>
)

export default firstRoute;
