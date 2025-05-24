
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import YouTubeVideo from "@/components/YouTubeVideo";
import SecondYouTubeVideo from "@/components/SecondYouTubeVideo";
import Features from "@/components/Features";
import Versions from "@/components/Versions";
import Examples from "@/components/Examples";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ComparisonSection from "@/components/ComparisonSection";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    // Check if the user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem("disclaimerAgreed");
    
    if (!hasAgreed) {
      // Show the disclaimer after a short delay for better UX
      const timer = setTimeout(() => {
        setShowDisclaimer(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleDisclaimerAccept = () => {
    // Save to localStorage so we don't show it again
    localStorage.setItem("disclaimerAgreed", "true");
    setShowDisclaimer(false);
  };
  
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
    
    // Add mouse parallax effect to stars
    const handleMouseMoveStars = (e: MouseEvent) => {
      const stars = document.querySelector('.stars') as HTMLElement;
      if (stars) {
        const x = (e.clientX - window.innerWidth / 2) * 0.005;
        const y = (e.clientY - window.innerHeight / 2) * 0.005;
        stars.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseMoveStars);

    // Function to make all external links open in a new tab
    const updateExternalLinks = () => {
      document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('http') || href.startsWith('https')) && !link.getAttribute('target')) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
    };

    // Call initially and add a mutation observer to catch dynamically added links
    updateExternalLinks();
    const observer2 = new MutationObserver(updateExternalLinks);
    observer2.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.querySelectorAll(".scroll-trigger").forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseMoveStars);
      observer2.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-y-auto" ref={containerRef}>
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
      
      {/* Shooting Stars Background */}
      <div className="night-sky">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      
      {/* Content overlay - slightly modified from original to work better with night sky */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-[30%] left-[15%] w-80 h-80 bg-primary/5 rounded-full blur-3xl" style={{animationDelay: "2s"}}></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <YouTubeVideo />
        <SecondYouTubeVideo />
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
