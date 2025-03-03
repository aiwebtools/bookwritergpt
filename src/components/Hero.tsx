
import React, { useEffect, useRef } from "react";
import { BookOpen, Feather, PenTool, Speech } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateZ(10px)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    imageRef.current?.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      imageRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[25%] w-[150%] h-[150%] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[20%] right-[10%] w-44 h-44 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[30%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-down">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>AI-Powered Book Writing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Transform Your Ideas Into Complete Books
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Book Writer GPT assists you in creating professional, well-structured books with seamless page-to-page continuity, engaging dialogue, and captivating storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="btn-primary w-full sm:w-auto"
                onClick={() => document.getElementById('versions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Writing
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('versions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <PenTool className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">Professional Quality</h3>
                  <p className="text-sm text-muted-foreground">Award-winning author style</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Speech className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">Rich Dialogue</h3>
                  <p className="text-sm text-muted-foreground">Natural character interactions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="transition-transform duration-300 ease-out">
            <div className="glass rounded-2xl overflow-hidden shadow-xl mx-auto max-w-lg lg:max-w-none animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-secondary p-4 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm font-medium">Book Writer GPT</div>
                </div>
              </div>
              
              <div className="bg-white p-6 text-left">
                <div className="mb-4 text-lg font-semibold">Creating "The Midnight Chronicles"</div>
                <div className="mb-2 text-sm font-medium text-primary">Chapter 1: The Awakening</div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>The city of Eldenridge slept under a blanket of stars, unaware of the ancient power stirring beneath its foundations...</p>
                  <p>Marcus opened his eyes to darkness. The familiar weight of uncertainty pressed against his chest as he reached for the journal on his nightstand.</p>
                  <p className="text-primary font-medium">"What will I write today?" he whispered to the empty room.</p>
                </div>
                
                <div className="mt-6 p-3 bg-secondary/50 rounded-lg text-sm">
                  <p className="font-medium mb-1">Page 1 of 5 completed. Shall we move on to the next page?</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '20%' }}></div>
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

export default Hero;
