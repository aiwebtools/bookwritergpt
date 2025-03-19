
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Check, Star, StarHalf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Version } from "@/data/versionData";

interface VersionCardProps {
  version: Version;
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

const StarRating: React.FC<{ rating: number; className?: string }> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-current text-amber-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-current text-amber-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />
      ))}
      <span className="ml-1 text-sm text-amber-400 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const VersionCard: React.FC<VersionCardProps> = ({ version, index, cardRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine the AI technology badge text
  const aiTechBadge = version.name === "Gemini" ? "Google Gemini AI" : "OpenAI GPT";
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-xl border p-6 flex flex-col transition-all duration-500 scroll-trigger",
        version.color,
        "transform hover:scale-105 hover:shadow-2xl overflow-hidden"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transform: isHovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-primary/10 to-primary/30 sparkle-bg"></div>
        </div>
      )}
      
      <div className="flex justify-between items-center mb-4">
        <Badge className={cn("font-medium relative overflow-hidden", version.accentColor, "bg-white/10")}>
          <span className="relative z-10">{version.name}</span>
          {isHovered && <Sparkles className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 animate-pulse" />}
        </Badge>
        <StarRating rating={version.rating} className={version.textColor} />
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <h3 className={cn("text-xl font-semibold", version.textColor)}>{version.title}</h3>
        <Badge variant="outline" className={cn("text-xs", version.accentColor)}>
          {aiTechBadge}
        </Badge>
      </div>
      
      <p className={cn("mb-6 flex-grow", version.descriptionColor)}>{version.description}</p>
      
      <ul className="space-y-3 mb-6">
        {version.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className={cn("w-5 h-5 mr-2 flex-shrink-0", version.accentColor, isHovered ? "animate-pulse" : "")} />
            <span className={cn("text-sm", version.descriptionColor)}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn(
          "mt-auto w-full text-white relative overflow-hidden", 
          version.buttonColor,
          isHovered ? "pulse-on-hover" : ""
        )}
        onClick={() => window.open(version.url, '_blank', 'noopener,noreferrer')}
      >
        <span className="relative z-10">
          {version.name === "Movie Script" 
            ? "Try Movie Script Writer GPT" 
            : `TRY BOOK WRITER GPT ${version.name}`}
        </span>
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
        )}
      </Button>
    </div>
  );
};

export default VersionCard;
