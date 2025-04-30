
import React from "react";
import { Sparkles, Clock, PenTool } from "lucide-react";
import { versions } from "@/data/versionData";
import StarRating from "@/components/ui/StarRating";

const FooterVersionList: React.FC = () => {
  const v8Version = versions.find(version => version.name === "V8");
  const v9Version = versions.find(version => version.name === "V9");
  const v10Version = versions.find(version => version.name === "V10");
  const movieScriptVersion = versions.find(version => version.name === "Movie Script");

  return (
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
        {v9Version && (
          <li>
            <a 
              href={v9Version.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors flex items-center group"
            >
              <span className="bg-fuchsia-800/30 text-fuchsia-400 px-2 py-1 rounded-md text-xs font-medium min-w-[40px] text-center mr-3">
                V9
              </span>
              <span className="group-hover:underline flex items-center flex-grow">
                Special Edition Time Machine
                <Clock className="w-4 h-4 ml-2 text-fuchsia-400 animate-pulse" />
              </span>
              <StarRating rating={v9Version.rating} />
            </a>
          </li>
        )}
        {v10Version && (
          <li>
            <a 
              href={v10Version.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors flex items-center group"
            >
              <span className="bg-teal-800/30 text-teal-400 px-2 py-1 rounded-md text-xs font-medium min-w-[40px] text-center mr-3">
                V10
              </span>
              <span className="group-hover:underline flex items-center flex-grow">
                Children's Picture Books
                <PenTool className="w-4 h-4 ml-2 text-teal-400 animate-pulse" />
              </span>
              <StarRating rating={v10Version.rating} />
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
  );
};

export default FooterVersionList;
