
import React from "react";
import { Button } from "@/components/ui/button";

const ComparisonSection: React.FC = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto text-center">
      <div className="p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-slate-200">Not Sure Which Version to Choose?</h3>
        <p className="text-slate-300 mb-6">
          Each version of Book Writer GPT has its own strengths. V1 and V7 offer detailed page-by-page writing with document compilation, while V2-V6 provide different approaches to chapter-based writing with varying features.
        </p>
        <Button className="btn-primary">View Detailed Comparison</Button>
      </div>
    </div>
  );
};

export default ComparisonSection;
