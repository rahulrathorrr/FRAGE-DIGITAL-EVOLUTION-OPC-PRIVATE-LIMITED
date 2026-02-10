import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OurProcess = () => {

  // Animation Logic: Scroll pe elements reveal honge
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const hiddenElements = document.querySelectorAll('.step-row');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  // --- CUSTOM ICONS (Thin Line Style like Screenshots) ---
  const IconDiscovery = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  );
  const IconStrategy = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
  );
  const IconDev = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  );
  const IconLaunch = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 2.75-.45 3 .5z"/><path d="M12 15v5s3.03-.55 4-2c1.1-1.62.45-2.75-.5-3z"/></svg>
  );
  const IconReport = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
  );

  return (
    <div className="process-page-wrapper">
      
      {/* CSS STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --black: #0f172a;
          --dark-gray: #334155;
          --light-gray: #64748b;
          --bg-gray: #F8FAFC;
          --white: #ffffff;
          --accent-blue: #2563EB;
          --orange-gradient: linear-gradient(90deg, #FF9A5A 0%, #FF6830 100%);
        }

        .process-page-wrapper {
          font-family: 'Inter', sans-serif;
          color: var(--black);
          background-color: var(--white);
          overflow-x: hidden;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO SECTION */
        .process-hero {
          text-align: center;
          padding: 120px 0 80px;
          max-width: 800px;
          margin: 0 auto;
        }

        .process-hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .process-hero p {
          font-size: 1.25rem;
          color: var(--light-gray);
          line-height: 1.6;
        }

        /* TIMELINE CONTAINER */
        .timeline-container {
          position: relative;
          padding: 40px 0 120px;
        }

        /* Vertical Line in Middle */
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 100px;
          width: 2px;
          background: #E2E8F0; /* Light gray line */
          transform: translateX(-50%);
          z-index: 0;
        }

        /* STEP ROW (The Zig Zag Item) */
        .step-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 100px; /* Huge gap for length */
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
          position: relative;
          z-index: 1;
        }

        .step-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Left/Right Widths */
        .step-content, .step-empty {
          width: 42%; 
        }

        /* CENTER ICON */
        .step-icon-wrapper {
          width: 80px;
          height: 80px;
          background: var(--white);
          border: 1px solid #E2E8F0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: relative;
          z-index: 2;
        }

        /* Content Styling */
        .step-number {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--accent-blue);
          margin-bottom: 12px;
          display: block;
        }

        .step-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .step-desc {
          font-size: 1.1rem;
          color: var(--dark-gray);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .step-list {
          list-style: none;
          padding: 0;
        }

        .step-list li {
          margin-bottom: 10px;
          color: var(--light-gray);
          font-size: 1rem;
          padding-left: 24px;
          position: relative;
        }

        .step-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--accent-blue);
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 9px;
        }

        /* Orientation Logic */
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        
        .text-right .step-list li { padding-right: 24px; padding-left: 0; }
        .text-right .step-list li::before { right: 0; left: auto; }

        /* CTA SECTION */
        .cta-section {
          text-align: center;
          background-color: var(--bg-gray);
          padding: 100px 20px;
          border-radius: 20px;
          margin-bottom: 80px;
        }

        .btn-orange {
          background: var(--orange-gradient);
          color: white;
          padding: 18px 48px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(255, 104, 48, 0.3);
          transition: transform 0.2s ease;
          display: inline-block;
        }

        .btn-orange:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(255, 104, 48, 0.4);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .timeline-container::before { left: 20px; }
          .step-row { flex-direction: column; align-items: flex-start; margin-bottom: 60px; }
          .step-empty { display: none; }
          .step-content { width: 100%; text-align: left; padding-left: 60px; }
          .step-icon-wrapper { width: 50px; height: 50px; position: absolute; left: 0; top: 0; }
          .text-right { text-align: left; }
          .text-right .step-list li { padding-left: 24px; padding-right: 0; }
          .text-right .step-list li::before { left: 0; right: auto; }
          .process-hero h1 { font-size: 2.5rem; }
        }
      `}</style>

      {/* HEADER */}
      <div className="container process-hero">
        <h1>Our Process</h1>
        <p>A Proven, Transparent, 5‑Stage System Built for Growth.</p>
        <p style={{fontSize: '1rem', marginTop: '10px', color: '#94a3b8'}}>
          From your first call to your latest report, we ensure clarity, quality, and measurable results.
        </p>
      </div>

      <div className="container timeline-container">

        {/* STEP 1: LEFT */}
        <div className="step-row">
          <div className="step-content text-right">
            <span className="step-number">Step 01</span>
            <h2 className="step-title">Discovery & <br/>Requirement Mapping</h2>
            <p className="step-desc">
              We don't guess; we learn. A deep dive into your business goals, audience, market competition, and current challenges.
            </p>
          </div>
          <div className="step-icon-wrapper">
            <IconDiscovery />
          </div>
          <div className="step-empty"></div>
        </div>

        {/* STEP 2: RIGHT */}
        <div className="step-row">
          <div className="step-empty"></div>
          <div className="step-icon-wrapper">
            <IconStrategy />
          </div>
          <div className="step-content text-left">
            <span className="step-number">Step 02</span>
            <h2 className="step-title">Strategy & <br/>Design Blueprint</h2>
            <p className="step-desc">
              We craft a tailored roadmap outlining the technical and creative direction for your project.
            </p>
            <ul className="step-list">
              <li>Campaign structure & logic</li>
              <li>Automation architecture</li>
              <li>Creative direction & UI/UX</li>
              <li>KPIs & forecasting</li>
            </ul>
          </div>
        </div>

        {/* STEP 3: LEFT */}
        <div className="step-row">
          <div className="step-content text-right">
            <span className="step-number">Step 03</span>
            <h2 className="step-title">Development & <br/>Implementation</h2>
            <p className="step-desc">
              Our team executes the plan with precision, building your assets and setting up your automation engines.
            </p>
            <ul className="step-list">
              <li>System & Dashboard setup</li>
              <li>Ad account configuration</li>
              <li>Creative asset development</li>
              <li>Funnel building & coding</li>
            </ul>
          </div>
          <div className="step-icon-wrapper">
            <IconDev />
          </div>
          <div className="step-empty"></div>
        </div>

        {/* STEP 4: RIGHT */}
        <div className="step-row">
          <div className="step-empty"></div>
          <div className="step-icon-wrapper">
            <IconLaunch />
          </div>
          <div className="step-content text-left">
            <span className="step-number">Step 04</span>
            <h2 className="step-title">Launch & <br/>Quality Assurance</h2>
            <p className="step-desc">
              After rigorous testing of every link, pixel, and workflow, we flip the switch. Your system goes live.
            </p>
            <ul className="step-list">
              <li>Full system stress test</li>
              <li>Tracking pixel verification</li>
              <li>Live deployment</li>
            </ul>
          </div>
        </div>

        {/* STEP 5: LEFT */}
        <div className="step-row">
          <div className="step-content text-right">
            <span className="step-number">Step 05</span>
            <h2 className="step-title">Reporting, <br/>Optimization & Scaling</h2>
            <p className="step-desc">
              Launch is just the beginning. We continuously monitor data to improve performance and scale what works.
            </p>
            <ul className="step-list">
              <li>Transparent weekly reports</li>
              <li>Performance insights</li>
              <li>A/B testing & refinement</li>
              <li>Scaling roadmaps</li>
            </ul>
          </div>
          <div className="step-icon-wrapper">
            <IconReport />
          </div>
          <div className="step-empty"></div>
        </div>

      </div>

      {/* FINAL CTA */}
      <div className="container">
        <div className="cta-section">
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px'}}>Ready to Start Your Journey?</h2>
          <p style={{marginBottom: '40px', color: '#64748b', fontSize: '1.1rem'}}>
            Let's build a system that grows your business while you sleep.
          </p>
          <Link to="/contact" className="btn-orange">
            Get Started
          </Link>
        </div>
      </div>

    </div>
  );
};

export default OurProcess;