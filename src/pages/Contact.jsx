import React, { useState } from 'react';

// Sign up at https://formspree.io and replace with your real form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      {/* 1. Hero Section */}
      <section className="contact-hero hero-padding">
        <div className="container">
          <h1 className="hero-title">СВЪРЖЕТЕ СЕ С НАС</h1>
          <p className="hero-subtitle">Здравият разум изисква диалог.</p>
        </div>
      </section>

      {/* 2. Two Column Section */}
      <section className="contact-content section-padding">
        <div className="container contact-grid">
          {/* Left Column: Form */}
          <div className="contact-form-wrapper">
            {status === 'success' ? (
              <div className="tactile-card contact-form" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2>✓</h2>
                <p>Благодарим ви! Съобщението е изпратено.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="tactile-card contact-form">
                <div className="form-group">
                  <label htmlFor="name">ИМЕ</label>
                  <input type="text" id="name" name="name" required placeholder="Вашето име..." />
                </div>
                <div className="form-group">
                  <label htmlFor="email">ИМЕЙЛ</label>
                  <input type="email" id="email" name="email" required placeholder="example@mail.bg" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">СЪОБЩЕНИЕ</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Вашето съобщение тук..."></textarea>
                </div>
                {status === 'error' && (
                  <p style={{ color: 'red', marginBottom: '1rem' }}>Грешка при изпращане. Моля, опитайте отново.</p>
                )}
                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'ИЗПРАЩАНЕ...' : 'ИЗПРАТИ'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Outreach Text */}
          <div className="contact-text">
            <h2>СПОДЕЛЕТЕ ВАШЕТО МНЕНИЕ</h2>
            <p>Свържете се с нас, ако имате възгледи, които смятате за здрав разум, но хората не ги признават. Вашите идеи са важни за нас.</p>
            <p>Имате ли въпроси или коментари относно нашите проучвания или политики? Ние сме тук, за да чуем какво мислите.</p>
            
            <div className="contact-info">
              <div className="info-item">
                <strong>Имейл:</strong> contact@zdrav-razum.com
              </div>
              <div className="info-item">
                <strong>Социални мрежи:</strong> @zdravrazumbg
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
