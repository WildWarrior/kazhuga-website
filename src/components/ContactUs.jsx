import React, { useState } from 'react';
import { saveContact } from './dataService';
import leadershipVideo from '../assets/videos/contact.mp4';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="title" content="Contact Us" />
        <meta name="description" content="Get in touch with our team for CTRM consulting and digital transformation services. We're here to answer your questions and discuss your business needs." />
        <meta property="og:title" content="Contact Us" />
        <meta property="og:description" content="Get in touch with our team for CTRM consulting and digital transformation services. We're here to answer your questions and discuss your business needs." />
        <meta property="twitter:title" content="Contact Us" />
        <meta property="twitter:description" content="Get in touch with our team for CTRM consulting and digital transformation services. We're here to answer your questions and discuss your business needs." />
      </Helmet>
      
      <section className='hero'>
        <video
          className='video-background'
          autoPlay
          muted
          loop
        >
          <source
            src={leadershipVideo}
            type='video/mp4'
          />
          Your browser does not support HTML5 video.
        </video>
        <div className='overlay'></div>
        <div className='hero-content'>
          <h1 className='hero-heading'>Get In Touch</h1>
          <p className='sub-heading'>
          We're here to listen and assist you with your queries.
            <span className='highlight' style={{color: '#0552fa'}}> Reach out to us</span> for any
            information or support, and let's create something amazing together!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <a href="#contact-us" className="down-arrow" style={{ 
              fontSize: '60px',  // Increased font size for a bigger arrow
              animation: 'bounce 1s infinite', 
              color: 'white', // Changed color to grey
              fontWeight: 'bold' // Made the arrow thicker
            }}>
              <span style={{ 
                display: 'inline-block', 
                transform: 'translateY(0)', 
                animation: 'bounce 1s infinite' 
              }}>&#8595;</span> {/* Down arrow symbol */}
            </a>
          </div>
          {/* Add CSS for animation in your stylesheet */}
          <style>
            {`
              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
                }
                40% {
                  transform: translateY(-10px);
                }
                60% {
                  transform: translateY(-5px);
                }
              }
            `}
          </style>
        </div>
      </section>
    <section
      id='contact-us'
      className='contact-us'
    >
      <div className='container'>
        <h2>Contact Us</h2>
        <p>
          Want to work with us on a future project? Fill out the form below to
          get started, or mail us at <strong><a href="mailto:sales@kazhuga.com">sales@kazhuga.com</a></strong>.
        </p>
        <form key={formData.id} className='contact-form' onSubmit={handleSubmit}>
          <div className='flex-row'>
            <input
              type='text'
              className='full-name'
              name='name'
              placeholder='Your Name *'
              onChange={handleChange}
              required
            />
            <input
              type='email'
              className='email-address'
              name='email'
              placeholder='Your Email *'
              onChange={handleChange}
              required
            />
          </div>
          <input
            type='text'
            className='organization'
            name='organization'
            placeholder='Your Organization *'
            onChange={handleChange}
            required
          />
          <input
            type='text'
            className='subject'
            name='subject'
            placeholder='Subject *'
            onChange={handleChange}
            required
          />
          <textarea
            className='message'
            name='message'
            placeholder='Message *'
            onChange={handleChange}
            required
            style={{ height: '150px', width: '100%' }}
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
    </>
  );
};

export default ContactUs;
