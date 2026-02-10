import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page-wrapper">
      
      {/* INLINE STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

        .policy-page-wrapper {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #334155;
          line-height: 1.7;
          padding: 120px 24px 80px; /* Top padding for fixed header */
        }

        .policy-container {
          max-width: 900px;
          margin: 0 auto;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .last-updated {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 40px;
          display: block;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 20px;
        }

        h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0f172a;
          margin-top: 40px;
          margin-bottom: 16px;
        }

        h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #334155;
          margin-top: 24px;
          margin-bottom: 8px;
        }

        p {
          margin-bottom: 16px;
        }

        ul {
          list-style-type: disc;
          padding-left: 24px;
          margin-bottom: 20px;
        }

        li {
          margin-bottom: 8px;
        }

        .company-name {
          font-weight: 700;
          color: #2563EB; /* Tech Blue highlight */
        }
      `}</style>

      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <span className="last-updated">Last Updated: January 2026</span>

        <p>
          At <span className="company-name">FRAGE DIGITAL EVOLUTION (OPC) PRIVATE LIMITED</span>, accessible from <strong>fragedigievolution.in</strong>, we value your trust and are committed to maintaining strong privacy standards. This Privacy Policy explains how we collect, use, store, and safeguard your personal information.
        </p>

        <h2>1. Information We Collect</h2>
        
        <h3>Personal Data:</h3>
        <ul>
          <li>Name, Email, Phone Number</li>
          <li>Company & Job Information</li>
          <li>Inquiry Details</li>
        </ul>

        <h3>Technical Data:</h3>
        <ul>
          <li>IP address, browser type, device info</li>
          <li>Pages visited & time spent</li>
        </ul>

        <h3>Tracking Data:</h3>
        <ul>
          <li>Cookies for analytics & performance</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To deliver requested services</li>
          <li>To respond to inquiries</li>
          <li>To improve website experience</li>
          <li>To send important updates or communication</li>
        </ul>

        <h2>3. Data Protection Measures</h2>
        <p>
          We use modern security standards including SSL encryption to protect your data from unauthorized access. While we implement robust security measures, no method of transmission over the Internet is 100% secure.
        </p>

        <p style={{marginTop: '40px', fontSize: '0.9rem', color: '#94a3b8'}}>
          For any privacy-related concerns, please contact us at support@fragedigievolution.in.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;