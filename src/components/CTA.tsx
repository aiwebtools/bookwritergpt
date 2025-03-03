
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Pen } from "lucide-react";

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden scroll-trigger bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-800/90 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full -translate-x-1/4 -translate-y-1/2 blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Start Your Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Turn Your Ideas Into Captivating Books</h2>
              
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                Whether you're an aspiring author or a seasoned writer, Book Writer GPT helps you create professional-quality books with detailed storytelling, rich characters, and engaging dialogue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary/30 group"
                  onClick={() => document.getElementById('versions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Writing Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-slate-700 text-white hover:bg-slate-600 border-slate-600"
                  onClick={() => document.getElementById('versions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Pen className="w-5 h-5 mr-2" />
                  Explore Templates
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3 scale-95"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform -rotate-3 scale-95"></div>
                
                <div className="absolute inset-0 bg-slate-800/95 rounded-2xl border border-slate-700 shadow-lg p-6 flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Your Novel Awaits</h3>
                    <p className="text-sm text-slate-300">Book Writer GPT is ready to help</p>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-[200px] max-h-[300px] mx-auto">
                      <div className="absolute inset-0 bg-slate-700 rounded-lg shadow-md transform rotate-6 border border-slate-600"></div>
                      <div className="absolute inset-0 bg-slate-700 rounded-lg shadow-md transform -rotate-6 border border-slate-600"></div>
                      <div className="absolute inset-0 bg-slate-700 rounded-lg shadow-md border border-slate-600 flex flex-col overflow-hidden">
                        <div className="bg-primary/20 p-4 border-b border-slate-600">
                          <div className="w-1/2 h-4 bg-primary/30 rounded-full mx-auto"></div>
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="w-3/4 h-3 bg-slate-500 rounded-full mb-3"></div>
                          <div className="w-full h-3 bg-slate-500 rounded-full mb-3"></div>
                          <div className="w-2/3 h-3 bg-slate-500 rounded-full mb-6"></div>
                          <div className="w-full h-3 bg-slate-500 rounded-full mb-3"></div>
                          <div className="w-4/5 h-3 bg-slate-500 rounded-full mb-3"></div>
                          <div className="w-full h-3 bg-slate-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-center">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-white rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        onClick={() => document.getElementById('versions')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Begin Your Story
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
