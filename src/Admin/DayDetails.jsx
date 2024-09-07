import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Home/Shared/ANavbar';

const DayDetails = () => {
  const { date } = useParams(); // 'date' is a string in 'YYYY-MM-DD' format
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const selectedDate = new Date(date);
        const offsetDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
        const formattedDate = offsetDate.toISOString().split('T')[0];
        console.log('Requesting date:', formattedDate); 

        const response = await axios.get(`http://localhost:5000/app/${formattedDate}`);
        setDetails(response.data);
      } catch (err) {
        console.error('Error fetching details:', err);
        setError('No details found or server error.');
      }
    };

    fetchDetails();
  }, [date]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/app/${id}`);
      console.log(response.data.message);
      setDetails(details.filter(detail => detail._id !== id));
    } catch (err) {
      console.error('Error deleting detail:', err);
      setError('Error deleting detail.');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Sidebar className="w-1/4" /> {/* Sidebar occupies 1/4 of the width */}
      
      <div className="lg:w-3/4 p-4 font-mono"> {/* Details section occupies 3/4 of the width */}
        <h1 className="text-sm lg:text-2xl font-bold mb-4 text-center my-10">
          Appointment Details for {date}
        </h1>
        <div className="flex justify-center items-center">
        {error ? (
          <p>{error}</p>
        ) : details.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:ml-44 space-x-2">
            {details.map((detail) => (
              <div key={detail._id} className="card bg-base-100 shadow-xl w-64 lg:w-96 mx-auto ">
                <div className="card-body text-xs lg:text-base">
                  <p><strong>Date:</strong> {new Date(detail.datetime).toDateString()}</p>
                  <p><strong>Time:</strong> {new Date(detail.datetime).toTimeString()}</p>
                  <p><strong>Name:</strong> {detail.name}</p>
                  <p><strong>Address:</strong> {detail.address}</p>
                  <p><strong>Email:</strong> {detail.email}</p>
                  <p><strong>Number:</strong> {detail.number}</p>
                  <div className="card-actions justify-end">
                    <button 
                      onClick={() => handleDelete(detail._id)} 
                      className="btn bg-red-500 hover:bg-red-700 text-white text-xs lg:text-base"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="">No details available for this date.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default DayDetails;
