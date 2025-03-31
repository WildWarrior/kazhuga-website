// import { useState, useEffect } from 'react';
// import { GiEagleEmblem, GiHamburgerMenu } from 'react-icons/gi';
// import { FaTimes } from 'react-icons/fa';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isSideBarOpened, toggleSideBar] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 10) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleSideBarNavigation = () => {
//     toggleSideBar(!isSideBarOpened);
//   };

//   return (
//     <header className={`${isScrolled ? 'scrolled' : ''}`}>
//       <nav className='container'>
//         <div className='logo'>
//           <svg
//             width='0'
//             height='0'
//           >
//             <linearGradient
//               id='blue-white-gradient'
//               x1='100%'
//               y1='100%'
//               x2='40%'
//               y2='0%'
//             >
//               <stop
//                 stopColor='blue'
//                 offset='30%'
//               />
//               <stop
//                 stopColor='skyblue'
//                 offset='60%'
//               />
//               <stop
//                 stopColor='#007bff'
//                 offset='80%'
//               />
//             </linearGradient>
//           </svg>
//           <GiEagleEmblem
//             className='imageRotateHorizontal'
//             size={'2rem'}
//           />
//           <a href='https://www.kazhuga.com'>KAZHUGA</a>
//         </div>

//         <ul>
//           {/* <li>
//             <a href='#home'>Home</a>
//           </li> */}
//           <li>
//             <a href='https://www.kazhuga.com'>Digital Transformation</a>
//           </li>
//           <li>
//             <a href='#home'>CTRM Services</a>
//           </li>
//           <li>
//             <a href='#about'>About Us</a>
//           </li>
//           <li>
//             <a href='#services'>Services</a>
//           </li>
//           {/* <li>
//             <a href='#success-stories'>Success Stories</a>
//           </li> */}
//           <li>
//             <a href='#contact-us'>Contact Us</a>
//           </li>
//         </ul>

//         {!isSideBarOpened && (
//           <GiHamburgerMenu
//             className='hamburger-menu'
//             onClick={toggleSideBarNavigation}
//             size={24}
//           />
//         )}
//         {isSideBarOpened && (
//           <div className='sidebar'>
//             <FaTimes
//               className='close'
//               color='#fff'
//               size={24}
//               onClick={toggleSideBarNavigation}
//             />
//             <ul>
//               {/* <li onClick={toggleSideBarNavigation}>
//                 <a href='#home'>Home</a>
//               </li> */}
//               <li>
//                 <a href='https://www.kazhuga.com'>Digital Transformation</a>
//               </li>
//               <li>
//                 <a href='#home'>CTRM Services</a>
//               </li>
//               <li onClick={toggleSideBarNavigation}>
//                 <a href='#about'>About Us</a>
//               </li>
//               <li onClick={toggleSideBarNavigation}>
//                 <a href='#services'>Services</a>
//               </li>
//               {/* <li onClick={toggleSideBarNavigation}>
//                 <a href='#success-stories'>Success Stories</a>
//               </li> */}
//               <li onClick={toggleSideBarNavigation}>
//                 <a href='#contact-us'>Contact Us</a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };
// export default Header;
