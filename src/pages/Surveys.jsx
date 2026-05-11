import React from 'react';

const Surveys = () => {
  return (
    <div className="surveys-page">
      {/* 1. Hero Section */}
      <section className="surveys-hero hero-padding">
        <div className="container">
          <h1 className="hero-title">АНКЕТИ</h1>
          <p className="hero-subtitle">Твоят глас е важен за здравия разум в България.</p>
        </div>
      </section>

      {/* 2. Coming Soon Container */}
      <section className="coming-soon-section section-padding">
        <div className="container">
          <div className="tactile-card coming-soon-container">
            <h2>ОЧАКВАЙТЕ СКОРО</h2>
            <p>В момента разработваме нашата система за онлайн анкети, за да гарантираме сигурност и представителност на данните.</p>
            <p>Междувременно, можете да вземете участие в нашите дискусии и текущи допитвания в социалните мрежи:</p>
            
            <div className="social-links">
              <a href="https://facebook.com/commonsensebg" target="_blank" rel="noopener noreferrer" className="button">
                <span>ФЕЙСБУК</span>
              </a>
              <a href="https://www.instagram.com/commonsensebg" target="_blank" rel="noopener noreferrer" className="button">
                <span>ИНСТАГРАМ</span>
              </a>
              <a href="https://www.tiktok.com/@commonsensebg" target="_blank" rel="noopener noreferrer" className="button">
                <span>ТИКТОК</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Surveys;
