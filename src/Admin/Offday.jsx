import React, { useState } from 'react';
import axios from 'axios';

const OffDayManager = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [message, setMessage] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/offdays', { date: selectedDate });
      if (response.status === 201) {
        setMessage('Off day added successfully!');
      }
    } catch (error) {
      setMessage('Failed to add off day.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mark Off Days for Appointments</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="off-day" className="block text-sm font-medium text-gray-700">
            Select Date:
          </label>
          <input
            type="date"
            id="off-day"
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
        >
          Add Off Day
        </button>
      </form>
      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
};

export default OffDayManager;
