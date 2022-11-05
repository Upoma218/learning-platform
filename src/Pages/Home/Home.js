import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import hero from '../../Assets/images/heroImg.png'
import Blog from '../Blog/Blog';
import Course from '../Courses/Course';
import CourseDetail from '../Courses/CourseDetail';
import Courses from '../Courses/Courses';
import FAQ from '../FAQ/FAQ';
import Login from '../Register/Login';
import Register from '../Register/Register';

const Home = () => {
    
    return (
        <div>
            <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url(${hero})`}}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h5 className="mb-5 text-lg font-semibold text-teal-800">Go With Your Ambition</h5>
                        <h4 className="mb-5 text-2xl font-bold text-yellow-800">We're Here to</h4>
                        <h1 className="mb-5 text-5xl font-bold  text-cyan-600">Accomplish your Dream</h1>
                        <Link to='/courses'><button className="btn bg-cyan-600  rounded-2xl border-yellow-800 border-spacing-3 mt-12">Get Started</button></Link>
                    </div>
                </div>
            </div>
            <Courses></Courses>
            <Register></Register>
            <Login></Login>
            <Blog></Blog>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;