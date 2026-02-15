import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Upload } from 'lucide-react'; 

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
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .sub-header {
          font-size: 1.1rem;
          color: var(--text-gray);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .company-legal-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-green);
          margin-bottom: 24px;
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

        .radio-group {
          display: flex;
          gap: 20px;
          margin-top: 8px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          cursor: pointer;
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
        
        {/* --- LEFT SIDE: CLEAN COMPANY INFO --- */}
        <div className="info-section animate-up">
          <h1>Let’s Build the Future of Your Advertising</h1>
          <p className="sub-header">
            Whether you're launching a new project or scaling an existing one, we’re ready to help.
          </p>
          
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

                {/* Email Address */}
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

                {/* Website URL */}
                <div className="form-group">
                  <label>Website URL</label>
                  <input type="url" placeholder="https://www.example.com" />
                </div>

                {/* How Did You Hear About Us? */}
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

                {/* Detailed Project Description */}
                <div className="form-group full-width">
                  <label>Detailed Project Description</label>
                  <textarea rows="5" placeholder="Tell us about your goals, timeline, and budget..." required></textarea>
                </div>

                {/* Preferred communication method */}
                <div className="form-group full-width">
                  <label>Preferred Communication Method</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input type="radio" name="commMethod" value="Email" defaultChecked /> Email
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="commMethod" value="Phone" /> Phone
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="commMethod" value="WhatsApp" /> WhatsApp
                    </label>
                  </div>
                </div>

                {/* File Attachment */}
                <div className="form-group full-width">
                  <label>File Attachment (Briefs/RFPs)</label>
                  <div style={{border: '2px dashed #E2E8F0', padding: '30px', textAlign: 'center', borderRadius: '12px', cursor: 'pointer', background: '#F8FAFC'}}>
                    <Upload size={24} color="#82BC41" style={{margin: '0 auto 10px'}} />
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