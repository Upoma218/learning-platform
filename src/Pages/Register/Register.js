import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);



    const handleSubmit = event => {
        event.preventDefault();
        const Form = event.target;
        const name = Form.name.value;
        const photoURL = Form.photoURL.value;
        const email = Form.email.value;
        const password = Form.password.value;
        console.log(name, email, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                Form.reset();
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
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </Form>
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
                        </Form>
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
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
                        <label className="label">
                            {error}
                        </label>
                    </Form>
                </Form>
            </Form>
        </Form>
    );
};

export default Register;