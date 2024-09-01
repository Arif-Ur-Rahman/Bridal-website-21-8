import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

const UserDetails = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
  }, []);

  useEffect(() => {
    if (userEmail) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/user-details?email=${userEmail}`);
          setDetails(response.data);
        } catch (err) {
          console.error('Error fetching details:', err);
          setError('No details found or server error.');
        }
      };

      fetchUserDetails();
    }
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/user-details/${id}`);
      setMessage(response.data.message);
      setDetails((prevDetails) => prevDetails.filter((detail) => detail._id !== id));
    } catch (err) {
      console.error('Error deleting details:', err);
      setError('Failed to delete user detail.');
    }
  };

  return (
    <div className="p-4 font-mono">
      <h1 className="text-xl font-bold mb-4 my-10 text-center">User Appointment Details</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((detail) => (
            <div key={detail._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p><strong>Date:</strong> {new Date(detail.datetime).toDateString()}</p>
                <p><strong>Time:</strong> {new Date(detail.datetime).toTimeString()}</p>
                <p><strong>Email:</strong> {detail.email}</p>
                <p><strong>Name:</strong> {detail.name}</p>
                <p><strong>Address:</strong> {detail.address}</p>
                <p><strong>Number:</strong> {detail.number}</p>
                
                <div className="card-actions justify-end">
                  <button 
                    className="btn  bg-red-500 hover:bg-red-700 text-white"
                    onClick={() => handleDelete(detail._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
};

export default UserDetails;
