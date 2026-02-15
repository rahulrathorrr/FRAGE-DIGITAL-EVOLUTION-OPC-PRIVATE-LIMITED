import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, Target, TrendingUp, Settings, 
  BarChart3, Cpu, Users, Layers, Maximize, ArrowRight
} from 'lucide-react';

const HomeSections = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="space-y-32 py-20 bg-white overflow-hidden">
      
      {/* 1. INTRODUCTION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4">- Introduction</h2>
          <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
            The Future of Advertising Starts Here
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Digital advertising has become more complex than ever. With ever-changing algorithms, intense competition, and shifting consumer behavior, brands need more than manual strategies - they need intelligent systems.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <p className="text-2xl font-bold text-gray-900 mb-10 text-center">
            At <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">FRAGE DIGITAL EVOLUTION</span>, we merge AI innovation with deep advertising insights to create solutions that:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Reduce manual workload and errors", icon: <Settings className="text-blue-500" /> },
              { text: "Improve targeting precision and conversion rates", icon: <Target className="text-blue-500" /> },
              { text: "Optimize budgets based on real-time performance", icon: <TrendingUp className="text-blue-500" /> },
              { text: "Automate repetitive marketing tasks", icon: <Zap className="text-blue-500" /> },
              { text: "Provide actionable analytics for smarter decision‑making", icon: <BarChart3 className="text-blue-500" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4">
                <div className="mt-1">{item.icon}</div>
                <p className="text-lg font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-600 italic mb-8">
              Whether you're a startup, agency, or enterprise, our advertising AI solutions help you scale with confidence.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 2. WHAT MAKES US DIFFERENT */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-5xl font-black text-gray-900">What<br/>Makes Us Different</h2>
          <div className="h-1 w-32 bg-blue-600 mb-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "AI-Driven Precision", 
              desc: "Our systems don’t just automate-they learn, analyze, and optimize continuously.",
              icon: <Cpu size={40} className="text-blue-600" /> 
            },
            { 
              title: "Human-Centered Intelligence", 
              desc: "We combine smart algorithms with strategic thinking to ensure results are meaningful and aligned with goals.",
              icon: <Users size={40} className="text-blue-600" /> 
            },
            { 
              title: "Full Advertising Ecosystem", 
              desc: "From creative generation to campaign optimization, we cover every aspect of your growth.",
              icon: <Layers size={40} className="text-blue-600" /> 
            },
            { 
              title: "Built for Scalability", 
              desc: "Whether you're running small campaigns or scaling nationwide, our tools adapt seamlessly.",
              icon: <Maximize size={40} className="text-blue-600" /> 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group rounded-2xl">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. KEY SOLUTIONS OVERVIEW */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="max-w-7xl mx-auto px-6 bg-gray-900 py-20 rounded-[3rem] text-white"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Solutions Overview</h2>
          <p className="text-gray-400">Intelligent tools designed for the modern marketer</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "AI Ad Automation System",
            "AI Creative Generation Tools",
            "Marketing Workflows & Lead Nurturing Automation",
            "Advanced Analytics & Conversion Tracking",
            "SEO, Visibility, and Organic Growth Solutions"
          ].map((solution, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center font-bold shrink-0">
                {idx + 1}
              </div>
              <span className="text-xl md:text-2xl font-medium">{solution}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/solutions')}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all"
          >
            Explore All Solutions <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </motion.section>

    </div>
  );
};

export default HomeSections;