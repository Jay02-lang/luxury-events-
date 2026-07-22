import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import FounderStory from './components/FounderStory';
import ServiceGrid from './components/ServiceGrid';
import CylinderCarousel from './components/CylinderCarousel';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';
import FloralBackground from './components/FloralBackground';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    
    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      <FloralBackground />
      
      {/* Interactive Background Glow (Gold and Red layered) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-40 dark:opacity-20 mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 60%)`
        }}
      />
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-30 dark:opacity-15 mix-blend-screen"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 0, 0, 0.25), transparent 80%)`
        }}
      />

      <CustomCursor />
      <Header />
      <main className="relative z-10">
        <Hero />
        <LogoBar />
        <FounderStory />
        <ServiceGrid />
        <CylinderCarousel />
        <TestimonialSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
