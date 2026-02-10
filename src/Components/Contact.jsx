import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Info, FileText, ShieldAlert } from 'lucide-react'; // Make sure you have lucide-react or use SVGs

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-up');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 100);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* INLINE CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        :root {
          --primary-green: #82BC41;
          --primary-dark: #0f172a;
          --text-gray: #475569;
          --bg-light: #F8FAFC;
          --white: #ffffff;
          --border: #E2E8F0;
        }

        .contact-page-wrapper {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-light);
          min-height: 100vh;
          padding-top: 100px;
          padding-bottom: 80px;
          color: var(--primary-dark);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: start;
        }

        /* LEFT SIDE STYLES */
        .info-section {
          position: sticky;
          top: 120px;
        }

        h1 {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }

        .company-legal-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-green);
          margin-bottom: 30px;
          display: block;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-card {
          background: var(--white);
          padding: 30px;
          border-radius: 16px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          margin-bottom: 30px;
        }

        .info-row {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .info-row:last-child { margin-bottom: 0; }

        .info-icon {
          color: var(--primary-green);
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 4px;
          display: block;
        }

        .info-text {
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.5;
          color: var(--primary-dark);
        }

        /* Terms Section on Left */
        .terms-box {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid var(--border);
        }

        .term-item {
          margin-bottom: 20px;
        }

        .term-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .term-desc {
          font-size: 0.9rem;
          color: var(--text-gray);
          line-height: 1.5;
        }

        /* RIGHT SIDE FORM STYLES */
        .form-card {
          background: var(--white);
          padding: 48px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border: 1px solid rgba(130, 188, 65, 0.1);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group { margin-bottom: 24px; }
        .full-width { grid-column: span 2; }

        label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--primary-dark);
        }

        input, select, textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 1rem;
          background: #F8FAFC;
          transition: all 0.2s ease;
          font-family: 'Inter', sans-serif;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-green);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(130, 188, 65, 0.1);
        }

        .btn-submit {
          width: 100%;
          background: var(--primary-green);
          color: white;
          font-weight: 700;
          padding: 18px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.2s;
          margin-top: 10px;
          box-shadow: 0 10px 20px rgba(130, 188, 65, 0.3);
        }

        .btn-submit:hover {
          background: #6da332;
          transform: translateY(-2px);
        }

        /* Animation */
        .animate-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .animate-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 900px) {
          .split-layout { grid-template-columns: 1fr; gap: 40px; }
          .info-section { position: static; }
          .form-grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
        }
      `}</style>

      <div className="container split-layout">
        
        {/* --- LEFT SIDE: COMPANY INFO --- */}
        <div className="info-section animate-up">
          <h1>Get In Touch</h1>
          <span className="company-legal-name">FRAGE DIGITAL EVOLUTION</span>
          
          <div className="info-card">
            {/* Address */}
            <div className="info-row">
              <MapPin className="info-icon" size={24} />
              <div>
                <span className="info-label">Visit Us</span>
                <p className="info-text">
                  Sf No46/12, MGR Silai Opp,<br/>
                  Kallakurichi, Tamil Nadu 606401
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="info-row">
              <Mail className="info-icon" size={24} />
              <div>
                <span className="info-label">Email Us</span>
                <p className="info-text">support@fragedigievolution.in</p>
              </div>
            </div>
          </div>

          {/* Terms & Policies Snippets */}
          <div className="terms-box">
            <h3 style={{fontSize: '1.2rem', marginBottom: '20px'}}>Policy Highlights</h3>
            
            <div className="term-item">
              <div className="term-title">
                <FileText size={16} color="#82BC41"/> Service Engagement
              </div>
              <p className="term-desc">
                All project terms, deliverables, and pricing will be defined in a written agreement before project initiation.
              </p>
            </div>

            <div className="term-item">
              <div className="term-title">
                <ShieldAlert size={16} color="#82BC41"/> Limitation of Liability
              </div>
              <p className="term-desc">
                We are not liable for indirect or incidental damages resulting from website or service usage.
              </p>
            </div>

            <div className="term-item">
              <div className="term-title">
                <Info size={16} color="#82BC41"/> Modifications
              </div>
              <p className="term-desc">
                We reserve the right to update these terms at any time.
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="form-card animate-up">
          
          {isSubmitted ? (
            <div style={{textAlign: 'center', padding: '60px 20px'}}>
              <div style={{fontSize: '4rem', color: '#82BC41', marginBottom: '20px'}}>✓</div>
              <h2 style={{fontSize:'2rem', marginBottom:'16px'}}>Message Sent!</h2>
              <p style={{color: '#64748b'}}>Thank you for reaching out. Our team will analyze your request and get back to you within 24 hours.</p>
              <button onClick={() => setIsSubmitted(false)} style={{marginTop:'30px', background:'transparent', border:'1px solid #ccc', padding:'10px 20px', borderRadius:'8px', cursor:'pointer'}}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 style={{marginBottom: '32px', fontSize: '1.8rem'}}>Project Inquiry</h2>
              
              <div className="form-grid">
                
                {/* Full Name */}
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@company.com" required />
                </div>

                {/* Job Title */}
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" placeholder="Marketing Director" />
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Acme Corp" />
                </div>

                {/* Website */}
                <div className="form-group">
                  <label>Website URL</label>
                  <input type="url" placeholder="https://www.example.com" />
                </div>

                {/* How Did You Hear */}
                <div className="form-group">
                  <label>How Did You Hear About Us?</label>
                  <select>
                    <option>Select an option</option>
                    <option>Google Search</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>Social Media</option>
                  </select>
                </div>

                {/* Services Interested In */}
                <div className="form-group full-width">
                  <label>Services Interested In</label>
                  <select>
                    <option>Select a service</option>
                    <option>AI Ad Automation</option>
                    <option>Web Design & Development</option>
                    <option>SEO & Organic Growth</option>
                    <option>CRM & Workflow Automation</option>
                    <option>Branding & Identity</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Description */}
                <div className="form-group full-width">
                  <label>Detailed Project Description</label>
                  <textarea rows="5" placeholder="Tell us about your goals, timeline, and budget..." required></textarea>
                </div>

                {/* File Attachment */}
                <div className="form-group full-width">
                  <label>File Attachment (Briefs/RFPs)</label>
                  <div style={{border: '2px dashed #E2E8F0', padding: '30px', textAlign: 'center', borderRadius: '12px', cursor: 'pointer', background: '#F8FAFC'}}>
                    <span style={{color: '#82BC41', fontWeight: '600'}}>Click to Upload</span>
                    <br/>
                    <span style={{fontSize: '0.85rem', color: '#94a3b8'}}>or drag and drop files here (Max 10MB)</span>
                    <input type="file" style={{display: 'none'}} />
                  </div>
                </div>

              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;