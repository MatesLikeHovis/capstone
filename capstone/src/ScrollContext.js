import React, { createContext, useContext } from 'react';

const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {

  const scrollToHome = () => {
        const homeSection = document.getElementById('Home');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('Specials');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToAbout, scrollToMenu, scrollToHome }}>
      {children}
    </ScrollContext.Provider>
  );
}
