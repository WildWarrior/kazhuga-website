import { useState, useEffect } from 'react';
import { GiEagleEmblem, GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname, hash } = useLocation();
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

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const toggleSideBarNavigation = () => {
    const newSidebarState = !isSideBarOpened;
    toggleSideBar(newSidebarState);
    
    if (newSidebarState) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  const toggleServicesSubMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, []);

  const handleSidebarLinkClick = () => {
    toggleSideBar(false);
    document.body.classList.remove('sidebar-open');
  };

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
          <Link to='/home'>KAZHUGA</Link>
        </div>

        <ul className='nav-menu'>
          <li>
            <a href='/home'>Home</a>
          </li>
          
          <li
            className='services-menu-item'
            onClick={toggleServicesSubMenu}
            style={{ cursor: 'pointer', color: 'white' }}
          >
            <a>
            Our Solutions ↓
            </a>
            {isServicesOpen && (
              <ul className='submenu'>
                <li>
                  <Link to='/digital-transformation'>Digital Transformation</Link>
                </li>
                <li>
                  <Link to='/digital-transformation#data-engineering'>Data Strategy</Link>
                </li>
                <li>
                  <Link to='/digital-transformation#advanced-ai'>Advanced AI and Machine Learning</Link>
                </li>
                <li>
                  <Link to='/digital-transformation#cloud-expert'>Cloud Solutions</Link>
                </li>
                <li>
                  <Link to='/digital-transformation#business-intelligence'>Business Intelligence</Link>
                </li>
                <li>
                  <Link to='/digital-transformation#data-analytics'>Data Analytics</Link>
                </li>
                <li>
                  <Link to='/ctrm-services'>CTRM & ETRM Solutions</Link>
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
            <a href='/success-stories'>Success Stories</a>
          </li>
          <li>
            <a href='/careers'>Careers</a>
          </li>
        
          <li>
            <a href='/contact-us#contact-us'>Contact Us</a>
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
              <li onClick={handleSidebarLinkClick}>
                <Link to='/'>Home</Link>
              </li>

              <li className='services-menu-item'>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleServicesSubMenu();
                  }}
                  style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }}
                >
                  Our Solutions ↓
                  {isServicesOpen && (
                    <ul className='submenu sidebar-submenu'>
                      <li>
                        <Link to='/digital-transformation' onClick={handleSidebarLinkClick}>
                          Digital Transformation
                        </Link>
                      </li>
                      <li>
                        <Link to='/digital-transformation#data-engineering' onClick={handleSidebarLinkClick}>
                          Data Strategy
                        </Link>
                      </li>
                      <li>
                        <Link to='/digital-transformation#advanced-ai' onClick={handleSidebarLinkClick}>
                          Advanced AI and Machine Learning
                        </Link>
                      </li>
                      <li>
                        <Link to='/digital-transformation#cloud-expert' onClick={handleSidebarLinkClick}>
                          Cloud Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to='/digital-transformation#business-intelligence' onClick={handleSidebarLinkClick}>
                          Business Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link to='/digital-transformation#data-analytics' onClick={handleSidebarLinkClick}>
                          Data Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to='/ctrm-services' onClick={handleSidebarLinkClick}>
                          CTRM & ETRM Solutions
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              <li onClick={handleSidebarLinkClick}>
                <Link to='/leadership'>Leadership</Link>
              </li>
              <li onClick={handleSidebarLinkClick}>
                <Link to='/case-studies'>Case Studies</Link>
              </li>
              <li onClick={handleSidebarLinkClick}>
                <a href='/contact-us'>Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;