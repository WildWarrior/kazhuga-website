import video from '../assets/videos/professionals-uhd.mp4';

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
        <h1 className='hero-heading'>Powering Data-Informed Decisions</h1>
        <p className='sub-heading'>
          Unlocking the insights hidden in your data so you can make smarter
          choices and driver better business outcomes.
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
            Uncover Insights
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
