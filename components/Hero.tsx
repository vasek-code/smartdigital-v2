
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Zap, Heart, Share2, Smartphone, Globe, X } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

// --- Helper Components ---

const Typewriter = ({ text, speed = 100 }: { text: string, speed?: number }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, i));
            i++;
            if (i > text.length) {
                setTimeout(() => { i = 0; }, 1500); 
            }
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <span>
            {displayedText}
            <span className="animate-pulse text-primary">_</span>
        </span>
    );
};

// 1. SOCIAL MEDIA WIDGET (Viral Post)
const SocialWidgetContent = () => (
    <>
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
                <div className="p-1 bg-pink-500/10 rounded-md text-pink-500">
                    <Smartphone size={12} />
                </div>
                <span className="text-[10px] font-bold text-white">Instagram Growth</span>
            </div>
            <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            </div>
        </div>
        
        <div className="flex gap-3 items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-black border border-black"></div>
            </div>
            <div className="space-y-1">
                <div className="h-1.5 w-20 bg-white/10 rounded-full"></div>
                <div className="h-1.5 w-12 bg-white/10 rounded-full"></div>
            </div>
        </div>

        <div className="relative bg-white/5 rounded-lg p-2 mb-2 overflow-hidden">
            <div className="flex justify-between items-center text-[9px] text-gray-400 mb-1">
                <span>New Followers</span>
                <span className="text-green-400 font-bold">+1,240</span>
            </div>
            <motion.div 
               className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 2, repeat: Infinity }}
            />
        </div>

        <div className="flex justify-between items-center pt-1">
             <motion.div 
                className="flex items-center gap-1 text-pink-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
             >
                <Heart size={12} fill="currentColor" />
                <span className="text-[9px] font-bold">8.5k</span>
             </motion.div>
             <div className="flex items-center gap-1 text-gray-500">
                <Share2 size={12} />
                <span className="text-[9px]">Share</span>
             </div>
        </div>
    </>
);

// 2. WEB DEV WIDGET (Code / Deploy)
const WebWidgetContent = () => (
    <>
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
                <Globe size={12} className="text-blue-400" />
                <span className="text-[10px] text-gray-400 font-mono">deploy.config.ts</span>
            </div>
            <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
        </div>
        <div className="space-y-1 font-mono text-[9px] leading-relaxed">
            <div className="flex gap-2"><span className="text-purple-400">const</span> <span className="text-yellow-300">App</span> = <span className="text-blue-300">"Next.js 14"</span>;</div>
            <div className="flex gap-2">
                <span className="text-gray-500">$</span> 
                <span className="text-white">
                    <Typewriter text="npm run build" speed={50} />
                </span>
            </div>
            <div className="mt-2 p-2 bg-green-500/10 border border-green-500/20 rounded text-green-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span>Build Successful (400ms)</span>
            </div>
        </div>
    </>
);

