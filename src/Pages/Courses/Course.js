import React from 'react';

const Course = ({course}) => {
    const {id, name, info, img, details} = course;
    return (
        <div>
            <h1>Here is the course: {course.length}</h1>
        </div>
    );
};

export default Course;