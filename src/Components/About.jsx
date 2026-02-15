import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-page-wrapper">
      {/* INLINE STYLES FOR PORTABILITY 
        (You can move these to a separate .css file if preferred)
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

        .about-page-wrapper {
          font-family: 'Inter', sans-serif;
          color: #111;
          background-color: #fff;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO SECTION */
        .hero-section {
          display: flex;
          align-items: center;
          gap: 80px;
          padding: 100px 0;
          min-height: 90vh;
        }

        .image-stack {
          position: relative;
          flex: 1;
          height: 600px;
        }

        .img-tall {
          width: 80%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .img-overlay {
          position: absolute;
          bottom: 40px;
          right: 0;
          width: 55%;
          height: 350px;
          object-fit: cover;
          border-radius: 12px;
          border: 8px solid #fff;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .hero-content {
          flex: 1;
        }

        .label {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #4B5563;
          margin-bottom: 24px;
          display: block;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 32px;
          letter-spacing: -1px;
        }

        .company-name {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 16px;
          display: block;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 24px;
        }

        /* EXPERTISE SECTION */
        .expertise-section {
          background-color: #F9FAFB;
          padding: 100px 0;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .card {
          background: #fff;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: transform 0.2s ease;
          border: 1px solid #eee;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: #2563EB;
        }

        .card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          font-weight: 600;
        }

        /* MISSION & VISION (Split Layout) */
        .mission-section {
          padding: 100px 0;
        }
        
        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .mv-block {
          margin-bottom: 40px;
        }

        .mv-block h2 {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        /* VALUES SECTION */
        .values-section {
          padding: 0 0 100px 0;
        }

        .values-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          border-top: 1px solid #eee;
          padding-top: 60px;
        }

        .value-item h4 {
          font-size: 1.2rem;
          color: #2563EB; /* Tech Blue */
          margin-bottom: 12px;
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding-top: 60px;
          }
          
          .image-stack {
            width: 100%;
            height: 500px;
            margin-bottom: 40px;
          }

          .img-tall { width: 90%; margin: 0 auto; display: block; }
          .img-overlay { display: none; } /* Hide overlay on tablet/mobile for cleaner look */
          
          .split-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="hero-section container">
        <div className="image-stack">
          {/* Main Image: Server/Tech Infrastructure */}
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Modern Tech Infrastructure" 
            className="img-tall" 
          />
          {/* Overlay Image: Team working/Code */}
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Digital Team Collaboration" 
            className="img-overlay" 
          />
        </div>

        <div className="hero-content">
          <span className="label">About Us</span>
          <h1>Who We Are</h1>
          <span className="company-name">FRAGE DIGITAL EVOLUTION (OPC) PRIVATE LIMITED</span>
          <p>
            We are an advertising technology startup built with one mission: to transform how businesses run advertising using intelligent automation and AI-powered systems.
          </p>
          <p>
            Our company is founded on strong digital expertise, strategic thinking, and a passion for innovation. We exist to bridge the gap between traditional marketing and the future of automation.
          </p>
         
        </div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section className="expertise-section">
        <div className="container">
          <span className="label">Capabilities</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Our Expertise Includes</h2>
          
          <div className="expertise-grid">
            <div className="card">
              <h3>AI-based Ad Automation</h3>
              <p>Advanced optimization algorithms that maximize ad performance automatically.</p>
            </div>
            <div className="card">
              <h3>Intelligent CRM</h3>
              <p>Workflow automation designed to streamline customer relationships and data management.</p>
            </div>
            <div className="card">
              <h3>Performance Marketing</h3>
              <p>Digital marketing strategies purely driven by data and tangible ROI.</p>
            </div>
            <div className="card">
              <h3>Analytics & Insights</h3>
              <p>Deep behavioral insight systems to understand your customer's journey.</p>
            </div>
            <div className="card">
              <h3>Design & Branding</h3>
              <p>Conversion-driven design that turns viewers into loyal customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="mission-section container">
        <div className="split-layout">
          {/* Text Side */}
          <div>
            <div className="mv-block">
              <span className="label">Our Mission</span>
              <h2>Empower & Amplify</h2>
              <p>
                To empower businesses with intelligent advertising solutions that simplify operations, amplify performance, and unlock exponential growth.
              </p>
            </div>
            
            <div className="mv-block">
              <span className="label">Our Vision</span>
              <h2>Global Leadership</h2>
              <p>
                To become a global leader in AI‑powered advertising software - helping millions of businesses evolve with smarter systems.
              </p>
            </div>
          </div>

          {/* Image Side - Abstract Tech */}
          <div>
             <img 
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
               alt="AI Chip Technology" 
               style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
             />
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section className="values-section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Core Values</h2>
        <div className="values-list">
          <div className="value-item">
            <h4>Innovation</h4>
            <p>Always pushing boundaries with AI and automation.</p>
          </div>
          <div className="value-item">
            <h4>Transparency</h4>
            <p>Clear communication, data-based decisions.</p>
          </div>
          <div className="value-item">
            <h4>Performance</h4>
            <p>Every solution must improve results.</p>
          </div>
          <div className="value-item">
            <h4>Reliability</h4>
            <p>Systems built for stability, accuracy, and long-term success.</p>
          </div>
          <div className="value-item">
            <h4>Scalability</h4>
            <p>Tools that grow with your business.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;