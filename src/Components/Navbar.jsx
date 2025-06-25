import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../data/teckybotLogo.png';
import { NavbarContext } from './NavbarContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { isHovered, isActive, handleHover, handleHoverLeave, handleItemClick } = useContext(NavbarContext);

  const [showProgramsMobile, setShowProgramsMobile] = useState(false);
  const [showServicesMobile, setShowServicesMobile] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/AboutUs' },
    { label: 'Teckyverse', path: '/Teckyverse' },
    { label: 'Services', path: '/Services' },
    { label: 'Programs', path: '/Programs' },
    { label: 'Career', path: '/Career' },
    { label: 'Events', path: '/Events' },
  ];

  // const subMenuItems = [
  //   { label: 'Internships', path: '/programs/internships' },
  //   { label: 'BootCamps', path: '/programs/boot-camps' },
  //   { label: 'Workshops', path: '/programs/workshops' },
  //   { label: 'Seminars', path: '/programs/seminars' },

  //   { label: 'Projects', path: '/Services/projects' },
  //   { label: 'STEM Labs', path: '/Services/stemlabs' },
  //   { label: 'Tech FDP', path: '/Services/TechFdp' },
  //   { label: 'Tech IIC', path: '/Services/TechIic' }
  // ];

  const programsSubMenu = [
    { label: 'Internships', path: '/Programs/internships' },
    { label: 'BootCamps', path: '/Programs/BootCamp' },
    { label: 'Workshops', path: '/Programs/workshops' },
    { label: 'Seminars', path: '/Programs/seminars' },
  ];

  const servicesSubMenu = [
    { label: 'Projects', path: '/Services/projects' },
    { label: 'STEM Labs', path: '/Services/stemlabs' },
    { label: 'Tech FDP', path: '/Services/TechFdp' },
    { label: 'Tech IIC', path: '/Services/TechIic' },
  ];


  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close entire menu when a subitem is clicked
  const handleSubItemClick = () => { setIsMenuOpen(false); handleItemClick(3) };

  // Hook to adjust for small screen changes
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/ContactUs') {
      handleItemClick(-1); // Call the function with -1 for Contact Us
      return; // Exit early since Contact Us has its specific logic
    }
    let foundActive = false;

    navItems.forEach((item, index) => {
      if (currentPath === item.path) {
        handleItemClick(index);
        foundActive = true;
      }
    });

    if (!foundActive) {
      servicesSubMenu.forEach((subItem) => {
        if (currentPath.startsWith(subItem.path)) {
          handleItemClick(3); // Highlight 'Services' as active
          foundActive = true;
        }
      });
    }

    if (!foundActive) {
      handleItemClick(-1); // Fallback for no matches
    }
  }, []);


  return (
    <div className='w-full sticky top-0 z-50'>
      <div className='relative flex justify-between items-center h-[72px] bg-white/60 backdrop-blur-lg shadow-md z-20 px-4 xl:px-24'>
        <div className='flex items-center h-full'>
          <NavLink to='/'>
            <img src={logo} alt='logo' className='w-21 h-9 px-2 lg:ml-4' />
          </NavLink>
        </div>

        {/* Navbar Items for large screens */}
        <div className='hidden md:flex gap-4 lg:gap-12'>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`relative ${isActive[index] ? 'text-gray-600' : 'text-black'}`}
              onMouseEnter={() => {
                handleHover(index);
                if (item.label === 'Services') setOpenSubMenu('services');
                else if (item.label === 'Programs') setOpenSubMenu('programs');
                else setOpenSubMenu(null);
              }}
              onMouseLeave={() => {
                handleHoverLeave(index);
                setOpenSubMenu(null);
              }}
            >
              <NavLink
                to={item.path}
                onClick={() => {
                  handleItemClick(index); // Keep submenu open for Services
                }}
              >
                {item.label}
              </NavLink>
              {(isHovered[index] || isActive[index]) && (
                <div className='relative '>
                  <div
                    className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-[38px] h-[15px] bg-orange-500"
                    style={{
                      clipPath: 'path("M0 24 C21 0, 21 0, 42 24 L0 24 Z")',
                    }}
                  ></div>
                </div>
              )}
              {item.label === 'Services' && openSubMenu === 'services' && (
                <div
                  className='absolute top-full w-36 bg-white shadow-lg rounded-md pt-2 text-center'
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  {servicesSubMenu.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={`block py-2 hover:bg-orange-100 ${window.location.pathname === subItem.path
                        ? 'text-orange-500'
                        : 'text-black'
                        }`}
                      onClick={() => { setOpenSubMenu(null); handleItemClick(3); }} // Close menu when subitem is clicked
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
              {item.label === 'Programs' && openSubMenu === 'programs' && (
                <div className='absolute top-full w-36 bg-white shadow-lg rounded-md pt-2 text-center'
                  onMouseLeave={() => setOpenSubMenu(null)}>
                  {programsSubMenu.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={`block py-2 hover:bg-orange-100 ${window.location.pathname === subItem.path
                        ? 'text-orange-500'
                        : 'text-black'
                        }`}
                      onClick={() => {
                        setOpenSubMenu(null);
                        handleItemClick(4); // 'Programs' index
                      }}
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Us button */}
        <div className="hidden md:flex justify-center items-center rounded-lg bg-[#D5E5F7] px-2 py-2 sm:mr-4">
          <a href="/ContactUs" className="text-center w-full">
            Contact Us
          </a>
        </div>


        {/* Mobile Menu Toggle Button */}
        <div className='md:hidden z-30'>
          <button onClick={toggleMenu} className='text-gray-800 p-2 focus:outline-none'>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/90 backdrop-blur-md shadow-md w-full py-4 space-y-2">
          {navItems.map((item, index) => (
            <div key={index} className="w-full text-center">
              <NavLink
                to={item.path}
                onClick={() => {
                  handleItemClick(index);

                  setIsMenuOpen(false)
                } // Close entire menu for other items
                }
                className={`py-2 text-center text-lg w-full ${isActive[index] ? 'text-orange-500' : 'text-black'
                  }`}
              >
                {item.label}
              </NavLink>
              {item.label === 'Services' && isMobile && (
                <div className='flex flex-col items-center bg-white mt-2 w-3/4 mx-auto rounded-lg shadow-md'>
                  {servicesSubMenu.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={`block px-4 py-2 w-full text-center hover:bg-orange-100 ${window.location.pathname === subItem.path
                        ? 'text-orange-500'
                        : 'text-black'
                        }`}
                      onClick={handleSubItemClick} // Close menu when subitem is clicked
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
              {item.label === 'Programs' && isMobile  && (
                <div className='flex flex-col items-center bg-white mt-2 w-3/4 mx-auto rounded-lg shadow-md'>
                  {programsSubMenu.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={`block px-4 py-2 w-full text-center hover:bg-orange-100 ${window.location.pathname === subItem.path
                        ? 'text-orange-500'
                        : 'text-black'
                        }`}
                      onClick={handleSubItemClick} // Close menu when subitem is clicked
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4">
            <div className='flex justify-center items-center rounded-lg bg-[#D5E5F7] px-5 py-2 w-full text-center'>
              <a href='/ContactUs'><p>Contact Us</p></a>
            </div>
          </div>
        </div>
      )} */}

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 px-4 py-4">
          {navItems.map((item, index) => {
            const isPrograms = item.label === 'Programs';
            const isServices = item.label === 'Services';

            return (
              <div key={index} className="mb-2">
                {/* <div className="flex justify-between items-center">
            <NavLink
              to={item.path}
              className="block text-black py-2 text-center w-80"
              onClick={() => {
                if (!isPrograms && !isServices) {
                  setIsMenuOpen(false);
                  handleItemClick(index);
                }
              }}
            >
              {item.label}
            </NavLink>
            {(isPrograms || isServices) && (
              <button
                onClick={() => {
                  if (isPrograms) setShowProgramsMobile(!showProgramsMobile);
                  if (isServices) setShowServicesMobile(!showServicesMobile);
                }}
              >
                <span className="text-xl">{(isPrograms ? showProgramsMobile : showServicesMobile) ? '▲' : '▼'}</span>
              </button>
            )}
          </div> */}

                {(isPrograms || isServices) ? (
                  <div
                    className="flex justify-center items-center gap-1 text-black py-2 cursor-pointer w-80 mx-auto"
                    onClick={() => {
                      if (isPrograms) setShowProgramsMobile(!showProgramsMobile);
                      if (isServices) setShowServicesMobile(!showServicesMobile);
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="text-lg">
                      {(isPrograms ? showProgramsMobile : showServicesMobile) ? '▲' : '▼'}
                      {/* {(isPrograms ? showProgramsMobile : showServicesMobile)? <FaChevronUp />: <FaChevronDown />} */}
                    </span>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className="block text-black py-2 text-center w-80 mx-auto"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleItemClick(index);
                    }}
                  >
                    {item.label}
                  </NavLink>
                )}


                {/* Show Programs submenu */}
                {isPrograms && showProgramsMobile && (
                  <div className="ml-4 mt-1">
                    {programsSubMenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="block py-1 pl-2 text-sm text-gray-700 hover:text-orange-500 text-center"
                        onClick={handleSubItemClick}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}

                {/* Show Services submenu */}
                {isServices && showServicesMobile && (
                  <div className="ml-4 mt-1">
                    {servicesSubMenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="block py-1 pl-2 text-sm text-gray-700 hover:text-orange-500 text-center"
                        onClick={handleSubItemClick}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Contact Us in mobile menu */}
          <div className="mt-4">
            <NavLink
              to="/ContactUs"
              className="block py-2 px-2 rounded-md bg-blue-100 text-center"
              onClick={() => {
                setIsMenuOpen(false);
                handleItemClick(-1);
              }}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