// 3. ADS / MARKETING WIDGET (Performance)
const AdsWidgetContent = () => (
    <>
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
                <div className="p-1 bg-primary/10 rounded-md text-primary">
                    <Zap size={12} fill="currentColor" />
                </div>
                <span className="text-[10px] font-bold text-white">Meta Ads Performance</span>
            </div>
            <span className="text-[8px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400">LIVE</span>
        </div>
        
        <div className="flex items-end justify-between gap-1 h-12 mb-3 px-1">
             {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                 <motion.div 
                    key={i}
                    className="w-full bg-primary/40 rounded-t-sm relative group"
                    animate={{ height: [`${h}%`, `${h + 10}%`, `${h}%`] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                 >
                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/10 to-transparent"></div>
                 </motion.div>
             ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
            <div>
                <div className="text-[8px] text-gray-500 uppercase tracking-wider">ROAS</div>
                <div className="text-xs font-bold text-white">14.2x</div>
            </div>
            <div className="text-right">
                <div className="text-[8px] text-gray-500 uppercase tracking-wider">Conversion</div>
                <div className="text-xs font-bold text-primary">+8.4%</div>
            </div>
        </div>
    </>
);

const WidgetCard = ({ children, className, style }: { children?: React.ReactNode, className?: string, style?: any }) => (
    <motion.div 
        className={`bg-[#0f0f0f]/70 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${className}`}
        style={style}
        whileHover={{ scale: 1.05, zIndex: 50, borderColor: "rgba(199,247,21,0.3)", backgroundColor: "rgba(10,10,10,0.9)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        {/* Reflection Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none"></div>
        {children}
    </motion.div>
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Mouse position for Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Dynamic Spotlight Gradient
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(199, 247, 21, 0.07),
      transparent 80%
    )
  `;

  // TRANSFORMATIONS FOR WIDGETS (Parallax)
  const xSocial = useTransform(mouseX, [0, window.innerWidth], [15, -15]);
  const ySocial = useTransform(mouseY, [0, window.innerHeight], [15, -15]);

  const xWeb = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const yWeb = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const xAds = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const yAds = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  return (
    <section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 w-full h-screen flex items-center justify-center bg-dark text-white overflow-hidden perspective-1000 z-0"
    >
      {/* --- CINEMATIC BACKGROUND --- */}
      
      {/* 1. Spotlight Effect (Follows Mouse) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlightBackground }}
      />

      {/* 2. Vertical Data Beams (Enhanced Visibility) */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {/* Left Beam */}
          <div className="absolute left-[15%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent">
             <div className="absolute top-0 w-[1px] h-40 bg-gradient-to-b from-transparent via-primary to-transparent blur-[2px] animate-beam opacity-70"></div>
          </div>
          
          {/* Middle Beam */}
          <div className="absolute left-[50%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent">
             <div className="absolute top-0 w-[1px] h-60 bg-gradient-to-b from-transparent via-primary to-transparent blur-[2px] animate-beam opacity-50" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
          </div>
          
          {/* Right Beam */}
          <div className="absolute right-[15%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent">
             <div className="absolute top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent blur-[2px] animate-beam opacity-80" style={{ animationDelay: '3s' }}></div>
          </div>
      </div>

      {/* 3. The 3D Floor Grid (Enhanced Depth) */}
      <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[80vh] origin-bottom z-0 opacity-30 pointer-events-none"
           style={{ 
             transform: 'rotateX(70deg) translateZ(-100px)', 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '60px 60px',
             maskImage: 'linear-gradient(to top, black, transparent 80%)'
           }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center h-full pt-20">
        
        {/* --- TEXT CONTENT (Left) --- */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center relative z-20"
        >
          <div className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
              <span className="block">Dáváme byznysům</span>
              {/* Shimmering Gradient Text */}
              <span className="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#c7f715,45%,#fff,55%,#c7f715)] block">
                silnou online podobu.
              </span>
            </h1>
          </div>

          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-normal border-l-2 border-primary/30 pl-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          {/* --- BUTTONS --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="#contact"
              whileHover="hover"
              initial="initial"
              className="cursor-pointer group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-dark font-bold text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(199,247,21,0.3)]"
            >
              <span className="relative z-10">{HERO_CONTENT.cta}</span>
              
              <motion.div
                 variants={{
                    initial: { x: 0 },
                    hover: { x: [0, 5, 0], transition: { repeat: Infinity, duration: 1.5 } }
                 }}
              >
                  <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>

              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform skew-x-[-20deg] transition-all duration-700 group-hover:animate-shimmer" />
            </motion.a>
            
            
          </motion.div>
        </motion.div>

        {/* --- 3D WIDGETS (Right) - Floating Composition --- */}
        <div className="lg:col-span-5 relative hidden lg:block h-[600px] w-full perspective-1000">
            
            {/* 1. Top Right: SOCIAL MEDIA (Instagram/Viral) */}
            <motion.div 
                className="absolute top-[15%] right-0 z-20 w-64"
                style={{ x: xSocial, y: ySocial }}
            >
                <motion.div
                    animate={{ y: [-10, 10, -10] }} // Levitation Loop nested INSIDE
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <WidgetCard>
                        <SocialWidgetContent />
                    </WidgetCard>
                </motion.div>
            </motion.div>

            {/* 2. Bottom Left: WEB DEV (Code/Build) */}
            <motion.div 
                className="absolute bottom-[20%] left-[5%] z-30 w-72"
                style={{ x: xWeb, y: yWeb }}
            >
                <motion.div
                    animate={{ y: [15, -15, 15] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <WidgetCard className="bg-[#1e1e1e]/95">
                        <WebWidgetContent />
                    </WidgetCard>
                </motion.div>
            </motion.div>

            {/* 3. Top Left/Back: ADS (Performance) */}
            <motion.div 
                className="absolute top-[30%] left-0 z-10 w-64"
                style={{ x: xAds, y: yAds }}
            >
                <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <WidgetCard>
                        <AdsWidgetContent />
                    </WidgetCard>
                </motion.div>
            </motion.div>

             {/* Background Decor */}
             <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[80px] rounded-full pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
             />
        </div>
      </div>

      {/* --- VIDEO MODAL OVERLAY --- */}
      <AnimatePresence>
        {isVideoOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    onClick={() => setIsVideoOpen(false)}
                ></div>

                {/* Modal Content */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setIsVideoOpen(false)}
                        className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-primary text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/10"
                    >
                        <X size={24} />
                    </button>

                    {/* Video Embed (Using a high-quality generic tech placeholder) */}
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="#" 
                        title="Smart Digital Showreel" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                    
                    {/* Placeholder Overlay for loading/fallback aesthetics */}
                    <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-3xl shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
