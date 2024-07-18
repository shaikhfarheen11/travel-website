import React, { useState } from 'react';
import { database } from './firebaseConfig';
import { ref, push } from "firebase/database";
import './ContactFormStyles.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, formData);
      alert('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message: ', error);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
