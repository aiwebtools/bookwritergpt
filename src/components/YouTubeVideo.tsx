
import React, { useState, useEffect, useRef } from "react";
import { Play, Volume2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const YouTubeVideo: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Check if user is on mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };
    
    checkMobile();
    
    // Initialize YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    // Listen for messages from YouTube iframe
    window.addEventListener('message', handleYouTubeMessage);
    
    return () => {
      window.removeEventListener('message', handleYouTubeMessage);
    };
  }, []);
  
  const handleYouTubeMessage = (event: MessageEvent) => {
    // Only process messages from YouTube
    if (event.origin !== "https://www.youtube.com") return;
    
    try {
      const data = JSON.parse(event.data);
      if (data.event === "onStateChange") {
        if (data.info === 1) { // playing
          setIsPlaying(true);
        } else if (data.info === 2) { // paused
          setIsPlaying(false);
        }
      }
    } catch (e) {
      // Not a JSON message or not from YouTube player API
    }
  };

  const handlePlayClick = () => {
    try {
      // Get iframe and attempt to control via postMessage
      if (iframeRef.current) {
        // For browsers that support iframe interaction
        const message = JSON.stringify({
          event: 'command',
          func: 'playVideo'
        });
        iframeRef.current.contentWindow?.postMessage(message, '*');
        
        // Also try forcing reload with autoplay parameters
        const currentSrc = iframeRef.current.src;
        const newSrc = currentSrc.includes('autoplay=1') 
          ? currentSrc 
          : currentSrc.replace('autoplay=0', 'autoplay=1');
        
        iframeRef.current.src = newSrc;
        
        setVideoLoaded(true);
        setIsPlaying(true);
        
        // Show a toast message for mobile users
        if (isMobile) {
          toast({
            title: "Enabling video playback",
            description: "If video doesn't play, try tapping directly on the video."
          });
        }
      }
    } catch (error) {
      console.error("Error playing video:", error);
    }
  };
  
  const handleUnmuteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering play
    
    try {
      if (iframeRef.current) {
        // Try to unmute via postMessage
        const message = JSON.stringify({
          event: 'command',
          func: 'unMute'
        });
        iframeRef.current.contentWindow?.postMessage(message, '*');
        
        // Also update the src with mute parameter changed
        const currentSrc = iframeRef.current.src;
        const newSrc = currentSrc.replace('mute=1', 'mute=0');
        iframeRef.current.src = newSrc;
        
        setIsMuted(false);
      }
    } catch (error) {
      console.error("Error unmuting video:", error);
    }
  };

  // Construct YouTube URL with all necessary parameters
  const youtubeEmbedUrl = `https://www.youtube.com/embed/Pm9VN2zDDxU?autoplay=1&mute=${isMuted ? 1 : 0}&hd=1&vq=hd1080&enablejsapi=1&playsinline=1&rel=0&origin=${encodeURIComponent(window.location.origin)}`;

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 scroll-trigger">
          <p className="text-muted-foreground max-w-2xl mx-auto">Join thousands upon thousands of users who have embraced Book Writer GPT to revolutionize their storytelling! 🚀📖</p>
        </div>
        
        <div className="relative aspect-video w-full bg-slate-900/60 rounded-xl overflow-hidden shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 scroll-trigger iframe-container">
          <iframe 
            ref={iframeRef}
            className="absolute inset-0 w-full h-full youtube-iframe" 
            src={youtubeEmbedUrl}
            title="Book Writer GPT Tutorial" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
            allowFullScreen
            loading="lazy"
            onLoad={() => setVideoLoaded(true)}
          ></iframe>
          
          <div 
            className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group hover:bg-transparent transition-all duration-300 cursor-pointer z-10"
            onClick={handlePlayClick}
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-white fill-current transform translate-x-0.5" />
            </div>
            
            {isMuted && (
              <div 
                className="absolute bottom-4 right-4 bg-primary rounded-full p-2 cursor-pointer shadow-lg"
                onClick={handleUnmuteClick}
              >
                <Volume2 className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
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
