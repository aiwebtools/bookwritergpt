
import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

const YouTubeVideo: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if user is on mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };
    
    checkMobile();
    
    // Set video as loaded after a brief delay
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handlePlayClick = () => {
    // Force reload the iframe to trigger autoplay
    const iframe = document.querySelector('.youtube-iframe') as HTMLIFrameElement;
    if (iframe) {
      const currentSrc = iframe.src;
      iframe.src = currentSrc;
    }
    setVideoLoaded(true);
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 scroll-trigger">
          <p className="text-muted-foreground max-w-2xl mx-auto">Join thousands upon thousands of users who have embraced Book Writer GPT to revolutionize their storytelling! 🚀📖</p>
        </div>
        
        <div className="relative aspect-video w-full bg-slate-900/60 rounded-xl overflow-hidden shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 scroll-trigger iframe-container">
          <iframe 
            className="absolute inset-0 w-full h-full youtube-iframe" 
            src={`https://www.youtube.com/embed/Pm9VN2zDDxU?autoplay=1&mute=0&hd=1&vq=hd1080&enablejsapi=1&playsinline=1&rel=0`}
            title="Book Writer GPT Tutorial" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
            allowFullScreen
            loading="lazy"
            onLoad={() => setVideoLoaded(true)}
          ></iframe>
          
          {(!videoLoaded || isMobile) && (
            <div 
              className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group hover:bg-transparent transition-all duration-300 cursor-pointer z-10"
              onClick={handlePlayClick}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transform transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-white fill-current transform translate-x-0.5" />
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Our platform makes it easy to structure your narrative, develop characters, and maintain consistent story flow throughout your book project.
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-[30%] left-[15%] w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default YouTubeVideo;
