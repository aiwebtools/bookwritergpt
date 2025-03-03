
import React from "react";
import { Play } from "lucide-react";

const YouTubeVideo: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-[30%] left-[15%] w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="relative aspect-video w-full bg-slate-900/60 rounded-xl overflow-hidden shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 scroll-trigger">
          <iframe 
            className="absolute inset-0 w-full h-full" 
            src="https://www.youtube.com/embed/Pm9VN2zDDxU" 
            title="Book Writer GPT Introduction" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          
          <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group hover:bg-transparent transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-white fill-current transform translate-x-0.5" />
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Learn how Book Writer GPT transforms your ideas into professionally written books with engaging dialogue and captivating storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;
