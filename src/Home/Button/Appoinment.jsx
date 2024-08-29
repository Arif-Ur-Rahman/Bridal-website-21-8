import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

const AppointmentForm = ({  handleOpenModal, handleCloseModal }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const form = useRef();

  useEffect(() => {
    if (selectedDate) {
      fetch(`http://localhost:5000/check-available-time?date=${encodeURIComponent(selectedDate)}`)
        .then(response => response.json())
        .then(data => setAvailableSlots(data.slots))
        .catch(err => setError("Failed to fetch available slots"));
    }
  }, [selectedDate]);

  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleRecaptchaChange = (value) => setRecaptchaValue(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!recaptchaValue) {
      Swal.fire('Error', 'Please complete the reCAPTCHA', 'error');
      return;
    }

    const formData = new FormData(form.current);
    fetch('http://localhost:5000/app', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Swal.fire('Success', 'Appointment scheduled successfully', 'success');
          emailjs.sendForm('service_id', 'template_id', form.current, 'user_id')
            .then(result => console.log(result.text), error => console.log(error.text));
          handleCloseModal();
        } else {
          Swal.fire('Error', 'Failed to schedule appointment', 'error');
        }
      })
      .catch(err => Swal.fire('Error', 'Failed to schedule appointment', 'error'));
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Schedule an Appointment</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name:</label>
            <input className="input" type="text" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Phone:</label>
            <input className="input" type="tel" name="phone" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email:</label>
            <input className="input" type="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Date:</label>
            <input className="input" type="date" name="date" onChange={handleDateChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Time:</label>
            <select className="input" name="time" required>
              {availableSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleRecaptchaChange} />
          </div>
          <div className="flex justify-end mt-6">
            <button type="button" className="btn" onClick={handleCloseModal}>Close</button>
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
