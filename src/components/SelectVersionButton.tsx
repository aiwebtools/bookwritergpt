
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const SelectVersionButton: React.FC = () => {
  const scrollToVersions = () => {
    const versionsSection = document.getElementById("versions");
    if (versionsSection) {
      versionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex justify-center">
          <Button 
            onClick={scrollToVersions}
            size="lg"
            className="text-lg gap-2 hover:gap-3 transition-all duration-300 animate-pulse hover:animate-none"
          >
            Select Your Version of Book Writer GPT <ChevronDown className="transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SelectVersionButton;
