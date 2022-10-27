import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name,img, details } = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                   
                </h2>
                <p>
                    {
                        details.length > 200 ?
                            <> {details.slice(0, 250) + '...'} <Link to={`/details/${id}`} className='text-blue-600'>Read More</Link></> : <>{details}</>
                    }
                </p>
                
            </div>
        </div>
    );
};

export default Course;