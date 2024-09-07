import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useContext(AuthContext); // use context for user details
    const axiosSecure = useAxiosSecure(); // secure axios for API calls

    // Fetch admin status using React Query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email && !!localStorage.getItem('access-token'), // query enabled if user and token are present
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            console.log('Admin Status:', res.data);
            return res.data?.admin; // expect a boolean response
        }
    });

    // Return both admin status and loading state
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
