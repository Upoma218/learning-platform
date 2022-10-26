import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();

                handleEmailVerification();
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

    const handleAccepted = event => {
        setAccepted(event.target.checked)
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
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </form>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
                        </form>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </form>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </form>
                        <form className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                            <form  className="form-control">
                                <label className="cursor-pointer label">
                                    label={<span className="label-text">Accept terms and conditions</span>}
                                    <input  onClick={handleAccepted} type="checkbox" checked className="checkbox checkbox-secondary" />
                                </label>
                            </form>
                        </form>
                        <label className="label">
                            <span className="label-text">Already Register?<Link to='/login'>Login Now</Link></span>
                        </label>
                        <label className="label">
                            {error}
                        </label>
                    </form>
                </form>
            </form>
        </form>
    );
};

export default Register;