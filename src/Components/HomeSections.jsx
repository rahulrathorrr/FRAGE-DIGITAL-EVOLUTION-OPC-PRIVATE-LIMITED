import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Star, RefreshCw, Monitor, Video, BarChart3, 
  ArrowUpRight 
} from 'lucide-react';

const HomeSections = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="space-y-40 py-24 bg-white">
      
      {/* 1. INTRODUCTION SECTION - Centered & Large Text */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-[1.4] font-semibold mb-12">
          We’re a team of seasoned marketers and strategists combining over 30 years of experience in web design, branding, and digital growth - now enhanced with cutting-edge AI tools and automation. We help businesses streamline operations, attract qualified leads, and scale profitably without burning out their teams.
        </p>
        <button 
          onClick={() => navigate('/about')}
          className="px-12 py-4 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
        >
          Learn More
        </button>
      </motion.section>

      {/* 2. KEY SOLUTIONS OVERVIEW - Replaced Header */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
            Key Solutions Overview
          </h2>
          <div className="h-2 w-24 bg-[#82BC41] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
          {[
            { title: "AI Automation & CRM Development", desc: "Automate lead follow-up, nurture prospects, and keep your team focused on closing deals.", icon: <Star size={32} className="text-gray-400" /> },
            { title: "SEO & Google Business Optimization", desc: "Get found by the right customers with proven SEO and GBP strategies.", icon: <RefreshCw size={32} className="text-gray-400" /> },
            { title: "Web Design & Hosting", desc: "Fast, secure, and conversion-optimized websites built to impress and perform.", icon: <Monitor size={32} className="text-gray-400" /> },
            { title: "Graphic Design & Branding", desc: "Visual storytelling that communicates your brand’s personality and professionalism.", icon: <Video size={32} className="text-gray-400" /> },
            { title: "Ads Management & Lead Generation", desc: "Intelligent ad campaigns that convert without wasting budget.", icon: <BarChart3 size={32} className="text-gray-400" /> }
          ].map((item, i) => (
            <div key={i} className="text-left group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h4>
              <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
          
          {/* View Solutions Button Card */}
          <div className="flex items-center justify-center pt-8">
            <button 
              onClick={() => navigate('/solutions')}
              className="px-10 py-4 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              View Solutions
            </button>
          </div>
        </div>
      </motion.section>

      {/* 3. OUR PROCESS - Clean 5-Stage Numbered List */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="mb-20">
          <h2 className="text-7xl font-black text-gray-900 mb-4">Our Process</h2>
          <div className="h-1 w-full bg-gray-100 mt-8" />
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { id: "01", title: "Discovery & Requirement Mapping", desc: "A deep understanding of your goals, audience, market competition, and current challenges." },
            { id: "02", title: "Strategy & Design Blueprint", desc: "A tailored plan outlining campaign structure, automation architecture, and KPIs." },
            { id: "03", title: "Development & Implementation", desc: "Full execution including system setup, dashboard creation, and creative development." },
            { id: "04", title: "Launch & Quality Assurance", desc: "After rigorous testing and quality checks, your intelligent systems go live." },
            { id: "05", title: "Reporting, Optimization & Scaling", desc: "Transparent reports and performance insights along with optimization roadmaps." }
          ].map((step, i) => (
            <div key={i} className="flex justify-between items-start py-14 group hover:bg-gray-50 transition-all px-6 rounded-2xl">
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4facfe] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed">{step.desc}</p>
              </div>
              <span className="text-8xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                {step.id}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button 
            onClick={() => navigate('/contact')}
            className="px-14 py-6 bg-[#82BC41] text-white text-2xl font-black rounded-full shadow-2xl hover:bg-black transition-all flex items-center gap-4"
          >
            Get Started <ArrowUpRight size={28} />
          </button>
        </div>
      </motion.section>

    </div>
  );
};

export default HomeSections;