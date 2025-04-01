import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaDribbble,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Add this scroll handler function
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // smooth scrolling animation
    });
  };

  return (
    <footer>
      <div className='container'>
        {/* Company Description Section */}
        <div className='footer-content'>
          <div className='footer-section company-info'>
            <h4>Kazhuga</h4>
            <p className='company-description'>
              Empowering businesses with advanced data technologies and expert commodity trading solutions.
            </p>
            <ul className='social-icons'>
              <li>
                <a href='https://www.linkedin.com/company/101290485/' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin className='footer-icon' />
                </a>
              </li>
              <li>
                <a href='https://x.com/KazhugaCTRM' target='_blank' rel='noopener noreferrer'>
                  <FaTwitter className='footer-icon' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/kazhugactrm' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram className='footer-icon' />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/@KazhugaCTRM' target='_blank' rel='noopener noreferrer'>
                  <FaYoutube className='footer-icon' />
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Section - Updated with onClick handler */}
          <div className='footer-section'>
            <h4>Solutions</h4>
            <ul>
              <li><Link to='/digital-transformation' onClick={handleLinkClick}>Data Strategy</Link></li>
              <li><Link to='/digital-transformation' onClick={handleLinkClick}>AI & Machine Learning</Link></li>
              <li><Link to='/digital-transformation' onClick={handleLinkClick}>Cloud Services</Link></li>
              <li><Link to='/ctrm-services' onClick={handleLinkClick}>CTRM Consulting</Link></li>
              <li><Link to='/digital-transformation' onClick={handleLinkClick}>Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Company Section - Updated with onClick handler */}
          <div className='footer-section'>
            <h4>Company</h4>
            <ul>
              <li><Link to='/about' onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to='/leadership' onClick={handleLinkClick}>Our Team</Link></li>
              <li><Link to='/careers' onClick={handleLinkClick}>Careers</Link></li>
              <li><Link to='/case-studies' onClick={handleLinkClick}>Case Studies</Link></li>
              {/* <li><Link to='/news' onClick={handleLinkClick}>News & Insights</Link></li> */}
            </ul>
          </div>

          {/* Contact Section */}
          <div className='footer-section'>
            <h4>Contact</h4>
            <ul className='contact-info'>
              <li>
                <a href='mailto:info@kazhuga.com'>
                  <span className='icon'>📧</span> info@kazhuga.com
                </a>
              </li>
              {/* <li>
                <a href='tel:+18885550123'>
                  <span className='icon'>📞</span> +1 (888) 555-0123
                </a>
              </li> */}
              <li>
                <address>
                  <span className='icon'>📍</span> Unit No 13, 1st Floor,
                  <br />
                  <span className='address-indent'>Balagere Road</span>
                  <br />
                  <span className='address-indent'>Bengaluru, India 560087</span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Additional Info */}
        <div className='footer-bottom'>
          <p>&copy; 2024 Kazhuga. All rights reserved.</p>
          <ul className='footer-bottom-links'>
            <li><Link to='/' onClick={handleLinkClick} style={{color: 'white'}}>Privacy Policy</Link></li>
            <li><Link to='/' onClick={handleLinkClick} style={{color: 'white'}}>Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
