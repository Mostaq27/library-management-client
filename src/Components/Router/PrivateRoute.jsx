
import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <progress className="text-center items-center progress w-56"></progress>
    }
    if (user){
        return children;
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};

export default PrivateRoute;