import { useState, useEffect } from 'react';
import { GiEagleEmblem, GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideBarOpened, toggleSideBar] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSideBarNavigation = () => {
    toggleSideBar(!isSideBarOpened);
    document.body.classList.toggle('sidebar-open', !isSideBarOpened);
  };

  const toggleServicesSubMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav className='container'>
        <div className='logo'>
          <svg
            width='0'
            height='0'
          >
            <linearGradient
              id='blue-white-gradient'
              x1='100%'
              y1='100%'
              x2='40%'
              y2='0%'
            >
              <stop
                stopColor='blue'
                offset='30%'
              />
              <stop
                stopColor='skyblue'
                offset='60%'
              />
              <stop
                stopColor='#007bff'
                offset='80%'
              />
            </linearGradient>
          </svg>
          <GiEagleEmblem
            className='imageRotateHorizontal'
            size={'2rem'}
          />
          <Link to='/'>KAZHUGA</Link>
        </div>

        <ul className='nav-menu'>
          <li>
            <a href='/#home'>Home</a>
          </li>
          <li>
            <a href='/#about'>About Us</a>
          </li>
          <li
            className='services-menu-item'
            onClick={toggleServicesSubMenu}
            style={{ cursor: 'pointer', color: 'white' }}
          >
            {/* Removed Link, added onClick */}
            <a href='/#'>
              Services ↓
            </a>
            {isServicesOpen && (
              <ul className='submenu'>
                <li>
                  <Link to='/ctrm'>Digital Transformation</Link>
                </li>
                <li>
                  <Link to='/ctrm'>CTRM Services</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to='/leadership'>Leadership</Link>
          </li>
          <li>
            <Link to='/case-studies'>Case Studies</Link>
          </li>
          <li>
            <a href='/#success-stories'>Success Stories</a>
          </li>
          <li>
            <a href='/#contact-us'>Contact Us</a>
          </li>
        </ul>

        {!isSideBarOpened && (
          <GiHamburgerMenu
            className='hamburger-menu'
            onClick={toggleSideBarNavigation}
            size={24}
          />
        )}
        {isSideBarOpened && (
          <div className='sidebar'>
            <FaTimes
              className='close'
              color='#fff'
              size={24}
              onClick={toggleSideBarNavigation}
            />
            <ul>
              <li onClick={toggleSideBarNavigation}>
                <Link to='/'>Home</Link>
              </li>
              <li onClick={toggleSideBarNavigation}>
                <a href='/#about'>About Us</a>
              </li>

              <li className='services-menu-item' >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleServicesSubMenu();
                  }}
                  style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }}
                >
                  Services ↓
                  {isServicesOpen && (
                    <ul className='submenu sidebar-submenu'>
                      <li>
                        <Link
                          to='/ctrm'
                          onClick={toggleSideBarNavigation}
                        >
                          Digital Transformation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/ctrm'
                          onClick={toggleSideBarNavigation}
                        >
                          CTRM Services
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              <li onClick={toggleSideBarNavigation}>
                <Link to='/leadership'>Leadership</Link>
              </li>
              <li onClick={toggleSideBarNavigation}>
                <Link to='/case-studies'>Case Studies</Link>
              </li>
              <li onClick={toggleSideBarNavigation}>
                <a href='/#success-stories'>Success Stories</a>
              </li>
              <li onClick={toggleSideBarNavigation}>
                <a href='/#contact-us'>Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;