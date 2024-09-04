import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from 'react-google-recaptcha';

import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const AppointmentForm = ({ isOpen, handleCloseModal }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const [offDays, setOffDays] = useState([]);
  const form = useRef();
  const { user } = useContext(AuthContext); // Access user from AuthContext
  useEffect(() => {
    fetch('http://localhost:5000/offdays')
      .then(response => response.json())
      .then(data => setOffDays(data))
      .catch(err => setError("Failed to fetch off days"));
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetch(`http://localhost:5000/check-available-time?date=${encodeURIComponent(selectedDate.toISOString().split('T')[0])}`)
        .then(response => response.json())
        .then(data => setAvailableSlots(data.slots))
        .catch(err => setError("Failed to fetch available slots"));
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Access form data using form.elements
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const address = formData.get('address');
    const datetime = `${formData.get('date')}T${formData.get('time')}`;
    const number = formData.get('number');
    const email = formData.get('email');
    const num_person = formData.get('np');

    console.log('Form Data:', { name, address, datetime, number, email, num_person });
    
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
          email, // The email of the person booking the appointment
          address,
          number,
          date: formData.get('date'),
          time: formData.get('time'),
          userEmail: user?.email, // Logged-in user's email
          to_email: user?.email, // Dynamically pass the email address
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

  // Function to check if a date is an off day
  const isOffDay = (date) => {
    const selectedDate = new Date(date);
        // Adjust for timezone offset to ensure correct date
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
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex items-center justify-start mb-2">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Name</label>
              <input 
                type="text" 
                name="name"
                className="input input-bordered w-full" 
                required 
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Phone Number</label>
              <input 
                type="tel" 
                name="number"
                className="input input-bordered w-full" 
                required 
              />
            </div>
          </div>

          <div className="flex items-center justify-start">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Email</label>
              <input 
                type="email" 
                name="email"
                className="input input-bordered w-full" 
                required 
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Address</label>
              <input 
                type="text" 
                name="address"
                className="input input-bordered w-full" 
                required 
              />
            </div>
          </div>

         <div className="flex items-center justify-start mb-2">
         <div className="w-1/2  mr-2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">number of Person</label>
              <input 
                type="number" 
                name="np"
                className="input input-bordered w-full" 
                required 
              />
            </div>
          <div className="w-1/2 mt-10">
            <ReCAPTCHA  style={{ transform: 'scale(.70)', transformOrigin: '0 0' }}
              sitekey="6LdpMyIqAAAAAG_KsOprEaaIAly9e1UOiW_qBhyt"
              onChange={handleRecaptchaChange}
            />
          </div>

         </div>
          <div className="flex justify-end">
            <button 
              type="button" 
              className="btn bg-red-900 text-white hover:bg-red-700 mr-2" 
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn bg-green-900 text-white hover:bg-green-700"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AppointmentForm;
