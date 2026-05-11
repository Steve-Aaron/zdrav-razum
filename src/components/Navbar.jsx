import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { path: '/',          label: 'НАЧАЛО' },
  { path: '/about/',    label: 'ЗА НАС' },
  { path: '/surveys/',  label: 'АНКЕТИ' },
  { path: '/results/',  label: 'РЕЗУЛТАТИ' },
  { path: '/contact/',  label: 'КОНТАКТ' },
];

const isActive = (path) => {
  const current = window.location.pathname;
  if (path === '/') return current === '/';
  // strip trailing slash for comparison
  return current.replace(/\/$/, '') === path.replace(/\/$/, '');
};

const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => { setMenuOpen(false); window.scrollTo(0, 0); };

  return (
    <nav style={{
      borderBottom: '2px solid var(--text-color)',
      position: 'sticky',
      top: 0,
      background: 'var(--bg-color)',
      zIndex: 1000,
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem' }}>
        <a href="/" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.5rem', textDecoration: 'none', color: 'var(--text-color)' }}>
          ЗДРАВ РАЗУМ
        </a>

        {/* Desktop */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {navItems.map(item => {
            const active = isActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  border: '2px solid var(--text-color)',
                  background: active ? 'var(--text-color)' : 'transparent',
                  color: active ? 'var(--bg-color)' : 'var(--text-color)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: active ? 'none' : '4px 4px 0 var(--button-shadow)',
                }}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={toggleTheme}
            style={{ padding: '0.5rem', border: '2px solid var(--text-color)', background: 'transparent', cursor: 'pointer', color: 'var(--text-color)', display: 'flex', alignItems: 'center' }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="nav-mobile" style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            style={{ padding: '0.5rem', border: '2px solid var(--text-color)', background: 'transparent', cursor: 'pointer', color: 'var(--text-color)', display: 'flex', alignItems: 'center' }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ padding: '0.5rem', border: '2px solid var(--text-color)', background: 'transparent', cursor: 'pointer', color: 'var(--text-color)', display: 'flex', alignItems: 'center' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid var(--dot-color)' }}>
          {navItems.map(item => {
            const active = isActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={close}
                style={{
                  display: 'block',
                  padding: '1rem 2rem',
                  borderBottom: '1px solid var(--dot-color)',
                  background: active ? 'var(--text-color)' : 'transparent',
                  color: active ? 'var(--bg-color)' : 'var(--text-color)',
                  textDecoration: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
