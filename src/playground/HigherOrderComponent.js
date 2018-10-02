import React from 'react';



const Info = (props) => (
    <div>
        This is info about {props.info}
    </div>
);


const withAdminWarning = (InnerComponent) => {

    return (props) =>(
        <div>
            {props.warning && <p>This is private Info</p>}
            <InnerComponent {...props} />
        </div>
    )

};

export  const AdminWarning = withAdminWarning(Info);


