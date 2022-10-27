import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-200' p-48>
            <h1 className='text-center text-cyan-700 text-5xl font-bold p-12'>Blogs</h1>
            <div className='pb-24 pt-12'>
            <div className=' text-center rounded-3xl bg-white mx-12 py-12 mb-12'>
                <h1  className='text-yellow-800 text-3xl my-18' >1. What is 'Cors'?</h1>
                <p className=' text-gray-800 text-md p-8'>Most of the time, a script running in the user's browser would only ever need to access resources on the same origin think about API calls to the same backend that served the JavaScript code in the first place. So the fact that JavaScript can't normally access resources on other origins is a good thing for security.</p>
            </div>
            <div className=' text-center rounded-3xl bg-white mx-12 py-12 mb-12'>
                <h1  className='text-yellow-800 text-3xl my-18' >2. Why are you using firebase? What other option do you implement authentication?</h1>
                <p className=' text-gray-800 text-md p-8'>Most of the time, a script running in the user's browser would only ever need to access resources on the same origin think about API calls to the same backend that served the JavaScript code in the first place. So the fact that JavaScript can't normally access resources on other origins is a good thing for security.</p>
            </div>
            <div className=' text-center rounded-3xl bg-white mx-12 py-12 mb-12'>
                <h1  className='text-yellow-800 text-3xl my-18' >3. How does the private route work?</h1>
                <p className=' text-gray-800 text-md p-8'>Most of the time, a script running in the user's browser would only ever need to access resources on the same origin think about API calls to the same backend that served the JavaScript code in the first place. So the fact that JavaScript can't normally access resources on other origins is a good thing for security.</p>
            </div>
            <div className=' text-center rounded-3xl bg-white mx-12 py-12 mb-12'>
                <h1  className='text-yellow-800 text-3xl my-18' >4. What is node: How does node work?</h1>
                <p className=' text-gray-800 text-md p-8'>Most of the time, a script running in the user's browser would only ever need to access resources on the same origin think about API calls to the same backend that served the JavaScript code in the first place. So the fact that JavaScript can't normally access resources on other origins is a good thing for security.</p>
            </div>
            
            </div>
        </div>
    );
};

export default Blog;