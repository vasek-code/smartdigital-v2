import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-dark font-sans">
      <Background />
      <Navbar />
      
      {/* Hero is fixed position, sitting behind the content */}
      <Hero />

      {/* Main content acts as a curtain sliding over the Hero */}
      {/* mt-[100vh] ensures it starts below the viewport initially */}
      <main className="relative z-10 bg-surface mt-[100vh] shadow-[0_-50px_100px_rgba(0,0,0,0.8)] border-t border-white/5">
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
      </main>
      
      <BackToTop />
    </div>
  );
}

export default App;