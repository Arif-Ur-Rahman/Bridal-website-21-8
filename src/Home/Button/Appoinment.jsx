// src/components/AppointmentForm.jsx
import React, { useRef, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

const AppointmentForm = ({ isOpen, handleCloseModal }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const [offDays, setOffDays] = useState([]);
  const form = useRef();

  // Fetch off days when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/offdays')
      .then(response => response.json())
      .then(data => setOffDays(data.map(day => day.date)))
      .catch(err => setError("Failed to fetch off days"));
  }, []);

  // Fetch available slots when selected date changes
  useEffect(() => {
    if (selectedDate) {
      fetch(`http://localhost:5000/check-available-time?date=${encodeURIComponent(selectedDate)}`)
        .then(response => response.json())
        .then(data => setAvailableSlots(data.slots))
        .catch(err => setError("Failed to fetch available slots"));
    }
  }, [selectedDate]);

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const datetime = `${event.target.date.value}T${event.target.time.value}`;
    const number = event.target.number.value;
    const email = event.target.email.value;

    const appointment = { name, address, datetime, number, email, recaptcha: recaptchaValue };

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
        body: JSON.stringify(appointment),
      });

      if (!responseBook.ok) {
        throw new Error(`Server responded with status: ${responseBook.status}`);
      }

      const data = await responseBook.json();
      if (data.insertedId) {
        const templateParams = {
          name: name,
          email: email,
          address: address,
          number: number,
          date: event.target.date.value,
          time: event.target.time.value
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
    return offDays.includes(date);
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
              <input 
                type="date" 
                name="date"
                className="input input-bordered w-full h-10" 
                min={new Date().toISOString().split('T')[0]} 
                onChange={handleDateChange}
                required
                // Disable off days
                disabled={isOffDay(selectedDate)}
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
                className="input input-bordered w-full h-10" 
                required 
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Phone Number</label>
              <input 
                type="tel" 
                name="number"
                className="input input-bordered w-full h-10" 
                required 
              />
            </div>
          </div>

          <div className="flex items-center justify-start mb-2">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Email</label>
              <input 
                type="email" 
                name="email"
                className="input input-bordered w-full h-10" 
                required 
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 italic pb-2">Address</label>
              <input 
                type="text" 
                name="address"
                className="input input-bordered w-full h-10" 
                required 
              />
            </div>
          </div>

          <div className="mb-2">
            <ReCAPTCHA
              sitekey="6LdpMyIqAAAAAG_KsOprEaaIAly9e1UOiW_qBhyt"
              onChange={handleRecaptchaChange}
            />
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
