import React, { useContext, useRef, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


    

const UserProfile = () => {

    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }

    return (
        <Form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
            <Form className="hero-content flex-col ">
                <Form className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </Form>
                <Form className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <Form className="card-body">
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleNameChange} defaultValue={name} type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </Form>
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
                        </Form>
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" readOnly defaultValue={user?.email} required />
                        </Form>
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </Form>
                        <Form className="Form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </Form>
                        <label className="label">
                            <span className="label-text">Already Register?<Link to='/login'>Login Now</Link></span>
                        </label>
                        
                    </Form>
                </Form>
            </Form>
        </Form>
    );
 }

export default UserProfile;