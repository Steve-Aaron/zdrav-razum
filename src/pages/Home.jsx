import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Typewriter config ───────────────────────────────────────────────────────
const PHRASES = [
  "Намаляването на разходите за живот",
  "Краят на корупцията",
  "Арестът на олигарсите",
  "По-доброто здравеопазване",
];
const TYPING_SPEED    = 70;
const DELETING_SPEED  = 35;
const PAUSE_AFTER_TYPE   = 2400;
const PAUSE_AFTER_DELETE = 400;

// ─── Animated counter ────────────────────────────────────────────────────────
const useCounter = (target, inView, decimals = 1) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const duration = 1400;
    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, decimals]);
  return count;
};

// ─── SVG Donut chart ─────────────────────────────────────────────────────────
const DonutChart = ({ pct, color, size = 160, strokeWidth = 14, inView, style }) => {
  const radius       = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset       = circumference - (pct / 100) * circumference;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: 'block', transform: 'rotate(-90deg)', overflow: 'visible', width: '100%', height: 'auto', maxWidth: size, ...style }}
    >
      {/* track */}
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.18}
        strokeWidth={strokeWidth}
      />
      {/* progress */}
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
    </svg>
  );
};

// ─── Horizontal stacked bar ──────────────────────────────────────────────────
const SurveyBar = ({ segments }) => (
  <div style={{ display: 'flex', height: '8px', gap: '2px', margin: '1.25rem 0 0.75rem', width: '100%' }}>
    {segments.map((seg, i) => (
      <div
        key={i}
        title={`${seg.label}: ${seg.pct}%`}
        style={{ flex: `0 0 ${seg.pct}%`, background: seg.color, height: '100%' }}
      />
    ))}
  </div>
);

const BarLegend = ({ segments }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1.2rem', fontSize: '0.72rem', opacity: 0.85 }}>
    {segments.map((seg, i) => (
      <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ display: 'inline-block', width: '9px', height: '9px', background: seg.color, flexShrink: 0 }} />
        {seg.label} {seg.pct}%
      </span>
    ))}
  </div>
);

// ─── Survey data ─────────────────────────────────────────────────────────────
const directionSegments = [
  { label: 'Грешна посока',   pct: 73.5, color: 'var(--accent-color)' },
  { label: 'Правилна посока', pct: 16.7, color: 'var(--bg-color)' },
  { label: 'Не знае',         pct: 9.8,  color: 'rgba(255,255,255,0.35)' },
];
const euSegments = [
  { label: 'Отрицателно',        pct: 63.3, color: 'var(--accent-color)' },
  { label: 'Положително',        pct: 23.2, color: 'var(--text-color)' },
  { label: 'Неутрално / Не знае',pct: 13.5, color: 'var(--dot-color)' },
];
const russiaSegments = [
  { label: 'Положително',        pct: 52.1, color: 'var(--text-color)' },
  { label: 'Отрицателно',        pct: 24.2, color: 'var(--accent-color)' },
  { label: 'Неутрално / Не знае',pct: 23.7, color: 'var(--dot-color)' },
];

