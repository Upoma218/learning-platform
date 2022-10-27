import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const courseInfo = useLoaderData();
    const {name} = courseInfo;
    return (
        <div>
            <h1>
                {name}
            </h1>
        </div>
    );
};

export default CheckOut;