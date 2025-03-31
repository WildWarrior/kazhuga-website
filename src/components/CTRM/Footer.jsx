import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaDribbble,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <ul className='flex-row'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#contact-us'>Contact Us</a>
          </li>
        </ul>
        <ul className='flex-row'>
          <li>
            <FaInstagram
              className='footer-icons'
              size='30'
            />
          </li>
          <li>
            <FaTwitter
              className='footer-icons'
              size='30'
            />
          </li>
          <li>
            <FaYoutube
              className='footer-icons'
              size='30'
            />
          </li>
          <li>
            <FaFacebook
              className='footer-icons'
              size='30'
            />
          </li>
          <li>
            <FaDribbble
              className='footer-icons'
              size='30'
            />
          </li>
        </ul>
        <p>&copy; 2023 Kazhuga</p>
      </div>
    </footer>
  );
};
export default Footer;
