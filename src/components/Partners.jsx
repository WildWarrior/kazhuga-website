import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort, BsBriefcase, BsCloudCheck, BsGlobe, BsShieldCheck } from 'react-icons/bs';
import { FaAws, FaMicrosoft, FaGoogle, FaCloudversify, FaDatabase, FaCogs } from 'react-icons/fa';
import { SiDatabricks, SiSalesforce, SiSnowflake, SiGooglecloud } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Partners.css';
import partner from '../assets/videos/partners.mp4';
import { Helmet } from 'react-helmet-async';

const Partners = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partners-page" style={{backgroundColor: 'white'}}>
      <Helmet>
        <title>Our Technology Partners</title>
        <meta name="title" content="Our Technology Partners" />
        <meta name="description" content="Strategic technology partnerships that power our solutions. Collaborating with industry leaders to deliver exceptional value to our clients." />
        <meta property="og:title" content="Our Technology Partners" />
        <meta property="og:description" content="Strategic technology partnerships that power our solutions. Collaborating with industry leaders to deliver exceptional value to our clients." />
        <meta property="twitter:title" content="Our Technology Partners" />
        <meta property="twitter:description" content="Strategic technology partnerships that power our solutions. Collaborating with industry leaders to deliver exceptional value to our clients." />
      </Helmet>
      
      {/* Hero Section */}
      {/* <section className="partners-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Our Technology Partners</h1>
            <p>We collaborate with industry-leading technology providers to deliver exceptional solutions for our clients</p>
          </div>
        </div>
      </section> */}
    <section className='hero' style={{backgroundColor: 'white'}}>
        <video
          className='video-background'
          autoPlay
          muted
          loop
        >
          <source
            src={partner}
            type='video/mp4'
          />
          Your browser does not support HTML5 video.
        </video>
        <div className='overlay'></div>
        <div className='hero-content'>
          <h1 className='hero-heading'>Our Technology Partners</h1>
          <p className='sub-heading'>
          We collaborate with industry-leading technology providers to deliver exceptional solutions for our clients.
            
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <a href="#partners" className="down-arrow" style={{ 
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
      {/* Partners Showcase */}
      <section id ="partners" className="partners-showcase">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">STRATEGIC ALLIANCES</span>
            <h2>Powering Innovation Through Partnerships</h2>
            <p>Our strategic partnerships with leading technology providers enable us to deliver cutting-edge solutions that drive business value</p>
          </div>

          <div className="partners-grid">
            <div className="partner-card" data-aos="fade-up">
              <div className="partner-logo">
                <FaMicrosoft size={48} />
              </div>
              <h3>Microsoft Azure</h3>
              <p>As a Microsoft Azure partner, we leverage cloud computing, AI services, and data analytics to build scalable, enterprise-grade solutions.</p>
              <div className="partner-capabilities">
                <span>Azure Data Factory</span>
                <span>Azure Synapse</span>
                <span>Azure ML</span>
                <span>Power BI</span>
              </div>
            </div>

            <div className="partner-card" data-aos="fade-up" data-aos-delay="100">
              <div className="partner-logo">
                <FaAws size={48} />
              </div>
              <h3>Amazon Web Services</h3>
              <p>Our AWS partnership enables us to design and implement secure, resilient cloud infrastructure and advanced data solutions.</p>
              <div className="partner-capabilities">
                <span>AWS Lambda</span>
                <span>Amazon S3</span>
                <span>Amazon Redshift</span>
                <span>AWS Glue</span>
              </div>
            </div>

            <div className="partner-card" data-aos="fade-up" data-aos-delay="200">
              <div className="partner-logo">
                <SiDatabricks size={48} />
              </div>
              <h3>Databricks</h3>
              <p>Through our Databricks partnership, we deliver unified analytics platforms combining data engineering, data science, and business analytics.</p>
              <div className="partner-capabilities">
                <span>Delta Lake</span>
                <span>MLflow</span>
                <span>Databricks SQL</span>
                <span>Unity Catalog</span>
              </div>
            </div>

            <div className="partner-card" data-aos="fade-up" data-aos-delay="300">
              <div className="partner-logo">
                <SiSalesforce size={48} />
              </div>
              <h3>Salesforce</h3>
              <p>Our Salesforce partnership allows us to implement and customize CRM solutions that enhance customer experience and drive growth.</p>
              <div className="partner-capabilities">
                <span>Sales Cloud</span>
                <span>Service Cloud</span>
                <span>Einstein Analytics</span>
                <span>Data Cloud</span>
              </div>
            </div>

            <div className="partner-card" data-aos="fade-up" data-aos-delay="400">
              <div className="partner-logo">
                <SiSnowflake size={48} />
              </div>
              <h3>Snowflake</h3>
              <p>As a Snowflake partner, we help organizations build modern data platforms for analytics, data sharing, and AI/ML workloads.</p>
              <div className="partner-capabilities">
                <span>Data Cloud</span>
                <span>Snowpipe</span>
                <span>Data Sharing</span>
                <span>Snowpark</span>
              </div>
            </div>

            <div className="partner-card" data-aos="fade-up" data-aos-delay="500">
              <div className="partner-logo">
                <SiGooglecloud size={48} />
              </div>
              <h3>Google Cloud Platform</h3>
              <p>Our GCP partnership enables us to leverage Google's infrastructure for scalable, high-performance data and AI solutions.</p>
              <div className="partner-capabilities">
                <span>BigQuery</span>
                <span>Vertex AI</span>
                <span>Dataflow</span>
                <span>Looker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="partnership-benefits">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">PARTNERSHIP ADVANTAGES</span>
            <h2>How Our Partnerships Benefit You</h2>
            <p>Our strategic alliances with leading technology providers translate to tangible business advantages</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card" data-aos="fade-up">
              <div className="benefit-icon">
                <BsCloudCheck size={42} />
              </div>
              <h3>Access to Latest Technologies</h3>
              <p>Early access to cutting-edge technologies and features, ensuring your solutions leverage the latest innovations</p>
            </div>

            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <BsBriefcase size={42} />
              </div>
              <h3>Cost-Effective Solutions</h3>
              <p>Preferred partner pricing and optimized architectures that maximize value while minimizing costs</p>
            </div>

            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <FaCogs size={42} />
              </div>
              <h3>Expert Implementation</h3>
              <p>Certified specialists with deep platform expertise ensure successful implementation and adoption</p>
            </div>

            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <BsShieldCheck size={42} />
              </div>
              <h3>Enterprise-Grade Security</h3>
              <p>Best practices and security frameworks aligned with platform-specific compliance requirements</p>
            </div>

            <div className="benefit-card" data-aos="fade-up" data-aos-delay="400">
              <div className="benefit-icon">
                <FaCloudversify size={42} />
              </div>
              <h3>Seamless Integration</h3>
              <p>Proven integration patterns and connectors that work across multiple platforms and environments</p>
            </div>

            <div className="benefit-card" data-aos="fade-up" data-aos-delay="500">
              <div className="benefit-icon">
                <BsGlobe size={42} />
              </div>
              <h3>Global Scale</h3>
              <p>Leverage global infrastructure and services to support your business wherever it operates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="cta-card" data-aos="fade-up">
            <h2 style={{color: 'white'}}>Ready to leverage our partner ecosystem?</h2>
            <p>Contact us to learn how our technology partnerships can accelerate your digital transformation</p>
            <div className="cta-buttons">
              <Link to="/contact-us?subject=partnerships" className="cta-button">
                Get in Touch <BsArrowRightShort size={25} />
              </Link>
              <Link to="/success-stories" className="cta-button secondary">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners; 