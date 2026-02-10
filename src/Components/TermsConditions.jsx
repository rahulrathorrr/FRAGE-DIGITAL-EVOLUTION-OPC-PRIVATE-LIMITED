import React from 'react';

const TermsConditions = () => {
  return (
    <div className="policy-page-wrapper">
      
      {/* Reusing styles for consistency */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

        .policy-page-wrapper {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #334155;
          line-height: 1.7;
          padding: 120px 24px 80px;
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

        p {
          margin-bottom: 16px;
        }

        .company-name {
          font-weight: 700;
          color: #2563EB;
        }
      `}</style>

      <div className="policy-container">
        <h1>Terms & Conditions</h1>
        <span className="last-updated">Last Updated: January 2026</span>

        <p>
          By accessing <strong>fragedigievolution.in</strong>, you agree to abide by these Terms & Conditions set forth by <span className="company-name">FRAGE DIGITAL EVOLUTION (OPC) PRIVATE LIMITED</span>.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          Your use of our website signifies your full agreement to these terms. If you do not agree with any part of these terms, you must not use this website.
        </p>

        <h2>2. Use of Website</h2>
        <p>
          You agree not to engage in unlawful or harmful activities, upload malicious files, or misuse our intellectual property or website infrastructure.
        </p>

        <h2>3. Service Engagement</h2>
        <p>
          Projects and services operate on separate written agreements covering scope, deliverables, timelines, and payment terms. This website serves as an informational platform.
        </p>

        <h2>4. Payments & Refunds</h2>
        <p>
          Payments must adhere to agreed schedules outlined in your specific service agreement. Refunds follow the contract terms signed at the beginning of the engagement.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content on this website (including text, graphics, logos, and code) is owned by FRAGE DIGITAL EVOLUTION and cannot be reproduced, copied, or redistributed without explicit permission.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          We are not liable for indirect damages, third-party platform issues, data loss, or circumstances beyond our reasonable control resulting from the use of our website or services.
        </p>

        <h2>7. Third-Party Tools</h2>
        <p>
          External platforms used for analytics or service delivery (e.g., Google Analytics, CRM tools) have their own privacy policies and terms. We are not responsible for their practices.
        </p>

        <h2>8. Termination</h2>
        <p>
          We may suspend or terminate access to our services for violations of these terms, non-payment, or suspicious activity.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          These terms may be updated periodically. Continued use of the website after changes constitutes acceptance of the new terms.
        </p>

      </div>
    </div>
  );
};

export default TermsConditions;