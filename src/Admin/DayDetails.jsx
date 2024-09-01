import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DayDetails = () => {
  const { date } = useParams(); // 'date' is a string in 'YYYY-MM-DD' format
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Convert the date string to a Date object
        const selectedDate = new Date(date);
        // Adjust for timezone offset to ensure correct date
        const offsetDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
        const formattedDate = offsetDate.toISOString().split('T')[0]; // Adjusted to local time zone
        console.log('Requesting date:', formattedDate); // Debugging line

        const response = await axios.get(`http://localhost:5000/app/${formattedDate}`);
        setDetails(response.data);
      } catch (err) {
        console.error('Error fetching details:', err);
        setError('No details found or server error.');
      }
    };

    fetchDetails();
  }, [date]);

  // For delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/app/${id}`);
      console.log(response.data.message);

      // Update the state after deletion
      setDetails(details.filter(detail => detail._id !== id));
    } catch (err) {
      console.error('Error deleting detail:', err);
      setError('Error deleting detail.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Appointment Details for {date}</h1>
      {error ? (
        <p>{error}</p>
      ) : details.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((detail) => (
            <div key={detail._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p><strong>Date:</strong> {new Date(detail.datetime).toDateString()}</p>
                <p><strong>Name:</strong> {detail.name}</p>
                <p><strong>Address:</strong> {detail.address}</p>
                <p><strong>Email:</strong> {detail.email}</p>
                <p><strong>Number:</strong> {detail.number}</p>
                <p><strong>Date:</strong> {new Date(detail.datetime).toTimeString()}</p>
                <div className="card-actions justify-end">
                  <button 
                    onClick={() => handleDelete(detail._id)} 
                    className="btn  bg-red-500 hover:bg-red-700 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No details available for this date.</p>
      )}
    </div>
  );
};

export default DayDetails;
