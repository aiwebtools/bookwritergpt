
import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Versions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const versions = [
    {
      name: "V1",
      title: "Page by Page",
      description: "Writes each page individually and compiles into a document, perfect for detailed storytelling.",
      color: "bg-blue-50 border-blue-200",
      accentColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      features: [
        "Page-by-page writing approach",
        "Document compilation after each page",
        "5000 words per page",
        "Perfect continuity between pages",
        "Detailed descriptions and dialogue"
      ]
    },
    {
      name: "V2",
      title: "Shorter Chapters",
      description: "Creates shorter, more concise chapters with document compilation for a faster writing experience.",
      color: "bg-purple-50 border-purple-200",
      accentColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        "Shorter chapter format",
        "Document compilation",
        "Faster writing process",
        "Concise storytelling",
        "Great for shorter books"
      ]
    },
    {
      name: "V3",
      title: "Original Fast",
      description: "The original faster chapter-by-chapter version without document compilation.",
      color: "bg-amber-50 border-amber-200",
      accentColor: "text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      features: [
        "Chapter-by-chapter approach",
        "No document compilation",
        "Faster writing speed",
        "Good for first drafts",
        "Original 2023 version"
      ]
    },
    {
      name: "V4",
      title: "Segmented Chapters",
      description: "Breaks each chapter into two or more individualized parts for more detailed writing.",
      color: "bg-emerald-50 border-emerald-200",
      accentColor: "text-emerald-600",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      features: [
        "Segmented chapter approach",
        "No document compilation",
        "Detailed chapter sections",
        "Original 2023 version",
        "Longer chapter format"
      ]
    },
    {
      name: "V5",
      title: "Enhanced Chapters",
      description: "Similar to V3 with slightly different directions for enhanced chapter writing.",
      color: "bg-rose-50 border-rose-200",
      accentColor: "text-rose-600",
      buttonColor: "bg-rose-600 hover:bg-rose-700",
      features: [
        "Enhanced chapter writing",
        "No document compilation",
        "Original 2023 version",
        "Improved character development",
        "Better story pacing"
      ]
    },
    {
      name: "V6",
      title: "Base Original",
      description: "The base original model similar to V3 and V5 with different instructions.",
      color: "bg-indigo-50 border-indigo-200",
      accentColor: "text-indigo-600",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      features: [
        "Base original model",
        "No document compilation",
        "Original 2023 version",
        "Standard chapter format",
        "Straightforward writing style"
      ]
    },
    {
      name: "V7",
      title: "Dialogue Focus",
      description: "Similar to V1 with a particular focus on dialogue enhancement and document compilation.",
      color: "bg-cyan-50 border-cyan-200",
      accentColor: "text-cyan-600",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      features: [
        "Enhanced dialogue focus",
        "Document compilation",
        "Page-by-page approach",
        "Character-driven narratives",
        "2024 version"
      ]
    }
  ];

  return (
    <section id="versions" ref={sectionRef} className="py-24 bg-secondary/50 relative overflow-hidden scroll-trigger">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[10%] left-[60%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Perfect Version</h2>
          <p className="text-lg text-muted-foreground">
            Select from multiple specialized versions, each designed to cater to different writing needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {versions.map((version, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={cn(
                "rounded-xl border p-6 flex flex-col transition-all duration-500 scroll-trigger interactive hover:shadow-lg hover:-translate-y-1",
                version.color
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <Badge className={cn("font-medium", version.accentColor, "bg-white")}>{version.name}</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">{version.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{version.description}</p>
              
              <ul className="space-y-3 mb-6">
                {version.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={cn("w-5 h-5 mr-2 flex-shrink-0", version.accentColor)} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className={cn("mt-auto w-full text-white", version.buttonColor)}>
                Try {version.name}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Not Sure Which Version to Choose?</h3>
            <p className="text-muted-foreground mb-6">
              Each version of Book Writer GPT has its own strengths. V1 and V7 offer detailed page-by-page writing with document compilation, while V2-V6 provide different approaches to chapter-based writing with varying features.
            </p>
            <Button className="btn-primary">View Detailed Comparison</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Versions;
