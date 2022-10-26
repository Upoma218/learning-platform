import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
            <form className="hero-content flex-col ">
                <form className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </form>
                <form className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body">
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleNameChange} defaultValue={name} type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </form>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
                        </form>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" readOnly defaultValue={user?.email} required />
                        </form>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </form>
                        <form className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </form>
                        <label className="label">
                            <span className="label-text">Already Register?<Link to='/login'>Login Now</Link></span>
                        </label>
                        
                    </form>
                </form>
            </form>
        </form>
    );
 }

export default UserProfile;