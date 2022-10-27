import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const courseInfo = useLoaderData();
    

    useEffect(() => {
        fetch('https://u-learning-online-bd-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div >
            {
                categories.map(title => <h3 key={title.id} className='font-Bold text-yellow-700 my-2'><Link to={`/details/${courseInfo.id}`} >{title.name}</Link></h3>)
            }
        </div>
    );
};

export default Category;