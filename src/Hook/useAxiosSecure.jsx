import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth"; // Assuming this provides `logOut` and auth info

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/', // Change to your actual API base URL
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth(); // Fetch logOut function from custom hook

  // Request interceptor to add the JWT token to headers for secure calls
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        console.log('Attaching token to request header', token);
        config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
      }
      return config;
    },
    (error) => {
      // Handle request errors
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle errors globally (401, 403)
  axiosSecure.interceptors.response.use(
    (response) => {
      // Return the response if no error
      return response;
    },
    async (error) => {
      const status = error.response?.status;
      console.log('Interceptor error', status);

      // If 401 Unauthorized or 403 Forbidden, log out and redirect
      if (status === 401 || status === 403) {
        console.log('Unauthorized or Forbidden, logging out...');
        await logOut();
        localStorage.removeItem('access-token'); // Clear the token
        navigate('/login'); // Redirect to login page
      }

      // Reject the error so it can be caught in the components
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
