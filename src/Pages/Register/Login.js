import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || '/';

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
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
            <form className="hero-content flex-col ">
                <form className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </form>
                <form className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body">
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email address" className="input input-bordered" required />
                        </form>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" required />
                        </form>
                        <form className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </form>
                        <form className="form-control mt-6">
                            <button className="btn btn-primary">Google Sign In</button>
                        </form>
                        <form className="form-control mt-6">
                            <button className="btn btn-primary">Github Sign In</button>
                        </form>
                        <label className="label">
                            <span className="label-text">Didn't Register yet?<Link to='/register'>Register Now</Link></span>
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

export default Login;