import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ setCurrentPage }) => {
  const policies = [
    "ПРАГМАТИЧНА ЕНЕРГЕТИКА",
    "НАЦИОНАЛЕН СУВЕРЕНИТЕТ",
    "ОТГОВОРНО УПРАВЛЕНИЕ",
    "СПРАВЕДЛИВА ИКОНОМИКА"
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div 
            className="hero-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {policies.map((policy, index) => (
              <motion.h2 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                className="hero-policy"
              >
                {policy}
              </motion.h2>
            ))}
            <motion.div 
              className="zdrav-razum-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: 'spring' }}
            >
              ЗДРАВ РАЗУМ
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="mission section-padding">
        <div className="container">
          <div className="two-columns">
            <div className="column">
              <h2 className="section-title">ЗАЩО ЗДРАВ РАЗУМ?</h2>
              <p>Здрав Разум България бе създаден, защото политиците в България изглежда се грижат повече за собствените си джобове, отколкото за приемането на смислени закони.</p>
            </div>
            <div className="column">
              <p>Нашата политическа кампания не е за ляво или дясно. Тя е за здравия разум. Време е за решения, които работят за хората, а не за политическата класа.</p>
              <button onClick={() => setCurrentPage('about')} style={{ marginTop: '2rem' }}>
                НАУЧЕТЕ ПОВЕЧЕ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Survey Grid Section */}
      <section className="surveys section-padding" style={{ background: 'rgba(0,0,0,0.02)' }}>
        <div className="container">
          <h2 className="section-title centered">АКТУАЛНИ ТЕМИ</h2>
          <div className="three-columns">
            {[
              { title: 'КОРУПЦИЯ', desc: 'Какво мислят българите за нивата на корупция в държавната администрация?' },
              { title: 'ИКОНОМИКА', desc: 'Инфлация, доходи и стандарт на живот - какви са реалните проблеми?' },
              { title: 'НОВИЯТ ПРЕМИЕР', desc: 'Оценка на работата и доверието в новото правителство.' }
            ].map((item, i) => (
              <div key={i} className="tactile-card survey-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button 
                  className="no-entry" 
                  data-tooltip="Очаквайте скоро!"
                  style={{ marginTop: 'auto' }}
                >
                  КЪМ АНКЕТАТА
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mosaic Results Section */}
      <section className="results-mosaic section-padding">
        <div className="container">
          <h2 className="section-title centered">ГЛАСЪТ НА НАРОДА</h2>
          <div className="mosaic-grid">
            <div className="mosaic-item large">
              <div className="mosaic-content">
                <h3>ПОСОКА НА ДВИЖЕНИЕ</h3>
                <div className="stat">73.5%</div>
                <p>от българите смятат, че страната се движи в грешна посока.</p>
              </div>
            </div>
            <div className="mosaic-item">
              <div className="mosaic-content">
                <h3>ЕВРОПЕЙСКИ СЪЮЗ</h3>
                <div className="stat">63.3%</div>
                <p>изразяват негативно или неутрално отношение към ЕС.</p>
              </div>
            </div>
            <div className="mosaic-item">
              <div className="mosaic-content">
                <h3>ОТНОШЕНИЕ КЪМ РУСИЯ</h3>
                <div className="stat">52.1%</div>
                <p>имат положително или много положително отношение.</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setCurrentPage('results')} 
            className="centered-button"
            style={{ marginTop: '3rem' }}
          >
            ВИЖТЕ ВСИЧКИ РЕЗУЛТАТИ
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
