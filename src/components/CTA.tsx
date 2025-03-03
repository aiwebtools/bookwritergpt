
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
    <section ref={sectionRef} className="py-24 relative overflow-hidden scroll-trigger">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-border overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/4 -translate-y-1/2 blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Start Your Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Turn Your Ideas Into Captivating Books</h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're an aspiring author or a seasoned writer, Book Writer GPT helps you create professional-quality books with detailed storytelling, rich characters, and engaging dialogue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Writing Now
                </Button>
                <Button variant="outline">
                  <Pen className="w-5 h-5 mr-2" />
                  Explore Templates
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3 scale-95"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform -rotate-3 scale-95"></div>
                
                <div className="absolute inset-0 glass rounded-2xl border border-white/30 shadow-lg p-6 flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Your Novel Awaits</h3>
                    <p className="text-sm text-muted-foreground">Book Writer GPT is ready to help</p>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-[200px] max-h-[300px] mx-auto">
                      <div className="absolute inset-0 bg-white rounded-lg shadow-md transform rotate-6 border border-border"></div>
                      <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-6 border border-border"></div>
                      <div className="absolute inset-0 bg-white rounded-lg shadow-md border border-border flex flex-col overflow-hidden">
                        <div className="bg-primary/10 p-4 border-b border-border">
                          <div className="w-1/2 h-4 bg-primary/20 rounded-full mx-auto"></div>
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="w-3/4 h-3 bg-secondary rounded-full mb-3"></div>
                          <div className="w-full h-3 bg-secondary rounded-full mb-3"></div>
                          <div className="w-2/3 h-3 bg-secondary rounded-full mb-6"></div>
                          <div className="w-full h-3 bg-secondary rounded-full mb-3"></div>
                          <div className="w-4/5 h-3 bg-secondary rounded-full mb-3"></div>
                          <div className="w-full h-3 bg-secondary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-center">
                      <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-full">
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
