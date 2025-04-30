
import React from "react";
import { Mail, PhoneCall, ExternalLink } from "lucide-react";

const FooterContactSection: React.FC = () => {
  return (
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
  );
};

export default FooterContactSection;
