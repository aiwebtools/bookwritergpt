
import React, { useEffect, useRef } from "react";
import { 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Download, 
  Users, 
  Clock, 
  PenTool, 
  Sparkles 
} from "lucide-react";

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Complete Book Creation",
      description: "Writes entire books page by page with seamless continuity between chapters and pages."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Natural Dialogue",
      description: "Creates engaging character conversations with personality and depth for authentic storytelling."
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Detailed Outlines",
      description: "Generates comprehensive book outlines with chapter titles, themes, and page-by-page breakdowns."
    },
    {
      icon: <Download className="w-6 h-6 text-primary" />,
      title: "Document Compilation",
      description: "Compiles your book into downloadable documents as you write, preserving your progress."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Character Development",
      description: "Creates complex characters with distinct personalities, backstories, and emotional depth."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Proper Pacing",
      description: "Maintains appropriate narrative flow and pacing throughout your entire book."
    },
    {
      icon: <PenTool className="w-6 h-6 text-primary" />,
      title: "Professional Quality",
      description: "Writes in the style of award-winning authors with vivid imagery and compelling narratives."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Multiple Versions",
      description: "Choose from seven different versions to match your specific book writing needs."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[20%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-trigger" ref={el => featureRefs.current[0] = el}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features for Authors</h2>
          <p className="text-lg text-muted-foreground">
            Book Writer GPT provides everything you need to transform your ideas into professionally written books from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index + 1] = el}
              className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 scroll-trigger interactive"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl scroll-trigger" ref={el => featureRefs.current[9] = el}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Collaborative Writing Process</h3>
              <p className="text-muted-foreground mb-6">
                Book Writer GPT works with you every step of the way, seeking your feedback and approval to ensure the final product matches your vision perfectly.
              </p>
              <ul className="space-y-3">
                {[
                  "Ask detailed questions to understand your vision",
                  "Create comprehensive outlines before writing",
                  "Write page by page with your guidance",
                  "Maintain perfect continuity throughout the book",
                  "Compile pages into downloadable documents"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-primary text-sm font-medium">{i + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="absolute inset-0 flex flex-col">
                  <div className="bg-secondary p-3 border-b border-border flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <div className="ml-2 text-xs font-medium">Collaboration Assistant</div>
                  </div>
                  <div className="flex-1 p-6 overflow-auto text-left">
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium text-primary">Book Writer GPT:</p>
                      <p className="text-sm">Let's create your book outline. What genre are you interested in?</p>
                    </div>
                    <div className="mb-4 p-3 bg-secondary/50 rounded-lg ml-8">
                      <p className="text-sm font-medium">You:</p>
                      <p className="text-sm">I'd like to write a mystery thriller set in a small coastal town.</p>
                    </div>
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium text-primary">Book Writer GPT:</p>
                      <p className="text-sm">Excellent choice! Could you share your thoughts on the main character and the central mystery?</p>
                    </div>
                    <div className="mb-4 p-3 bg-secondary/50 rounded-lg ml-8">
                      <p className="text-sm font-medium">You:</p>
                      <p className="text-sm">The protagonist is a retired detective who moves to a small town to escape her past...</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium text-primary">Book Writer GPT:</p>
                      <p className="text-sm">I love this concept! Let me create a detailed outline for "Shadows by the Shore"...</p>
                    </div>
                  </div>
                  <div className="p-3 border-t border-border bg-secondary/30 text-center">
                    <p className="text-xs text-muted-foreground">Book Writer GPT is writing your outline...</p>
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

export default Features;
