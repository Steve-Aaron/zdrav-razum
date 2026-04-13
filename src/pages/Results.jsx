import React from 'react';
import { motion } from 'framer-motion';

const Results = () => {
  const findings = [
    {
      title: "ЕВРОПЕЙСКИ СЪЮЗ",
      stat: "63.3%",
      label: "Отрицателно или неутрално мнение",
      desc: "Над две трети от анкетираните изразяват скептицизъм или резервираност към политиките на ЕС.",
      size: "large"
    },
    {
      title: "ПОСОКА НА СТРАНАТА",
      stat: "73.5%",
      label: "Грешна посока",
      desc: "Огромното мнозинство от хората не виждат правилна стратегия в управлението.",
      size: "small"
    },
    {
      title: "ОТНОШЕНИЕ КЪМ РУСИЯ",
      stat: "52.1%",
      label: "Положително отношение",
      desc: "Повече от половината българи запазват позитивни нагласи към историческите и културни връзки.",
      size: "small"
    },
    {
      title: "УПРАВЛЕНИЕ",
      stat: "60.3%",
      label: "Вероятно не вървим напред",
      desc: "Дори сред тези, които не са категорично против, скептицизмът остава висок.",
      size: "wide"
    }
  ];

  return (
    <div className="results-page">
      {/* 1. Hero Section */}
      <section className="results-hero hero-padding">
        <div className="container">
          <h1 className="hero-title">РЕЗУЛТАТИ ОТ ПРОУЧВАНИЯ</h1>
          <p className="hero-subtitle">Данните, които политиците често игнорират.</p>
        </div>
      </section>

      {/* 2. Disclaimer section */}
      <section className="disclaimer-section">
        <div className="container">
          <div className="disclaimer-chip">
            ВАЖНО: Тук публикуваме част от констатациите от нашите анкети, за да осигурим прозрачност и информираност.
          </div>
        </div>
      </section>

      {/* 3. Mosaic Grid of findings */}
      <section className="findings-grid section-padding">
        <div className="container">
          <div className="results-mosaic">
            {findings.map((finding, index) => (
              <motion.div 
                key={index}
                className={`finding-card ${finding.size}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-header">
                  <span className="card-title">{finding.title}</span>
                </div>
                <div className="card-body">
                  <h2 className="card-stat">{finding.stat}</h2>
                  <h3 className="card-label">{finding.label}</h3>
                  <p className="card-desc">{finding.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Results;
