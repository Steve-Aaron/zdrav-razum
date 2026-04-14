import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo-container">
          <motion.h1 
            className="footer-logo"
            initial={{ scaleX: 2, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 15,
              mass: 1 
            }}
          >
             ЗДРАВ РАЗУМ
          </motion.h1>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Здрав Разум България. Всички права запазени.</p>
          <div className="footer-links">
            <a href="#">Фейсбук</a>
            <a href="#">Инстаграм</a>
            <a href="#">Телеграм</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
