import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import {  useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from './Course';

const Courses = () => {
    const [allCourse, setAllCourse] = useState([]);
    useEffect(() => {
        fetch('https://u-learning-online-bd-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    },[])

    return (
        <div className=' bg-gray-200 py-12'>
            <h3 className='text-cyan-600 text-center font-semibold text-2xl'>Our Courses</h3>
            <h1 className='text-yellow-800 text-center font-bold text-4xl my-3'> Be Skilled, Be Advance</h1>
            <h4 className='text-gray-700 text-center font-md'> Choose Your Course</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6  w-[80%] mx-auto mt-12'>
                <div className='bg-white p-12 rounded-md mx-8 w-[90%]'>
                    <h4 className='text-2xl my-2 text-cyan-600 font-bold'>All Courses</h4>
                    <div className="menu bg-base-100 ">
                        <Category></Category>
                    </div>
                </div>
                <div className='grid gap-6 lg:col-span-2 md:col-span-1 lg:grid-cols-2 md:grid-cols-1'>
                    {
                        allCourse &&
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