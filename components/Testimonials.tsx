
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Ambient */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/5 blur-[120px] rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 mb-20 relative z-10 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
         >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Social Proof</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white">
               Důvěra <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">klientů.</span>
            </h3>
         </motion.div>
      </div>

      {/* 3D TILTED MARQUEE */}
      <div className="relative w-full overflow-hidden py-10">
         {/* 
            Container tilted in 3D space 
            rotate-y-6: Adds depth
            -rotate-2: Slight diagonal tilt
         */}
         <div className="marquee-3d-container transform -rotate-2 scale-110 origin-center">
             
             {/* Row 1 - Moving Left */}
             <div className="marquee-row marquee-left mb-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
                 <div className="marquee-content">
                     {/* Double the list to create infinite loop illusion */}
                     {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
                         <TestimonialCard key={`r1-${i}`} item={item} />
                     ))}
                 </div>
             </div>

             {/* Row 2 - Moving Right */}
             <div className="marquee-row marquee-right opacity-80 hover:opacity-100 transition-opacity duration-500">
                 <div className="marquee-content">
                     {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
                         <TestimonialCard key={`r2-${i}`} item={item} />
                     ))}
                 </div>
             </div>

         </div>
         
         {/* Fade overlay on sides */}
         <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      </div>

    </section>
  );
};

const TestimonialCard: React.FC<{ item: typeof TESTIMONIALS[0] }> = ({ item }) => {
    return (
        <div className="w-[350px] md:w-[450px] p-8 bg-[#111]/60 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/30 hover:bg-[#151515] transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} className="fill-primary text-primary" />
                    ))}
                </div>
                <Quote className="text-white/10 group-hover:text-primary/20 transition-colors" size={24} />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                "{item.text}"
            </p>

            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white font-bold text-sm">
                    {item.author.charAt(0)}
                </div>
                <div>
                    <div className="text-white font-bold text-sm">{item.author}</div>
                    <div className="text-primary text-xs">{item.role}</div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
