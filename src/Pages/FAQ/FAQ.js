import React, { useEffect, useState } from 'react';
import Faq from "react-faq-component";

const data = {
    title: "FAQ ",
    rows: [
        {
            title: "What is the enrollment process?",
            content: `At first you have to register our page. Then you have to take access by login in the course. After knowing about course details, you can call us for payment method.`,
        },
        {
            title: "How can I finish the courses within short time?",
            content:
                "You have no shortcut way for completing the courses. If you want to complete all tasks, successfully, you must have to be serious",
        },
        {
            title: "How can I gat the support for course?",
            content: `You can call us or email us for details. `,
        },
        
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "Yellow",
    rowTitleColor: "violet",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


const FAQ = () => {

    return (
        <div className='w-[70%] mx-auto mt-24'>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
   
};

export default FAQ;