
import React, { useState } from 'react';
import { TEAM } from '../constants';
import { Linkedin, Instagram } from 'lucide-react';

const Team: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="team" className="relative bg-dark py-32 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Ambient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 mb-12 relative z-10">
          <div className="text-center fade-in-up">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Core Team</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Lidé za výsledky.</h3>
          </div>
      </div>

      {/* EXPANDING MONOLITHS GALLERY - CSS TRANSITION VERSION (NO GLITCH) */}
      <div className="container mx-auto px-4 h-[600px] md:h-[700px] flex flex-col md:flex-row gap-2 md:gap-4 relative z-10">
        {TEAM.map((member) => (
            <TeamMemberCard 
                key={member.id} 
                member={member} 
                isActive={activeId === member.id}
                onHover={() => setActiveId(member.id)}
                onLeave={() => setActiveId(null)}
            />
        ))}
      </div>

    </section>
  );
};

const TeamMemberCard: React.FC<{ 
    member: typeof TEAM[0], 
    isActive: boolean, 
    onHover: () => void, 
    onLeave: () => void 
}> = ({ member, isActive, onHover, onLeave }) => {
    // Fallback avatar logic
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0b0b0b&color=c7f715&size=512&font-size=0.33&bold=true`;
    };

    return (
        <div 
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-[flex-grow] duration-500 ease-in-out group ${
                isActive ? 'flex-[4]' : 'flex-[1]'
            }`}
        >
            {/* Background Image Container - Absolute to prevent layout shifts */}
            <div className="absolute inset-0 bg-gray-900 w-full h-full">
                <img 
                    src={member.image} 
                    alt={member.name}
                    onError={handleImageError}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isActive ? 'scale-100 grayscale-0 opacity-100' : 'scale-110 grayscale opacity-60 group-hover:opacity-80'
                    }`}
                />
                {/* Elegant Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-60'}`}></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                
                {/* Name & Role */}
                <div className="relative z-10 w-full">
                    {/* Vertical Text for inactive state (Desktop only) */}
                    <div className={`hidden md:block absolute bottom-0 left-0 origin-bottom-left -rotate-90 translate-x-8 -translate-y-4 whitespace-nowrap transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                        <span className="text-xl font-bold text-white/50 tracking-widest uppercase">{member.name.split(' ')[0]}</span>
                    </div>

                    <div className={`flex flex-col gap-2 transition-all duration-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h3 className="font-bold text-white text-3xl md:text-5xl whitespace-nowrap">
                            {member.name}
                        </h3>
                        
                        <div className={`transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                            <p className="text-gray-300 leading-relaxed border-l border-white/20 pl-4 mb-6 max-w-md font-light hidden md:block">
                                "{member.quote}"
                            </p>
                            
                            <div className="flex gap-4">
                                <button className="p-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all">
                                    <Linkedin size={18} />
                                </button>
                                <button className="p-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all">
                                    <Instagram size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;
