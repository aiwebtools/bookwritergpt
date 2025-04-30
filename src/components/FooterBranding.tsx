
import React from "react";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FooterBranding: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <div className="flex items-center space-x-3 mb-3">
          <BookOpen className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-white">Book Writer GPT</span>
        </div>
        <a
          href="https://www.aiwebtools.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-primary transition-colors mb-4 ml-11 flex items-center"
        >
          Presented By AiWebTools.Ai <BookOpen className="w-3 h-3 ml-1" />
        </a>
      </div>
      
      <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
        Transform your ideas into professionally written books with AI assistance.
      </p>
      
      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1.5">
        Powered by AI
      </Badge>
    </div>
  );
};

export default FooterBranding;
