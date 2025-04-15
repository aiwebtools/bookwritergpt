
import React from "react";
import { BookOpen, Mail, PhoneCall, ExternalLink, Sparkles, Star, StarHalf } from "lucide-react";
import { versions } from "@/data/versionData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center ml-2">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-3 h-3 fill-current text-amber-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-3 h-3 fill-current text-amber-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-3 h-3 text-gray-400" />
      ))}
      <span className="ml-1 text-xs text-amber-400">{rating.toFixed(1)}</span>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const v8Version = versions.find(version => version.name === "V8");
  const movieScriptVersion = versions.find(version => version.name === "Movie Script");

  return (
    <footer className="bg-[#1A1F2C] py-16 border-t border-[#333a4d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description Section */}
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
                Presented By AiWebTools.Ai <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
              Transform your ideas into professionally written books with AI assistance.
            </p>
            
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1.5">
              Powered by AI
            </Badge>
          </div>
          
          {/* Versions Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-[#333a4d] pb-2 mb-4">
              Select Your Version of Book Writer GPT
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {versions.slice(0, 7).map((version, index) => (
                <li key={index}>
                  <a 
                    href={version.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs font-medium min-w-[40px] text-center mr-3">
                      {version.name}
                    </span>
                    <span className="group-hover:underline flex-grow">{version.title}</span>
                    <StarRating rating={version.rating} />
                  </a>
                </li>
              ))}
              {v8Version && (
                <li>
                  <a 
                    href={v8Version.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs font-medium min-w-[40px] text-center mr-3">
                      V8
                    </span>
                    <span className="group-hover:underline flex items-center flex-grow">
                      {v8Version.title}
                      <Sparkles className="w-4 h-4 ml-2 text-amber-400 animate-pulse" />
                    </span>
                    <StarRating rating={v8Version.rating} />
                  </a>
                </li>
              )}
              {movieScriptVersion && (
                <li>
                  <a 
                    href={movieScriptVersion.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="bg-red-800/30 text-red-400 px-2 py-1 rounded-md text-xs font-medium text-center mr-3">
                      MS
                    </span>
                    <span className="group-hover:underline flex-grow">Movie Script Writer</span>
                    <StarRating rating={movieScriptVersion.rating} />
                  </a>
                </li>
              )}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-[#333a4d] pb-2 mb-4">
              Contact Support
            </h3>
            <ul className="space-y-5">
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="group-hover:underline">Contact@ai-webtools.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="flex items-center text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <PhoneCall className="w-5 h-5 text-primary" />
                  </div>
                  <span className="group-hover:underline">(475) 800-8096</span>
                </a>
              </li>
            </ul>
            
            {/* More AI Tools Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="rounded-full bg-primary/10 hover:bg-primary/20 w-24 h-24 flex flex-col items-center justify-center transition-all group-hover:shadow-lg group-hover:shadow-primary/20 transform group-hover:-translate-y-1">
                  <ExternalLink className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-center text-gray-300 group-hover:text-primary font-medium">More AI Tools</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[#333a4d] flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-400 mb-4 md:mb-0 hover:text-primary transition-colors flex items-center"
          >
            © {currentYear} AI WEB TOOLS LLC All rights reserved.
          </a>
          
          <div className="flex space-x-8">
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