// ─── Component ───────────────────────────────────────────────────────────────
const Home = () => {
  // Typewriter
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex]  = useState(0);
  const [isDeleting, setIsDeleting]    = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    if (!isDeleting && displayText === current) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayText === '') {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex(i => (i + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const t = setTimeout(() => {
      setDisplayText(isDeleting
        ? current.slice(0, displayText.length - 1)
        : current.slice(0, displayText.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, phraseIndex]);

  // Counters
  const resultsRef  = useRef(null);
  const resultsInView = useInView(resultsRef, { once: true, margin: '-80px' });
  const dirCount = useCounter(73.5, resultsInView);
  const euCount  = useCounter(63.3, resultsInView);
  const ruCount  = useCounter(52.1, resultsInView);

  return (
    <div className="home-page">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div
            className="hero-text-container"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="hero-headline">
              <span className="hero-typed-line">
                {displayText}<span className="hero-cursor" />
              </span>
              <span className="hero-suffix">
                е <span className="hero-highlight">здрав разум.</span>
              </span>
            </h1>
            <div className="hero-cta">
              <a href="/surveys/" className="button">Споделете мнението си</a>
              <a href="/contact/" className="button">Свържете се с нас</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Mission ──────────────────────────────────────────────────── */}
      <section className="mission section-padding">
        <div className="container">
          <div className="two-columns">
            <div className="column">
              <h2 className="section-title">ЗАЩО ЗДРАВ РАЗУМ?</h2>
              <p>Здрав Разум България бе създаден, защото политиците в България изглежда се грижат повече за собствените си джобове, отколкото за приемането на смислени закони.</p>
            </div>
            <div className="column">
              <p>Нашата политическа кампания не е за ляво или дясно. Тя е за здравия разум. Време е за решения, които работят за хората, а не за политическата класа.</p>
              <a href="/about/" className="button" style={{ marginTop: '2rem', display: 'inline-block' }}>
                НАУЧЕТЕ ПОВЕЧЕ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Survey Grid ──────────────────────────────────────────────── */}
      <section className="surveys section-padding" style={{ background: 'rgba(0,0,0,0.02)' }}>
        <div className="container">
          <h2 className="section-title centered">АКТУАЛНИ ТЕМИ</h2>
          <div className="three-columns">
            {[
              { title: 'КОРУПЦИЯ',      desc: 'Какво мислят българите за нивата на корупция в държавната администрация?' },
              { title: 'ИКОНОМИКА',     desc: 'Инфлация, доходи и стандарт на живот — какви са реалните проблеми?' },
              { title: 'НОВИЯТ ПРЕМИЕР',desc: 'Оценка на работата и доверието в новото правителство.' },
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

      {/* ── 4. Results / ГЛАСЪТ НА НАРОДА ──────────────────────────────── */}
      <section className="home-results section-padding" ref={resultsRef}>
        <div className="container">
          <h2 className="section-title centered">ГЛАСЪТ НА НАРОДА</h2>
          <div className="mosaic-grid">

            {/* Large card — direction */}
            <div className="mosaic-item large" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="mosaic-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ textAlign: 'center', fontSize: '1rem', letterSpacing: '0.1em' }}>ПОСОКА НА ДВИЖЕНИЕ</h3>

                {/* Donut + counter */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '2rem', margin: '2rem 0' }}>
                  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                      <DonutChart
                        pct={73.5}
                        color="var(--accent-color)"
                        size={400}
                        strokeWidth={32}
                        inView={resultsInView}
                        style={{ maxWidth: '100%' }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--bg-color)',
                      }}>
                        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1 }}>
                          {dirCount}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '1.25rem', lineHeight: 1.5, textAlign: 'center', maxWidth: '600px' }}>
                    от българите смятат, че страната се движи в <strong>грешна посока</strong>.
                  </p>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <SurveyBar segments={directionSegments} />
                  <BarLegend segments={directionSegments} />
                </div>
              </div>
            </div>

            {/* Small card — EU */}
            <div className="mosaic-item">
              <div className="mosaic-content">
                <h3>ЕВРОПЕЙСКИ СЪЮЗ</h3>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem 0 0.75rem' }}>
                  <div style={{ position: 'relative' }}>
                    <DonutChart
                      pct={63.3}
                      color="var(--accent-color)"
                      size={130}
                      strokeWidth={13}
                      inView={resultsInView}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '1.7rem', lineHeight: 1 }}>
                        {euCount}%
                      </span>
                    </div>
                  </div>
                </div>

                <p>изразяват отрицателно отношение към ЕС.</p>
                <SurveyBar segments={euSegments} />
                <BarLegend segments={euSegments} />
              </div>
            </div>

            {/* Small card — Russia */}
            <div className="mosaic-item">
              <div className="mosaic-content">
                <h3>ОТНОШЕНИЕ КЪМ РУСИЯ</h3>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem 0 0.75rem' }}>
                  <div style={{ position: 'relative' }}>
                    <DonutChart
                      pct={52.1}
                      color="var(--text-color)"
                      size={130}
                      strokeWidth={13}
                      inView={resultsInView}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '1.7rem', lineHeight: 1 }}>
                        {ruCount}%
                      </span>
                    </div>
                  </div>
                </div>

                <p>имат положително отношение към Русия.</p>
                <SurveyBar segments={russiaSegments} />
                <BarLegend segments={russiaSegments} />
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/results/" className="button">ВИЖТЕ ВСИЧКИ РЕЗУЛТАТИ</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
