
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExampleBook {
  title: string;
  author: string;
  category: string;
  description: string;
  excerpt: string;
}

const Examples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const examples: ExampleBook[] = [
    {
      title: "The Forgotten Gate",
      author: "Emma Richards",
      category: "Fantasy",
      description: "A young archaeologist discovers an ancient gateway that leads to a world of forgotten magic and dangerous creatures.",
      excerpt: "The stone archway stood silent, its ancient markings barely visible beneath centuries of moss and neglect. Sophia traced her fingers along the engravings, feeling a strange warmth beneath her touch. 'This can't be right,' she whispered, checking her notes again. According to the manuscript, this structure was over ten thousand years old—far older than any known civilization in the region. As the setting sun cast its final rays through the arch, the markings began to glow with an unearthly blue light. Sophia stepped back, her heart racing as the air within the gateway started to shimmer and distort. She had found it. After all these years of searching, she had actually found it."
    },
    {
      title: "Whispers in the Boardroom",
      author: "Marcus Jensen",
      category: "Thriller",
      description: "A corporate executive uncovers a conspiracy that threatens not just her career, but her life and the global economy.",
      excerpt: "'The numbers don't lie, Ms. Chen,' Director Wallace said, sliding the folder across the polished mahogany table. Elena picked it up, maintaining her composure despite the alarm bells ringing in her mind. The quarterly reports had been altered—subtly, but unmistakably to her trained eye. 'I'll need to review these more carefully,' she said, carefully watching the microexpressions crossing Wallace's face. His tight smile didn't reach his eyes. 'Of course. Take all the time you need.' As the boardroom emptied, Elena remained seated, clutching the folder. Someone had access to the financial system beyond the security protocols she'd personally implemented. And that someone was systematically siphoning billions without triggering a single alert—except to her."
    },
    {
      title: "Memories of Tomorrow",
      author: "Olivia Zhang",
      category: "Science Fiction",
      description: "In a world where memories can be transferred between people, a memory technician receives fragments of a future that hasn't happened yet.",
      excerpt: "The neural interface hummed softly as Daniel calibrated the memory transfer settings. 'You might feel a slight tingling sensation,' he told his client, a middle-aged businessman who nodded nervously. Standard procedure: extract the targeted memory cluster, sanitize it of any emotional residue, and store it in the company's secure servers. Daniel had performed this procedure thousands of times. But as the transfer began, his monitor flashed a warning he'd never seen before. The incoming memory stream contained temporal markers dated three years in the future. Impossible. Yet as the first images flooded his own neural implant—a safeguard measure to verify transfer integrity—Daniel saw himself standing in a laboratory he didn't recognize, holding a device that hadn't been invented yet."
    },
    {
      title: "The Last Summer of Innocence",
      author: "Thomas Harmon",
      category: "Coming of Age",
      description: "Four friends navigate their final summer together before college, uncovering secrets that will forever change their relationships.",
      excerpt: "'Race you to the quarry!' Mia shouted, her voice carrying across the sun-drenched field as she broke into a run. Jesse and Tyler followed immediately, but Sam hesitated, watching his friends disappear into the tree line. He touched the letter in his pocket—the one he hadn't told them about, the one that would take him thousands of miles away while they all stayed local for college. The acceptance to the prestigious art program should have felt like a victory, but instead, it sat like a betrayal. This was their last summer together, the last threads of a childhood friendship that had defined them. And Sam was about to cut those threads without warning. He took a deep breath and ran after his friends, knowing that by the time the summer ended, everything would change."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? examples.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === examples.length - 1 ? 0 : prevIndex + 1
    );
  };
  
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
    <section id="examples" ref={sectionRef} className="py-24 relative overflow-hidden scroll-trigger">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[20%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[30%] left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sample Book Excerpts</h2>
          <p className="text-lg text-muted-foreground">
            Explore examples of books created with Book Writer GPT across different genres and styles.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-md border-border hover:bg-secondary md:-left-6"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {examples.map((example, index) => (
                <div key={index} className="min-w-full">
                  <div className="bg-white rounded-xl border shadow-md p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="aspect-[2/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center p-6 mb-6">
                          <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                            <p className="text-sm text-muted-foreground">by {example.author}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-primary mb-1">Genre</p>
                          <p className="text-sm mb-4">{example.category}</p>
                          
                          <p className="text-sm font-medium text-primary mb-1">Description</p>
                          <p className="text-sm">{example.description}</p>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <div className="flex items-start mb-6">
                          <Quote className="w-10 h-10 text-primary/30 mr-4 flex-shrink-0" />
                          <p className="italic text-muted-foreground">Book excerpt generated by Book Writer GPT</p>
                        </div>
                        
                        <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                          <p className="text-lg leading-relaxed">{example.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-md border-border hover:bg-secondary md:-right-6"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {examples.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="btn-primary">
            Create Your Own Book
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Examples;
