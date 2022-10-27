import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name,img, details } = course;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-48 w-[100%]' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                   
                </h2>
                <p>
                    {
                        details.length > 100 ?
                            <> {details.slice(0, 110) + '...'} <Link to={`/details/${id}`} className='text-blue-600'>Read More</Link></> : <>{details}</>
                    }
                </p>
                
            </div>
        </div>
    );
};

export default Course;