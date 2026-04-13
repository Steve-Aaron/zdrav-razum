import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Surveys from './pages/Surveys';
import Results from './pages/Results';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'surveys': return <Surveys />;
      case 'results': return <Results />;
      case 'contact': return <Contact />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        toggleTheme={toggleTheme} 
        theme={theme}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
