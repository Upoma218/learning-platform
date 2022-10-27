import React, { useRef } from 'react';
import Pdf from "react-to-pdf";


const CourseDetail = () => {

    const ref = useRef()

    return (
        <> <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
            <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl">

                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">

                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CourseDetail;