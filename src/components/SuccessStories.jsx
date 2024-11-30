import slide1 from '/src/assets/img/stories/slide1.png';
import slide2 from '/src/assets/img/stories/slide2.png';
import slide3 from '/src/assets/img/stories/slide3.png';
import slide4 from '/src/assets/img/stories/slide4.png';
import slide5 from '/src/assets/img/stories/slide5.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SuccessStories = () => {
  return (
    <section
      id='success-stories'
      className='success-stories'
    >
      <div className='container'>
        <h2>Our Success Stories</h2>
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop
          stopOnHover={true}
          swipeable
          dynamicHeight={false}
          emulateTouch={false}
          useKeyboardArrows
          autoPlay={true}
        >
          <div>
            <p className='project-title'>Lead Management System</p>
            <img src={slide1} />
          </div>
          <div>
            <p className='project-title'>
              Supply Chain Management & Inventory Stocking
            </p>
            <img src={slide2} />
          </div>
          <div>
            <p className='project-title'>
              Data Infrastructure and Digital Assets
            </p>
            <img src={slide3} />
          </div>
          <div>
            <p className='project-title'>Backfill and Profile Tooling</p>
            <img src={slide4} />
          </div>
          <div>
            <p className='project-title'>
              Data Ingestion Platform, Compute and Data Storage Layer
            </p>
            <img src={slide5} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default SuccessStories;
