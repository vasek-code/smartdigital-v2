
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="portfolio" className="py-32 bg-surface relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Vybrané Práce</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white">
                Kde design potkává <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">výsledky.</span>
              </h3>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:block text-gray-400 max-w-xs text-right"
           >
              Prohlédněte si výběr našich nejnovějších projektů a případových studií.
           </motion.div>
        </div>

        {/* The Accordion List */}
        <div className="flex flex-col">
           {PORTFOLIO.map((project, index) => (
             <ProjectItem 
                key={project.id} 
                project={project} 
                isOpen={activeIndex === index}
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                onHover={() => setActiveIndex(index)}
                index={index}
             />
           ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
             <a href="#contact" className="group flex items-center gap-2 text-white hover:text-primary transition-colors font-medium text-lg">
                <span>Poptat podobný projekt</span>
                <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </a>
        </div>

      </div>
    </section>
  );
};

interface ProjectItemProps {
    project: typeof PORTFOLIO[0];
    isOpen: boolean;
    onClick: () => void;
    onHover: () => void;
    index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, isOpen, onClick, onHover, index }) => {
    return (
        <motion.div 
            onClick={onClick}
            onMouseEnter={onHover}
            className="border-t border-white/10 cursor-pointer group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Header List Item - No Opacity Fading anymore, always visible */}
            <div className="py-8 md:py-10 transition-colors duration-300">
                <div className="flex items-center justify-between relative z-20">
                    <div className="flex items-baseline gap-4 md:gap-12">
                        <span className="text-xs md:text-sm font-mono text-gray-600">0{index + 1}</span>
                        <h3 className={`text-3xl md:text-6xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                            {project.client}
                        </h3>
                    </div>
                    
                    <div className="flex items-center gap-4 md:gap-12">
                         <span className="hidden md:block text-sm uppercase tracking-wider text-gray-500">{project.category}</span>
                         <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary border-primary rotate-45 text-black' : 'border-white/20 text-white group-hover:border-white'}`}>
                            <ArrowUpRight size={20} />
                         </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-10 grid md:grid-cols-12 gap-8">
                            {/* Image Container */}
                            <div className="md:col-span-8 h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden bg-gray-900 group/image">
                                 {/* Image with Scale Effect Only */}
                                 <motion.img 
                                    src={project.image} 
                                    alt={project.client}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                 />
                            </div>

                            {/* Details Side */}
                            <div className="md:col-span-4 flex flex-col justify-between bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div>
                                    <div className="text-primary font-mono text-sm mb-2">Statistika</div>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-6">{project.stats}</div>
                                    
                                    <div className="h-[1px] w-full bg-white/10 mb-6"></div>
                                    
                                    <h4 className="text-white font-bold mb-2">{project.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <a href="#contact" className="block text-center mt-8 w-full py-4 rounded-xl border border-white/20 text-white hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest">
                                    Mám zájem
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Portfolio;
