
import React from "react";
import FooterBranding from "./FooterBranding";
import FooterVersionList from "./FooterVersionList";
import FooterContactSection from "./FooterContactSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0f1c] py-16 border-t border-gradient-divine relative overflow-hidden">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 animate-pulse"></div>
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-gradient-radial from-blue-500/25 to-transparent rounded-full blur-3xl floating" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-[50%] left-[60%] w-64 h-64 bg-gradient-radial from-indigo-400/20 to-transparent rounded-full blur-2xl floating" style={{animationDelay: "4s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterBranding />
          <FooterVersionList />
          <FooterContactSection />
        </div>
        
        {/* Enhanced Disclaimer */}
        <div className="mt-12 pt-6 border-t border-gradient-divine">
          <div className="relative bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-sm"></div>
            <p className="text-center text-sm text-gray-200 relative z-10 font-medium">
              This website is for informational, educational and research purposes only.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gradient-divine flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-300 mb-4 md:mb-0 hover:text-purple-400 transition-all duration-300 flex items-center glow-on-hover transform hover:scale-105"
          >
            © {currentYear} AI WEB TOOLS LLC All rights reserved.
          </a>
          
          <div className="flex space-x-8">
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 glow-on-hover transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Terms of Service
            </a>
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 glow-on-hover transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
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
