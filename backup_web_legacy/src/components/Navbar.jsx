import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ toggleTheme, theme }) => {
  const navItems = [
    { id: '', label: 'НАЧАЛО' },
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
        <Link to="/" className="logo" style={styles.logo}>
          ЗДРАВ РАЗУМ
        </Link>
        
        <div className="nav-links" style={styles.navLinks}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={({ isActive }) => ({ 
                padding: '0.5rem 1rem', 
                fontSize: '0.9rem',
                border: '2px solid var(--text-color)',
                background: isActive ? 'var(--text-color)' : 'transparent',
                color: isActive ? 'var(--bg-color)' : 'var(--text-color)',
                boxShadow: isActive ? '2px 2px 0px var(--button-shadow)' : '4px 4px 0px var(--button-shadow)',
                transform: isActive ? 'translate(2px, 2px)' : 'none'
              })}
            >
              {item.label}
            </NavLink>
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
