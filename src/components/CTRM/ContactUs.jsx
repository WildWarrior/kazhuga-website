const ContactUs = () => {
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
        <form className='contact-form'>
          <div className='flex-row'>
            <input
              type='search'
              className='full-name'
              placeholder='Your Name'
            />
            <input
              type='search'
              className='email-address'
              placeholder='Your Email'
            />
          </div>
          <input
            type='search'
            className='subject'
            placeholder='Subject'
          />
          <textarea
            className='message'
            placeholder='Message'
          ></textarea>
          <button
            className='btn'
            type='submit'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
