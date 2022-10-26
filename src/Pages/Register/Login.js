import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || '/';
    const {providerLogin} = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const gitHubAuthProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleAuthProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    const handleGithubSignIn = () => {
        providerLogin(gitHubAuthProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please verify your email address before login.')
                }

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <Form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
            <Form className="hero-content flex-col ">
                <Form className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </Form>
                <Form className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <Form className="card-body">
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email address" className="input input-bordered" required />
                        </Form>
                        <Form className="Form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" required />
                        </Form>
                        <Form className="Form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </Form>
                        <Form className="Form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Sign In</button>
                        </Form>
                        <Form className="Form-control mt-6">
                            <button onClick={handleGithubSignIn} className="btn btn-primary">Github Sign In</button>
                        </Form>
                        <label className="label">
                            <span className="label-text">
                            Did not Register yet <Link to="/register">Register Now</Link>
                            </span>
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

export default Login;