
import React from "react";
import { Play } from "lucide-react";
const SecondYouTubeVideo: React.FC = () => {
  return <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-[30%] left-[15%] w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 scroll-trigger">
          <p className="text-muted-foreground max-w-2xl mx-auto">Join thousands upon thousands of users who have embraced Book Writer GPT to revolutionize their storytelling! 🚀📖</p>
        </div>
        
        <div className="relative aspect-video w-full bg-slate-900/60 rounded-xl overflow-hidden shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 scroll-trigger">
          {/* Free Price Tag */}
          <div className="absolute top-4 right-4 z-20 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg border border-green-400/30">
            FREE
          </div>
          
          <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/nBd9Uk62UiI?autoplay=1&mute=0&hd=1&vq=hd1080" title="Book Writer GPT Tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          
          
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Our platform makes it easy to structure your narrative, develop characters, and maintain consistent story flow throughout your book project.
          </p>
        </div>
      </div>
    </section>;
};
export default SecondYouTubeVideo;
