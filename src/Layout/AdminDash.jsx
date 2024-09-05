
import { useEffect, useState, useContext } from 'react';
import ANavbar from "../Home/Shared/ANavbar";
import UNavbar from "../Home/Shared/UNavbar";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../Providers/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext); // Assuming AuthContext provides user details
    const [userRole, setUserRole] = useState(null); // State to store user role
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                if (user && user.email) {
                    const email = user.email;

                    // Log the email to ensure it's correctly retrieved
                    console.log('Email:', email);

                    // Fetch JWT token
                    const tokenResponse = await axios.post('http://localhost:5000/jwt', { email });
                    const token = tokenResponse.data.token;

                    // Log the token to ensure it's correctly retrieved
                    console.log('Token:', token);

                    // Fetch user role using the token
                    const response = await axios.get(`http://localhost:5000/user/admin/${email}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    // Log the entire response to check the structure
                    console.log('API Response:', response.data);

                    // Set user role based on the response
                    if (response.data.role) {
                        setUserRole(response.data.role);
                    } else {
                        setUserRole('user'); // Default to user if no role is found
                    }
                }
            } catch (error) {
                console.error('Error fetching user role:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching role
            }
        };

        fetchUserRole();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div className="">
            <div className="flex-1 max-w-7xl mx-auto">
                {userRole === 'admin' ? <UNavbar /> : <ANavbar />}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;