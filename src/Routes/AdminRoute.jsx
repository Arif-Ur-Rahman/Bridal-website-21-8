import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hook/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading: authLoading } = useContext(AuthContext); // loading from auth context
    const [isAdmin, isAdminLoading] = useAdmin(); // loading from admin hook
    const location = useLocation();

    console.log("User and Admin Status:", user, isAdmin, "Auth Loading:", authLoading, "Admin Loading:", isAdminLoading);

    // If either the user or admin check is loading, show progress indicator
    if (authLoading || isAdminLoading) {
        return <progress className="progress progress-accent w-56" value="100" max="100"></progress>;
    }

    // If the user is authenticated and is an admin, allow access
    if (user && isAdmin) {
        return children;
    }

    // If not an admin, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
