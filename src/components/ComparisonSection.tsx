
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[20%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center scroll-trigger">
          <div className="p-8 bg-gradient-to-b from-slate-900/80 to-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-xl hover:shadow-slate-700/10 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-white">Not Sure Which Version to Choose?</h3>
            <p className="text-slate-200 mb-8 leading-relaxed text-base">
              Each version of Book Writer GPT has its own strengths. V1 and V7 offer detailed page-by-page writing with document compilation, while V2-V6 provide different approaches to chapter-based writing. V8 introduces an immersive interactive writing experience where you become part of the story, with branching paths and real-time character interactions.
            </p>
            <Button 
              className="btn-primary group transition-all duration-300 ease-in-out transform hover:scale-105"
              size="lg"
              onClick={() => document.getElementById('versions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Detailed Comparison
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
