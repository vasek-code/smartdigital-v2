import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-gray-900 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-white text-lg tracking-tighter">
          Smart<span className="text-primary">digital</span>
        </div>
        
        <div className="flex gap-8">
           <a href="https://www.instagram.com/smart.dgtl/" className="hover:text-primary transition-colors">Instagram</a>
           <a href="https://www.linkedin.com/in/smart-digital-136aa238a/" className="hover:text-primary transition-colors">LinkedIn</a>
           <a href="https://www.facebook.com/profile.php?id=61580756979219" className="hover:text-primary transition-colors">Facebook</a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <span>© {new Date().getFullYear()} Smart Digital s.r.o.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;