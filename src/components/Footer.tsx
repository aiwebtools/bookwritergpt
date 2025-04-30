
import React from "react";
import FooterBranding from "./FooterBranding";
import FooterVersionList from "./FooterVersionList";
import FooterContactSection from "./FooterContactSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] py-16 border-t border-[#333a4d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterBranding />
          <FooterVersionList />
          <FooterContactSection />
        </div>
        
        <div className="mt-8 pt-6 border-t border-[#333a4d] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a 
            href="https://childrensbookmaker.lovable.app/?via=aiwebtools"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors group flex items-center gap-2"
          >
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <span className="text-primary text-xs">V10</span>
            </div>
            Children's Picture Books Maker
          </a>
          
          <a 
            href="https://coloringbookmaker.lovable.app/?via=aiwebtools"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors group flex items-center gap-2"
          >
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <span className="text-primary text-xs">V11</span>
            </div>
            Coloring Book Maker
          </a>
          
          <a 
            href="https://chatgpt.com/g/g-6812798f87408191a15336700475f7bc-book-cover-maker-gpt"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors group flex items-center gap-2"
          >
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <span className="text-primary text-xs">GPT</span>
            </div>
            Book Cover Maker
          </a>
          
          <a 
            href="https://moviescriptwritergpt.lovable.app/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors group flex items-center gap-2"
          >
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <span className="text-primary text-xs">GPT</span>
            </div>
            Movie Script Writer
          </a>
        </div>
        
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
