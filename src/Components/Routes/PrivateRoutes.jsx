import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { Triangle } from 'react-loader-spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <Triangle
                height="100"
                width="100"
                color='#0FCFEC'
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}/></div>
    }
    if (user) {
        return children
    };
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes;