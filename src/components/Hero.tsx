
import React, { useEffect, useRef } from "react";
import { BookOpen, Feather, PenTool, Speech } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = imageRef.current.getBoundingClientRect();
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
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
      {/* Divine Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[25%] w-[150%] h-[150%] bg-gradient-to-br from-purple-600/20 via-blue-600/15 to-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl floating" />
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-gradient-radial from-blue-500/25 to-transparent rounded-full blur-3xl floating" style={{animationDelay: "2s"}} />
        <div className="absolute top-[60%] right-[40%] w-64 h-64 bg-gradient-radial from-indigo-400/20 to-transparent rounded-full blur-2xl floating" style={{animationDelay: "4s"}} />
        
        {/* Additional divine light rays */}
        <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-purple-400/30 to-transparent blur-sm transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-400/25 to-transparent blur-sm transform rotate-12 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-indigo-400/20 to-transparent blur-sm transform -rotate-6 animate-pulse" style={{animationDelay: "3s"}}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="max-w-xl text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-200 text-sm font-medium mb-8 animate-fade-down shadow-lg shadow-purple-500/20 glow-on-hover">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>AI-Powered Book Writing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold tracking-tight mb-8 animate-fade-up bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl" style={{
            animationDelay: '0.1s'
          }}>
              Transform Your Ideas Into Complete Books
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 animate-fade-up leading-relaxed" style={{
            animationDelay: '0.2s'
          }}>
              Book Writer GPT assists you in creating professional, well-structured books with seamless page-to-page continuity, engaging dialogue, and captivating storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 animate-fade-up" style={{
            animationDelay: '0.3s'
          }}>
              <Button className="btn-primary w-full sm:w-auto text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl shadow-purple-500/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-purple-400/30 glow-on-hover" onClick={() => document.getElementById('versions')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Create Your Own Book
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-purple-400/50 bg-purple-900/20 backdrop-blur-sm hover:bg-purple-800/30 text-purple-200 hover:text-white shadow-lg shadow-purple-500/20 transform hover:scale-105 transition-all duration-300 glow-on-hover" onClick={() => document.getElementById('versions')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 animate-fade-up mx-auto max-w-md" style={{
            animationDelay: '0.4s'
          }}>
              <div className="flex items-center space-x-3 justify-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 shadow-lg shadow-purple-500/10 transform hover:scale-105 transition-all duration-300 glow-on-hover">
                <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 p-3 rounded-full border border-purple-400/30 shadow-lg">
                  <PenTool className="w-5 h-5 text-purple-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-100">Professional Quality</h3>
                  <p className="text-sm text-purple-200/80">Award-winning author style</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 justify-center bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 shadow-lg shadow-blue-500/10 transform hover:scale-105 transition-all duration-300 glow-on-hover">
                <div className="bg-gradient-to-r from-blue-500/30 to-indigo-500/30 p-3 rounded-full border border-blue-400/30 shadow-lg">
                  <Speech className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-100">Rich Dialogue</h3>
                  <p className="text-sm text-blue-200/80">Natural character interactions</p>
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
