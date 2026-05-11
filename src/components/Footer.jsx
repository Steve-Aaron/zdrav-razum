import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo-container">
          <motion.h1
            className="footer-logo"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            whileInView={{ letterSpacing: '0em', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            ЗДРАВ РАЗУМ
          </motion.h1>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Здрав Разум България. Всички права запазени.</p>
          <div className="footer-links">
            <a href="https://facebook.com/commonsensebg" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/commonsensebg" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@commonsensebg" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
