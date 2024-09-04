import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Sidebar from "../Home/Shared/ANavbar"; // Assuming this is your existing Navbar

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    const selectedDate = new Date(date);
    // Adjust for timezone offset to ensure correct date
    const offsetDate = new Date(
      selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
    );
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = offsetDate.toISOString().split('T')[0];
    console.log('Navigating to:', `/dashboard/details/${formattedDate}`);
    navigate(`/dashboard/details/${formattedDate}`);
  };

  return (
    <>
      <div className="flex">
        <Sidebar /> {/* Sidebar Component */}
     
        
          <div className="flex justify-center items-center min-h-screen">
            <div className="p-4 lg:mx-96">
              <Calendar
                onClickDay={handleDateClick}
                value={date}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
    
    </>
  );
};

export default CalendarComponent;
