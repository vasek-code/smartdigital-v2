
import React, { useState } from 'react';
import { Check, Zap, TrendingUp, Layers, Globe, Share2, Wifi, Lock, Battery, Radio, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- KONFIGURACE ---
const FORMSPREE_ID = "myzlgavq"; 

// --- STRATEGY CORE DATA ---
const STRATEGIES = [
  { 
    id: 'performance', 
    label: 'Výkonnostní Růst', 
    icon: TrendingUp,
    desc: 'Chci více zákazníků a vyšší obraty.',
    plan: [
       { name: 'Audit trhu & konkurence', color: 'text-blue-400', bg: 'bg-blue-400/10' }, 
       { name: 'Nastavení PPC kampaní', color: 'text-green-400', bg: 'bg-green-400/10' }, 
       { name: 'Škálování & Optimalizace', color: 'text-purple-400', bg: 'bg-purple-400/10' } 
    ] 
  },
  { 
    id: 'visual', 
    label: 'Web & Identita', 
    icon: Globe,
    desc: 'Chci vypadat profesionálně a odlišit se.',
    plan: [
       { name: 'UX/UI Design & Prototyp', color: 'text-orange-400', bg: 'bg-orange-400/10' }, 
       { name: 'Vývoj na míru', color: 'text-pink-400', bg: 'bg-pink-400/10' }, 
       { name: 'Launch & Měření', color: 'text-yellow-400', bg: 'bg-yellow-400/10' } 
    ] 
  },
  { 
    id: 'content', 
    label: 'Social Media & Brand', 
    icon: Share2,
    desc: 'Chci vybudovat silnou komunitu.',
    plan: [
       { name: 'Content Strategie', color: 'text-cyan-400', bg: 'bg-cyan-400/10' }, 
       { name: 'Produkce Reels & Foto', color: 'text-red-400', bg: 'bg-red-400/10' }, 
       { name: 'Community Management', color: 'text-gray-300', bg: 'bg-white/10' } 
    ] 
  }
];

const Contact: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState(STRATEGIES[0]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formData,
                strategy: selectedStrategy.label,
                _subject: `Nová poptávka: ${formData.name} - ${selectedStrategy.label}`,
            })
        });

        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
        }
    } catch (error) {
        setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden min-h-screen flex items-center justify-center bg-[#050505]">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
          </div>
          <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
          }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 lg:mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                    Váš byznys už má směr. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">My máme plán, jak ho online posunout na další level.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                    Vyberte si oblast, kterou chcete řešit, a společně to posuneme dál.
                </p>
            </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: STRATEGY SELECTOR */}
            <div className="relative space-y-8">
                <div>
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        1. Definujte svůj cíl
                    </h3>
                    
                    <div className="space-y-4">
                        {STRATEGIES.map((strategy) => (
                            <button
                                key={strategy.id}
                                type="button"
                                onClick={() => setSelectedStrategy(strategy)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                                    selectedStrategy.id === strategy.id 
                                    ? 'bg-white/5 border-primary shadow-[0_0_40px_rgba(199,247,21,0.1)]' 
                                    : 'bg-transparent border-white/10 hover:bg-white/5 hover:border-white/20'
                                }`}
                            >
                                <div className="flex items-center gap-5 relative z-10">
                                    <div className={`p-4 rounded-xl ${selectedStrategy.id === strategy.id ? 'bg-primary text-black' : 'bg-white/5 text-gray-400 group-hover:text-white'} transition-colors duration-300`}>
                                        <strategy.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className={`font-bold text-lg mb-1 ${selectedStrategy.id === strategy.id ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors`}>
                                            {strategy.label}
                                        </h4>
                                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                            {strategy.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Arrow indicator */}
                                    <div className={`ml-auto transition-transform duration-300 ${selectedStrategy.id === strategy.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                                        <ArrowRight className="text-primary" />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* DYNAMIC PLAN VISUALIZER */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                        Náš postup realizace:
                    </h3>
                    
                    <div className="flex flex-col gap-3">
                        <AnimatePresence mode='wait'>
                            {selectedStrategy.plan.map((item, i) => (
                                <motion.div
                                    key={selectedStrategy.id + item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${item.bg} ${item.color}`}>
                                        {i + 1}
                                    </div>
                                    <div className={`h-[1px] flex-1 bg-white/10`}></div>
                                    <div className={`px-4 py-2 rounded-lg text-sm font-medium border border-white/5 bg-[#111] text-gray-300`}>
                                        {item.name}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* RIGHT: THE FORM (CYBER-DECK) */}
            <div className="relative perspective-1000">
                {/* 3D Container with Moving Border */}
                <div className="relative bg-[#080808] rounded-[2rem] overflow-hidden group">
                    
                    {/* Holographic Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 pointer-events-none"></div>
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                    {/* Noise Texture */}
                    <div 
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ 
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    ></div>

                    {/* Top Status Bar */}
                    <div className="relative z-10 bg-white/5 border-b border-white/5 px-6 py-4 flex justify-between items-center backdrop-blur-md">
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                             <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="text-[10px] font-mono text-primary/50 flex gap-4 uppercase tracking-wider">
                            <span>Encryption: ON</span>
                            <span>Status: Ready</span>
                        </div>
                    </div>

                    <div className="p-8 lg:p-10 relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <MessageSquare className="text-primary" />
                            Odeslat Poptávku
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="strategy" value={selectedStrategy.label} />

                            <div className="space-y-6">
                                {/* Name Input */}
                                <div className={`relative transition-all duration-300 ${activeField === 'name' ? 'scale-[1.02]' : ''}`}>
                                    <div className={`bg-[#111] border rounded-xl overflow-hidden transition-colors ${activeField === 'name' ? 'border-primary shadow-[0_0_20px_rgba(199,247,21,0.1)]' : 'border-white/10 hover:border-white/20'}`}>
                                        <label className="absolute top-3 left-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">Jméno</label>
                                        <input 
                                            name="name" type="text" required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            onFocus={() => setActiveField('name')}
                                            onBlur={() => setActiveField(null)}
                                            className="w-full bg-transparent border-none px-4 pt-8 pb-3 text-white focus:ring-0 placeholder-transparent"
                                            placeholder="Jméno"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className={`relative transition-all duration-300 ${activeField === 'email' ? 'scale-[1.02]' : ''}`}>
                                    <div className={`bg-[#111] border rounded-xl overflow-hidden transition-colors ${activeField === 'email' ? 'border-primary shadow-[0_0_20px_rgba(199,247,21,0.1)]' : 'border-white/10 hover:border-white/20'}`}>
                                        <label className="absolute top-3 left-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email</label>
                                        <input 
                                            name="email" type="email" required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            onFocus={() => setActiveField('email')}
                                            onBlur={() => setActiveField(null)}
                                            className="w-full bg-transparent border-none px-4 pt-8 pb-3 text-white focus:ring-0 placeholder-transparent"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className={`relative transition-all duration-300 ${activeField === 'message' ? 'scale-[1.02]' : ''}`}>
                                    <div className={`bg-[#111] border rounded-xl overflow-hidden transition-colors ${activeField === 'message' ? 'border-primary shadow-[0_0_20px_rgba(199,247,21,0.1)]' : 'border-white/10 hover:border-white/20'}`}>
                                        <label className="absolute top-3 left-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">Zpráva</label>
                                        <textarea 
                                            name="message" required rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            onFocus={() => setActiveField('message')}
                                            onBlur={() => setActiveField(null)}
                                            className="w-full bg-transparent border-none px-4 pt-8 pb-3 text-white focus:ring-0 placeholder-transparent resize-none"
                                            placeholder="Zpráva"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={status === 'submitting' || status === 'success'}
                                className="group w-full relative h-16 bg-white text-black font-bold text-lg uppercase tracking-wider rounded-xl overflow-hidden transition-all hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(199,247,21,0.4)]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {status === 'submitting' ? (
                                        <Radio className="animate-spin" /> 
                                    ) : (
                                        <>
                                           Zahájit projekt<Zap size={20} className="group-hover:fill-current" />
                                        </>
                                    )}
                                </span>
                            </button>

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="text-red-500 text-xs text-center font-mono mt-2">
                                    Chyba při odesílání. Zkontrolujte připojení.
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            </div>

        </div>

        {/* Success Modal */}
        <AnimatePresence>
            {status === 'success' && (
                <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
                >
                    <motion.div 
                        initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }}
                        className="bg-[#111] border border-primary p-12 rounded-3xl text-center max-w-md w-full relative shadow-[0_0_100px_rgba(199,247,21,0.2)]"
                    >
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                            <Check size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Děkujeme, do 24h se ozveme!</h3>
                        <p className="text-gray-400 mb-8">Děkujeme. Ozveme se vám na {formData.email} co nejdříve.</p>
                        <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-white hover:bg-primary text-black font-bold rounded-full transition-colors">
                            Zpět na web
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Contact;
