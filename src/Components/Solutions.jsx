import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for redirection

const Solutions = () => {
  
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-box');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="solutions-wrapper">
      
      {/* --- INLINE CSS STYLES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

        :root {
          --primary: #111;
          --accent-blue: #2563EB;
          --accent-green: #84cc16;
          --bg-light: #F9FAFB;
          --white: #ffffff;
          --text-gray: #4B5563;
        }

        .solutions-wrapper {
          font-family: 'Inter', sans-serif;
          color: var(--primary);
          background-color: var(--white);
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ANIMATIONS */
        .animate-box {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-box.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO SECTION */
        .sol-hero {
          padding: 120px 0 80px;
          display: flex;
          align-items: center;
          gap: 60px;
          min-height: 85vh;
        }

        .hero-text { flex: 1; }
        .hero-media { flex: 1; position: relative; }

        .hero-label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          color: var(--text-gray);
          margin-bottom: 20px;
          display: block;
        }

        h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .hero-desc {
          font-size: 1.2rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 40px;
          border-left: 4px solid var(--accent-green);
          padding-left: 20px;
        }

        /* BUTTON STYLES UPDATED FOR LINK */
        .btn-primary {
          background: linear-gradient(90deg, #FF8C42 0%, #FF5F2E 100%);
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s ease;
          box-shadow: 0 10px 20px rgba(255, 95, 46, 0.3);
          text-decoration: none; /* Removes underline from Link */
          display: inline-block; /* Ensures padding works on Link */
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 25px rgba(255, 95, 46, 0.4);
          color: white;
        }

        .hero-img-main {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          object-fit: cover;
          height: 500px;
        }

        /* SECTION HEADERS */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          padding-top: 80px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          display: inline-block;
          position: relative;
          z-index: 1;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: -10px;
          right: -10px;
          height: 12px;
          background-color: rgba(132, 204, 22, 0.4);
          z-index: -1;
          transform: rotate(-1deg);
          border-radius: 4px;
        }

        /* CATEGORY WRAPPER */
        .category-section {
          padding: 60px 0;
          border-bottom: 1px solid #eee;
        }

        .bg-gray { background-color: var(--bg-light); }

        /* GRID LAYOUTS */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        /* SERVICE CARD */
        .service-card {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: #eee;
        }

        .card-number {
          font-size: 3rem;
          font-weight: 700;
          color: #e5e7eb;
          position: absolute;
          top: 20px;
          right: 30px;
          line-height: 1;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          margin-top: 10px;
          padding-right: 40px;
        }

        .service-desc {
          color: var(--text-gray);
          margin-bottom: 24px;
          font-size: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;
          color: #333;
          font-size: 0.95rem;
        }

        .feature-list li::before {
          content: '•';
          color: var(--accent-blue);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .sol-hero { flex-direction: column; text-align: center; padding-top: 60px; }
          .hero-desc { border-left: none; border-top: 4px solid var(--accent-green); padding-top: 20px; padding-left: 0; }
          h1 { font-size: 2.5rem; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="sol-hero container">
        <div className="hero-text animate-box">
          <span className="hero-label">Our Solutions</span>
          <h1>Your Complete Ecosystem of AI-Powered Advertising & Automation Tools</h1>
          <p className="hero-desc">
            We provide end-to-end advertising intelligence - from campaign automation to creative generation, analytics, performance optimization, and workflow automation.
          </p>
          {/* LINK TO CONTACT PAGE */}
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>
        <div className="hero-media animate-box">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="AI Analytics Dashboard" 
            className="hero-img-main" 
          />
        </div>
      </section>

      {/* ================= CATEGORY 1: AI & AUTOMATION ================= */}
      <section className="category-section bg-gray">
        <div className="container">
          <div className="section-header animate-box">
            <h2 className="section-title">AI & Automation Solutions</h2>
          </div>

          <div className="services-grid">
            
            {/* 01 */}
            <div className="service-card animate-box">
              <span className="card-number">01</span>
              <h3>AI Ad Automation System</h3>
              <p className="service-desc">A fully intelligent engine that manages your ad campaigns like a seasoned expert.</p>
              <p style={{fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px'}}>Capabilities:</p>
              <ul className="feature-list">
                <li>Smart budget allocation based on performance</li>
                <li>Predictive audience targeting</li>
                <li>Automated A/B testing of creatives</li>
                <li>Real-time bidding optimization</li>
                <li>Cross-platform management dashboard</li>
                <li>AI-powered recommendations and alerts</li>
              </ul>
              <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#666', fontStyle: 'italic'}}>
                This system continuously improves itself using performance data, ensuring that every campaign delivers maximum return.
              </p>
            </div>

            {/* 02 */}
            <div className="service-card animate-box">
              <span className="card-number">02</span>
              <h3>Workflow, CRM & Marketing Automation</h3>
              <p className="service-desc">Replace manual tasks with automated workflows that work 24/7.</p>
              <p style={{fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px'}}>Automations include:</p>
              <ul className="feature-list">
                <li>Lead capture & segmentation</li>
                <li>Automated email/SMS sequences</li>
                <li>Follow-up reminders</li>
                <li>Customer onboarding workflows</li>
                <li>Sales pipeline automation</li>
                <li>Lead scoring & qualification</li>
              </ul>
              <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#666', fontStyle: 'italic'}}>
                Our CRM solutions help teams stay focused, organized, and conversion‑driven.
              </p>
            </div>

            {/* 03 */}
            <div className="service-card animate-box">
              <span className="card-number">03</span>
              <h3>AI Chatbots & Conversation Intelligence</h3>
              <p className="service-desc">Engage your customers instantly with AI-powered chat assistants.</p>
              <p style={{fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px'}}>Features:</p>
              <ul className="feature-list">
                <li>Intelligent replies & recommendation</li>
                <li>Appointment bookings</li>
                <li>Lead capturing and enrichment</li>
                <li>Multi-language support</li>
                <li>Seamless website integration</li>
              </ul>
              <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#666', fontStyle: 'italic'}}>
                Your chatbot becomes an always-available digital assistant that boosts customer satisfaction and conversions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CATEGORY 2: DIGITAL MARKETING ================= */}
      <section className="category-section">
        <div className="container">
          <div className="section-header animate-box">
            <h2 className="section-title">Digital Advertising & Marketing</h2>
          </div>

          <div className="services-grid">
            
            {/* 04 */}
            <div className="service-card animate-box">
              <span className="card-number">04</span>
              <h3>Ads Management (Google, Meta, LinkedIn)</h3>
              <p className="service-desc">We build data-driven advertising campaigns that focus on profitability.</p>
              <ul className="feature-list">
                <li>Keyword & audience research</li>
                <li>Campaign setup & optimization</li>
                <li>Creative development</li>
                <li>Performance tracking</li>
                <li>Conversion-based scaling</li>
                <li>Retargeting & remarketing systems</li>
              </ul>
            </div>

            {/* 05 */}
            <div className="service-card animate-box">
              <span className="card-number">05</span>
              <h3>SEO & Organic Visibility Optimization</h3>
              <p className="service-desc">Search visibility is the backbone of long-term digital success.</p>
              <ul className="feature-list">
                <li>Technical optimization</li>
                <li>Keyword research and clustering</li>
                <li>On-page optimization</li>
                <li>Local SEO & map ranking</li>
                <li>Backlink strategy</li>
                <li>Performance audits and reports</li>
              </ul>
            </div>

            {/* 06 */}
            <div className="service-card animate-box">
              <span className="card-number">06</span>
              <h3>Email & SMS Marketing Systems</h3>
              <p className="service-desc">Automated communication systems designed to improve retention and conversions.</p>
              <ul className="feature-list">
                <li>Trigger-based email flows</li>
                <li>Promotional blast campaigns</li>
                <li>Drip sequences</li>
                <li>Customer re‑engagement workflows</li>
                <li>Personalization via AI segmentation</li>
              </ul>
            </div>

            {/* 07 */}
            <div className="service-card animate-box">
              <span className="card-number">07</span>
              <h3>Advanced Analytics & Conversion Tracking</h3>
              <p className="service-desc">Make decisions based on real data, not guesswork.</p>
              <ul className="feature-list">
                <li>Event & conversion tracking systems</li>
                <li>User behavior analytics</li>
                <li>Performance dashboards</li>
                <li>Funnel analytics</li>
                <li>Cross-platform reporting</li>
                <li>Predictive insights with AI</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CATEGORY 3: CREATIVE & WEB ================= */}
      <section className="category-section bg-gray">
        <div className="container">
          <div className="section-header animate-box">
            <h2 className="section-title">Creative & Web Solutions</h2>
          </div>

          <div className="services-grid">
            
            {/* 08 */}
            <div className="service-card animate-box">
              <span className="card-number">08</span>
              <h3>Web Design & Hosting</h3>
              <p className="service-desc">Your website is your brand’s command center.</p>
              <ul className="feature-list">
                <li>Fast, secure websites</li>
                <li>Modern, mobile‑optimized layouts</li>
                <li>Conversion‑focused structure</li>
                <li>SEO-ready pages</li>
                <li>Full custom design and branding</li>
              </ul>
            </div>

            {/* 09 */}
            <div className="service-card animate-box">
              <span className="card-number">09</span>
              <h3>Branding & Graphic Design</h3>
              <p className="service-desc">Your brand identity is the foundation of customer trust.</p>
              <ul className="feature-list">
                <li>Logo & identity systems</li>
                <li>Brand kits & typography</li>
                <li>Marketing creatives</li>
                <li>Advertisements</li>
                <li>UI assets & illustrations</li>
              </ul>
            </div>

            {/* 10 */}
            <div className="service-card animate-box">
              <span className="card-number">10</span>
              <h3>High-Conversion Landing Pages</h3>
              <p className="service-desc">Funnels designed to convert cold traffic into paying customers.</p>
              <ul className="feature-list">
                <li>Campaign landing pages</li>
                <li>Lead magnet funnels</li>
                <li>Webinar funnels</li>
                <li>Sales pages</li>
                <li>Event registration pages</li>
                <li>Tracking & analytics</li>
              </ul>
            </div>

            {/* 11 */}
            <div className="service-card animate-box">
              <span className="card-number">11</span>
              <h3>Content Strategy & Copywriting</h3>
              <p className="service-desc">Powerful words crafted to inform, persuade, and convert.</p>
              <ul className="feature-list">
                <li>Website copy</li>
                <li>Ads copy</li>
                <li>SEO blogs</li>
                <li>Scripts</li>
                <li>Email sequences</li>
                <li>Brand messaging frameworks</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container" style={{padding: '100px 0', textAlign: 'center'}}>
        <div className="animate-box">
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Ready to Evolve?</h2>
            <p style={{maxWidth: '600px', margin: '0 auto 40px auto', color: '#666'}}>
                Explore our solutions and see how we can leap your business forward with smarter systems and sharper marketing.
            </p>
            {/* LINK TO CONTACT PAGE */}
            <Link to="/contact" className="btn-primary">Contact Us Today</Link>
        </div>
      </section>

    </div>
  );
};

export default Solutions;