
import React, { useEffect, useRef } from "react";
import VersionCard from "@/components/VersionCard";
import { versions } from "@/data/versions";
import { useIsMobile } from "@/hooks/use-mobile";

const Versions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: isMobile ? 0.05 : 0.1 // Lower threshold for mobile
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          if (isMobile) {
            // Don't unobserve on mobile to ensure visibility during scroll
            setTimeout(() => {
              if (entry.target && entry.target.classList) {
                entry.target.classList.add('mobile-visible');
              }
            }, 100);
          } else {
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);
  
  return (
    <section id="versions" ref={sectionRef} className="py-24 bg-secondary/50 relative overflow-hidden scroll-trigger">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[10%] left-[60%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Perfect Version</h2>
          <p className="text-lg text-muted-foreground">
            Select from multiple specialized versions, each designed to cater to different writing needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center place-items-center">
          {versions.map((version, index) => (
            <VersionCard 
              key={index}
              version={version}
              index={index}
              cardRef={el => cardRefs.current[index] = el}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Versions;
