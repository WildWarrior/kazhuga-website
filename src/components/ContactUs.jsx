import React, { useState } from 'react';
import { saveContact } from './dataService';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    name: '',
    email: '',
    subject: '',
    message: '',
    organization: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveContact(formData);
    setShowPopup(true);

    console.log("Form submitted with data:", formData);

    setFormData({
      id: Date.now().toString(),
      name: '',
      email: '',
      subject: '',
      message: '',
      organization: ''
    });

    console.log("Form fields reset.");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section
      id='contact-us'
      className='contact-us'
    >
      <div className='container'>
        <h2>Contact Us</h2>
        <p>
          Want to work with us on a future project? Fill out the form below to
          get started!
        </p>
        <form key={formData.id} className='contact-form' onSubmit={handleSubmit}>
          <div className='flex-row'>
            <input
              type='text'
              className='full-name'
              name='name'
              placeholder='Your Name'
              onChange={handleChange}
              required
            />
            <input
              type='email'
              className='email-address'
              name='email'
              placeholder='Your Email'
              onChange={handleChange}
              required
            />
          </div>
          <input
            type='text'
            className='organization'
            name='organization'
            placeholder='Your Organization'
            onChange={handleChange}
          />
          <input
            type='text'
            className='subject'
            name='subject'
            placeholder='Subject'
            onChange={handleChange}
            required
          />
          <textarea
            className='message'
            name='message'
            placeholder='Message'
            onChange={handleChange}
            required
          ></textarea>
          <button
            className='btn'
            type='submit'
          >
            Send Message
          </button>
        </form>

        {showPopup && (
          <div className='popup'>
            <div className='popup-content'>
              <span className='close' onClick={closePopup}>&times;</span>
              <h2>Thank You!</h2>
              <p>Thanks for contacting us! Our team will get in touch with you shortly.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
