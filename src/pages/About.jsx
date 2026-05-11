import React from 'react';

const About = () => {
  const familyImg = "/bulgarian_family_portrait.png";
  const marketImg = "/bulgarian_farmers_market.png";

  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <section className="about-hero hero-padding">
        <div className="container">
          <h1 className="hero-title">ЗДРАВ РАЗУМ БЪЛГАРИЯ</h1>
          <p className="hero-subtitle">Здрав Разум България е политическа кампания, която не е за ляво или дясно, а за здравия разум.</p>
        </div>
      </section>

      {/* 2. Two Columns Content */}
      <section className="about-content section-padding">
        <div className="container about-grid">
          {/* Left Column: Sticky */}
          <div className="sidebar">
            <nav className="sticky-nav">
              <a href="#who">КОИ СМЕ НИЕ</a>
              <a href="#what">КАКВО ПРАВИМ</a>
              <a href="#why">ЗАЩО СЪЩЕСТВУВАМЕ</a>
            </nav>
          </div>

          {/* Right Column: Content + Images */}
          <div className="main-content">
            <div id="who" className="content-block">
              <h2>КОИ СМЕ НИЕ</h2>
              <div className="image-wrapper tactile-card">
                <img src={familyImg} alt="Bulgarian family" style={{ maxHeight: '280px', objectFit: 'cover', width: '100%' }} />
              </div>
              <p>Ние сме обикновени български граждани – родители, професионалисти, студенти и пенсионери, които вярват, че България заслужава повече. Ние не сме професионални политици, а хора, които живеят с реалните проблеми на нашето общество.</p>
              <p>Нашата общност се гради върху доверието и желанието за истинска промяна в начина, по който се вземат решенията в страната ни.</p>
            </div>

            <div id="what" className="content-block">
              <h2>КАКВО ПРАВИМ</h2>
              <div className="image-wrapper tactile-card">
                <img src={marketImg} alt="Bulgarian lifestyle" style={{ maxHeight: '280px', objectFit: 'cover', width: '100%' }} />
              </div>
              <p>Ние събираме мнения, провеждаме проучвания и предлагаме конкретни, прагматични решения на наболелите въпроси. Анализираме данните от нашите анкети, за да покажем какво в действителност мисли „мълчаливото мнозинство“.</p>
              <p>Ние сме гласът на здравия разум в дебат, често доминиран от крайности и лични интереси.</p>
            </div>

            <div id="why" className="content-block">
              <h2>ЗАЩО СЪЩЕСТВУВАМЕ</h2>
              <p>Защото вярваме, че политиката не трябва да бъде сложна или корумпирана. Тя трябва да бъде инструмент за подобряване на живота на всеки българин. Съществуваме, за да върнем фокуса върху фактите, логиката и българския интерес.</p>
              <p>Време е да спрем да се делим на „леви“ и „десни“ и да започнем да мислим за това какво е разумно и полезно за всички нас.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
