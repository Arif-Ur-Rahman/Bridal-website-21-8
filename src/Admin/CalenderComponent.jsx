import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Sidebar from "../Home/Shared/ANavbar"; // Assuming this is your existing Navbar
import './index.css'; // Custom CSS file for styling calendar tiles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]); // To store appointment dates
  const navigate = useNavigate();

  // Fetching appointments from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/app')
      .then(response => {
        // Extracting dates from appointment datetime fields
        const appointmentDates = response.data.map(app => app.datetime.split('T')[0]);
        setAppointments(appointmentDates);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  // Handling the click on a date
  const handleDateClick = (date) => {
    const selectedDate = new Date(date);
    const offsetDate = new Date(
      selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
    );
    const formattedDate = offsetDate.toISOString().split('T')[0];
    console.log('Navigating to:', `/dashboard/details/${formattedDate}`);
    navigate(`/dashboard/details/${formattedDate}`);
  };

  // Applying a custom class for dates that have appointments
  const tileClassName = ({ date }) => {
    const appDate = new Date(date);
    const appSetDate = new Date(appDate.getTime() - appDate.getTimezoneOffset() * 60000);
    const formattedDate = appSetDate.toISOString().split('T')[0];
    if (appointments.includes(formattedDate)) {
      return 'appointment-tile'; // Custom CSS class
    }
    return '';
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <Sidebar /> {/* Sidebar Component */}
        <div className="flex justify-center items-center min-h-screen">
          <div className="p-4 lg:mx-96">
            <Calendar
              onClickDay={handleDateClick}
              value={date}
              tileClassName={tileClassName} // Apply custom styling to dates
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarComponent;
