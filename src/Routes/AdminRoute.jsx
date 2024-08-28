import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import useAdmin from "../Hook/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const location = useLocation();
    // const [isAdmin, isAdminLoading] = useAdmin();
    const [isAdmin] = useAdmin();

    console.log('User and Admin Status:', user, isAdmin);

    // if (loading || isAdminLoading) {
    //     return <progress className="progress progress-accent w-56" value="100" max="100"></progress>;
    // }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default AdminRoute;
