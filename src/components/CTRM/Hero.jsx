import video from '../../assets/videos/energy.mp4';

const Hero = () => {
  return (
    <section
      id='home'
      className='hero'
    >
      <video
        className='video-background'
        autoPlay
        muted
        loop
      >
        <source
          src={video}
          type='video/mp4'
        />
        Your browser does not support HTML5 video.
      </video>
      <div className='overlay'></div>
      <div className='hero-content'>
        <h1 className='hero-heading'>
          Commoditech: Energizing Solutions Innovators
        </h1>
        <p className='sub-heading'>
          Empowering commodity management with tech expertise, fostering lasting
          bonds through innovative problem-solving.
        </p>
        <div className='btn-container'>
          <a
            href='#services'
            className='btn btn-secondary'
          >
            Our Services
          </a>
          <a
            href='#contact-us'
            className='btn btn-secondary'
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
