import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState([false, false, false, false, false,false]);
  const [isActive, setIsActive] = useState([false, false, false, false, false,false]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHover = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleHoverLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };

  const handleItemClick = (index) => {
    const items = [false, false, false, false, false,false];
    if (index !== -1) {
      items[index] = true;
      setIsHovered(items);
      setIsActive(items); 
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContext.Provider
      value={{
        isHovered,
        isActive,
        isMenuOpen,
        handleHover,
        handleHoverLeave,
        handleItemClick,
        setIsActive,
        toggleMenu
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
