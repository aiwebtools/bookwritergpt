
import React, { useState, useRef, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const YouTubeVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Handle play button click
  const handlePlayClick = () => {
    setIsPlaying(true);
    // We'll unmute when user explicitly presses play
    setIsMuted(false);
    
    // Send message to iframe to play and unmute
    const iframe = videoContainerRef.current?.querySelector('iframe');
    if (iframe) {
      iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    }
  };

  // Handle mute toggle
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    
    // Send message to iframe to mute/unmute
    const iframe = videoContainerRef.current?.querySelector('iframe');
    if (iframe) {
      if (isMuted) {
        iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        iframe.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
    }
  };

  // Listen for messages from the YouTube iframe API
  useEffect(() => {
    const handleYouTubeMessages = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        // YouTube sends info about the player state
        if (data.event === "onStateChange") {
          // State 1 means the video is playing
          if (data.info === 1) {
            setIsPlaying(true);
          } 
          // State 2 means the video is paused
          else if (data.info === 2) {
            setIsPlaying(false);
          }
        }
      } catch (e) {
        // Not a JSON message or not from YouTube
      }
    };

    window.addEventListener("message", handleYouTubeMessages);
    
    return () => {
      window.removeEventListener("message", handleYouTubeMessages);
    };
  }, []);

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 scroll-trigger">
          <p className="text-muted-foreground max-w-2xl mx-auto">Join thousands upon thousands of users who have embraced Book Writer GPT to revolutionize their storytelling! 🚀📖</p>
        </div>
        
        <div 
          ref={videoContainerRef}
          className="relative aspect-video w-full bg-slate-900/60 rounded-xl overflow-hidden shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 scroll-trigger iframe-container"
        >
          <iframe 
            className="absolute inset-0 w-full h-full" 
            src="https://www.youtube.com/embed/Pm9VN2zDDxU?enablejsapi=1&autoplay=1&mute=1&hd=1&vq=hd1080" 
            title="Book Writer GPT Tutorial" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
          ></iframe>
          
          {/* Only show play button overlay when video is not playing */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group cursor-pointer" 
              onClick={handlePlayClick}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transform transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-white fill-current transform translate-x-0.5" />
              </div>
            </div>
          )}
          
          {/* Mute/unmute button that stays visible */}
          <div className="absolute bottom-4 right-4 z-10">
            <button 
              onClick={handleMuteToggle}
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
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
