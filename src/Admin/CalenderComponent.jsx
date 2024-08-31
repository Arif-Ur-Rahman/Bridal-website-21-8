import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    const selectedDate = new Date(date);
    // Adjust for timezone offset to ensure correct date
    const offsetDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = offsetDate.toISOString().split('T')[0];
    console.log('Navigating to:', `/dashboard/details/${formattedDate}`);
    navigate(`/dashboard/details/${formattedDate}`);
  };

  return (
    <div className="p-4">
      <Calendar
        onClickDay={handleDateClick}
        value={date}
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default CalendarComponent;
