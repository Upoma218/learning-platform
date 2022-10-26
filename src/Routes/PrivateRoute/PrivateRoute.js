import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  ('Loading.....')
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return Children;
};


export default PrivateRoute;