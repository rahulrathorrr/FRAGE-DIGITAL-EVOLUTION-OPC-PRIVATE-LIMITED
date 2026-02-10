import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">

      {/* INLINE STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

        .footer-wrapper {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          padding: 40px 24px;
          display: flex;
          justify-content: center;
        }

        .footer-container {
          background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
          color: white;
          width: 100%;
          max-width: 1200px;
          border-radius: 30px;
          padding: 60px 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .footer-container::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(130,188,65,0.15) 0%, rgba(0,0,0,0) 70%);
          z-index: 0;
        }

        .footer-content {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
        }

        .footer-left {
          flex: 1;
          min-width: 280px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          text-decoration: none;
        }

        .logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .address-block {
          color: #9ca3af;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .address-block p {
          margin-bottom: 8px;
        }

        .email-link {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid #82BC41;
          padding-bottom: 2px;
          transition: color 0.2s;
        }

        .email-link:hover {
          color: #82BC41;
        }

        .footer-right {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: #82BC41;
        }

        .btn-get-started {
          background: linear-gradient(90deg, #22d3ee 0%, #82BC41 100%);
          color: #000;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);
        }

        .btn-get-started:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(34, 211, 238, 0.4);
        }

        .scale-text {
          margin-top: 60px;
          font-size: 6rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -2px;
          background: linear-gradient(90deg, #82BC41 0%, #22d3ee 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          width: 100%;
        }

        .footer-bottom {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #6b7280;
        }

        .legal-links {
          display: flex;
          gap: 20px;
        }

        .legal-link {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s;
        }

        .legal-link:hover {
          color: white;
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 40px 24px;
          }

          .footer-content {
            flex-direction: column;
            gap: 40px;
          }

          .footer-right {
            align-items: flex-start;
            text-align: left;
          }

          .nav-links {
            flex-direction: column;
            gap: 12px;
          }

          .scale-text {
            font-size: 3.5rem;
            margin-top: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-container">

        {/* TOP SECTION */}
        <div className="footer-content">

          {/* LEFT SIDE */}
          <div className="footer-left">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Frogbyte Logo" className="logo-img" />
              <span className="logo-text">FROGBYTE</span>
            </Link>

            <div className="address-block">
              <p><strong>FRAGE DIGITAL EVOLUTION (OPC) PVT LTD</strong></p>
              <p>Sf No46/12, MGR Silai Opp,</p>
              <p>Kallakurichi, Tamil Nadu 606401</p>

              <p style={{ marginTop: '12px' }}>
                <a href="mailto:support@fragedigievolution.in" className="email-link">
                  support@fragedigievolution.in
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="footer-right">
            <div className="nav-links">
              <Link to="/solutions" className="nav-link">Solutions</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/process" className="nav-link">Our Process</Link>
            </div>

            <Link to="/contact" className="btn-get-started">
              Get Started
            </Link>
          </div>

        </div>

        {/* BIG TEXT */}
        <div className="scale-text">
          scale faster.
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div>
            © FrogByte Digital 2025. All rights reserved.
          </div>

          <div className="legal-links">
            <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
            <Link to="/terms-conditions" className="legal-link">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
