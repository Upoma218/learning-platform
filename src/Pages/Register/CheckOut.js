
import React from 'react';
import { useLoaderData } from 'react-router-dom';



const CheckOut = () => {
    const infos = useLoaderData();
    console.log(infos);
    
    return (
        <div className='text-center lg:p-36 text-cyan-600 text-5xl font-bold'>
            <h1>{infos.name}</h1>
        </div>
    );
};

export default CheckOut;