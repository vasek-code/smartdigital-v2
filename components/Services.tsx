
import React, { useRef } from 'react';
import { SERVICES } from '../constants';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Check, Code, Heart, Share2, Layers, MousePointer2 } from 'lucide-react';

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="services" ref={containerRef} className="relative bg-surface pt-12 pb-40">
      <div className="container mx-auto px-6 mb-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
        >
            <h2 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span>
               Služby
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
              Komplexní řešení.
            </h3>
            <p className="text-gray-400 text-lg">
              Vše pod jednou střechou. Skrolujte níže.
            </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative">
        {SERVICES.map((service, index) => {
          // Calculate scale logic for the stacking effect
          const targetScale = 1 - ( (SERVICES.length - index) * 0.05 );
          
          return (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

// --- Individual Sticky Card Component ---
interface CardProps {
  service: typeof SERVICES[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const ServiceCard: React.FC<CardProps> = ({ service, index, progress, range, targetScale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);

  // Choose the illustration based on service ID
  const renderIllustration = () => {
    switch (service.id) {
      case 'ppc': return <PPCIllustration />;
      case 'web': return <WebIllustration />;
      case 'social': return <SocialIllustration />;
      case 'brand': return <BrandIllustration />;
      default: return null;
    }
  };

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 pt-24 md:pt-0">
      <motion.div 
        style={{ 
            scale,
            top: `calc(5% + ${index * 20}px)` 
        }} 
        className="relative w-full max-w-6xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row origin-top h-[75vh] md:h-[70vh]"
      >
        {/* Illustration Side (Top on Mobile / Right on Desktop) */}
        {/* FIX: explicit min-height on mobile to prevent collapse */}
        <div className="w-full md:w-1/2 min-h-[250px] md:h-auto bg-gradient-to-br from-gray-900 to-black border-b md:border-b-0 md:border-l border-white/5 relative overflow-hidden flex items-center justify-center group order-1 md:order-2">
           {/* Grid Background */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           
           {/* The Custom 3D Scene - Scaled for mobile */}
           <div className="relative z-10 scale-[0.7] md:scale-100 transform-gpu origin-center">
              {renderIllustration()}
           </div>

           {/* Glow effect */}
           <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content Side (Bottom on Mobile / Left on Desktop) */}
        <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center relative z-10 order-2 md:order-1 bg-[#111]">
           <div className="hidden md:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center text-primary mb-8 border border-primary/20">
             {React.createElement(service.icon, { size: 24 })}
           </div>
           
           <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3 md:block">
             <span className="md:hidden text-primary">{React.createElement(service.icon, { size: 24 })}</span>
             {service.title}
           </h2>
           <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">{service.description}</p>
           
           <ul className="space-y-2 md:space-y-4">
             {service.features.map((feature, i) => (
               <li key={i} className="flex items-center gap-3 text-gray-300 font-medium text-sm md:text-base">
                 <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                    <Check size={12} className="md:w-[14px] md:h-[14px]" />
                 </span>
                 {feature}
               </li>
             ))}
           </ul>
        </div>

      </motion.div>
    </div>
  );
};

// --- 3D Illustrations Components ---

// 1. PPC / Performance Marketing
const PPCIllustration = () => (
    <div className="relative w-80 h-80">
        <motion.div 
            className="absolute inset-0 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl p-6 flex flex-col justify-between z-10"
            style={{ rotateY: -12, rotateX: 5, perspective: 1000 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">ROAS: 840%</div>
            </div>
            
            <div className="flex items-end justify-between h-32 gap-2">
                {[40, 65, 45, 85, 60, 95].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                        className={`w-full rounded-t-sm ${i === 5 ? 'bg-primary shadow-[0_0_15px_rgba(199,247,21,0.5)]' : 'bg-white/10'}`}
                    />
                ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                <div className="text-xs text-gray-400">Celkový obrat</div>
                <div className="text-lg font-bold text-white">2.4M Kč</div>
            </div>
        </motion.div>

        <motion.div 
            className="absolute -right-10 top-10 bg-primary text-black p-4 rounded-lg shadow-xl z-20 w-32"
            animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="flex items-center gap-2 mb-1">
                <MousePointer2 size={14} />
                <span className="text-xs font-bold uppercase">CTR</span>
            </div>
            <div className="text-2xl font-black">12.5%</div>
        </motion.div>
    </div>
);

// 2. Web Development
const WebIllustration = () => (
    <div className="relative w-80 h-64">
        <motion.div 
            className="absolute inset-0 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
            style={{ rotateY: 10, rotateX: -5, perspective: 1000 }}
            animate={{ rotateY: [10, 5, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
             <div className="bg-[#252526] p-3 flex items-center gap-2 border-b border-black/20">
                 <Code size={14} className="text-blue-400" />
                 <span className="text-xs text-gray-400 font-mono">SmartComponent.tsx</span>
             </div>
             <div className="p-4 font-mono text-xs space-y-2 opacity-80">
                 <div className="flex gap-2"><span className="text-purple-400">const</span> <span className="text-yellow-300">App</span> = () ={'>'} {'{'}</div>
                 <div className="pl-4 flex gap-2"><span className="text-purple-400">return</span> (</div>
                 <motion.div 
                    className="pl-8 text-primary font-bold"
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                 >
                    &lt;Growth /&gt;
                 </motion.div>
                 <div className="pl-4">);</div>
                 <div>{'}'}</div>
             </div>
        </motion.div>

        <motion.div 
            className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-xl flex items-center justify-center"
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
        >
            <div className="text-blue-400 font-bold text-xl">TS</div>
        </motion.div>
        <motion.div 
            className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
            <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
        </motion.div>
    </div>
);

// 3. Social Media
const SocialIllustration = () => (
    <div className="relative w-72 h-80 flex items-center justify-center">
        <motion.div 
            className="w-48 h-full bg-black border-4 border-gray-800 rounded-3xl relative z-10 overflow-hidden"
            style={{ rotate: -5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-xl z-20"></div>
            
            <div className="p-4 pt-8 space-y-3">
                {[1, 2, 3].map((i) => (
                    <motion.div 
                        key={i}
                        className="bg-gray-900 rounded-lg p-2 space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500"></div>
                            <div className="h-2 w-20 bg-white/10 rounded"></div>
                        </div>
                        <div className="h-16 bg-white/5 rounded"></div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        <motion.div 
            className="absolute top-10 -right-4 bg-red-500 text-white p-2 rounded-full shadow-lg flex items-center gap-1 z-20"
            animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        >
            <Heart size={16} fill="currentColor" />
        </motion.div>

        <motion.div 
            className="absolute bottom-20 -left-8 bg-white text-black px-3 py-1 rounded-full shadow-lg flex items-center gap-2 z-20 text-xs font-bold"
            animate={{ x: [-20, 0, 0, -20], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
            <Share2 size={12} />
            <span>Sdíleno</span>
        </motion.div>
    </div>
);

// 4. Brand Identity
const BrandIllustration = () => (
    <div className="relative w-80 h-80 flex items-center justify-center">
        <motion.div 
            className="absolute w-40 h-56 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-10"
            style={{ rotate: -15 }}
            animate={{ rotate: [-15, -10, -15] }}
            transition={{ duration: 5, repeat: Infinity }}
        >
            <div className="flex-1 bg-black"></div>
            <div className="flex-1 bg-[#333]"></div>
            <div className="flex-1 bg-gray-500"></div>
            <div className="h-12 bg-white flex items-center justify-center">
                 <span className="text-black font-black text-xl tracking-tighter">LOGO</span>
            </div>
        </motion.div>
        
        <motion.div 
            className="absolute w-40 h-56 bg-primary rounded-xl shadow-2xl z-0"
            style={{ rotate: 5 }}
            animate={{ rotate: [5, 10, 5] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        ></motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 20 }}>
            <motion.path
                d="M20,150 Q100,50 180,150 T340,150"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="10 5"
                animate={{ strokeDashoffset: [0, 100] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
        </svg>

        <motion.div 
            className="absolute bottom-0 right-0 bg-black border border-white/20 p-3 rounded-lg backdrop-blur-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            <Layers size={24} className="text-primary" />
        </motion.div>
    </div>
);

export default Services;
