
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Version } from "@/data/versionData";

interface VersionCardProps {
  version: Version;
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

const VersionCard: React.FC<VersionCardProps> = ({ version, index, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-xl border p-6 flex flex-col transition-all duration-500 scroll-trigger interactive hover:shadow-lg hover:-translate-y-1",
        version.color
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4">
        <Badge className={cn("font-medium", version.accentColor, "bg-white/10")}>{version.name}</Badge>
      </div>
      <h3 className={cn("text-xl font-semibold mb-2", version.textColor)}>{version.title}</h3>
      <p className={cn("mb-6 flex-grow", version.descriptionColor)}>{version.description}</p>
      
      <ul className="space-y-3 mb-6">
        {version.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className={cn("w-5 h-5 mr-2 flex-shrink-0", version.accentColor)} />
            <span className={cn("text-sm", version.descriptionColor)}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className={cn("mt-auto w-full text-white", version.buttonColor)}>
        Try {version.name}
      </Button>
    </div>
  );
};

export default VersionCard;
