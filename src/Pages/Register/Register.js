import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { div, Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);



    const handleSubmit = event => {
        event.preventDefault();
        const div = event.target;
        const name = div.name.value;
        const photoURL = div.photoURL.value;
        const email = div.email.value;
        const password = div.password.value;
        console.log(name, email, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                div.reset();
                handleUpdateUserProfile()
                handleEmailVerification(name, photoURL);
                toast.success('Please check your email and verify!')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    };


    return (
        <div  className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="div-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </div>
                        <div className="div-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
                        </div>
                        <div className="div-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="div-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="div-control mt-6">
                            <input type="submit" value="Registration" className='btn btn-primary p-5'/>
                        </div>
                        <label className="label">
                            <span className="label-text">Already Register?<Link to='/login'>Login Now</Link></span>
                        </label>
                        <label className="label">
                            {error}
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;