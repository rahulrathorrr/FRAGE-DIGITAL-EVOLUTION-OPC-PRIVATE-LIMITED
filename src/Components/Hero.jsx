import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Leaf, BarChart3 } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900">
              Where advertising <br />
              <span className="relative inline-block text-[#82BC41]">
                intelligence evolves.
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-3" 
                  viewBox="0 0 300 12" 
                  fill="none"
                >
                  <path d="M1 10C50 2 150 2 299 10" stroke="#FF5722" strokeWidth="4" strokeLinecap="round"/>
                </motion.svg>
              </span>
            </h1>
            
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg">
              Unlock faster growth, sharper targeting, and higher ROI with intelligent 
              advertising systems powered by advanced AI. At FRAGE DIGITAL EVOLUTION, we build 
              tech that automates your success.
            </p>

            <div className="mt-10 flex flex-wrap gap-5 items-center">
              {/* Redirect to /contact */}
              <button 
                onClick={() => navigate('/contact')}
                className="bg-[#82BC41] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#73a839] hover:shadow-2xl hover:shadow-green-200 transition-all active:scale-95"
              >
                Get started
              </button>
              
              {/* Redirect to /solutions */}
              <button 
                onClick={() => navigate('/solutions')}
                className="group flex items-center gap-2 text-gray-900 font-bold px-6 py-4 hover:bg-gray-50 rounded-xl transition-all"
              >
                <div className="p-2 bg-green-50 rounded-lg group-hover:bg-[#82BC41] group-hover:text-white transition-colors">
                  <Leaf size={20} />
                </div>
                <span className="border-b-2 border-transparent group-hover:border-gray-900 pb-1">Explore Solutions</span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Tech Image & Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Aesthetic Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-gradient-to-br from-[#FFD54F]/20 via-blue-50 to-transparent rounded-full blur-3xl -z-10" />
            
            {/* Main Tech Image */}
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Marketing Analytics"
                className="w-full h-[550px] object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating ROI Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-12 -left-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <BarChart3 size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Growth ROI</span>
                </div>
                <div className="text-3xl font-black text-gray-900">+148%</div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full mt-3 overflow-hidden">
                   <div className="h-full w-[80%] bg-[#82BC41]" />
                </div>
              </motion.div>

              {/* Small Tech Tag */}
              <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                AI Systems Active
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;