import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // Ensure loading is destructured
    const location = useLocation();

    // Show a loading indicator while the user is being fetched
    if (loading) {
        return <progress className="progress progress-accent w-56" value="100" max="100"></progress>; // You can customize this loading state as per your design
    }

    // If user exists, render the children (protected route)
    if (user) {
        return children;
    }

    // Redirect to login if user is not authenticated
    return <Navigate to='/login' state={{ from: location }} />;
};

export default PrivateRoute;


 