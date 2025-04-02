import { FaBullhorn } from 'react-icons/fa';
import aboutImg from '/src/assets/img/about-img.svg';
import aboutExtra1 from '/src/assets/img/about-extra-1.svg';
import aboutExtra2 from '/src/assets/img/about-extra-2.svg';

const About = () => {
  return (
    <>
      <section
        id='about'
        className='about about-1'
      >
        <div className='container'>
          <h2>About Us</h2>
          <div className='flex-row'>
            <div className='left'>
              <p>
                Kazhuga is a premier consulting firm specializing in CTRM (Commodity Trading & Risk Management) 
                and ETRM (Energy Trading & Risk Management) solutions. With deep expertise across OpenLink Endur, 
                OpenLink Findur, Allegro CTRM, ION RightAngle, and Aspect platforms, we deliver comprehensive 
                solutions for global commodity trading organizations. Our expertise spans energy commodities, 
                metals, agricultural products, and treasury operations.
              </p>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Industry-Leading CTRM/ETRM Expertise</h4>
                  <p>
                    Our team comprises seasoned professionals with extensive experience in 
                    implementing and optimizing CTRM/ETRM solutions. We specialize in OpenLink 
                    Endur for energy trading, Findur for treasury operations, Allegro for 
                    comprehensive commodity management, and RightAngle for integrated trading 
                    workflows. Our deep understanding of commodity markets ensures solutions 
                    that deliver real business value.
                  </p>
                </div>
              </div>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Multi-Commodity Trading Excellence</h4>
                  <p>
                    We excel in managing diverse commodity portfolios including crude oil, 
                    natural gas, power, metals, and agricultural products. Our expertise 
                    covers physical and derivatives trading, risk management, logistics, 
                    and regulatory compliance. We leverage leading CTRM platforms to optimize 
                    trading operations and enhance market visibility.
                  </p>
                </div>
              </div>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Advanced Technical Solutions</h4>
                  <p>
                    Our technical prowess extends to custom development, system integration, 
                    and platform extensions. We specialize in OpenLink scripting, Allegro 
                    customizations, and RightAngle adaptations. Our solutions encompass 
                    real-time trading interfaces, risk analytics, and automated workflows 
                    for enhanced operational efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className='right'>
              <img
                src={aboutImg}
                alt='CTRM and ETRM Solutions'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='about about-2'>
        <div className='container flex-row'>
          <div className='left'>
            <img
              src={aboutExtra1}
              alt='Global Energy Trading Solutions'
            />
          </div>
          <div className='right'>
            <h3>Global Commodity Trading Solutions</h3>
            <p>
              Kazhuga delivers enterprise-grade CTRM and ETRM solutions across North America, 
              Europe, and Asia. Our expertise in OpenLink Endur, Findur, Allegro, and RightAngle 
              implementations has helped major energy, metals, and agricultural trading companies 
              optimize their operations. We ensure seamless system deployment, knowledge transfer, 
              and ongoing support for sustainable business growth.
            </p>
          </div>
        </div>
      </section>
      <section className='about about-3'>
        <div className='container flex-row'>
          <div className='left'>
            <h3>Innovative Trading Technology Solutions</h3>
            <p>
              We specialize in modernizing commodity trading operations through advanced 
              CTRM/ETRM implementations. Our solutions cover the entire trading lifecycle - 
              from deal capture and risk management to settlement and reporting. Using platforms 
              like OpenLink Endur, Allegro, and RightAngle, we enable straight-through processing, 
              real-time risk analytics, and automated compliance workflows.
            </p>
            <p>
              Our expertise encompasses critical trading functions including position management, 
              P&L tracking, risk analytics, credit management, and regulatory reporting. We leverage 
              advanced features of CTRM platforms to create custom solutions that enhance trading 
              efficiency and risk control. Our implementations are backed by robust testing, 
              comprehensive documentation, and dedicated support services.
            </p>
          </div>
          <div className='right'>
            <img
              src={aboutExtra2}
              alt='Advanced CTRM Implementation'
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
