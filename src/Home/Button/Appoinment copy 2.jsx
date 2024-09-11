import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from 'react-google-recaptcha';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AppointmentForm = ({ isOpen, handleCloseModal }) => {
  const [availableSlots, setAvailableSlots] = useState([]); // Initialize as an empty array
  const [bookedSlots, setBookedSlots] = useState([]); // To store booked slots
  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  
  const [offDays, setOffDays] = useState([]);
  const [error, setError] = useState("");
  const form = useRef();
  const { user } = useContext(AuthContext); // Access user from AuthContext

  useEffect(() => {
    if (selectedDate) {
      // Fetch available time slots for the selected date
      fetch(`http://localhost:5000/check-available-time?date=${encodeURIComponent(selectedDate.toISOString().split('T')[0])}`)
        .then(response => response.json())
        .then(data => {
          setAvailableSlots(data.slots || []); // Ensure the response is an array or fallback to []
        })
        .catch(err => setError("Failed to fetch available slots"));

      // Fetch booked slots for the selected date
      fetch(`http://localhost:5000/get-booked-slots?date=${encodeURIComponent(selectedDate.toISOString().split('T')[0])}`)
        .then(response => response.json())
        .then(data => {
          setBookedSlots(data); // Save booked slots for the selected date
        })
        .catch(err => setError("Failed to fetch booked slots"));
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const isSlotBooked = (slot) => {
    return bookedSlots.some((booking) => {
      const bookedDateTime = new Date(booking.datetime);
      const selectedDateOnly = selectedDate.toISOString().split('T')[0]; // Selected date in YYYY-MM-DD format
      const bookedDateOnly = bookedDateTime.toISOString().split('T')[0]; // Booked date in YYYY-MM-DD format
      const bookedTime = bookedDateTime.toTimeString().slice(0, 5); // Booked time in HH:MM format
  
      // Check if selected date matches booked date and selected time matches booked time
      return bookedDateOnly === selectedDateOnly && bookedTime === slot;
    });
  };
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const address = formData.get('address');
    const datetime = `${formData.get('date')}T${formData.get('time')}`;
    const number = formData.get('number');
    const email = formData.get('email');
    const num_person = formData.get('np');

    if (!recaptchaValue) {
      Swal.fire({
        title: 'Error!',
        text: 'Please complete the reCAPTCHA',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/check-slot?datetime=${encodeURIComponent(datetime)}`);
      const slotAvailable = await response.json();
      
      if (!slotAvailable.available) {
        throw new Error('Selected time slot is not available.');
      }

      const responseBook = await fetch("http://localhost:5000/addapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, datetime, number, email, num_person, recaptcha: recaptchaValue }),
      });

      if (!responseBook.ok) {
        throw new Error(`Server responded with status: ${responseBook.status}`);
      }

      const data = await responseBook.json();
      if (data.insertedId) {
        const templateParams = {
          name,
          email,
          address,
          number,
          date: formData.get('date'),
          time: formData.get('time'),
          userEmail: user?.email,
          to_email: user?.email,
          adminEmail: 'tahsif.cse@gmail.com'
        };

        emailjs.send('service_hif5and', 'template_itcg9u7', templateParams, '-rKJeI0iB4ZX-hOPq')
          .then(() => {
            Swal.fire({
              title: 'Success!',
              text: 'Appointment Successfully Booked and Email Sent',
              icon: 'success',
              confirmButtonText: 'Done'
            });
          }, (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to send confirmation email.',
              icon: 'error',
              confirmButtonText: 'Okay'
            });
          });

        handleCloseModal();
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message || 'Failed to book appointment. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  };

  const isOffDay = (date) => {
    const selectedDate = new Date(date);
    const offsetDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
    const formattedDate = offsetDate.toISOString().split('T')[0];
    return offDays.includes(formattedDate);
  };

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box">
        <form ref={form} onSubmit={handleSubmit}>
          <button 
            type="button" 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={handleCloseModal}
          >
            ✕
          </button>
          <h3 className="font-light text-3xl italic text-center">Appointment Form</h3>

          <div className="flex items-center justify-start mb-2">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Date</label>
              <DatePicker 
                selected={selectedDate} 
                onChange={handleDateChange}
                filterDate={(date) => !isOffDay(date)}
                className="input input-bordered w-full"
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                name="date"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Time</label>
              <select name="time" className="select select-bordered w-full" required>
  {availableSlots.length > 0 ? (
    availableSlots.map((slot) => (
      <option key={slot} value={slot} disabled={isSlotBooked(slot)}>
        {slot} {isSlotBooked(slot) ? "(Booked)" : ""}
      </option>
    ))
  ) : (
    <option value="">No available slots</option>
  )}
</select>


            </div>
          </div>

          {/* Rest of the form fields */}
          <div className="flex justify-center mt-4">
            <ReCAPTCHA
              sitekey="6LdpMyIqAAAAAG_KsOprEaaIAly9e1UOiW_qBhyt"
              onChange={handleRecaptchaChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">Book Appointment</button>
        </form>
      </div>
    </dialog>
  );
};

export default AppointmentForm;
