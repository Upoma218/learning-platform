import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from './Course';

const Courses = () => {
    const allCourse = useLoaderData();

    return (
        <div className=' bg-gray-200 p-24'>
            <h3 className='text-cyan-600 text-center font-semibold text-2xl'>Our Courses</h3>
            <h1 className='text-yellow-800 text-center font-bold text-4xl my-3'> Be Skilled, Be Advance</h1>
            <h4 className='text-gray-700 text-center font-md'> Choose Your Course</h4>
            <div className='grid grid-cols-3 gap-4  w-[80%] mx-auto mt-12'>
            <div className='bg-white p-12 rounded-md mx-8 h-80'>
                    <h4 className='text-2xl my-2 text-cyan-600 font-bold'>All Courses</h4>
                    <div className="menu bg-base-100 w-56 ">
                        <Category></Category>
                    </div>
                </div>
                <div className='grid gap-6 col-span-2 grid-cols-2'>
                    {
                        allCourse.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>  
               
            </div>
        </div>
    );
};

export default Courses;

/* 
<div className='grid grid-cols-3 gap-4 >
                
                
            </div>
*/