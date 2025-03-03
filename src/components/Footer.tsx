
import React from "react";
import { BookOpen, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-xl font-medium">Book Writer GPT</span>
              </div>
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors mb-4 ml-8"
              >
                Presented By AiWebTools.Ai
              </a>
            </div>
            <p className="text-muted-foreground mb-4">
              Transform your ideas into professionally written books with AI assistance.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Book Outlines</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Page Writing</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Document Compilation</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Character Development</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Versions</h3>
              <ul className="space-y-3">
                <li><a href="#versions" className="text-muted-foreground hover:text-primary transition-colors">Version 1</a></li>
                <li><a href="#versions" className="text-muted-foreground hover:text-primary transition-colors">Version 2</a></li>
                <li><a href="#versions" className="text-muted-foreground hover:text-primary transition-colors">Versions 3-6</a></li>
                <li><a href="#versions" className="text-muted-foreground hover:text-primary transition-colors">Version 7</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:Contact@ai-webtools.com" 
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact@ai-webtools.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+14758008096" 
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 mr-2" />
                    (475) 800-8096
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Book Writer GPT. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
