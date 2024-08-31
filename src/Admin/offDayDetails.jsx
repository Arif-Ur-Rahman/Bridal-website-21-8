import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OffDayDetails = () => {
  const { date } = useParams(); // 'date' is a string in 'YYYY-MM-DD' format
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Convert the date string to a Date object
        const selectedDate = new Date(date);
        // Adjust for timezone offset to ensure correct date
        const offsetDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
        const formattedDate = offsetDate.toISOString().split('T')[0]; // Adjusted to local time zone
        console.log('Requesting date:', formattedDate); // Debugging line

        const response = await axios.get(`http://localhost:5000/offdays/${formattedDate}`);
        setDetails(response.data);
      } catch (err) {
        console.error('Error fetching details:', err);
        setError('No details found or server error.');
      }
    };

    fetchDetails();
  }, [date]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Off Day Details</h1>
      {error ? (
        <p>{error}</p>
      ) : details ? (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p><strong>Date:</strong> {new Date(details.date).toDateString()}</p>
          {/* Display other details if available */}
          {/* <p><strong>Details:</strong> {details.details}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OffDayDetails;
