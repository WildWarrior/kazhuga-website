import kyImg from '../assets/img/Ky.jpg';
import raghuImg from '../assets/img/Raghu.jpg';
import raviImg from '../assets/img/ravi-1.jpg';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import leadershipVideo from '../assets/videos/Leadership.mp4';

const Leadership = () => {
  return (
    <>
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
          <h1 className='hero-heading'>Our Leadership</h1>
          <p className='sub-heading'>
            Our leadership team brings together deep expertise in
            <span className='highlight'> Data and AI Technologies</span>, along
            with extensive experience in
            <span className='highlight'>
              {' '}
              Commodities Trading & Risk Management
            </span>
            .
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className='vision-mission'>
        <div className='container'>
          <div className='vm-grid'>
            <div className='vm-card vision'>
              <h3>Our Vision</h3>
              <p>
                To revolutionize the commodities trading landscape through
                innovative technology and data-driven solutions, setting new
                standards for Digitally transforming wide-ranging industries.
              </p>
            </div>
            <div className='vm-card mission'>
              <h3>Our Mission</h3>
              <p>
                Empowering organizations with cutting-edge trading solutions and
                risk management strategies, backed by advanced analytics and
                deep market expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className='leadership-team-modern'>
        <div className='container'>
          <div className='section-header'>
            <div className='header-content'>
              <span className='team-label'>Our Team</span>
              <h2 className='team-title'>Meet Our Leadership</h2>
              <div className='title-underline'></div>
              <p className='team-description'>
                Our leadership team brings together decades of experience in
                commodities trading, risk management, and technological
                innovation.
              </p>
            </div>
          </div>

          <div className='leaders-grid'>
            {/* Ky Ho */}
            <div className='leader-card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div className='image-wrapper'>
                    <img
                      src={kyImg}
                      alt='Ky Ho'
                    />
                  </div>
                  <div className='leader-info'>
                    <h3>Ky Ho</h3>
                    <span className='position'>Consulting Director</span>
                    <p className='brief-desc'>
                      A distinguished leader in commodities trading and risk
                      management with over 20 years of experience.
                    </p>
                  </div>
                </div>
                <div className='card-hover'>
                  <h3>Ky Ho</h3>
                  <span className='position'>Consulting Director</span>
                  <div className='expertise'>
                    <h4>Areas of Expertise:</h4>
                    <ul>
                      <li>Treasury Management</li>
                      <li>Risk Optimization</li>
                      <li>Global Markets Strategy</li>
                      <li>Derivatives Trading</li>
                    </ul>
                  </div>
                  <p className='detailed-desc'>
                    With over two decades of experience in global markets, Ky
                    brings deep expertise in treasury management, derivatives
                    trading, and risk optimization. His innovative approaches to
                    market analysis and risk strategies have helped numerous
                    organizations navigate complex market dynamics.
                  </p>
                  <div className='social-links'>
                    <a href='#'>
                      <FaLinkedin />
                    </a>
                    <a href='#'>
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Raghu V */}
            <div className='leader-card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div className='image-wrapper'>
                    <img
                      src={raghuImg}
                      alt='Raghu V'
                    />
                  </div>
                  <div className='leader-info'>
                    <h3>Raghu V</h3>
                    <span className='position'>Marketing Advisor</span>
                    <p className='brief-desc'>
                      Strategic marketing leader specializing in B2B solutions
                      and market positioning.
                    </p>
                  </div>
                </div>
                <div className='card-hover'>
                  <h3>Raghu V</h3>
                  <span className='position'>Marketing Advisor</span>
                  <div className='expertise'>
                    <h4>Areas of Expertise:</h4>
                    <ul>
                      <li>Strategic Marketing</li>
                      <li>B2B Solutions</li>
                      <li>Market Analysis</li>
                      <li>Business Development</li>
                    </ul>
                  </div>
                  <p className='detailed-desc'>
                    A seasoned marketing strategist with extensive experience in
                    technology and financial services. Raghu excels in
                    developing and executing go-to-market strategies for complex
                    B2B solutions.
                  </p>
                  <div className='social-links'>
                    <a href='#'>
                      <FaLinkedin />
                    </a>
                    <a href='#'>
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ravi K */}
            <div className='leader-card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div className='image-wrapper'>
                    <img
                      src={raviImg}
                      alt='Ravi K'
                    />
                  </div>
                  <div className='leader-info'>
                    <h3>Ravi K</h3>
                    <span className='position'>Managing Director</span>
                    <p className='brief-desc'>
                      Visionary leader in AI/ML technologies and data-driven
                      trading solutions.
                    </p>
                  </div>
                </div>
                <div className='card-hover'>
                  <h3>Ravi K</h3>
                  <span className='position'>Managing Director</span>
                  <div className='expertise'>
                    <h4>Areas of Expertise:</h4>
                    <ul>
                      <li>AI/ML Technologies</li>
                      <li>Data Science</li>
                      <li>Trading Systems</li>
                      <li>Technology Strategy</li>
                    </ul>
                  </div>
                  <p className='detailed-desc'>
                    A pioneering force in Data Science and AI/ML technologies
                    with over 15 years of experience building innovative
                    solutions for trading and risk management systems.
                  </p>
                  <div className='social-links'>
                    <a href='#'>
                      <FaLinkedin />
                    </a>
                    <a href='#'>
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className='company-values'>
        <div className='container'>
          <div className='values-header'>
            <h2>Our Core Values</h2>
            <p>
              The principles that guide our approach to business and innovation
            </p>
          </div>
          <div className='values-grid'>
            <div className='value-card'>
              <h3>Innovation</h3>
              <p>
                Continuously pushing boundaries in trading technology and risk
                management solutions
              </p>
            </div>
            <div className='value-card'>
              <h3>Excellence</h3>
              <p>
                Maintaining the highest standards in all aspects of our
                operations
              </p>
            </div>
            <div className='value-card'>
              <h3>Integrity</h3>
              <p>
                Operating with transparency and ethical principles in all
                relationships
              </p>
            </div>
            <div className='value-card'>
              <h3>Client Focus</h3>
              <p>Delivering exceptional value through customized solutions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
