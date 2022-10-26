import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { div, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || '/';
    const { providerLogin } = useContext(AuthContext);
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
        const div = event.target;
        const email = div.email.value;
        const password = div.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                div.reset();
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="div-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"name='email' placeholder="Enter your email address" className="input input-bordered" required />
                        </div>
                        <div className="div-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="div-control mt-6">
                            <input type="submit" value="Log in" className='btn btn-primary p-5' />
                        </div>
                        <div className="div-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Sign In</button>
                        </div>
                        <div className="div-control mt-6">
                            <button onClick={handleGithubSignIn} className="btn btn-primary">Github Sign In</button>
                        </div>
                        <label className="label">
                            <span className="label-text">
                                Did not Register yet <Link to="/register">Register Now</Link>
                            </span>
                        </label>
                        <label className="label text-red-500">
                            {error}
                        </label>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;