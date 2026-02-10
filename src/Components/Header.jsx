import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Frogbyte Logo" 
              className="h-12 w-auto object-contain"
            />

            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#82BC41] leading-none tracking-tight">
                FROGBYTE
              </span>
              <span className="text-xs font-bold text-gray-400 tracking-[0.3em] mt-1">
                DIGITAL
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold hover:text-[#82BC41] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              About Us
            </Link>
            <Link to="/solutions" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              Solutions
            </Link>
            <Link to="/process" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              Our Process
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#82BC41] text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#73a839] transition-all shadow-lg shadow-green-100"
          >
            <Zap size={18} fill="currentColor" />
            Get Started
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
