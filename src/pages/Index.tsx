
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Versions from "@/components/Versions";
import Examples from "@/components/Examples";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the scroll-trigger class
    document.querySelectorAll(".scroll-trigger").forEach((el) => {
      observer.observe(el);
    });
    
    // Interactive glow effect that follows the mouse
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.glow-on-hover').forEach((element) => {
        const rect = (element as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (element as HTMLElement).style.setProperty('--x', `${x}px`);
        (element as HTMLElement).style.setProperty('--y', `${y}px`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.querySelectorAll(".scroll-trigger").forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative sparkle-bg" ref={containerRef}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-50"></div>
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-[30%] left-[15%] w-80 h-80 bg-primary/5 rounded-full blur-3xl" style={{animationDelay: "2s"}}></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ComparisonSection />
        <Features />
        <Versions />
        <Examples />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
