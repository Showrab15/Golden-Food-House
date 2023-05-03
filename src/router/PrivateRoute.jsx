import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading,} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return   <progress className="progress  flex justify-center progress-secondary mx-auto text-center w-96"></progress>
    }
if(user){
    return children
}
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;



/**
 * steps: 
 * 1. check user is logged in pr not
 * 2. if user is logged in , then allow them to visit the route
 * 3. else redirect the user to the login page
 * 
 */


//