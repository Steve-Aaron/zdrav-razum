import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageShell = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className="app-wrapper">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
