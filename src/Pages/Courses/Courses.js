import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const allCourse = useLoaderData();

    return (
        <div className='grid grid-cols-3 w-[80%] mx-auto mt-10'>
            <div className=''>
                this is category
            </div>
            <div className='col-span-2'>
                {
                    allCourse.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;