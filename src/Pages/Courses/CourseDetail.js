import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const CourseDetail = () => {
    const detailsInfo = useLoaderData();
    const {id, name, info, img, details } = detailsInfo;
    const ref = useRef()

    return (
        <><div ref={ref} className="card lg:card-side bg-gray-200 shadow-xl  w-[70%] mx-auto mt-12 ">
            <figure><img src={img} alt="" className='w-96 h-[100%]'/></figure>
            <div className="card-body lg:p-24">
                <h2 className="card-title">{name}</h2>
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className="badge badge-secondary" onClick={toPdf}>Download</button>}
                    </Pdf>
                </div>
                <p>{details}</p>
                <div>
                    <h3 className='text-cyan-600 font-semibold my-3 text-2xl'>Basic Information</h3>
                    <ul className='text-gray-600 font-semibold my-2 text-xl'>
                        <li>Course fee: {info?.course_fee}</li>
                        <li>Course duration: {info?.course_duration}</li>
                        <li>Start Date: {info?.start_date}</li>
                        <li>Softwares: {info?.software}</li>
                    </ul>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${id}`}><button className="btn btn-primary">Get Premium Access</button></Link>
                </div>
            </div>
        </div>
        </>

    );
};

export default CourseDetail;