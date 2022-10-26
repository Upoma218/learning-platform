import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png'
import userPP from '../../../Assets/images/user.png'
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>FAQ</Link></li>
                        {
                            !user?.uid ? <>
                                <li><Link to='/register'>Register</Link></li>
                                <li><Link to='/login'>Login</Link></li></>
                                :
                                <li><Link to='/'>Logout</Link></li>
                        }


                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Courses</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>FAQ</Link></li>
                    {
                        !user?.uid ? <>
                            <li><Link to='/register'>Register</Link></li>
                            <li><Link to='/login'>Login</Link></li></>
                            :
                            <li onClick={handleLogOut}><Link>Logout</Link></li>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <label className="label cursor-pointer">
                       
                        <input type="checkbox" className="toggle toggle-secondary" checked />
                    </label>
                </div>
                <div className="flex-none gap-2">
                    {
                        user?.uid && <div className="dropdown dropdown-end">
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                </div>

            </div>
        </div>
    )
};

export default Header;