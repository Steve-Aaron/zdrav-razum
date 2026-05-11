import React from 'react';
import { motion } from 'framer-motion';

const LineGraph = ({ data }) => {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data) + 5;
  const min = Math.max(0, Math.min(...data) - 5);
  const range = (max - min) || 1;
  const width = 240;
  const height = 40;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 -10 ${width} ${height + 20}`} style={{ width: '100%', height: 'auto', overflow: 'visible', margin: '1rem 0' }}>
      <polyline
        fill="none"
        stroke="var(--accent-color)"
        strokeWidth="3"
        points={points.join(' ')}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((val, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((val - min) / range) * height;
        return (
          <circle key={i} cx={x} cy={y} r="4.5" fill="var(--bg-color)" stroke="currentColor" strokeWidth="2.5" />
        );
      })}
    </svg>
  );
};

const Results = () => {
  const findings = [
    {
      title: "ЕВРОПЕЙСКИ СЪЮЗ",
      stat: "63.3%",
      data: [42, 48, 55, 60, 63.3],
      label: "Отрицателно или неутрално мнение",
      desc: "Над две трети от анкетираните изразяват скептицизъм или резервираност към политиките на ЕС.",
      size: "large"
    },
    {
      title: "ПОСОКА НА СТРАНАТА",
      stat: "73.5%",
      data: [65, 68, 70, 72, 73.5],
      label: "Грешна посока",
      desc: "Огромното мнозинство от хората не виждат правилна стратегия в управлението.",
      size: "small"
    },
    {
      title: "ОТНОШЕНИЕ КЪМ РУСИЯ",
      stat: "52.1%",
      data: [58, 56, 54, 53, 52.1],
      label: "Положително отношение",
      desc: "Повече от половината българи запазват позитивни нагласи към историческите и културни връзки.",
      size: "small"
    },
    {
      title: "УПРАВЛЕНИЕ",
      stat: "60.3%",
      data: [35, 45, 52, 58, 60.3],
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
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>РЕЗУЛТАТИ ОТ ПРОУЧВАНИЯ</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', opacity: 0.8 }}>Данните, които политиците често игнорират.</p>
        </div>
      </section>

      {/* 2. Disclaimer section */}
      <section className="disclaimer-section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="disclaimer-chip">
            ВАЖНО: Тук публикуваме част от констатациите от нашите анкети, за да осигурим прозрачност и информираност.
          </div>
        </div>
      </section>

      {/* 3. Mosaic Grid of findings */}
      <section className="findings-grid" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="results-mosaic">
            {findings.map((finding, index) => (
              <motion.div 
                key={index}
                className={`finding-card ${finding.size}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' }}
              >
                <div className="card-header" style={{ borderBottom: '2px solid currentColor', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
                  <span className="card-title" style={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>{finding.title}</span>
                </div>
                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 className="card-stat" style={{ 
                    fontSize: finding.size === 'large' ? '5rem' : '3.5rem', 
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: '0.5rem' 
                  }}>
                    {finding.stat}
                  </h2>
                  <h3 className="card-label" style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '1rem' }}>{finding.label}</h3>
                  
                  <div style={{ marginTop: 'auto', marginBottom: '1rem' }}>
                    <LineGraph data={finding.data} />
                  </div>
                  
                  <p className="card-desc" style={{ lineHeight: '1.5', opacity: 0.8 }}>{finding.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Find Out More CTA */}
      <section className="cta-section section-padding" style={{ textAlign: 'center', background: 'rgba(0,0,0,0.02)', borderTop: '2px solid var(--text-color)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Искате ли да участвате?</h2>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.6' }}>
            Включете се в нашите активни проучвания и станете част от хората, които формират утрешния дневен ред в България.
          </p>
          <a href="/surveys/" className="button">КЪМ АКТИВНИТЕ АНКЕТИ</a>
        </div>
      </section>
    </div>
  );
};

export default Results;
