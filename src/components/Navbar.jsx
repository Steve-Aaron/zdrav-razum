import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, toggleTheme, theme }) => {
  const navItems = [
    { id: 'home', label: 'НАЧАЛО' },
    { id: 'about', label: 'ЗА НАС' },
    { id: 'surveys', label: 'АНКЕТИ' },
    { id: 'results', label: 'РЕЗУЛТАТИ' },
    { id: 'contact', label: 'КОНТАКТ' },
  ];

  const styles = {
    navbar: {
      padding: '1.5rem 0',
      borderBottom: '2px solid var(--text-color)',
      position: 'sticky',
      top: 0,
      background: 'var(--bg-color)',
      zIndex: 1000,
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 900,
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    themeToggle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',
      borderRadius: 0,
    }
  };

  return (
    <nav className="navbar" style={styles.navbar}>
      <div className="container" style={styles.navContent}>
        <div className="logo" style={styles.logo} onClick={() => setCurrentPage('home')}>
          ЗДРАВ РАЗУМ
        </div>
        
        <div className="nav-links" style={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={currentPage === item.id ? 'active' : ''}
              style={{ 
                padding: '0.5rem 1rem', 
                fontSize: '0.9rem',
                background: currentPage === item.id ? 'var(--text-color)' : 'transparent',
                color: currentPage === item.id ? 'var(--bg-color)' : 'var(--text-color)',
                borderColor: 'var(--text-color)'
              }}
            >
              {item.label}
            </button>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" style={styles.themeToggle}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
